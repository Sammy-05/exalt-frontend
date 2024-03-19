import homeBackground5 from '../assets/homeBackground5.jpg';

const SecondaryPanel = (props) => {
  const { heading, text } = props;

  return (
    <div className='flex items-center justify-center'>
      <div className="bg-white text-navyblue flex flex-col md:flex-row text-left w-full md:w-3/4 py-5 md:py-20 items-center justify-center hover:drop-shadow-2xl hover:cursor-pointer md:my-5 ">
        <div className=" w-11/12 md:w-5/6 flex md:flex-row flex-col items-center justify-center">
          <div className="md:w-1/2 flex justify-center items-center  ">
            <img
              src={homeBackground5}
              alt="meeting"
              className="max-w-full h-auto"
            />
          </div>
          <div className="md:mx-10 md:mx-0 md:w-1/2 flex items-center justify-start md:justify-center text-center md:text-left">
            <div className="pt-10 md:py-0 w-full md:w-5/6">
              <div className="font-serif text-mobile-heading md:text-mainheading">
                <h1>{heading}</h1>
              </div>
              <div className="pt-4 md:pt-12 text-mobile-p md:text-p">
                <p>{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryPanel;
