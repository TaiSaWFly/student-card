import React, { useEffect, useState } from "react";
import TextField from "./textField";
import { validator } from "../utils/validator";
import { toStorage } from "../utils/toStorage";

const FillingForm = () => {
  const [data, setData] = useState({
    name: "",
    firstName: "",
    birthday: "",
    portfolio: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const validatorConfig = {
    name: {
      isRequired: {
        message: "The 'Name': field is required!",
      },
    },
    firstName: {
      isRequired: {
        message: "The 'First Name': field is required!",
      },
    },
    birthday: {
      isRequired: {
        message: "The 'Your birthday': field is required!",
      },
      isNumberOfDigits: {
        message: "The 'Your birthday': incorrectly filled!",
      },
      maxYear: {
        message:
          "The 'Your birthday': year cannot be greater than the current!",
        value: new Date().getFullYear(),
      },
    },
    portfolio: {
      isRequired: {
        message: "The 'Portfolio': field is required!",
      },
      isUrl: {
        message: "The 'Portfolio': should be a link!",
      },
    },
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    toStorage("data", data);
  };

  return (
    <>
      <div className="student_card_title">Create</div>
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
          label="Your birthday"
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

        <button className="button" type="submit">
          Create
        </button>
      </form>
    </>
  );
};

export default FillingForm;
