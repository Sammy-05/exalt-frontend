import image1 from "../assets/cmeeting1.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Links from "../assets/links.json";

const LeftFiller = (props) => {
  const { heading, subheading, text, buttontext, pageName, picName, onclickFunction } = props;

  const pageNames = {
    "about": "h-[500px]",
    "home": "h-[600px]",
    "process": "h-[400px]",
    "services": "h-[500px]",
  }

  const navigate = useNavigate();

  const handleNavigate = () => {
    // check if onclick function is either one of about home process services or blogs:
    // if it is, then navigate to that page
    // else, call the onclick function
    if (
      onclickFunction === "call" 
    ) {
      window.open(Links.Calendly, "_blank");
    } else {
      window.scrollTo(0, 0);
      navigate(onclickFunction);
    }
  };

  return (
    <div className="bg-navyblue w-full text-white flex text-left">
      <div className="w-1/2 flex items-center">
        <div className="mx-20 py-10">
          <div className="font-georgia text-heading">
            <h1>{heading}</h1>
          </div>
          {subheading ? (
            <div className="text-subheading font-thin">
              <p>{subheading}</p>
            </div>
          ) : null}
          <div className="pt-12 text-p">
            <p>{text}</p>
          </div>
          {buttontext ? (
            <div className="pt-20">
              <button onClick={handleNavigate} className="font-georgia font-bold hover:bg-violet bg-navyblue text-white px-5 rounded-xl py-2 flex border-2 border-white items-center">
                {buttontext}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-white text-2xl ml-4"
                />
              </button>
            </div>
          ) : null}
        </div>
      </div>
      <div className={`w-1/2 ${pageNames[pageName]}`}>
        <img src={picName} alt="meeting" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default LeftFiller;
