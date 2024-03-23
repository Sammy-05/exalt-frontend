// import logo from "../assets/logo.png";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Links from "../assets/links.json";

// const Navbar = () => {
//   const whatsappNumber = "+971585256280";
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [activePage, setActivePage] = useState("");
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     // Update activePage state when location changes
//     setActivePage(location.pathname);

//     // Add scroll event listener
//     window.addEventListener("scroll", handleScroll);

//     // Clean up event listener
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [location]);

//   // Handle scroll event
//   const handleScroll = () => {
//     if (window.scrollY > 0) {
//       setScrolled(true);
//     } else {
//       setScrolled(false);
//     }
//   };

//   const handleNavigate = (page) => {
//     window.scrollTo(0, 0);
//     navigate(page);
//   };

//   return (
//     <div
//     className={`z-50 font-georgia w-full flex md:grid grid-cols-8 ${
//       scrolled ? "bg-navyblue text-white" : "bg-white text-navyblue"
//     } transition-all duration-500 drop-shadow-2xl`}
    
//     id="navbar"
//     >
//       <div className="col-span-2">
//         <img src={logo} onClick={() => handleNavigate("/")} alt="logo" className="hover:cursor-pointer w-[25%] pb-2 transition-transform transform hover:scale-110" />
//       </div>
//       <div className="text-p font-thin col-span-4 flex justify-evenly items-center">
//         <div className={activePage === "/" ? (scrolled ? "text-lightblue" : "text-violet") : (scrolled ? "hover:text-lightblue cursor-pointer" : "hover:text-violet cursor-pointer") }>
//           <h1 onClick={() => handleNavigate("/")}>Home</h1>
//         </div>
//         <div className={activePage === "/about" ? (scrolled ? "text-lightblue" : "text-violet") : (scrolled ? "hover:text-lightblue cursor-pointer" : "hover:text-violet cursor-pointer") }>
//           <h1 onClick={() => handleNavigate("/about")}>About</h1>
//         </div>
//         <div className={activePage === "/services" ? (scrolled ? "text-lightblue" : "text-violet") : (scrolled ? "hover:text-lightblue cursor-pointer" : "hover:text-violet cursor-pointer") }>
//           <h1 onClick={() => handleNavigate("/services")}>Services</h1>
//         </div>
//         <div className={activePage === "/blog" ? (scrolled ? "text-lightblue" : "text-violet") : (scrolled ? "hover:text-lightblue cursor-pointer" : "hover:text-violet cursor-pointer") }>
//           <h1 onClick={() => handleNavigate("/blog")}>Blog</h1>
//         </div>
//         <div className={activePage === "/process" ? (scrolled ? "text-lightblue" : "text-violet") : (scrolled ? "hover:text-lightblue cursor-pointer" : "hover:text-violet cursor-pointer") }>
//           <h1 onClick={() => handleNavigate("/process")}>Process</h1>
//         </div>
//         <div className={activePage === "/portfolio" ? (scrolled ? "text-lightblue" : "text-violet") : (scrolled ? "hover:text-lightblue cursor-pointer" : "hover:text-violet cursor-pointer") }>
//           <h1 onClick={() => handleNavigate("/portfolio")}>Portfolio</h1>
//         </div>
//         <div className={activePage === "/contact" ? (scrolled ? "text-lightblue" : "text-violet") : (scrolled ? "hover:text-lightblue cursor-pointer" : "text-navyblue cursor-pointer") }>
//           <h1 onClick={() => handleNavigate("/contact")}>Contact</h1>
//         </div>
//       </div>
//       <div className="col-span-2 flex justify-end items-center gap-x-5">
//         <div>
//           <a href={`tel:${whatsappNumber}`}>
//             <FontAwesomeIcon
//               icon={faWhatsapp}
//               className="hover:cursor-pointer transition-transform transform hover:scale-110 duration-300 ease-in-out hover:text-violet text-lightblue text-4xl ml-4"
//             />
//           </a>
//         </div>
//         <div
//           onClick={() => {
//             window.location.href = Links.Calendly;
//           }}
//           className={`hover:bg-violet hover:cursor-pointer bg-lightblue h-full w-1/2 flex items-center justify-center transition duration-300 ease-in-out`}
//         >
//           <button className="text-white text-button">Book a Meeting</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import logo from "../assets/logo.png";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
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

  useEffect(() => {
    // Update activePage state when location changes
    setActivePage(location.pathname);

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setCurrentScrollPos(currentScrollPos);
    
      setVisible(
        (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) ||
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

  return (
    <div
      className={`z-50 font-georgia w-full flex md:grid grid-cols-8 fixed transition-all duration-500 drop-shadow-2xl ${
        visible ? "top-0" : "-top-20"
      } ${currentScrollPosState > 0 ? "bg-navyblue text-white" : "bg-white text-navyblue"}`}
      id="navbar"
    >
      <div className="col-span-2">
        <img src={logo} onClick={() => handleNavigate("/")} alt="logo" className="hover:cursor-pointer w-[25%] pb-2 transition-transform transform hover:scale-110" />
      </div>
      <div className="text-p font-thin col-span-4 flex justify-evenly items-center">
        <div className={activePage === "/" ? (currentScrollPosState > 0 ? "text-lightblue" : "text-violet") : (currentScrollPosState > 0 ? "hover:text-lightblue cursor-pointer" : "hover:text-violet cursor-pointer") }>
          <h1 onClick={() => handleNavigate("/")}>Home</h1>
        </div>
        <div className={activePage === "/about" ? (currentScrollPosState > 0 ? "text-lightblue" : "text-violet") : (currentScrollPosState > 0 ? "hover:text-lightblue cursor-pointer" : "hover:text-violet cursor-pointer") }>
          <h1 onClick={() => handleNavigate("/about")}>About</h1>
        </div>
        <div className={activePage === "/services" ? (currentScrollPosState > 0 ? "text-lightblue" : "text-violet") : (currentScrollPosState > 0 ? "hover:text-lightblue cursor-pointer" : "hover:text-violet cursor-pointer") }>
          <h1 onClick={() => handleNavigate("/services")}>Services</h1>
        </div>
        <div className={activePage === "/blog" ? (currentScrollPosState > 0 ? "text-lightblue" : "text-violet") : (currentScrollPosState > 0 ? "hover:text-lightblue cursor-pointer" : "hover:text-violet cursor-pointer") }>
          <h1 onClick={() => handleNavigate("/blog")}>Blog</h1>
        </div>
        <div className={activePage === "/process" ? (currentScrollPosState > 0 ? "text-lightblue" : "text-violet") : (currentScrollPosState > 0 ? "hover:text-lightblue cursor-pointer" : "hover:text-violet cursor-pointer") }>
          <h1 onClick={() => handleNavigate("/process")}>Process</h1>
        </div>
        <div className={activePage === "/portfolio" ? (currentScrollPosState > 0 ? "text-lightblue" : "text-violet") : (currentScrollPosState > 0 ? "hover:text-lightblue cursor-pointer" : "hover:text-violet cursor-pointer") }>
          <h1 onClick={() => handleNavigate("/portfolio")}>Portfolio</h1>
        </div>
        <div className={activePage === "/contact" ? (currentScrollPosState > 0 ? "text-lightblue" : "text-violet") : (currentScrollPosState > 0 ? "hover:text-lightblue cursor-pointer" : "text-navyblue cursor-pointer") }>
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
  );
};

export default Navbar;
