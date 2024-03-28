import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Links from "../assets/links.json";

const LeftFiller = (props) => {
  const {
    heading,
    subheading,
    text,
    buttontext,
    pageName,
    picName,
    onclickFunction,
  } = props;

  const isMobile = window.innerWidth < 768;

  const pageNames = {
    about: { isMobile: "h-[250px]", isDesktop: "h-[500px]" },
    home: { isMobile: "h-[300px]", isDesktop: "h-[600px]" },
    process: { isMobile: "h-[200px]", isDesktop: "h-[400px]" },
    services: { isMobile: "h-[250px]", isDesktop: "h-[500px]" },
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    if (onclickFunction === "call") {
      window.open(Links.Calendly, "_blank");
    } else {
      window.scrollTo(0, 0);
      navigate(onclickFunction);
    }
  };

  return (
    <div className="bg-navyblue w-full text-white flex md:flex-row flex-col text-left md:py-0 py-10 group">
      <div
        className={`mx-10 md:w-1/2 md:mx-0 md:${
          isMobile
            ? pageNames[pageName].isMobile
            : pageNames[pageName].isDesktop
        }`}
      >
        <img
          src={picName}
          alt="meeting"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-1/2 flex items-center">
        <div className="mx-10 md:mx-20 md:py-10 transition-transform group-hover:scale-105">
          <div className="font-georgia text-mobile-heading md:text-heading">
            <h1>{heading}</h1>
          </div>
          {subheading ? (
            <div className="text-mobile-subheading md:text-subheading font-thin">
              <p>{subheading}</p>
            </div>
          ) : null}
          <div className="pt-6 md:pt-12 text-mobile-p md:text-p">
            <p>{text}</p>
          </div>
          {buttontext ? (
            <div className="mt-10 md:mt-20 ">
              <div className="">
                <button
                  onClick={handleNavigate}
                  className="font-georgia font-bold text-mobile-p md:text-base  rounded-xl px-3 md:px-5 py-2 md:py-2 flex border-2 border-white items-center bg-navyblue hover:bg-white transition-colors group"
                >
                  <div className="flex items-center group-hover:text-navyblue  text-white">
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
    </div>
  );
};

export default LeftFiller;
