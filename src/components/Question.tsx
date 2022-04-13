interface Props {
  currentQuestion: String;
}

export default function Question({ currentQuestion }: Props) {
  return <p className="question">{currentQuestion}</p>;
}
