const ResultSection = (props) => {
  return (
    <section className='rounded-xxxxl text-lg text-white flex flex-col items-center pt-[38px] pb-[55px] px-[54px] text-center w-1/2 bg-gradient-to-b from-gradientTopColor to-gradientBotColor'>
      <h1 className='text-lightBlueText font-bold leading-[28.13px] text-2xl mb-[24px] md:mb-[33px]'>
        Your Result
      </h1>
      <div className='rounded-full mb-7 flex flex-col items-center justify-center h-[140px] w-[140px] md:w-[200px] md:h-[200px] bg-gradient-to-b from-circleTopGradient to-transparent'>
        <p className='font-extrabold text-7xl'>76</p>
        <p className='text-lightBlueText'>of 100</p>
      </div>
      <h2 className='text-[32px] leading-[37.5px] mb-3 font-bold'>Great</h2>
      <p className='text-lightBlueText leading-[23.45px]'>
        Your performance exceed 65% of the people conducting the test here!
      </p>
    </section>
  );
};

export default ResultSection;
