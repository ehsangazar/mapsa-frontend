import { useState } from "react";
import "./Input.css";

const Input = ({
  label,
  id,
  name,
  type,
  placeholder,
  isValid,
  invalidMessage,
  handleChange,
}) => {
  return (
    <div className="Input">
      <label htmlFor={id}>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {!isValid && <div className="error">Invalid Input: {invalidMessage}</div>}
    </div>
  );
};

export default Input;
