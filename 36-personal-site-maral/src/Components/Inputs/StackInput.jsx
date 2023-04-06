import React from "react";

export default function StackInput({
  id,
  name,
  type,
  placeholder,
  value,
  onBlur,
  onChange,
  errorMessage,
  forwardRef,
}) {
  return (
    <div className="d-flex flex-col">
      <input
        ref={forwardRef}
        tabIndex={-1}
        id={id}
        name={name}
        type={type}
        className="stack-input"
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
      <p className="error-message"> {errorMessage}</p>
    </div>
  );
}
