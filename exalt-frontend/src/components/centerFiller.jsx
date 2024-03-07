import background from "../assets/homeBackground3.jpg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CenterFiller = (props) => {
  const { heading, text, buttontext } = props;

  return (
    <div className={`h-[500px] absolute w-full `}>
      <div className={`h-[500px] absolute w-full `}>
        <img
          src={background}
          alt="meeting"
          className="w-full h-full object-cover"
        />
      </div>
      <div className={`h-[500px] w-2/5 ml-40 bg-navyblue opacity-80 absolute`}></div>
      <div className="mx-10 text-white absolute w-1/3 ml-48 flex flex-col justify-center h-full">
        <div className="font-georgia text-heading">
          <h1>{heading}</h1>
        </div>

        <div className="pt-12 text-p">
          <p>{text}</p>
        </div>
        {buttontext ? (
          <div className="pt-20">
            <button className="font-georgia font-bold hover:bg-violet text-white px-5 rounded-xl py-2 flex border-2 border-white items-center">
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
export default CenterFiller;
