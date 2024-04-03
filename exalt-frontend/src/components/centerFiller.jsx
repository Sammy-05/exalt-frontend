import background from "../assets/homeBackground3.jpg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Links from "../assets/links.json";


const CenterFiller = (props) => {
  const { heading, text, buttontext } = props;

  const handleButtonClick = () => {
    window.open(Links.Calendly, "_blank");   
  };

  return (
    <div className={`h-[500px] relative w-full `}>
      <div className={`h-[500px] absolute w-full `}>
        <img
          src={background}
          alt="meeting"
          className="w-full h-full object-cover"
        />
      </div>
      <div className={`h-[500px] w-2/3 md:w-2/5 ml-10 md:ml-40 bg-navyblue opacity-80 absolute`}></div>
      <div className="mx-10 text-white absolute w-1/2 md:w-1/3 ml-16 md:ml-48 flex flex-col justify-center h-full">
        <div className="font-georgia text-mobile-heading md:text-heading">
          <h1>{heading}</h1>
        </div>

        <div className="pt-12 text-mobile-p md:text-p">
          <p>{text}</p>
        </div>
        {buttontext ? (
            <div className="mt-10 md:mt-20 ">
              <div className="">
                <button
                  onClick={handleButtonClick}
                  className="font-georgia font-bold text-mobile-p md:text-base  rounded-xl px-3 md:px-5 py-2 md:py-2 flex border-2 border-white items-center bg-navyblue hover:bg-white transition-colors group"
                >
                  <div className="flex items-center text-mobile-p md:text-button  group-hover:text-navyblue  text-white">
                    {buttontext}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-white md:text-2xl ml-4 group-hover:text-navyblue"
                    />
                  </div>
                </button>
              </div>
            </div>
          ) : null}
      </div>
    </div>
  );
};
export default CenterFiller;
