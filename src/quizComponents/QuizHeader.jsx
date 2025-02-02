import { MemorizedMyTimer } from '../component/MyTimer';

const QuizHeader = ({ topic, title, duration }) => {
  return (
    <div className="relative text-center">
      <div className="absolute top-0 left-4 text-gray-500 text-sm">
        <MemorizedMyTimer duration={duration} />
      </div>
      <h1 className="text-3xl font-bold text-indigo-700">{topic}</h1>
      <p className="text-gray-600">{title}</p>
    </div>
  );
};

export default QuizHeader;
