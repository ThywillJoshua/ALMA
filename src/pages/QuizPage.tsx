import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../contexts/quizContext";
import { useNavigate } from "react-router-dom";

import Answer from "../components/Answer";
import Question from "../components/Question";

export default function QuizPage() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(QuizContext);

  const currentQuestion = state.questions[state.currentQuestionIndex].question;
  const answers = state.questions[state.currentQuestionIndex].answers;
  const finalAnswer = state.questions[state.currentQuestionIndex].finalAnswer;

  const [isQuestionAnswered, setisQuestionAnswered] = useState<Boolean>(false);
  const [firstQuestion, setFirstQuestion] = useState<String>("");
  const [isFirstQuestion, setIsFirstQuestion] = useState<Boolean>(false);
  const [userPersonalityArr, setUserPersonalityArr] = useState<String[] | []>(
    []
  );
  const [chosenAnswerPersonality, setChosenAnswerPersonality] =
    useState<String>("");

  useEffect(() => {
    setFirstQuestion(state.questions.map((val) => val.question)[0]);
    dispatch({ type: "GET_QUESTIONS" });
  }, []);

  useEffect(() => {
    if (currentQuestion === firstQuestion) {
      setIsFirstQuestion(true);
    }

    if (finalAnswer) {
      setisQuestionAnswered(true);
    } else {
      setisQuestionAnswered(false);
    }
  }, [finalAnswer, currentQuestion]);

  function nextQuestion() {
    setIsFirstQuestion(false);

    setUserPersonalityArr((prev) => {
      prev[state.currentQuestionIndex] = chosenAnswerPersonality;
      return prev;
    });

    const lastQuestion = state.questions
      .map((val) => val.question)
      .slice(-1)[0];

    if (currentQuestion === lastQuestion) {
      // //Get most reoccuring personality type
      const userPersonality = userPersonalityArr
        .sort(
          (a, b) =>
            userPersonalityArr.filter((c) => c === a).length -
            userPersonalityArr.filter((c) => c === b).length
        )
        .pop();

      dispatch({
        type: "SUBMIT",
        payload: { userPersonalityType: userPersonality },
      });

      navigate("/result");
    } else {
      dispatch({ type: "NEXT_QUESTION" });
    }
  }

  function previousQuestion() {
    dispatch({ type: "PREVIOUS_QUESTION" });
  }

  function handleAnswer(answer: String, personalityType: String) {
    dispatch({
      type: "FINAL_ANSWER",
      payload: { answer, personalityType },
    });
  }

  return (
    <div className="section-quiz">
      <div className="quiz-container">
        <h3>Question {state.currentQuestionIndex + 1}</h3>

        <div className="question">
          <Question currentQuestion={currentQuestion} />

          <Answer
            answers={answers}
            finalAnswer={finalAnswer}
            handleAnswer={handleAnswer}
            setChosenPersonality={setChosenAnswerPersonality}
          />
        </div>

        <div className="quiz-btns">
          <button
            className={isFirstQuestion ? "btn disabled-btn" : "btn"}
            onClick={previousQuestion}
            disabled={isFirstQuestion && true}
          >
            {"< Previous"}
          </button>
          <button
            className={isQuestionAnswered ? "btn" : "btn disabled-btn"}
            onClick={nextQuestion}
            disabled={!isQuestionAnswered && true}
          >
            {"Next Question >"}
          </button>
        </div>
      </div>
    </div>
  );
}
