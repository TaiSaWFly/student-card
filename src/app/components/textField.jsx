import React from "react";

const TextField = ({ label, type, name, value, onChange, error }) => {
  return (
    <div className="form_input">
      <label htmlFor={name}>{label}</label>
      <input
        className={error ? `input input--error` : `input`}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="input_error">{error}</div>}
    </div>
  );
};

export default TextField;
