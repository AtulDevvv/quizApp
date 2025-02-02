import React, { useEffect, useState } from 'react'
import QuizApp from './quizComponents/QuizPage'
import HeaderOfTest from './component/HeaderOfTest'
import { fetchQuizData } from './features/QuizeData/QuizeDataSlice'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes, useSearchParams } from 'react-router-dom'
import ResultPage from './features/resultPage/ResultPage'
function App() {
const[isStarted,setIsStarted]=useState(false)
const quizStatus=useSelector((state)=>state.quizDatas.status)
const [score,setScore]=useState(0)
const dispatch=useDispatch()
useEffect(()=>{
  if(quizStatus==='idle'){

    dispatch(fetchQuizData())
  }
},[dispatch,quizStatus])


  return (
    <div className='w-full mx-auto bg-blue-50 h-screen' >

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<div className='' >
         {isStarted?<QuizApp score={score} setScore={setScore}/>:<HeaderOfTest setIsStarted={setIsStarted}/>}     
    </div>}/>
    <Route path='/Result' element={<ResultPage/>}/>
    </Routes>
    
    </BrowserRouter>
    </div>
  
    
  )
}

export default App