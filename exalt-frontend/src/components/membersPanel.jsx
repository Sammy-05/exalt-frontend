import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MembersPanel = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="relative flex justify-center items-start md:py-0 py-3">
        <div className="absolute inset-0 bg-navyblue opacity-80 "></div>
        <div className="relative w-4/5 md:w-full md:mx-10 flex flex-col justify-center items-start md:items-center my-5 md:my-20 text-white gap-y-10 transition-transform transform hover:scale-105">
          <div className="flex flex-col justify-center items-start md:items-center">
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
            <h1 className="text-mobile-mainheading md:text-mainheading font-georgia">
              {' '}
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
            <h1 className="text-mobile-mainheading md:text-mainheading font-georgia">
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
            <p className="text-mobile-button md:text-button">
              A Trusted Choice
            </p>
            <br />
            <p className="text-mobile-button md:text-button">
              Exalt Solutions has been an invaluable partner for Accentiá
              Consulting. Their market research expertise greatly contributed to
              our success. Their professionalism and reliability make them a
              trusted choice for our projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersPanel;
