import { useEffect, useState } from "react";

let interval = null;
function CountDownTimerWithOnLoad() {
  // React HOOKS
  const [count, setCount] = useState(0);
  const [counting, setCounting] = useState(false);

  const startCounting = () => {
    setCount((count) => count + 1);
  };

  const handleStart = () => {
    console.log("handleStart", counting);
    if (!counting) {
      interval = setInterval(startCounting, 1000);
      setCounting(true);
    }
  };

  const handlePause = () => {
    setCounting(false);
    clearInterval(interval);
  };

  // After Mount [] -> React Hooks
  useEffect(() => {
    handleStart();
  }, []); // document.addEventListener("DOMContentLoaded", handleStart);

  return (
    <div className="CountDownTimerWithOnLoad">
      <h1>CountDown With OnLoad</h1>
      <div>
        <button onClick={handlePause}>Pause</button>
        <span>{count}</span>
      </div>
    </div>
  );
}

export default CountDownTimerWithOnLoad;
