import companies from '../assets/companies.png';




const Companies = () => {
  //   const { heading, text, buttontext } = props;

  return (
    <div className="bg-white w-full text-white px-20">
      {/* <div className="w-full flex justify-center items-center text-6xl font-georgia font-normal">
        <h1>Our Services</h1>
      </div>
      <div className="mx-20 py-10">
        <div className=" grid grid-cols-5 justify-center items-center pb-10">
          {servicesList.slice(0, 5).map((service) => (
            <div className="flex flex-col justify-center items-center text-center">
              <FontAwesomeIcon
                icon={faGlobe}
                className="text-white text-7xl m-5"
              />
              <h1 className="text-xl font-roboto font-medium w-2/3 h-20">
                {service.service}
              </h1>
            </div>
          ))}
        </div>
        <div className=" grid grid-cols-4 justify-center items-center ">
          {servicesList.slice(5, 9).map((service) => (
            <div className="flex flex-col justify-center items-center text-center">
              <FontAwesomeIcon
                icon={faGlobe}
                className="text-white text-7xl m-5"
              />
              <h1 className="text-xl font-roboto font-medium w-2/3 h-20">
                {service.service}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="text-2xl font-georgia font-bold hover:bg-navyblue hover:text-white bg-white text-navyblue px-5 rounded-xl py-2 flex border-2 border-white items-center">
          Book a Meeting
          <FontAwesomeIcon
            icon={faArrowRight}
            className=" text-2xl ml-4"
          />
        </button>
      </div> */}
      <div className="">
        <img src={companies} alt="meeting" className="w-full h-full" />
      </div>
      <div className="">
        <img src={companies} alt="meeting" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Companies;
