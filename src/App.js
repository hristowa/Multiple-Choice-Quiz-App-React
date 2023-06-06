import { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  // Questions
  const questions = [
    {
      text: "What is the smallest country in Europe?",
      options: [
        { id: 0, text: "Denmark", isCorrect: false },
        { id: 1, text: "Greece", isCorrect: false },
        { id: 2, text: "Monaco", isCorrect: false },
        { id: 3, text: "Vatican city", isCorrect: true },
      ],
    },
    {
      text: "Which of these European countries is NOT an island?",
      options: [
        { id: 0, text: "Italy", isCorrect: true },
        { id: 1, text: "Iceland", isCorrect: false },
        { id: 2, text: "Cyprus", isCorrect: false },
        { id: 3, text: "Malta", isCorrect: false },
      ],
    },
    {
      text: "The Acropolis is a popular tourist attraction. Where is it located?",
      options: [
        { id: 0, text: "Athens", isCorrect: true },
        { id: 1, text: "Naples", isCorrect: false },
        { id: 2, text: "Rome", isCorrect: false },
        { id: 3, text: "Berlin", isCorrect: false },
      ],
    },
    {
      text: "What is the longest river in Europe?",
      options: [
        { id: 0, text: "Thames", isCorrect: false },
        { id: 1, text: "Volga", isCorrect: true },
        { id: 2, text: "Seine", isCorrect: false },
        { id: 3, text: "Danube", isCorrect: false },
      ],
    },
    {
      text: "How many countries are currently in the EU?",
      options: [
        { id: 0, text: "4", isCorrect: false },
        { id: 1, text: "27", isCorrect: true },
        { id: 2, text: "14", isCorrect: false },
        { id: 3, text: "22", isCorrect: false },
      ],
    },
    {
      text: "Which of these countries straddles two continents?",
      options: [
        { id: 0, text: "Wales", isCorrect: false },
        { id: 1, text: "Norway", isCorrect: false },
        { id: 2, text: "Iceland", isCorrect: true },
        { id: 3, text: "Portugal", isCorrect: false },
      ],
    },
    {
      text: "Which European country has its own Disneyland?",
      options: [
        { id: 0, text: "France", isCorrect: true },
        { id: 1, text: "Germany", isCorrect: false },
        { id: 2, text: "England", isCorrect: false },
        { id: 3, text: "Finland", isCorrect: false },
      ],
    },
    {
      text: "And finally, which mountains have created a natural barrier between Asia and Europe?",
      options: [
        { id: 0, text: "Alps", isCorrect: false },
        { id: 1, text: "Ural Mountains", isCorrect: true },
        { id: 2, text: "Himalayas", isCorrect: false },
        { id: 3, text: "Caucasus Mountains", isCorrect: false },
      ],
    },
  ];

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };
  return (
    <div className="App">
      {/* 1. Header  */}
      <h1 className="header">European geography quiz</h1>

      {/* 2. Current Score  */}
      <h2 className="score">Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-result">
          <h1>Final Result</h1>
          <h2 className="f-result-text">
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button className="btn" onClick={() => restartGame()}>
            Restart game
          </button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2 className="question-title">
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
