import { useState } from "react";
import "./Input.css";

const Input = ({ label, id, type, placeholder }) => {
  const [invalid, setInvalid] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState("");

  const handleValidation = (event) => {
    if (type === "name") {
      if (event.target.value.length < 3) {
        setInvalid(true);
        setInvalidMessage("Name should be more than 3 characters");
      }
    }
    if (type === "email") {
      if (!event.target.value.includes("@")) {
        setInvalid(true);
        setInvalidMessage("Email should contain @");
      }
    }
    if (type === "password") {
      if (event.target.value.length < 6) {
        setInvalid(true);
        setInvalidMessage("Password should be more than 6 characters");
      }
    }
  };

  return (
    <div className="Input">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleValidation}
      />
      {invalid && <div className="error">Invalid Input: {invalidMessage}</div>}
    </div>
  );
};

export default Input;
