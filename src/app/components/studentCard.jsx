import React from "react";

const StudentCard = ({ data, setIsFormClose, setEditMode }) => {
  const handleEdit = () => {
    setIsFormClose(false);
    setEditMode(true);
  };

  return (
    <div className="student_card_wrap">
      <div className="student_card_title">Student Card</div>
      {data ? (
        <div className="student_card_info">
          <div>Name: {data.name}</div>
          <div>First Name: {data.firstName}</div>
          <div>Your Birthday: {data.birthday}</div>
          <div>
            Portfolio:{" "}
            <a href={`${data.portfolio}`} target="_blank">
              {data.portfolio}
            </a>
          </div>

          {setIsFormClose && (
            <button className="button" onClick={handleEdit}>
              Edit
            </button>
          )}
        </div>
      ) : (
        <span>No data...</span>
      )}
    </div>
  );
};

export default StudentCard;
