// // import logo from "../assets/logo.png";
// // import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { useNavigate, useLocation } from "react-router-dom";
// // import { useState, useEffect } from "react";

// // const Navbar = () => {
// //   const whatsappNumber = "+971501990860";
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const [activePage, setActivePage] = useState("");

// //   useEffect(() => {
// //     // Update activePage state when location changes
// //     setActivePage(location.pathname);
// //   }, [location]);

// //   const handleNavigate = (page) => {
// //     window.scrollTo(0, 0);
// //     navigate(page);
// //   };

// //   return (
// //     <div
// //       className="hidden z-50 font-georgia w-full flex bg-white md:grid grid-cols-8"
// //       id="navbar"
// //     >
// //       <div className="col-span-2">
// //         <img src={logo} alt="logo" className="w-[17%]" />
// //       </div>
// //       <div className="text-p font-thin col-span-4 flex justify-evenly items-center">
// //         <div className={activePage === "/" ? "text-violet" : "hover:text-violet cursor-pointer"}>
// //           <h1 onClick={()=>{handleNavigate("/")}}>Home</h1>
// //         </div>
// //         <div className={activePage === "/about" ? "text-violet" : "hover:text-violet cursor-pointer"}>
// //           <h1 onClick={()=>{handleNavigate("/about")}}>About</h1>
// //         </div>
// //         <div className={activePage === "/services" ? "text-violet" : "hover:text-violet cursor-pointer"}>
// //           <h1 onClick={()=>{handleNavigate("/services")}}>Services</h1>
// //         </div>
// //         <div className={activePage === "/blog" ? "text-violet" : "hover:text-violet cursor-pointer"}>
// //           <h1 onClick={()=>{handleNavigate("/blog")}}>Blog</h1>
// //         </div>
// //         <div className={activePage === "/process" ? "text-violet" : "hover:text-violet cursor-pointer"}>
// //           <h1 onClick={()=>{handleNavigate("/process")}}>Process</h1>
// //         </div>
// //         <div className={activePage === "/portfolio" ? "text-violet" : "hover:text-violet cursor-pointer"}>
// //           <h1 onClick={()=>{handleNavigate("/portfolio")}}>Portfolio</h1>
// //         </div>
// //         <div className={activePage === "/contact" ? "text-violet" : "hover:text-violet cursor-pointer"}>
// //           <h1 onClick={()=>{handleNavigate("/contact")}}>Contact</h1>
// //         </div>
// //       </div>
// //       <div className="col-span-2 flex justify-end items-center gap-x-5">
// //         <div className="">
// //           <a href={`tel:${whatsappNumber}`}>
// //             <FontAwesomeIcon
// //               icon={faWhatsapp}
// //               className="hover:cursor-pointer transition duration-300 ease-in-out hover:text-violet text-lightblue text-4xl ml-4"
// //             />
// //           </a>
// //         </div>

// //         <div onClick={()=>{handleNavigate("/contact")}} className="hover:bg-violet hover:cursor-pointer bg-lightblue h-full w-1/2 flex items-center justify-center transition duration-300 ease-in-out">
// //           <button  className="text-white text-button">Book a Meeting</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Navbar;

// import logo from "../assets/logo.png";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";

// const Navbar = () => {
//   const whatsappNumber = "+971501990860";
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
//       className={`z-50 font-georgia w-full flex bg-white md:grid grid-cols-8 fixed ${
//         scrolled ? "bg-navbarscroll text-white" : "bg-white text-navyblue"
//       }`}
//       id="navbar"
     
//     >
//       <div className="col-span-2">
//         <img src={logo} alt="logo" className="w-[17%]" />
//       </div>
//       <div className="text-p font-thin col-span-4 flex justify-evenly items-center">
//         <div className={activePage === "/" ? "text-violet" : "hover:text-violet cursor-pointer"}>
//           <h1 onClick={()=>{handleNavigate("/")}}>Home</h1>
//         </div>
//         <div className={activePage === "/about" ? "text-violet" : "hover:text-violet cursor-pointer"}>
//           <h1 onClick={()=>{handleNavigate("/about")}}>About</h1>
//         </div>
//         <div className={activePage === "/services" ? "text-violet" : "hover:text-violet cursor-pointer"}>
//           <h1 onClick={()=>{handleNavigate("/services")}}>Services</h1>
//         </div>
//         <div className={activePage === "/blog" ? "text-violet" : "hover:text-violet cursor-pointer"}>
//           <h1 onClick={()=>{handleNavigate("/blog")}}>Blog</h1>
//         </div>
//         <div className={activePage === "/process" ? "text-violet" : "hover:text-violet cursor-pointer"}>
//           <h1 onClick={()=>{handleNavigate("/process")}}>Process</h1>
//         </div>
//         <div className={activePage === "/portfolio" ? "text-violet" : "hover:text-violet cursor-pointer"}>
//           <h1 onClick={()=>{handleNavigate("/portfolio")}}>Portfolio</h1>
//         </div>
//         <div className={activePage === "/contact" ? "text-violet" : "hover:text-violet cursor-pointer"}>
//           <h1 onClick={()=>{handleNavigate("/contact")}}>Contact</h1>
//         </div>
//       </div>
//       <div className="col-span-2 flex justify-end items-center gap-x-5">
//         <div className="">
//           <a href={`tel:${whatsappNumber}`}>
//             <FontAwesomeIcon
//               icon={faWhatsapp}
//               className="hover:cursor-pointer transition duration-300 ease-in-out hover:text-violet text-lightblue text-4xl ml-4"
//             />
//           </a>
//         </div>
//         <div
//           onClick={() => {
//             handleNavigate("/contact");
//           }}
//           className="hover:bg-violet hover:cursor-pointer bg-lightblue h-full w-1/2 flex items-center justify-center transition duration-300 ease-in-out"
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

const Navbar = () => {
  const whatsappNumber = "+971585256280";
  const navigate = useNavigate();
  const location = useLocation();
  const [activePage, setActivePage] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Update activePage state when location changes
    setActivePage(location.pathname);

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleNavigate = (page) => {
    window.scrollTo(0, 0);
    navigate(page);
  };

  return (
    <div
    className={`z-50 font-georgia w-full flex md:grid grid-cols-8 fixed ${
      scrolled ? "bg-navyblue text-white" : "bg-white text-navyblue"
    } transition-all duration-500`}
    id="navbar"
    >
      <div className="col-span-2">
        <img src={logo} alt="logo" className="w-[17%]" />
      </div>
      <div className="text-p font-thin col-span-4 flex justify-evenly items-center">
        <div className={activePage === "/" ? (scrolled ? "text-lightblue" : "text-violet") : (scrolled ? "hover:text-lightblue cursor-pointer" : "text-navyblue cursor-pointer") }>
          <h1 onClick={() => handleNavigate("/")}>Home</h1>
        </div>
        <div className={activePage === "/about" ? (scrolled ? "text-lightblue" : "text-violet") : (scrolled ? "hover:text-lightblue cursor-pointer" : "text-navyblue cursor-pointer") }>
          <h1 onClick={() => handleNavigate("/about")}>About</h1>
        </div>
        <div className={activePage === "/services" ? (scrolled ? "text-lightblue" : "text-violet") : (scrolled ? "hover:text-lightblue cursor-pointer" : "text-navyblue cursor-pointer") }>
          <h1 onClick={() => handleNavigate("/services")}>Services</h1>
        </div>
        <div className={activePage === "/blog" ? (scrolled ? "text-lightblue" : "text-violet") : (scrolled ? "hover:text-lightblue cursor-pointer" : "text-navyblue cursor-pointer") }>
          <h1 onClick={() => handleNavigate("/blog")}>Blog</h1>
        </div>
        <div className={activePage === "/process" ? (scrolled ? "text-lightblue" : "text-violet") : (scrolled ? "hover:text-lightblue cursor-pointer" : "text-navyblue cursor-pointer") }>
          <h1 onClick={() => handleNavigate("/process")}>Process</h1>
        </div>
        <div className={activePage === "/portfolio" ? (scrolled ? "text-lightblue" : "text-violet") : (scrolled ? "hover:text-lightblue cursor-pointer" : "text-navyblue cursor-pointer") }>
          <h1 onClick={() => handleNavigate("/portfolio")}>Portfolio</h1>
        </div>
        <div className={activePage === "/contact" ? (scrolled ? "text-lightblue" : "text-violet") : (scrolled ? "hover:text-lightblue cursor-pointer" : "text-navyblue cursor-pointer") }>
          <h1 onClick={() => handleNavigate("/contact")}>Contact</h1>
        </div>
      </div>
      <div className="col-span-2 flex justify-end items-center gap-x-5">
        <div>
          <a href={`tel:${whatsappNumber}`}>
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="hover:cursor-pointer transition duration-300 ease-in-out hover:text-violet text-lightblue text-4xl ml-4"
            />
          </a>
        </div>
        <div
          onClick={() => {
            handleNavigate("/contact");
          }}
          className={`hover:bg-${scrolled ? "lightblue" : "violet"} hover:cursor-pointer bg-lightblue h-full w-1/2 flex items-center justify-center transition duration-300 ease-in-out`}
        >
          <button className="text-white text-button">Book a Meeting</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
