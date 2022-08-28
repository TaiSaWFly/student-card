import React from "react";

const StudentCard = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="student_card_title">Student Card</div>
      {data ? <span>data...</span> : <span>No data...</span>}
    </div>
  );
};

export default StudentCard;
