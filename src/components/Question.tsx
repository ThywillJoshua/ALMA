interface Props {
  currentQuestion: String;
}

export default function Question({ currentQuestion }: Props) {
  return <p>{currentQuestion}</p>;
}
