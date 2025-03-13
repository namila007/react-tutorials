import { useState } from "react";
import questions from "../utils/Questions.js";

export function Quiz() {
  // const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const activeQuestion = answers.length;

  function handleSelectAnswer(answer) {
    setAnswers((prevAnswers) => [...prevAnswers, answer]);
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{questions[activeQuestion].text}</h2>
        <ul id="answers">
          {questions[activeQuestion].answers.map((answer, index) => (
            <li key={index} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
