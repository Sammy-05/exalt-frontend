// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React, { useState, useEffect } from 'react';
// import pic1 from '../assets/services/pic1.jpg';
// import pic2 from '../assets/services/pic2.jpg';
// import pic3 from '../assets/services/pic3-min.jpg';
// import pic4 from '../assets/services/pic4-min.jpg';
// import pic5 from '../assets/services/pic5-min.jpg';
// import pic6 from '../assets/services/pic6-min.jpg';
// import pic7 from '../assets/services/pic7.jpg';
// import pic8 from '../assets/services/pic8-min.jpg';
// import pic9 from '../assets/services/pic9.jpg';
// import pic10 from '../assets/services/pic10.jpg';
// import Links from '../assets/links.json';

// const servicesList = [
//   {
//     serviceNumber: 1,
//     service: 'Market Research',
//     text: 'Unlock market insights and drive your business strategy with our comprehensive market research services. Our team provides in-depth analysis of market trends, consumer behavior, and competitive landscapes to inform your decision-making process.',
//     pic: pic1,
//   },
//   {
//     serviceNumber: 2,
//     service: 'Data Analysis',
//     text: 'Transform data into actionable insights with our data analysis services. We specialize in interpreting complex data sets to provide clear, concise, and relevant information that supports your business objectives.',
//     pic: pic2,
//   },
//   {
//     serviceNumber: 3,
//     service: 'ML/AI Devlopment',
//     text: 'Harness the power of cutting-edge technology with our expertise in developing machine learning and AI solutions tailored to optimize and elevate your business processes.',
//     pic: pic3,
//   },
//   {
//     serviceNumber: 4,
//     service: 'Software Development',
//     text: 'Craft innovative, scalable, and customized software solutions with our dedicated team. From conceptualization to implementation, we deliver reliable software that aligns seamlessly with your business goals.',
//     pic: pic4,
//   },
//   {
//     serviceNumber: 5,
//     service: 'Web/App Development',
//     text: 'Transform your digital presence with our expert web and app development services. We create user-centric, responsive, and feature-rich solutions, ensuring a seamless and engaging experience for your audience.',
//     pic: pic5,
//   },
//   {
//     serviceNumber: 6,
//     service: 'Data Labelling',
//     text: 'Expertly annotated data for AI and machine learning success. Our team specializes in precise data labeling for image, text, and more, ensuring quality training for your innovative projects.',
//     pic: pic6,
//   },
//   {
//     serviceNumber: 7,
//     service: 'Bookkeeping',
//     text: 'Keep your finances in order and ensure compliance with our professional bookkeeping services. From managing ledgers to preparing financial statements, we handle all aspects of bookkeeping with meticulous attention to detail.',
//     pic: pic7,
//   },
//   {
//     serviceNumber: 8,
//     service: 'Financial Modeling',
//     text: 'Plan for the future with confidence using our financial forecasting services. We provide insights into financial trends, helping you make informed decisions and strategize for long-term success.',
//     pic: pic8,
//   },
//   {
//     serviceNumber: 9,
//     service: 'Recruiting',
//     text: 'Find the right talent for your team with our specialized recruiting services. We connect you with skilled professionals from the global south, ensuring a perfect fit for your company’s needs.',
//     pic: pic9,
//   },
//   // {
//   //   serviceNumber: 10,
//   //   service: '',
//   //   text: '',
//   // },
//   {
//     serviceNumber: 11,
//     service: 'Copy Writing',
//     text: 'Find the right talent for your team with our specialized recruiting services. We connect you with skilled professionals from the global south, ensuring a perfect fit for your company’s needs.',
//     pic: pic10,
//   },
//   // {
//   //   serviceNumber: 12,
//   //   service: '',
//   //   text: '',
//   // },
// ];

// const ServicesMembersPanel = () => {
//   //   const { [34px], sub[34px], text, buttontext } = props;
//   const [chunkSize, setChunkSize] = useState(window.innerWidth >= 768 ? 3 : 2);

//   useEffect(() => {
//     const handleResize = () => {
//       setChunkSize(window.innerWidth >= 768 ? 3 : 2);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const chunk = (array, size) => {
//     const chunked_arr = [];
//     for (let i = 0; i < array.length; i += size) {
//       if (i === 9) {
//         const tempArr = [];
//         tempArr.push({
//           serviceNumber: 10,
//           service: '',
//           text: '',
//         });
//         tempArr.push(array[array.length -1])
//         tempArr.push({
//           serviceNumber: 12,
//           service: '',
//           text: '',
//         })
//         chunked_arr.push(tempArr);
//         continue
//       }
//       chunked_arr.push(array.slice(i, i + size));
//     }
//     console.log(chunked_arr);
//     return chunked_arr;
//   };

//   const rows = chunk(servicesList, chunkSize);

//   const handleButtonClick = (url) => {
//     // open the url in the new tab
//     window.open(url, '_blank');
//   };

//   return (

//     <div>
//       {rows.map((row, rowIndex) => (
//         <div
//           key={rowIndex}
//           className={`grid ${chunkSize === 3 ? "grid-cols-3" : "grid-cols-2"} justify-center items-center ${
//             rowIndex % 2 === 0 ? 'bg-white' : 'bg-navyblue'
//           }`}
//         >
//           {row.map((service, index) => (
//             <div
//               key={index}
//               className="relative py-5 md:my-16  flex flex-col justify-center items-center "
//             >
//               <div className="flex w-11/12 md:w-3/4  flex-col gap-y-10">
//                 <div className="w-full h-full">
//                   {service.pic && (
//                     <img
//                       src={service.pic}
//                       alt="meeting"
//                       className="w-full h-44 md:h-[250px] object-cover"
//                     />
//                   )}
//                 </div>
//                 <div
//                   className={` text-lg  flex flex-col gap-y-10 ${
//                     rowIndex % 2 === 0 ? 'text-navyblue' : 'text-white'
//                   }`}
//                 >
//                   <h1 className="text-mobile-subheading md:text-[34px] font-normal font-georgia text-left md:h-16 ">
//                     {service.service}
//                   </h1>
//                   <p className="text-mobile-p md:text-lg font-normal h-60 md:h-44 ">
//                     {service.text}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ))}
//       <div className={`flex justify-center ${chunkSize === 3 ? "bg-navyblue": "bg-white" } items-center py-2 md:py-8`}>
//         <button
//           onClick={() => {
//             handleButtonClick(Links.Calendly);
//           }}
//           className={`font-georgia ${chunkSize === 3 ? "bg-white text-navyblue" : "bg-navyblue text-white"} font-bold hover:bg-violet  px-5 rounded-xl py-2 flex items-center`}
//         >
//           Let’s Discuss Your Business Needs
//           <FontAwesomeIcon
//             icon={faArrowRight}
//             className=" text-2xl ml-4"
//           />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ServicesMembersPanel;
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import pic1 from "../assets/services/pic1.jpg";
import pic2 from "../assets/services/pic2.jpg";
import pic3 from "../assets/services/pic3-min.jpg";
import pic4 from "../assets/services/pic4-min.jpg";
import pic5 from "../assets/services/pic5-min.jpg";
import pic6 from "../assets/services/pic6-min.jpg";
import pic7 from "../assets/services/pic7.jpg";
import pic8 from "../assets/services/pic8-min.jpg";
import pic9 from "../assets/services/pic9.jpg";
import pic10 from "../assets/services/pic10.jpg";
import Links from "../assets/links.json";
import debounce from "lodash/debounce"; // Import debounce function from lodash

const servicesList = [
  {
    serviceNumber: 1,
    service: "Market Research",
    text: "Unlock market insights and drive your business strategy with our comprehensive market research services. Our team provides in-depth analysis of market trends, consumer behavior, and competitive landscapes to inform your decision-making process.",
    pic: pic1,
  },
  {
    serviceNumber: 2,
    service: "Data Analysis",
    text: "Transform data into actionable insights with our data analysis services. We specialize in interpreting complex data sets to provide clear, concise, and relevant information that supports your business objectives.",
    pic: pic2,
  },
  {
    serviceNumber: 3,
    service: "ML/AI Devlopment",
    text: "Harness the power of cutting-edge technology with our expertise in developing machine learning and AI solutions tailored to optimize and elevate your business processes.",
    pic: pic3,
  },
  {
    serviceNumber: 4,
    service: "Software Development",
    text: "Craft innovative, scalable, and customized software solutions with our dedicated team. From conceptualization to implementation, we deliver reliable software that aligns seamlessly with your business goals.",
    pic: pic4,
  },
  {
    serviceNumber: 5,
    service: "Web/App Development",
    text: "Transform your digital presence with our expert web and app development services. We create user-centric, responsive, and feature-rich solutions, ensuring a seamless and engaging experience for your audience.",
    pic: pic5,
  },
  {
    serviceNumber: 6,
    service: "Data Labelling",
    text: "Expertly annotated data for AI and machine learning success. Our team specializes in precise data labeling for image, text, and more, ensuring quality training for your innovative projects.",
    pic: pic6,
  },
  {
    serviceNumber: 7,
    service: "Copy Writing",
    text: "Find the right talent for your team with our specialized recruiting services. We connect you with skilled professionals from the global south, ensuring a perfect fit for your company’s needs.",
    pic: pic10,
  },
  {
    serviceNumber: 8,
    service: "Financial Modeling",
    text: "Plan for the future with confidence using our financial forecasting services. We provide insights into financial trends, helping you make informed decisions and strategize for long-term success.",
    pic: pic8,
  },
  {
    serviceNumber: 9,
    service: "Recruiting",
    text: "Find the right talent for your team with our specialized recruiting services. We connect you with skilled professionals from the global south, ensuring a perfect fit for your company’s needs.",
    pic: pic9,
  },
];

const ServicesMembersPanel = () => {
  const [chunkSize, setChunkSize] = useState(window.innerWidth >= 768 ? 3 : 2);

  useEffect(() => {
    const handleResize = debounce(() => {
      // Debounce the resize event handler
      setChunkSize(window.innerWidth >= 768 ? 3 : 2);
    }, 200);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chunk = (array, size) => {
    const chunked_arr = [];
    for (let i = 0; i < array.length; i += size) {
      if (i === 9) {
        const tempArr = [];
        tempArr.push({
          serviceNumber: 10,
          service: "",
          text: "",
        });
        tempArr.push(array[array.length - 1]);
        tempArr.push({
          serviceNumber: 12,
          service: "",
          text: "",
        });
        chunked_arr.push(tempArr);
        continue;
      }
      chunked_arr.push(array.slice(i, i + size));
    }

    return chunked_arr;
  };

  useEffect(() => {
    // Preload images
    const images = [
      pic1,
      pic2,
      pic3,
      pic4,
      pic5,
      pic6,
      pic7,
      pic8,
      pic9,
      pic10,
    ];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []); // Run once on component mount

  const rows = chunk(servicesList, chunkSize);

  const handleButtonClick = (url) => {
    // open the url in the new tab
    window.open(url, "_blank");
  };

  return (
    <div>
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`grid ${
            chunkSize === 3
              ? "grid-cols-3 bg-white"
              : `grid-cols-2 ${rowIndex % 2 === 0 ? "bg-white" : "bg-navyblue"}`
          } justify-center items-center`}
        >
          {row.map((service, index) => (
            <div
              key={index}
              className="relative py-5 md:my-4  flex flex-col justify-center items-center group"
            >
              <div className="md:hover:drop-shadow-2xl  md:group-hover:bg-navyblue flex items-center justify-center md:hover:cursor-pointer">
                <div className="flex w-11/12 md:w-5/6 flex-col gap-y-10">
                  <div className="w-full h-full">
                    {service.pic && (
                      <img // Replace img tag with LazyLoadImage
                        src={service.pic}
                        alt="meeting"
                        className="w-full h-44 md:h-[250px] object-cover md:pt-10"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div
                    className={` text-lg  flex flex-col gap-y-10 ${
                      chunkSize === 3
                        ? "text-navyblue md:group-hover:text-white transition-transform group-hover:scale-105 duration-300 ease-out"
                        : `${
                            rowIndex % 2 === 0 ? "text-navyblue" : "text-white"
                          }`
                    }`}
                  >
                    <h1 className="text-mobile-subheading md:text-[34px] font-normal font-georgia text-left md:h-16 ">
                      {service.service}
                    </h1>
                    <p className="text-mobile-p md:text-lg font-normal h-60 md:h-44 ">
                      {service.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
      <div className={`flex justify-center bg-white items-center py-2 md:py-8`}>
        <div className="">
          <button
            onClick={() => {
              handleButtonClick(Links.Calendly);
            }}
            className="font-georgia font-bold text-mobile-p md:text-base hover:border-navyblue  rounded-xl px-3 md:px-5 py-2 md:py-3 flex border-2 border-white items-center bg-navyblue hover:bg-white transition-colors group"
          >
            <div className="md:text-button flex items-center group-hover:text-navyblue  text-white">
              Let's discuss your Business Needs
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-white md:text-2xl ml-4 group-hover:text-navyblue"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesMembersPanel;
