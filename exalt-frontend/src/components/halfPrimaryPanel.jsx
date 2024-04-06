import background from "../assets/homeBackground3.jpg";
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HalfPrimaryPanel = (props) => {
  const { heading, text, image } = props;

  return (
      <div className="h-[60vh]"
      style={{
        backgroundImage: `url(${image})`,
        /* Create the parallax scrolling effect */
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
        
      }}>
        <div className="w-full h-[60vh] bg-navyblue absolute opacity-70"></div>


        <div className="mx-10 md:mx-20 absolute inset-0 flex flex-col gap-y-10 justify-center items-center text-white text-left font-bold h-[60vh]">
          <div className="font-georgia text-mobile-mainheading text-center md:text-6xl">
            <h1>{heading}</h1>
          </div>
          <div className="text-mobile-subheading text-center md:text-[32px] font-thin">
            <p>{text}</p>
          </div>
        </div>
      </div>

      
    // </div>
  );
};

export default HalfPrimaryPanel;
