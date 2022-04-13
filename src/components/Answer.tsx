interface Props {
  answers: {
    answer: String;
    personalityType: String;
  }[];
  finalAnswer: String;
  handleAnswer: (answer: String, personalityType: String) => void;
  setUserPersonality: any;
}

export default function Answer({
  answers,
  handleAnswer,
  finalAnswer,
  setUserPersonality,
}: Props) {
  const handleAnswerClick = (answer: String, personalityType: String): void => {
    handleAnswer(answer, personalityType);
    setUserPersonality((prev: []) => [...prev, personalityType]);
  };

  return (
    <ul className="answers">
      {answers.map((answer) => (
        <li
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
