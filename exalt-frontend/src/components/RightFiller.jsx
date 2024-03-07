import image1 from "../assets/cmeeting1.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RightFiller = (props) => {
  const { heading, subheading, text, buttontext, pageName} = props;

  const pageNames = {
    "about": "h-[500px]",
    "home": "h-[600px]",
    "process": "h-[400px]"
  }

  return (
    <div className="bg-navyblue w-full text-white flex text-left">
      <div className={`w-1/2 ${pageNames[pageName]}`}>
        <img src={image1} alt="meeting" className="w-full h-full" />
      </div>
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
              <button className="font-georgia font-bold hover:bg-violet bg-navyblue text-white px-5 rounded-xl py-2 flex border-2 border-white items-center">
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
    </div>
  );
};

export default RightFiller;
