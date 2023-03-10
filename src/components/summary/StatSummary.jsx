const StatSummary = (props) => {
  return (
    <div
      className={`w-full rounded-xl items-center bg- h-14 px-4 flex justify-between bg-opacity-5 ${props.bg} transition-colors duration-500 hover:bg-opacity-20 `}
    >
      <div className={`flex gap-3 ${props.textColor} `}>
        <img src={props.icon} alt={`${props.adjective} Performance `} />
        <p>{props.adjective}</p>
      </div>
      <div className='flex gap-[7px] font-bold'>
        <p className='text-darkNavyText'>{props.score}</p>
        <p className='text-darkNavyText opacity-50'>/ 100</p>
      </div>
    </div>
  );
};

export default StatSummary;
