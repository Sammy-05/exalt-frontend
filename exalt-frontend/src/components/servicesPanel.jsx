import { faArrowRight, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Links from "../assets/links.json";

const servicesList = [
  {
    "service number": 1,
    service: "ML & AI Development",
  },
  {
    "service number": 2,
    service: "Data Analysis",
  },
  {
    "service number": 3,
    service: "Data Labelling",
  },
  {
    "service number": 4,
    service: "Market Research",
  },
  {
    "service number": 5,
    service: "Software Development",
  },
  {
    "service number": 6,
    service: "Web/App Development",
  },
  {
    "service number": 7,
    service: "Bookkeeping",
  },
  {
    "service number": 8,
    service: "Recruiting",
  },
  {
    "service number": 9,
    service: "Financial Modeling",
  },
  {
    "service number": 10,
    service: "Copy Writing",
  },
];

const ServicesPanel = () => {
  //   const { heading, text, buttontext } = props;
  const handleButtonClick = () => {
    window.open(Links.Calendly, "_blank");   
  };

  return (
    <div className="bg-navyblue w-full text-white py-20">
      <div className="w-full flex justify-center items-center text-mainheading font-georgia font-normal">
        <h1>Our Services</h1>
      </div>
      <div className="mx-20 py-20">
        <div className=" grid grid-cols-5 justify-center items-center pb-10">
          {servicesList.slice(0, 5).map((service) => (
            <div className="flex flex-col justify-center items-center text-center">
              <FontAwesomeIcon
                icon={faGlobe}
                className="text-white text-5xl m-5"
              />
              <h1 className="text-p font-roboto w-2/3 h-20">
                {service.service}
              </h1>
            </div>
          ))}
        </div>
        <div className=" grid grid-cols-5 justify-center items-center ">
          {servicesList.slice(5, 10).map((service) => (
            <div className="flex flex-col justify-center items-center text-center">
              <FontAwesomeIcon
                icon={faGlobe}
                className="text-white text-5xl m-5"
              />
              <h1 className="text-p font-roboto w-2/3 h-20">
                {service.service}
              </h1>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center items-center">
        <div className="group">
          <button onClick={handleButtonClick} className="font-georgia font-bold bg-white text-navyblue px-5 rounded-xl py-2 flex border-2 border-white items-center group-hover:bg-violet group-hover:text-white">
            Book a Meeting
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-navyblue text-2xl ml-4 group-hover:text-white"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPanel;
