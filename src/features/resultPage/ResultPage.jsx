import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ResultPage = () => {

    const navigate=useNavigate()

    const  questions=useSelector((state)=>state.quizDatas.quizData.questions)
    const score=useSelector((state)=>state.quizDatas.score)


  const percentage = (score /questions.length ) * 100;

  // Performance messages based on score
  let message = "Better luck next time!";
  if (percentage >= 80) {
    message = "Excellent! 🎉";
  } else if (percentage >= 50) {
    message = "Good job! 👍";
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-sm w-full">
        <h1 className="text-3xl font-bold text-gray-800">Quiz Result</h1>
        
        <div className="mt-6">
          <p className="text-lg text-gray-700">Total Questions: <span className="font-semibold">{questions.length}</span></p>
          <p className="text-lg text-gray-700">Correct Answers: <span className="font-semibold">{score}</span></p>
          <p className="text-xl font-semibold mt-4 text-indigo-600">{message}</p>
        </div>

        <div className="mt-6">
          <p className="text-2xl font-bold text-gray-900">{percentage.toFixed(2)}% Score</p>
        </div>

        <button 
      onClick={()=>navigate('/')}
          className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
        >
          Play Again 🔄
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
