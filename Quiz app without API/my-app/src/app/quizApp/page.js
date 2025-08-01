"use client";
import { useEffect, useState } from "react";
import Question from "./question";

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleNextQuestion = (selectans) => {
    if (selectans === Question[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Question.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResults(true);
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-4">🎯 Quiz App</h1>
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm sm:text-base font-medium text-gray-700">
            Score: {score}
          </div>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            onClick={restart}
          >
            Restart Quiz
          </button>
        </div>

        {showResults ? (
          <div className="text-center mt-6">
            <h2 className="text-2xl font-bold text-green-600 mb-2">Quiz Completed! ✅</h2>
            <p className="text-lg">
              Your Score: <strong>{score}</strong> / {Question.length}
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Question {score} of {Question.length}
            </h2>
            <p className="text-base mb-4">{Question[currentQuestion].question}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Question[currentQuestion].Options.map((option, index) => (
                <button
                  key={index}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition"
                  onClick={() => handleNextQuestion(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
