import memberPhoto1 from '../assets/memberPhoto1.jpg';
import memberPhoto2 from '../assets/memberPhoto2.jpg';

const MembersPanel = () => {
  //   const { heading, subheading, text, buttontext } = props;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="relative flex justify-center items-center pb-10">
        <div className="absolute inset-0 bg-navyblue opacity-80 "></div>
        <div className="relative w-4/5 md:w-2/3 flex flex-col justify-center items-center my-5 md:my-20 text-white gap-y-10">
          <div className="md:w-10/12 ">
            <img
              src={memberPhoto1}
              alt="meeting"
              className="w-full h-[300px] md:h-[350px] rounded-2xl object-cover"
            />
          </div>
          <div className="text-mobile-p md:text-lg font-normal">
            <p className='h-28 md:h-44' >
              "Exalt Solutions has been an invaluable partner for Accentiá
              Consulting. Their market research expertise greatly contributed to
              our success. Their professionalism and reliability make them a
              trusted choice for our projects." - Khalid Mahdi, Director,
              Accentiá Consulting FZCO.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center pb-10">
        <div className="absolute inset-0 bg-navyblue opacity-90 "></div>
        <div className="relative w-4/5 md:w-2/3 flex flex-col justify-center items-center my-5 md:my-20 text-white gap-y-10">
          <div className="md:w-10/12 ">
            <img
              src={memberPhoto2}
              alt="meeting"
              className="w-full h-[300px] md:h-[350px] rounded-2xl object-cover"
            />
          </div>
          <div className="text-mobile-p md:text-lg font-normal">
            <p className='h-28 md:h-44' >
              "Exalt Solutions played a pivotal role in accelerating our project
              at Lune Technologies. Their expertise & dedication in data
              labeling ensured that we were able to expedite our go-to-market. A
              reliable partner, we appreciate their efficient support in
              achieving our goals." - Alexandre Soued, Co-CEO & Co-Founder, Lune
              Technologies.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center pb-10">
        <div className="absolute inset-0 bg-navyblue opacity-100 "></div>
        <div className="relative w-4/5 md:w-2/3 flex flex-col justify-center items-center my-5 md:my-20 text-white gap-y-10">
          <div className="md:w-10/12 ">
            <img
              src={memberPhoto1}
              alt="meeting"
              className="w-full h-[300px] md:h-[350px] rounded-2xl object-cover"
            />
          </div>
          <div className="text-mobile-p md:text-lg font-normal">
            <p className='h-28 md:h-44' >
              "Exalt Solutions has been an invaluable partner for Accentiá
              Consulting. Their market research expertise greatly contributed to
              our success. Their professionalism and reliability make them a
              trusted choice for our projects." - Khalid Mahdi, Director,
              Accentiá Consulting FZCO.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersPanel;
