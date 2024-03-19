import memberPhoto1 from '../assets/memberPhoto1.jpg';
import memberPhoto2 from '../assets/memberPhoto2.jpg';
import { faQuoteLeft, faQuoteLeftAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MembersPanel = () => {
  //   const { heading, subheading, text, buttontext } = props;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="relative flex justify-center items-center pb-10 ">
        <div className="absolute inset-0 bg-navyblue opacity-70  "></div>
        <div className="relative w-4/5 md:w-2/3 flex flex-col justify-center items-center my-5 md:my-20 text-white gap-y-10 transition-transform transform hover:scale-110">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-mainheading font-georgia">Khalid Mahdi</h1>
            <h1 className="text-subheading font-roboto font-thin">
              Director, Accentiá Consulting FZCO
            </h1>
          </div>
          <div className="text-mobile-p md:text-button font-normal">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="text-white md:text-6xl "
            />
            <p>A Trusted Choice</p>
            <br />
            <p className="h-28 md:h-44">
              Exalt Solutions has been an invaluable partner for Accentiá
              Consulting. Their market research expertise greatly contributed to
              our success. Their professionalism and reliability make them a
              trusted choice for our projects.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center pb-10 ">
        <div className="absolute inset-0 bg-navyblue opacity-80  "></div>
        <div className="relative w-4/5 md:w-2/3 flex flex-col justify-center items-center my-5 md:my-20 text-white gap-y-10 transition-transform transform hover:scale-110">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-mainheading font-georgia"> Alexandre Soued</h1>
            <h1 className="text-subheading font-roboto font-thin">
              Co-CEO & Co-Founder, Lune Technologies
            </h1>
          </div>
          <div className="text-mobile-p md:text-button font-normal">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="text-white md:text-6xl "
            />
            <p>A Reliable Partner</p>
            <br />
            <p className="h-28 md:h-44">
              Exalt Solutions played a pivotal role in accelerating our project
              at Lune Technologies. Their expertise & dedication in data
              labeling ensured that we were able to expedite our go-to-market. A
              reliable partner, we appreciate their efficient support in
              achieving our goals.
            </p>
          </div>
        </div>
      </div>
      
      <div className="relative flex justify-center items-center pb-10 ">
        <div className="absolute inset-0 bg-navyblue opacity-90  "></div>
        <div className="relative w-4/5 md:w-2/3 flex flex-col justify-center items-center my-5 md:my-20 text-white gap-y-10 transition-transform transform hover:scale-110">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-mainheading font-georgia">Khalid Mahdi</h1>
            <h1 className="text-subheading font-roboto font-thin">
              Director, Accentiá Consulting FZCO
            </h1>
          </div>
          <div className="text-mobile-p md:text-button font-normal">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="text-white md:text-6xl "
            />
            <p>A Trusted Choice</p>
            <br />
            <p className="h-28 md:h-44">
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
