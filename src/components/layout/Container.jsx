const Container = ({ children }) => {
  return (
    <main
      id='container'
      className='max-w-summaryComponent flex flex-col sm:flex-row  sm:rounded-xxxxl h-full w-full bg-white overflow-hidden m-auto relative'
    >
      {children}
    </main>
  );
};

export default Container;
