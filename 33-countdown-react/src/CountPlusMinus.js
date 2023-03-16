import { useState } from "react";

function CountPlusMinus() {
  // React HOOKS
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    setCount(count - 1);
  };

  return (
    <div className="CountPlusMinus">
      <h1>CountDown</h1>
      <div>
        <button className="btn btn-primary" onClick={handlePlus}>
          PLUS
        </button>
        <span>{count}</span>
        <button className="btn btn-primary" onClick={handleMinus}>
          MINUS
        </button>
      </div>
    </div>
  );
}

// REACT LIFECYCLE
// - Mounting => document.getElemntById("root").innerHTML = "<div>...</div>"
// - STATE CHANGE -> RENDER -> MOUNTING
// - WATCH (AddEventListener) -> RENDER ->

export default CountPlusMinus;
