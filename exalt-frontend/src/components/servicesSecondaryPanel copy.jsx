const ServicesSecondaryPanel = (props) => {
  const { heading, text } = props;

  return (
    <div className=" w-full text-white bg-navyblue flex text-left">
      <div className="w-full flex  items-center justify-center text-center">
        <div className="flex flex-col gap-y-10 w-5/6 my-44 justify-center items-center">
          <div className="font-georgia text-mainheading">
            <h1 className='text-mainheading'>{heading}</h1>
          </div>
          <div className=" text-p w-4/5">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSecondaryPanel;