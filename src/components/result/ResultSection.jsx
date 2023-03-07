const ResultSection = (props) => {
  return (
    <section className='w-full h-1/2 sm:h-auto sm:w-1/2 rounded-b-xxxxl sm:rounded-xxxxl sm:text-lg text-white flex flex-col justify-between items-center pt-6 sm:pt-[38px] pb-10 sm:pb-[55px] px-[54px] text-center  bg-gradient-to-b from-gradientTopColor to-gradientBotColor'>
      <h1 className='text-lightBlueText font-bold leading-[24.51px] sm:leading-[28.13px] text-lg sm:text-2xl mb-[24px] sm:mb-[33px]'>
        Your Result
      </h1>
      <div className='rounded-full mb-7 flex flex-col items-center justify-center h-[140px] w-[140px]  sm:w-[200px] sm:h-[200px] bg-gradient-to-b from-circleTopGradient to-transparent'>
        <p className='font-extrabold leading-[72px] text-[56px] sm:text-7xl'>{props.score}</p>
        <p className='text-lightBlueText leading-[21.79px] sm:leading-[24.51px]'>of 100</p>
      </div>
      <div>
        <h2 className='text-[32px] leading-[37.5px] mb-3 font-bold'>Great</h2>
        <p className='text-lightBlueText leading-[20.85px] sm:leading-[23.45px]'>
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
    </section>
  );
};

export default ResultSection;
