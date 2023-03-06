const SummarySection = ({ children }) => {
  return (
    <section className='pt-[38px] pb-[46px] px-10 w-1/2'>
      <h2 className='text-2xl font-bold leading-[28.13px]'>Summary</h2>
      {children}
      <button className='w-full h-14 rounded-[128px] cursor-pointer  bg-darkNavyButton text-white'>
        Continue
      </button>
    </section>
  );
};

export default SummarySection;
