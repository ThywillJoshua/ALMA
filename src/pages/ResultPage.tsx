import laying from "../laying.svg";
import selfie from "../selfie.svg";
import { useContext } from "react";
import { QuizContext } from "../contexts/quizContext";
import { useNavigate } from "react-router-dom";

export default function ResultPage() {
  const { state } = useContext(QuizContext);

  const navigate = useNavigate();

  return (
    <section className="section-hero">
      <div className="result-container">
        <div className="result-message">
          <h1>
            {state.userPersonalityType === "Introvert"
              ? "You are an Introvert!"
              : "You are an Extrovert!"}
          </h1>

          <p>
            Sometimes we wonder how people percieve us, if you really want to
            know what they think, take the test below and you won’t be curious
            anymore. The test is proven an has been tried and tested.
          </p>

          <button className="btn" onClick={() => navigate("/quiz")}>
            <span>Retake the test!</span>
            <span>Time: 5 minutes</span>
          </button>
        </div>

        <div className="result-illustrations">
          {state.userPersonalityType === "Introvert" ? (
            <img
              src={laying}
              alt="A woman laying and reading a book"
              className="illustration-selfie"
            />
          ) : (
            <img
              src={selfie}
              alt="A man taking a selfie"
              className="illustration-selfie"
            />
          )}
        </div>
      </div>
    </section>
  );
}
