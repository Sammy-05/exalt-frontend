import background from "../assets/homeBackground3.jpg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const primaryPanel = (props) => {
  const { heading, text, buttontext } = props;

  return (
    <div className=" relative w-full h-screen">
      <div className="h-screen w-full bg-navyblue absolute opacity-70"></div>
      <img src={background} alt="meeting" className="w-full h-full object-cover " />
      <div className="mx-20 absolute inset-0 flex flex-col justify-center items-center text-white text-left font-bold">
        <div >
          <div className="font-georgia text-6xl w-2/3 leading-normal">
            <h1>{heading}</h1>
          </div>
          <div className="font-roboto pt-10 text-4xl font-light w-2/3">
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
    </div>
  );
};

export default primaryPanel;
