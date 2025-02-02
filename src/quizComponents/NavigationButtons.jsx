const NavigationButtons = ({ handlePrevious, handleNext, currentQuestion, totalQuestions, selectedAnswer }) => {
    return (
      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className={`px-6 py-3 rounded-lg font-medium transition-all 
            ${
              currentQuestion === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
            }`}
        >
          Previous
        </button>
  
        <button
          onClick={handleNext}
          disabled={selectedAnswer === null}
          className={`px-6 py-3 rounded-lg font-medium transition-all 
            ${
              selectedAnswer === null
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
        >
          {currentQuestion === totalQuestions - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    );
  };
  
  export default NavigationButtons;
  