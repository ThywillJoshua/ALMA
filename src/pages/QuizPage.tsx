import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../contexts/quizContext";
import { useNavigate } from "react-router-dom";

import Answer from "../components/Answer";
import Question from "../components/Question";

import "./QuizPage.css";

export default function QuizPage() {
  const { state, dispatch } = useContext(QuizContext);
  const [isQuestionAnswered, setisQuestionAnswered] = useState<Boolean>(false);

  const currentQuestion = state.questions[state.currentQuestionIndex].question;
  const answers = state.questions[state.currentQuestionIndex].answers;
  const finalAnswer = state.questions[state.currentQuestionIndex].finalAnswer;

  //set user personality
  const [userPersonalityArr, setUserPersonalityArr] = useState<String[] | []>(
    []
  );

  const [chosenAnswerPersonality, setChosenAnswerPersonality] =
    useState<String>("");

  useEffect(() => {
    dispatch({ type: "GET_QUESTIONS" });
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    if (finalAnswer) {
      setisQuestionAnswered(true);
    } else {
      setisQuestionAnswered(false);
    }
  }, [finalAnswer]);

  function nextQuestion() {
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
    const firstQuestion = state.questions.map((val) => val.question)[0];

    if (currentQuestion === firstQuestion) {
      alert("This is the first question");
    } else {
      dispatch({ type: "PREVIOUS_QUESTION" });
    }
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
        <h3 className="section-quiz-header">
          Question {state.currentQuestionIndex + 1}
        </h3>

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
          <button className="btn" onClick={previousQuestion}>
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
