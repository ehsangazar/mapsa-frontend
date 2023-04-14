import Timer from "@/containers/Timer/TImer";
import { useRouter } from "next/router";
import quizData from "./quiz.json";
import { useDispatch } from "react-redux";
import { stopCounting } from "@/redux/counterSlice";
import { select } from "@/redux/quizSlice";

const Quiz = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;

  const handleNext = () => {
    router.push(`/quiz/${Number(id) + 1}`);
  };

  const handleBack = () => {
    if (Number(id) > 1) {
      router.push(`/quiz/${Number(id) - 1}`);
    }
  };

  const handleSelect = (optionIndex) => {
    dispatch(select({ id: Number(id), optionIndex }));
  };

  const handleEndQuiz = () => {
    dispatch(stopCounting());
    clearInterval(document.interval);
    router.push("/result");
  };

  return (
    <div>
      <div>Question {id}</div>
      {id && <Timer key={`timer-${id}`} />}

      <div>
        {quizData[id - 1]?.question}
        <div>
          {quizData[id - 1]?.options.map((option, index) => (
            <div key={index}>
              <input
                onChange={() => {
                  handleSelect(index);
                }}
                type="radio"
                name="option"
                id={`option-${index}`}
              />
              <label htmlFor={`option-${index}`}>{option}</label>
            </div>
          ))}
        </div>
      </div>
      <div>
        {!!quizData[id] && <button onClick={handleNext}>Next</button>}
        {id !== "1" && <button onClick={handleBack}>Back</button>}
        {!quizData[id] && <button onClick={handleEndQuiz}>End Quiz</button>}
      </div>
    </div>
  );
};

export default Quiz;
