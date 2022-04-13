interface Props {
  answers: {
    answer: String;
    personalityType: String;
  }[];
  finalAnswer: String;
  handleAnswer: (answer: String, personalityType: String) => void;
  setChosenPersonality: any;
}

export default function Answer({
  answers,
  handleAnswer,
  finalAnswer,
  setChosenPersonality,
}: Props) {
  const handleAnswerClick = (answer: String, personalityType: String): void => {
    handleAnswer(answer, personalityType);
    setChosenPersonality(personalityType);
  };

  return (
    <ul className="answers">
      {answers.map((answer, idx) => (
        <li
          key={idx}
          className={
            answer.answer === finalAnswer ? "selected-answer answer" : "answer"
          }
          onClick={() =>
            handleAnswerClick(answer.answer, answer.personalityType)
          }
        >
          {answer.answer}
        </li>
      ))}
    </ul>
  );
}
