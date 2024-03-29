import logo from "../assets/logo.png";
import logoPhone from "../assets/logoPhone.png";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Links from "../assets/links.json";

const Navbar = () => {
  const whatsappNumber = "+971585256280";
  const navigate = useNavigate();
  const location = useLocation();
  const [activePage, setActivePage] = useState("");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [currentScrollPosState, setCurrentScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Update activePage state when location changes
    setActivePage(location.pathname);

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setCurrentScrollPos(currentScrollPos);

      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      );

      // Show navbar if scrolling up or at the top of the page
      if (prevScrollPos > currentScrollPos || currentScrollPos <= 0) {
        setVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location, prevScrollPos]);

  const handleNavigate = (page) => {
    window.scrollTo(0, 0);
    navigate(page);
  };

  return window.innerWidth > 768 ? (
    <div
      className={`z-50 font-georgia w-full flex md:grid grid-cols-8 fixed transition-all duration-500 drop-shadow-2xl ${
        visible ? "top-0" : "-top-20"
      } ${
        currentScrollPosState > 0
          ? "bg-navyblue text-white"
          : "bg-white text-navyblue"
      }`}
      id="navbar"
    >
      <div className="col-span-2">
        <img
          src={logo}
          onClick={() => handleNavigate("/")}
          alt="logo"
          className="hover:cursor-pointer w-[25%] pb-2 transition-transform transform hover:scale-110"
        />
      </div>
      <div className="text-p font-thin col-span-4 flex justify-evenly items-center">
        <div
          className={
            activePage === "/"
              ? currentScrollPosState > 0
                ? "text-lightblue"
                : "text-violet"
              : currentScrollPosState > 0
              ? "hover:text-lightblue cursor-pointer"
              : "hover:text-violet cursor-pointer"
          }
        >
          <h1 onClick={() => handleNavigate("/")}>Home</h1>
        </div>
        <div
          className={
            activePage === "/about"
              ? currentScrollPosState > 0
                ? "text-lightblue"
                : "text-violet"
              : currentScrollPosState > 0
              ? "hover:text-lightblue cursor-pointer"
              : "hover:text-violet cursor-pointer"
          }
        >
          <h1 onClick={() => handleNavigate("/about")}>About</h1>
        </div>
        <div
          className={
            activePage === "/services"
              ? currentScrollPosState > 0
                ? "text-lightblue"
                : "text-violet"
              : currentScrollPosState > 0
              ? "hover:text-lightblue cursor-pointer"
              : "hover:text-violet cursor-pointer"
          }
        >
          <h1 onClick={() => handleNavigate("/services")}>Services</h1>
        </div>
        <div
          className={
            activePage === "/blog"
              ? currentScrollPosState > 0
                ? "text-lightblue"
                : "text-violet"
              : currentScrollPosState > 0
              ? "hover:text-lightblue cursor-pointer"
              : "hover:text-violet cursor-pointer"
          }
        >
          <h1 onClick={() => handleNavigate("/blog")}>Blog</h1>
        </div>
        <div
          className={
            activePage === "/process"
              ? currentScrollPosState > 0
                ? "text-lightblue"
                : "text-violet"
              : currentScrollPosState > 0
              ? "hover:text-lightblue cursor-pointer"
              : "hover:text-violet cursor-pointer"
          }
        >
          <h1 onClick={() => handleNavigate("/process")}>Process</h1>
        </div>
        <div
          className={
            activePage === "/portfolio"
              ? currentScrollPosState > 0
                ? "text-lightblue"
                : "text-violet"
              : currentScrollPosState > 0
              ? "hover:text-lightblue cursor-pointer"
              : "hover:text-violet cursor-pointer"
          }
        >
          <h1 onClick={() => handleNavigate("/portfolio")}>Portfolio</h1>
        </div>
        <div
          className={
            activePage === "/contact"
              ? currentScrollPosState > 0
                ? "text-lightblue"
                : "text-violet"
              : currentScrollPosState > 0
              ? "hover:text-lightblue cursor-pointer"
              : "text-navyblue cursor-pointer"
          }
        >
          <h1 onClick={() => handleNavigate("/contact")}>Contact</h1>
        </div>
      </div>
      <div className="col-span-2 flex justify-end items-center gap-x-5">
        <div>
          <a href={`tel:${whatsappNumber}`}>
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="hover:cursor-pointer transition-transform transform hover:scale-110 duration-300 ease-in-out hover:text-violet text-lightblue text-4xl ml-4"
            />
          </a>
        </div>
        <div
          onClick={() => {
            window.location.href = Links.Calendly;
          }}
          className={`hover:bg-violet hover:cursor-pointer bg-lightblue h-full w-1/2 flex items-center justify-center transition duration-300 ease-in-out`}
        >
          <button className="text-white text-button">Book a Meeting</button>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={`fixed drop-shadow-xl w-full ${
        isMenuOpen ? "bg-navyblue text-white rounded-b-2xl" : "bg-white text-navyblue"
      } z-20 transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-center p-2">
        <div className="w-2/3 flex items-center gap-x-3">
          <img
            src={logoPhone}
            onClick={() => handleNavigate("/")}
            alt="logo"
            className="hover:cursor-pointer w-1/4"
          />
        </div>
        <div className="w-1/3 flex items-center justify-end mr-3">
          <FontAwesomeIcon
            icon={isMenuOpen ? faTimes : faBars}
            className={` ${
              isMenuOpen ? "text-white" : "text-navyblue"
            } text-3xl  cursor-pointer`}
            onClick={toggleMenu}
          />
        </div>
      </div>
      {isMenuOpen && (
        <div className="flex flex-col items-end ">
          <div
            className="flex flex-col items-end gap-y-3 py-5 mr-5 font-georgia text-mobile-subheading "
            onClick={closeMenu}
          >
            <h1 className="" onClick={() => handleNavigate("/")}>
              Home
            </h1>
            <h1 className="" onClick={() => handleNavigate("/about")}>
              About
            </h1>
            <h1 className="" onClick={() => handleNavigate("/services")}>
              Services
            </h1>
            <h1 className="" onClick={() => handleNavigate("/blog")}>
              Blog
            </h1>
            <h1 className="" onClick={() => handleNavigate("/process")}>
              Process
            </h1>
            <h1 className="" onClick={() => handleNavigate("/portfolio")}>
              Portfolio
            </h1>
            <h1 className="" onClick={() => handleNavigate("/contact")}>
              Contact
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

// div className="mx-5 pt-4 grid pb-4 grid-cols-4">
//         <div className="col-span-3">
//           <div className="flex gap-x-3">
//             <img
//               src={logo}
//               alt=""
//               className="w-1/6 items-center justify-center flex"
//             />
//             <div className="flex flex-col justify-center">
//               <p className="text-darkred font-extrabold">Tom & Jerry Coin</p>
//               <p className="text-[10px] text-lightred">
//                 New crypto coin in the market
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="col-span-1 flex justify-end items-center z-20">
//           <div
//             className=" w-10 h-10 rounded-md flex items-center justify-center cursor-pointer"
//             onClick={toggleMenu}
//           >
//             <FontAwesomeIcon
//               icon={isMenuOpen ? faTimes : faBars}
//               className={`text-3xl ${
//                 isMenuOpen ? "text-lightyellow" : "text-darkred"
//               }`}
//             />
//           </div>
//         </div>

//         {isMenuOpen && (
//           <div
//             className="fixed flex w-full z-10 bg-button rounded-xl text-lightyellow"
//             onClick={closeMenu}
//           >
//             <div className="bg-circles w-3/4 h-3/4 p-8 rounded-md">
//               <p className="text-subheading hover:underline underline-offset-2 hover:cursor-pointer mb-4">
//                 Home
//               </p>
//               <p className="text-subheading hover:underline underline-offset-2 hover:cursor-pointer mb-4">
//                 About
//               </p>
//               <p className="text-subheading hover:underline underline-offset-2 hover:cursor-pointer mb-4">
//                 Services
//               </p>
//               <p className="text-subheading hover:underline underline-offset-2 hover:cursor-pointer mb-4">
//                 Buy Coins
//               </p>
//               <p className="text-subheading hover:underline underline-offset-2 hover:cursor-pointer mb-4">
//                 Episodes
//               </p>
//               <p className="text-subheading hover:underline underline-offset-2 hover:cursor-pointer">
//                 Contact Us
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
