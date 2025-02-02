const ProgressBar = ({ progress }) => {
    return (
      <div className="bg-gray-200 rounded-full h-3 my-6 shadow-inner">
        <div
          className="bg-indigo-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  };
  
  export default ProgressBar;
  