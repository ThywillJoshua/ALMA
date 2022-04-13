import React, { createContext, useReducer } from "react";
import questions from "../data/quiz";

interface QuizProviderProps {
  children: React.ReactNode;
}

type QuizAction = {
  type: String;
  payload?: {
    answer?: String;
    personalityType?: String;
    userPersonalityType?: String;
  };
};

type Init = {
  questions: typeof questions;
  currentQuestionIndex: number;
  userPersonalityType?: String;
};

const initialState: Init = {
  questions,
  currentQuestionIndex: 0,
  userPersonalityType: "",
};

const quizReducer = (state: typeof initialState, action: QuizAction) => {
  switch (action.type) {
    case "GET_QUESTIONS":
      return initialState;

    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };

    case "PREVIOUS_QUESTION":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex - 1,
      };

    case "FINAL_ANSWER":
      return {
        ...state,
        questions: state.questions.map((question, idx) => {
          if (idx === state.currentQuestionIndex) {
            return {
              ...question,
              finalAnswer: action.payload?.answer || "",
            };
          } else {
            return question;
          }
        }),
      };

    case "SUBMIT":
      return {
        ...state,
        userPersonalityType: action.payload?.userPersonalityType,
      };
    default:
      return state;
  }
};

const QuizContext = createContext<{
  state: typeof initialState;
  dispatch: React.Dispatch<QuizAction>;
}>({ state: initialState, dispatch: () => {} });

function QuizProvider({ children }: QuizProviderProps) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

export { QuizContext, QuizProvider };
