import React from "react";
import StudentCard from "./studentCard";
import { fromStorage } from "../utils/fromStorage";
import { useState } from "react";
import FillingForm from "./fillingForm";
import { useEffect } from "react";

const Card = () => {
  const [form, setForm] = useState(false);
  const localData = fromStorage("data");
  console.log(localData);

  //   useEffect(() => {
  //     fromStorage("data");
  //   }, [localData]);
  const handleAddCard = () => {
    setForm((prevState) => !prevState);
  };

  return (
    <>
      <div className="student_card">
        <div className="student_card_wrapper">
          {form ? (
            <FillingForm />
          ) : (
            <>
              <StudentCard data={localData} />
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
