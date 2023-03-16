import { useEffect, useState } from "react";

function CountDownTimer() {
  // React HOOKS
  const [count, setCount] = useState(0);
  const [counting, setCounting] = useState(false);

  const startCounting = () => {
    console.log("setInterval", count);
    setCount(count + 1);
  };

  const handleStart = () => {
    setCounting(true);
  };

  const handleStop = () => {
    setCounting(false);
  };

  useEffect(() => {
    if (!counting) return;
    setTimeout(startCounting, 1000);
  }, [counting, count]);

  return (
    <div className="CountDownTimer">
      <h1>CountDown With Timer</h1>
      <div>
        <button className="btn btn-primary" onClick={handleStart}>
          START
        </button>
        <span>{count}</span>
        <button className="btn btn-primary" onClick={handleStop}>
          STOP
        </button>
      </div>
    </div>
  );
}

// REACT LIFECYCLE
// - Mounting => document.getElemntById("root").innerHTML = "<div>...</div>"
// - STATE CHANGE -> RENDER -> MOUNTING
// - WATCH (AddEventListener) -> RENDER ->

export default CountDownTimer;
