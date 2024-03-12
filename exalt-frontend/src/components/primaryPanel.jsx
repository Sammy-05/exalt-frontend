import background from '../assets/homeBackground3.jpg';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const PrimaryPanel = (props) => {
  const { heading, text, buttontext } = props;

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
    <div className="relative w-full">
      <div className=" w-full h-screen bg-navyblue absolute opacity-70"></div>
      <img
        src={background}
        alt="meeting"
        className="w-full h-screen object-cover "
      />
      <div className="mx-20 absolute inset-0 flex flex-col justify-center text-white text-left font-bold">
        <div>
          <div className="font-georgia text-6xl w-2/3 leading-normal">
            <h1>{heading}</h1>
          </div>
          <div className="font-roboto pt-10 text-4xl font-light w-2/3">
            <p>{text}</p>
          </div>
          {buttontext ? (
            <div className="pt-20">
              <button onClick={handleButtonClick} className="font-georgia font-bold hover:bg-violet bg-lightblue text-white px-7 py-3 flex  items-center">
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

export default PrimaryPanel;
