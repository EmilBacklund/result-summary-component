const StatSummary = (props) => {
  return (
    <div
      className={`w-full rounded-xl items-center bg- h-14 px-4 flex justify-between bg-opacity-5  ${props.bg}`}
    >
      <div className={`flex gap-3 ${props.textColor}`}>
        <img src={props.icon} />
        <p>{props.adjective}</p>
      </div>
      <div className='flex gap-[7px] font-bold'>
        <p>{props.score}</p>
        <p className='text-darkNavyText opacity-50'>/ 100</p>
      </div>
    </div>
  );
};

export default StatSummary;
