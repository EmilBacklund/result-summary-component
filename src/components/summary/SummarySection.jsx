const SummarySection = ({ children }) => {
  return (
    <section className='pt-6 h-1/2 sm:h-auto sm:pt-[38px] pb-[46px] px-[30px] sm:px-10 w-full sm:w-1/2 sm:text-lg '>
      <h2 className='text-lg sm:text-2xl text-darkNavyText font-bold leading-[28.13px] mb-[22px] sm:mb-[26px]'>
        Summary
      </h2>
      <div className='justify-between flex flex-col gap-4'>{children}</div>
      <button
        className='
      w-full leading-[21.09px] h-14 font-bold z-20 rounded-[128px]
      cursor-pointer mt-6 sm:mt-[41px] bg-darkNavyButton 
      text-white relative before:absolute before:content-[""] 
      before:top-0 before:right-0 before:bottom-0 
      before:left-0 before:bg-gradient-to-b before:from-gradientTopColor 
      before:duration-500 before:to-gradientBotColor before:rounded-[128px] 
      before:transition before:-z-10 before:opacity-0 hover:before:opacity-100'
      >
        Continue
      </button>
    </section>
  );
};

export default SummarySection;
