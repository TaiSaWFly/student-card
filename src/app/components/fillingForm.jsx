import React, { useEffect, useState } from "react";
import TextField from "./textField";
import StudentCard from "./studentCard";
import { validator } from "../utils/validator";
import { validatorConfig } from "../utils/validatorConfig";
import { toStorage } from "../utils/toStorage";
import { fromStorage } from "../utils/fromStorage";

const FillingForm = ({ handleLocalStorage, dataLocal }) => {
  const [editMode, setEditMode] = useState(false);
  const [isFormClose, setIsFormClose] = useState(false);
  const [currentData, setCurrentData] = useState();
  const [data, setData] = useState({
    name: "",
    firstName: "",
    birthday: "",
    portfolio: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    validate();
    if (editMode) {
      setCurrentData(fromStorage("data"));
    }
  }, [data, editMode]);

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (!isValid) return;

    setIsFormClose(true);
    toStorage("data", data);
    handleLocalStorage(fromStorage("data"));
  };

  const handleNotChange = () => {
    setData(currentData);
    toStorage("data", data);
  };

  const handleSaveChange = ({ target }) => {
    handleChange({ target });
    toStorage("data", data);
  };

  return isFormClose ? (
    <StudentCard
      data={dataLocal}
      setIsFormClose={setIsFormClose}
      setEditMode={setEditMode}
    />
  ) : (
    <>
      <div className="student_card_title">{editMode ? "Edit" : "Create"}</div>
      <form onSubmit={handleSubmit} className="form">
        <TextField
          label="Name"
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          error={errors.name}
        />

        <TextField
          label="First Name"
          type="text"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
          error={errors.firstName}
        />

        <TextField
          label="Your Birthday Year"
          type="text"
          name="birthday"
          value={data.birthday}
          onChange={handleChange}
          error={errors.birthday}
        />

        <TextField
          label="Portfolio"
          type="text"
          name="portfolio"
          value={data.portfolio}
          onChange={handleChange}
          error={errors.portfolio}
        />

        {editMode ? (
          <>
            <button className="button" type="submit" onClick={handleNotChange}>
              Cancel
            </button>
            <button className="button" type="submit" onClick={handleSaveChange}>
              Save
            </button>
          </>
        ) : (
          <button className="button" type="submit">
            Create
          </button>
        )}
      </form>
    </>
  );
};

export default FillingForm;
