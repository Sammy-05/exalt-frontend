import image1 from "../assets/cmeeting1.png";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LeftFiller = (props) => {
  const { heading, subheading, text } = props;

  return (
    <div className="bg-navyblue w-full text-white flex text-left">
      <div className="w-1/2 flex items-center">
        <div className="mx-20">
          <div className="font-georgia text-[40px]" style={{ fontWeight: 100 }}>
            <h1>{heading}</h1>
          </div>
          {subheading ? (
            <div>
              <p>{subheading}</p>
            </div>
          ) : null}
          <div className="py-6">
            <p>{text}</p>
          </div>
          <div className="flex border-2 border-white items-center">
            <div>
              <button className="font-georgia font-bold hover:bg-violet bg-navyblue text-white px-5 py-2">
                Book a Call
              </button>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCaretRight}
                className="text-white text-2xl ml-2"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 ">
        <img src={image1} alt="meeting" className="" />
      </div>
    </div>
  );
};

export default LeftFiller;
