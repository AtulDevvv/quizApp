const QuestionCard = ({ question, selectedAnswer, setSelectedAnswer, handleScore }) => {
    return (
      <div className="bg-indigo-50 rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          {question.descriptions}
        </h2>
  
        {/* Answer Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options.map((answer, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedAnswer(index);
                handleScore(answer.is_correct);
              }}
              className={`p-4 rounded-lg transition-all duration-200 shadow-md 
                ${
                  selectedAnswer === index
                    ? answer.is_correct
                      ? 'bg-indigo-400 text-white scale-105'
                      : 'bg-red-500 text-white scale-105'
                    : 'bg-gray-100 hover:bg-indigo-300 hover:scale-105'
                }`}
            >
              {answer.description}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default QuestionCard;
  