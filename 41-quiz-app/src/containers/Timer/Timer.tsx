import { increment, startCounting, stopCounting } from "@/redux/counterSlice";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface CounterRef {
  interval: NodeJS.Timeout;
}

const Timer = () => {
  const dispatch = useDispatch();
  const { value: seconds, counting } = useSelector((state) => state.counter);

  const handleStart = () => {
    dispatch(startCounting());

    if (!counting && !document.interval) {
      document.interval = setInterval(() => {
        dispatch(increment());
      }, 1000);
    }
  };

  useEffect(() => {
    handleStart();
  }, []);

  return (
    <div>
      <br />
      seconds: {seconds}
    </div>
  );
};

export default Timer;
