import React from 'react'
import { useSelector } from 'react-redux'

function HeaderOfTest({setIsStarted}) {
    const topic=useSelector((state)=>state.quizDatas.quizData.topic)
    const title=useSelector((state)=>state.quizDatas.quizData.title)
    const  duration=useSelector((state)=>state.quizDatas.quizData.duration)
   
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white">
      
    {/* Animated Background */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent blur-xl"></div>
    
    <div className="relative z-10 bg-white/10 backdrop-blur-lg shadow-lg rounded-3xl p-8 max-w-md text-center border border-white/20">
      <h1 className="text-4xl font-bold">Welcome to the Quiz!</h1>
      <p className="text-lg mt-3 text-gray-200">
        Test your knowledge and challenge yourself. Are you ready?
      </p>

      <button
        onClick={() => setIsStarted(true)}
        className="mt-6 bg-indigo-600 px-6 py-3 text-lg font-semibold rounded-full shadow-md hover:bg-indigo-700 transition duration-300"
      >
        Start Quiz 🚀
      </button>
    </div>
  </div>
  )
}

export default HeaderOfTest