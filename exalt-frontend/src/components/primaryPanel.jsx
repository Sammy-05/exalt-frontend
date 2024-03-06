import background from "../assets/homeBackground1.jpg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const primaryPanel = (props) => {
  const { heading, text, buttontext } = props;

  return (
    <div className=" relative w-full h-[800px]  ">
      <img src={background} alt="meeting" className="w-full h-full object-cover " />
      <div className="mx-20 absolute inset-0 flex flex-col justify-center items-center text-white text-left font-bold">
        <div >
          <div className="font-georgia text-7xl w-7/12">
            <h1>{heading}</h1>
          </div>
          <div className="font-roboto pt-12 text-4xl font-normal w-1/2">
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
