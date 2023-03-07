const SummarySection = ({ children }) => {
  return (
    <section className='pt-[38px] pb-[46px] px-10 w-1/2 text-lg justify-between flex flex-col gap-4'>
      <h2 className='text-2xl font-bold leading-[28.13px] mb-[26px]'>Summary</h2>
      {children}
      <button
        className='
      w-full leading-[21.09px] h-14 font-bold z-20 rounded-[128px]
      cursor-pointer mt-[41px] bg-darkNavyButton 
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
