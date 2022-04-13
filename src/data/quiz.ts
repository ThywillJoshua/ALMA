type QUIZ = {
  question: String;
  answers: {
    answer: String;
    personalityType: String;
  }[];
  finalAnswer: String;
}[];

const quiz: QUIZ = [
  {
    question: "To prepare for a night out...",
    answers: [
      {
        answer:
          "I buy the latest outfit, tell my friends, then dance the night away.",
        personalityType: "Extrovert",
      },
      {
        answer:
          "Call a few of my closest friends to see if they will be there.",
        personalityType: "Introvert",
      },
      {
        answer: "Prepare? My friends have to drag me out most nights.",
        personalityType: "Introvert",
      },
    ],
    finalAnswer: "",
  },

  {
    question: "Being around people makes me feel...",
    answers: [
      {
        answer: "Like I'm alive!",
        personalityType: "Extrovert",
      },
      {
        answer:
          "Inspired. I feed off of others' energy but there are times when I'd rather be alone.",
        personalityType: "Extrovert",
      },
      {
        answer: "A bit exhausted. Being around others can be draining.",
        personalityType: "Introvert",
      },
    ],
    finalAnswer: "",
  },

  {
    question:
      "When given a choice between working as part of a team or working as a group, I would prefer to...",
    answers: [
      {
        answer: "Work with as many people as possible.",
        personalityType: "Extrovert",
      },
      {
        answer: "Work as part of a small group.",
        personalityType: "Introvert",
      },
      {
        answer: "Work by myself.",
        personalityType: "Introvert",
      },
    ],
    finalAnswer: "",
  },

  {
    question: "What's your idea of the perfect date?",
    answers: [
      {
        answer: "A live concert in Central Park.",
        personalityType: "Extrovert",
      },
      {
        answer: "Dinner and a Broadway show.",
        personalityType: "Extrovert",
      },
      {
        answer: "Wine and Netflix.",
        personalityType: "Introvert",
      },
    ],
    finalAnswer: "",
  },
  {
    question: "Where would you spend your next holiday?",
    answers: [
      {
        answer: "At the beach with friends.",
        personalityType: "Extrovert",
      },
      {
        answer: "A concert or a rave.",
        personalityType: "Extrovert",
      },
      {
        answer: "A backyard, watching the stars.",
        personalityType: "Introvert",
      },
    ],
    finalAnswer: "",
  },
];

export default quiz;
