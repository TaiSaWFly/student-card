import React, { useState, useEffect } from "react";
import StudentCard from "./studentCard";
import { fromStorage } from "../utils/fromStorage";
import { toStorage } from "../utils/toStorage";
import FillingForm from "./fillingForm";

const Card = () => {
  const [form, setForm] = useState(false);
  const [data, setData] = useState(fromStorage("data"));

  useEffect(() => {
    if (!fromStorage("data")) {
      toStorage("data", null);
    }
  }, [data]);

  const handleAddCard = () => {
    setForm((prevState) => !prevState);
  };

  return (
    <>
      <div className="student_card">
        <div className="student_card_wrapper">
          {form ? (
            <FillingForm dataLocal={data} handleLocalStorage={setData} />
          ) : (
            <>
              <StudentCard data={data} />
              <button className="button" onClick={handleAddCard}>
                Add
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
