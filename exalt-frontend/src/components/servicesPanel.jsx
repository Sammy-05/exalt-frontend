// import {
//   faArrowRight,
//   faGlobe,
//   faMagnifyingGlassChart,
//   faMicrochip,
//   faTable,
//   faMoneyBillTrendUp,
//   faTerminal,
//   faCode,
//   faReceipt,
//   faChartSimple,
//   faCopy,
//   faUserTie
// } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Links from '../assets/links.json';

// const servicesList = [
//   {
//     'service number': 1,
//     service: 'ML & AI Development',
//     "logo": faMicrochip
//   },
//   {
//     'service number': 2,
//     service: 'Data Analysis',
//     "logo": faMagnifyingGlassChart
//   },
//   {
//     'service number': 3,
//     service: 'Data Labelling',
//     "logo": faTable
//   },
//   {
//     'service number': 4,
//     service: 'Market Research',
//     "logo": faMoneyBillTrendUp
//   },
//   {
//     'service number': 5,
//     service: 'Software Development',
//     "logo": faTerminal
//   },
//   {
//     'service number': 6,
//     service: 'Web/App Development',
//     "logo": faCode
//   },
//   {
//     'service number': 7,
//     service: 'Bookkeeping',
//     "logo": faReceipt
//   },
//   {
//     'service number': 8,
//     service: 'Recruiting',
//     "logo": faUserTie
//   },
//   {
//     'service number': 9,
//     service: 'Financial Modeling',
//     "logo": faChartSimple

//   },
//   {
//     'service number': 10,
//     service: 'Copy Writing',
//     "logo": faCopy
//   },
// ];

// const ServicesPanel = () => {
//   //   const { heading, text, buttontext } = props;
//   const handleButtonClick = () => {
//     window.open(Links.Calendly, '_blank');
//   };

//   return (
//     <div className="bg-navyblue w-full text-white py-10 md:py-20">
//       <div className="w-full flex justify-center items-center text-mobile-mainheading md:text-mainheading font-georgia font-normal">
//         <h1>Our Services</h1>
//       </div>
//       <div className="md:mx-20 py-10 md:py-20">
//         <div className=" grid grid-cols-2 md:grid-cols-5 justify-center items-center pb-10">
//           {servicesList.map((service) => (
//             <div className="flex flex-col justify-center items-center text-center">
//               <FontAwesomeIcon
//                 icon={service.logo}
//                 className="text-white text-2xl md:text-5xl m-2 md:m-5"
//               />
//               <h1 className="text-mobile-subheading md:text-p  font-roboto w-2/3 h-20">
//                 {service.service}
//               </h1>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex justify-center items-center">
//         <div className="group">
//           <button
//             onClick={handleButtonClick}
//             className="font-georgia font-bold bg-white text-navyblue px-5 rounded-xl py-2 flex border-2 border-white items-center group-hover:bg-violet group-hover:text-white"
//           >
//             Book a Meeting
//             <FontAwesomeIcon
//               icon={faArrowRight}
//               className="text-navyblue text-2xl ml-4 group-hover:text-white"
//             />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesPanel;
import {
  faArrowRight,
  faGlobe,
  faMagnifyingGlassChart,
  faMicrochip,
  faTable,
  faMoneyBillTrendUp,
  faTerminal,
  faCode,
  faReceipt,
  faChartSimple,
  faCopy,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Links from '../assets/links.json';

const servicesList = [
  {
    'service number': 1,
    service: 'ML & AI Development',
    logo: faMicrochip,
  },
  {
    'service number': 2,
    service: 'Data Analysis',
    logo: faMagnifyingGlassChart,
  },
  {
    'service number': 3,
    service: 'Data Labelling',
    logo: faTable,
  },
  {
    'service number': 4,
    service: 'Market Research',
    logo: faMoneyBillTrendUp,
  },
  {
    'service number': 5,
    service: 'Software Development',
    logo: faTerminal,
  },
  {
    'service number': 6,
    service: 'Web/App Development',
    logo: faCode,
  },
  {
    'service number': 7,
    service: 'Bookkeeping',
    logo: faReceipt,
  },
  {
    'service number': 8,
    service: 'Recruiting',
    logo: faUserTie,
  },
  {
    'service number': 9,
    service: 'Financial Modeling',
    logo: faChartSimple,
  },
  {
    'service number': 10,
    service: 'Copywriting',
    logo: faCopy,
  },
];

const ServicesPanel = () => {
  //   const { heading, text, buttontext } = props;
  const handleButtonClick = () => {
    window.open(Links.Calendly, '_blank');
  };

  return (
    <div className="bg-navyblue w-full text-white py-10 md:py-20">
      <div className="w-full flex justify-center items-center text-mobile-mainheading md:text-mainheading font-georgia font-normal">
        <h1>Our Services</h1>
      </div>
      <div className="md:mx-20 py-10 md:py-20">
        <div className=" grid grid-cols-2 md:grid-cols-5 justify-center items-center pb-10 ">
          {servicesList.map((service) => (

            <div className="flex flex-col justify-center items-center text-center transition-transform transform hover:scale-110">
              <FontAwesomeIcon
                icon={service.logo}
                className="text-white text-2xl md:text-5xl m-2 md:m-5 "
              />

              <h1 className="text-mobile-subheading md:text-p  font-roboto w-2/3 h-20">
                {service.service}
              </h1>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="group">
          
          <button
            onClick={handleButtonClick}
            className="font-georgia font-bold bg-white text-navyblue px-5 rounded-xl py-2 flex border-2 border-white items-center group-hover:bg-navyblue group-hover:text-white transition-colors"
          >
            Book a Meeting
            
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-navyblue text-2xl ml-4 group-hover:text-white"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPanel;
