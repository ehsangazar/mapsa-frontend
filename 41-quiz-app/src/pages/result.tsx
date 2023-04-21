import { stopCounting } from "@/redux/counterSlice";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Result() {
  const dispatch = useDispatch();
  const { value: seconds } = useSelector((state) => state.counter);
  const { answers } = useSelector((state) => state.quiz);

  useEffect(() => {
    dispatch(stopCounting());
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>time spent: {seconds}</div>
        <div>{JSON.stringify(answers)}</div>
      </main>
    </>
  );
}