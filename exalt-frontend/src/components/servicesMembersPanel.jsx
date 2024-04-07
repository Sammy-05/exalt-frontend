import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import pic1 from '../assets/services/pic1.jpg';
import pic2 from '../assets/services/pic2.jpg';
import pic3 from '../assets/services/pic3.jpg';
import pic4 from '../assets/services/pic4.jpg';
import pic5 from '../assets/services/pic5.jpg';
import pic6 from '../assets/services/pic6.jpg';
import pic8 from '../assets/services/pic8.jpg';
import pic9 from '../assets/services/pic9.jpg';
import pic10 from '../assets/services/pic10.jpg';
import Links from '../assets/links.json';

const servicesList = [
  {
    serviceNumber: 1,
    service: 'Market Research',
    text: 'Unlock market insights and drive your business strategy with our comprehensive market research services. Our team provides in-depth analysis of market trends, consumer behavior, and competitive landscapes to inform your decision-making process.',
    pic: pic1,
  },
  {
    serviceNumber: 2,
    service: 'Data Analysis',
    text: 'Transform data into actionable insights with our data analysis services. We specialize in interpreting complex data sets to provide clear, concise, and relevant information that supports your business objectives.',
    pic: pic2,
  },
  {
    serviceNumber: 3,
    service: 'ML/AI Devlopment',
    text: 'Harness the power of cutting-edge technology with our expertise in developing machine learning and AI solutions tailored to optimize and elevate your business processes.',
    pic: pic3,
  },
  {
    serviceNumber: 4,
    service: 'Software Development',
    text: 'Craft innovative, scalable, and customized software solutions with our dedicated team. From conceptualization to implementation, we deliver reliable software that aligns seamlessly with your business goals.',
    pic: pic4,
  },
  {
    serviceNumber: 5,
    service: 'Web/App Development',
    text: 'Transform your digital presence with our expert web and app development services. We create user-centric, responsive, and feature-rich solutions, ensuring a seamless and engaging experience for your audience.',
    pic: pic5,
  },
  {
    serviceNumber: 6,
    service: 'Data Labelling',
    text: 'Expertly annotated data for AI and machine learning success. Our team specializes in precise data labeling for image, text, and more, ensuring quality training for your innovative projects.',
    pic: pic6,
  },
  {
    serviceNumber: 7,
    service: 'Copy Writing',
    text: 'Find the right talent for your team with our specialized recruiting services. We connect you with skilled professionals from the global south, ensuring a perfect fit for your company’s needs.',
    pic: pic10,
  },
  {
    serviceNumber: 8,
    service: 'Financial Modeling',
    text: 'Plan for the future with confidence using our financial forecasting services. We provide insights into financial trends, helping you make informed decisions and strategize for long-term success.',
    pic: pic8,
  },
  {
    serviceNumber: 9,
    service: 'Recruiting',
    text: 'Find the right talent for your team with our specialized recruiting services. We connect you with skilled professionals from the global south, ensuring a perfect fit for your company’s needs.',
    pic: pic9,
  },
];

const ServicesMembersPanel = () => {
  const handleButtonClick = (url) => {
    
    window.open(url, '_blank');
  };

  return (
    <div>
      <div
        className={`grid ${
          window.innerWidth > 768
            ? 'grid-cols-3 mx-16 py-16'
            : 'grid-cols-1 mx-1'
        } `}
      >
        {servicesList.map((service, index) => {
          return (
            <div
              key={index}
              className="flex flex-col mx-5 my-5 hover:cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg bg-grey hover:bg-navyblue hover:text-white group text-navyblue drop-shadow-3xl"
            >
              <div>
                <img
                  src={service.pic}
                  className="w-full h-[250px] object-fill rounded-t-lg"
                  alt=""
                />
              </div>
              <div className="mx-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex gap-x-8 pt-4">
                    <h1 className="text-violet group-hover:text-lightblue text-[22px] md:text-3xl font-georgia">
                      {service.service}
                    </h1>
                  </div>

                  <div className="pt-5 md:pt-5 text-mobile-p md:text-[16px] flex-1 pb-10">
                    <p>{service.text}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={`flex justify-center bg-white items-center py-2 md:py-8`}>
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
  );
};

export default ServicesMembersPanel;
