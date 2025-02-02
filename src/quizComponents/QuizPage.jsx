import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addScore } from '../features/QuizeData/QuizeDataSlice';
import QuizHeader from './QuizHeader';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';
import NavigationButtons from './NavigationButtons';

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [progress, setProgress] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { quizData, score } = useSelector((state) => state.quizDatas);
  const { topic, title, duration, questions } = quizData;

  function handleNext() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setProgress(((currentQuestion + 1) / questions.length) * 100);
      setSelectedAnswer(null);
    } else {
      navigate('/result');
    }
  }

  function handlePrevious() {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
      setProgress(((currentQuestion - 1) / questions.length) * 100);
      setSelectedAnswer(null);
    }
  }

  function handleScore(isCorrect) {
    if (isCorrect) {
      dispatch(addScore(1));
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 py-10 px-6 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl relative">
        
        {/* Header */}
        <QuizHeader topic={topic} title={title} duration={duration} />

        {/* Progress Bar */}
        <ProgressBar progress={progress} />

        {/* Question Card */}
        <QuestionCard
          question={questions[currentQuestion]}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          handleScore={handleScore}
        />

        {/* Navigation Buttons */}
        <NavigationButtons
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
          selectedAnswer={selectedAnswer}
        />

      </div>
    </div>
  );
};

export default QuizApp;
