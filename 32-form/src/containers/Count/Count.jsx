import React, { useState } from "react";
import Button from "../../components/Button/Button";
import "./Count.css";

const Count = () => {
  const [count, setCount] = useState(0); // hooks -> React

  const handleClickPlus = () => {
    setCount(count + 1);
  };
  const handleClickMinus = () => {
    setCount(count - 1);
  };
  return (
    <div className="Count">
      <h1>Count</h1>
      <div className="Count--Buttons">
        <span>
          <Button handleClick={handleClickPlus}>+</Button>
        </span>
        <span className="value">{count}</span>
        <span>
          <Button handleClick={handleClickMinus}>-</Button>
        </span>
      </div>
    </div>
  );
};

export default Count;
