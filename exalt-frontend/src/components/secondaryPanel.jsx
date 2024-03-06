import homeBackground2 from '../assets/homeBackground2.png';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SecondaryPanel = (props) => {
  const { heading, text, buttontext } = props;

  return (
    <div className="bg-white w-full text-navyblue flex text-left">
      <div className="w-1/2 h-[520px] flex justify-center items-center">
        <img src={homeBackground2} alt="meeting" className="h-4/5" />
      </div>
      <div className="w-1/2 flex items-center">
        <div className=" py-10 ">
          <div className="font-georgia text-7xl w-2/3">
            <h1>{heading}</h1>
          </div>
          <div className="pt-12 text-2xl w-10/12">
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

export default SecondaryPanel;
