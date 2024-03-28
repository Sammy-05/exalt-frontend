import background from "../assets/homeBackground3.jpg";
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HalfPrimaryPanel = (props) => {
  const { heading, text, image } = props;

  return (
    <div>
      <div className=" relative w-full ">
        <div className=" w-full h-[60vh] bg-navyblue absolute opacity-70"></div>

        <img
          src={image}
          alt="meeting"
          className="w-full h-[60vh] object-cover "
        />
        <div className="mx-10 md:mx-20 absolute inset-0 flex flex-col gap-y-10 justify-center items-center text-white text-left font-bold">
          <div className="font-georgia text-mobile-mainheading text-center md:text-6xl">
            <h1>{heading}</h1>
          </div>
          <div className="text-mobile-subheading text-center md:text-[32px] font-thin">
            <p>{text}</p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default HalfPrimaryPanel;
