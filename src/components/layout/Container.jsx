const Container = ({ children }) => {
  return (
    <main className='max-w-summaryComponent flex flex-col md:flex-row shadow-xl rounded-xxxxl h-full w-full bg-white overflow-hidden m-auto relative'>
      {children}
    </main>
  );
};

export default Container;
