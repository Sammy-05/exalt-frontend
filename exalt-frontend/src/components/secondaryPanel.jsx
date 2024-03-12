// import homeBackground2 from "../assets/homeBackground2.png";

// const SecondaryPanel = (props) => {
//   const { heading, text } = props;

//   return (
//     <div className="bg-white text-navyblue flex-col md:flex-row text-left w-full">
//       <div className="md:w-1/2 h-[520px] flex justify-center items-center">
//         <img src={homeBackground2} alt="meeting" className=""/>
//       </div>
//       <div className="md:w-1/2 flex items-center text-center justify-center md:justify-start md:text-left">
//         <div className="py-18 w-5/6">
//           <div className="font-georgia text-mainheading">
//             <h1>{heading}</h1>
//           </div>
//           <div className="pt-12 text-p">
//             <p>{text}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SecondaryPanel;

import homeBackground2 from "../assets/homeBackground2.png";

const SecondaryPanel = (props) => {
  const { heading, text } = props;

  return (
    <div className="bg-white text-navyblue flex flex-col md:flex-row text-left w-full py-10 md:py-16">
      <div className="md:w-1/2 flex justify-center items-center mx-10 md:mx-0">
        <img src={homeBackground2} alt="meeting" className="max-w-full h-auto"/>
      </div>
      <div className="mx-10 md:mx-0 md:w-1/2 flex items-center justify-center md:justify-start md:text-left">
        <div className="pt-10 md:py-0 w-full md:w-5/6">
          <div className="font-serif text-mobile-mainheading md:text-mainheading">
            <h1>{heading}</h1>
          </div>
          <div className="pt-4 md:pt-12 text-mobile-p md:text-p">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryPanel;
