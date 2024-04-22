import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import client1 from "../assets/Home/client1.jpg";
import client2 from "../assets/Home/client2.jpg";
import client3 from "../assets/Home/client3.jpg";

const MembersPanel = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="relative flex justify-center items-start md:py-0 py-3">
        <div className="absolute inset-0 bg-navyblue opacity-80 "></div>
        <div className="relative w-4/5 md:w-full md:mx-10 flex flex-col justify-center items-start md:items-center my-5 md:my-20 text-white gap-y-10 transition-transform transform hover:scale-105">
          <div className="flex flex-col justify-center items-start md:items-center">
            <div className="pb-5">
              <img className="rounded-full w-[80px]" src={client2} alt="" />
            </div>

            <h1 className="text-mobile-mainheading md:text-mainheading  font-georgia">
              Khalid Mahdi
            </h1>
            <h1 className="text-mobile-subheading md:text-subheading font-roboto font-thin">
              Director, Accentiá Consulting FZCO
            </h1>
          </div>
          <div className="text-mobile-p md:text-button font-normal md:mx-5">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="text-white text-3xl md:text-6xl "
            />
            <p>A Trusted Choice</p>
            <br />
            <p className="">
              Exalt Solutions has been an invaluable partner for Accentiá
              Consulting. Their market research expertise greatly contributed to
              our success. Their professionalism and reliability make them a
              trusted choice for our projects.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-start md:py-0 py-3">
        <div className="absolute inset-0 bg-navyblue opacity-90  "></div>
        <div className="relative w-4/5 md:w-full md:mx-10 flex flex-col justify-center items-start md:items-center my-5 md:my-20 text-white gap-y-10 transition-transform transform hover:scale-105">
          <div className="flex flex-col justify-center items-start md:items-center">
            <div className="pb-5">
              <img className="rounded-full w-[80px]" src={client1} alt="" />
            </div>
            <h1 className="text-mobile-mainheading md:text-mainheading font-georgia">
              {" "}
              Alexandre Soued
            </h1>
            <h1 className="text-mobile-subheading md:text-subheading font-roboto font-thin">
              Co-CEO & Co-Founder, Lune Technologies
            </h1>
          </div>
          <div className="text-mobile-p md:text-button font-normal md:mx-5">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="text-white text-3xl md:text-6xl "
            />
            <p className="text-mobile-button md:text-button">
              A Reliable Partner
            </p>
            <br />
            <p className="text-mobile-button md:text-button">
              Exalt Solutions played a pivotal role in accelerating our project
              at Lune Technologies. Their expertise & dedication in data
              labeling ensured that we were able to expedite our go-to-market. A
              reliable partner, we appreciate their efficient support in
              achieving our goals.
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center items-start md:py-0 py-3">
        <div className="absolute inset-0 bg-navyblue"></div>
        <div className="relative w-4/5 md:w-full md:mx-10 flex flex-col justify-center items-start md:items-center my-5 md:my-20 text-white gap-y-10 transition-transform transform hover:scale-105">
          <div className="flex flex-col justify-center items-start md:items-center">
            <div className="pb-5">
              <img className="rounded-full w-[80px]" src={client3} alt="" />
            </div>
            <h1 className="text-mobile-mainheading md:text-mainheading font-georgia">
              PJ McCloskey
            </h1>
            <h1 className="text-mobile-subheading md:text-subheading font-roboto font-thin">
              Director, MCC Economics & Finance
            </h1>
          </div>
          <div className="text-mobile-p md:text-button font-normal md:mx-5">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="text-white text-3xl md:text-6xl "
            />
            <p className="text-mobile-button md:text-button">
              An Invaluable Partnership
            </p>
            <br />
            <p className="text-mobile-button md:text-button">
              Working with Exalt Solutions was a game-changer for our GDP
              forecasting project. Their professionalism and clear communication
              made the process seamless. I highly recommend their services for
              any data-related project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersPanel;
