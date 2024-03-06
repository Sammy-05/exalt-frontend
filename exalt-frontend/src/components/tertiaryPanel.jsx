import background from "../assets/homeBackground3.jpg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TertiaryPanel = (props) => {
  const { heading, subheading, text, buttontext } = props;

  return (
    <div className=" relative w-full h-screen">
      <img
        src={background}
        alt="meeting"
        className="w-full h-full object-cover object-center absolute z-0"
      />
      <div className="h-screen w-full bg-navyblue absolute opacity-80"></div>

      <div className="absolute text-white flex flex-col items-center justify-center h-full w-full text-center">
        <div className="font-georgia text-6xl">
          <h1>{heading}</h1>
        </div>
        <div className="pt-8 font-roboto font-thin text-4xl">
          <p>{subheading}</p>
        </div>
        <div className="w-3/5 text-p pt-20">
          <p>{text}</p>
        </div>
        {buttontext ? (
          <div className="pt-20">
            <button className="font-georgia font-bold hover:bg-violet bg-lightblue text-white px-7 py-3 flex  items-center">
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
  );
};

export default TertiaryPanel;
