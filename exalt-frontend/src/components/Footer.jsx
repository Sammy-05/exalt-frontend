import logo from "../assets/logo.png";
import {
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Links from "../assets/links.json";

const Footer = () => {
  const navigate = useNavigate();
  const whatsappNumber = "+971585256280";

  const handleNavigate = (page) => {
    window.scrollTo(0, 0);
    navigate(page);
  };

  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="font-georgia w-full flex flex-col md:flex-row bg-white md:grid md:grid-cols-8 gap-x-20">
      <div className="col-span-2 flex justify-center">
        <img
          src={logo}
          alt="logo"
          onClick={() => handleNavigate("/")}
          className="py-10 transition-transform transform hover:scale-110 hover:cursor-pointer"
        />
      </div>
      <div className="text-p font-thin gap-y-5 md:gap-y-10 col-span-4 flex flex-col md:items-end py-10">
        <div className="flex items-center justify-end flex-col gap-y-5 md:flex-row md:gap-x-16">
          <div>
            <h1
              className="hover:text-violet text-navyblue hover:cursor-pointer"
              onClick={() => {
                handleNavigate("/");
              }}
            >
              Home
            </h1>
          </div>
          <div>
            <h1
              className="hover:text-violet text-navyblue hover:cursor-pointer"
              onClick={() => {
                handleNavigate("/about");
              }}
            >
              About Us
            </h1>
          </div>
          <div>
            <h1
              className="hover:text-violet text-navyblue hover:cursor-pointer"
              onClick={() => {
                handleNavigate("/services");
              }}
            >
              Our Services
            </h1>
          </div>

          <div>
            <h1
              className="hover:text-violet text-navyblue hover:cursor-pointer"
              onClick={() => {
                handleNavigate("/process");
              }}
            >
              Our Process
            </h1>
          </div>
        </div>
        <div className="flex items-center md:justify-end flex-col gap-y-5 md:flex-row md:gap-x-10">
          <div>
            <h1
              className="hover:text-violet text-navyblue hover:cursor-pointer"
              onClick={() => {
                handleNavigate("/blog");
              }}
            >
              Blog
            </h1>
          </div>
          <div>
            <h1
              className="hover:text-violet text-navyblue hover:cursor-pointer"
              onClick={() => {
                handleNavigate("/portfolio");
              }}
            >
              Our Portfolio
            </h1>
          </div>
          <div>
            <h1
              className="hover:text-violet text-navyblue hover:cursor-pointer"
              onClick={() => {
                handleNavigate("/contact");
              }}
            >
              Contact Us
            </h1>
          </div>
        </div>
      </div>
      <div className="col-span-2 flex flex-col items-center md:items-start text-center md:text-left md:justify-start py-10 gap-y-5 ">
        <div className="flex flex-col">
          <div>
            <h1 className="font-georgia text-p font-bold text-navyblue">
              Email:
            </h1>
          </div>
          <div>
            <p>info@exaltsolutions.co</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <h1 className="font-georgia text-p font-bold text-navyblue">
              Phone Number:
            </h1>
          </div>
          <div>
            <p>+971 58 525 6280</p>
          </div>
        </div>
        <div className="flex gap-x-5">
          <a href={`https://wa.me/${whatsappNumber}`}>
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-lightblue text-3xl hover:text-violet cursor-pointer"
            />
          </a>

          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-lightblue text-3xl hover:text-violet cursor-pointer"
            onClick={() => {
              handleButtonClick(Links.LinkedIn);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
