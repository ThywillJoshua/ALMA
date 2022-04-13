import laying from "../laying.svg";
import selfie from "../selfie.svg";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <section className="section-hero">
      <div className="hero-message">
        <h1>Are you an Introvert or an Extrovert?</h1>

        <p>
          Sometimes we wonder how people percieve us, if you really want to know
          what they think, take the test below and you won’t be curious anymore.
          The test is proven an has been tried and tested.
        </p>

        <Link to="/quiz">
          <button className="btn">
            <span>Take a quick test!</span>
            <span>Time: 5 minutes</span>
          </button>
        </Link>
      </div>

      <div className="hero-illustrations">
        <img
          src={selfie}
          alt="A man taking a selfie"
          className="illustration-selfie"
        />

        <img
          src={laying}
          alt="A woman laying and reading a book"
          className="illustration-laying"
        />
      </div>
    </section>
  );
}
