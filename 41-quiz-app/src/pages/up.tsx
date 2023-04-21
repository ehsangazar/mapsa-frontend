import { decrement, increment } from "@/redux/upSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const Up = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((store) => store.up);

  const handlePlus = () => {
    dispatch(increment());
  };
  const handleMinus = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>Up</h1>

      <button onClick={handlePlus}>+</button>
      <div>
        <p>{count}</p>
      </div>
      <button onClick={handleMinus}>-</button>
      <br />
      <Link href="/">Home</Link>
    </div>
  );
};

export default Up;
