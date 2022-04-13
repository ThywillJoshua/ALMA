import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { QuizProvider } from "./contexts/quizContext";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <QuizProvider>
        <App />
      </QuizProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
