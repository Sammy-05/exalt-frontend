import background from "../assets/homeBackground3.jpg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const TertiaryPanel = (props) => {
  const { heading, subheading, text, buttontext } = props;
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    // Function to get the height of the Navbar component
    const getNavbarHeight = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        const navbarHeight = navbar.offsetHeight;
        setNavbarHeight(navbarHeight);

        console.log('Navbar Height:', navbarHeight);
        // You can use navbarHeight as needed
      }
    };

    // Call the function when the component mounts
    getNavbarHeight();

    // Optionally, you can add cleanup code if needed
    return () => {
      // Cleanup code
    };
  }, []);

  const handleButtonClick = () => {
    const destination = window.innerHeight + navbarHeight;
    window.scrollTo({
      top: destination,
      behavior: "smooth"
    });
  };
  

  return (
    <div className=" relative w-full h-screen">
      <img
        src={background}
        alt="meeting"
        className="w-full h-full object-cover object-center absolute z-0"
      />
      <div className="h-screen w-full bg-navyblue absolute opacity-80"></div>

      <div className="absolute text-white flex flex-col items-center justify-center h-full w-full text-center">
        <div className="font-georgia text-mobile-mainheading md:text-6xl">
          <h1>{heading}</h1>
        </div>
        <div className="pt-8 font-roboto font-thin text-mobile-subheading md:text-4xl">
          <p>{subheading}</p>
        </div>
        <div className="w-3/5 text-mobile-p md:text-p pt-10 md:pt-20">
          <p>{text}</p>
        </div>
        {buttontext ? (
          <div className="pt-20">
            <button onClick={handleButtonClick} className="font-georgia font-bold text-mobile-button md:text-base hover:bg-violet bg-lightblue text-white px-3 py-2 md:px-7 md:py-3 flex  items-center">
              {buttontext}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-white md:text-2xl ml-4"
              />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TertiaryPanel;
