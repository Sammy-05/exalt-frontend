import servicePhoto from '../assets/servicePhoto.png';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const servicesList = [
  {
    serviceNumber: 1,
    service: 'Market Research',
    text: 'Unlock market insights and drive your business strategy with our comprehensive market research services. Our team provides in-depth analysis of market trends, consumer behavior, and competitive landscapes to inform your decision-making process.',
  },
  {
    serviceNumber: 2,
    service: 'Data Analysis',
    text: 'Transform data into actionable insights with our data analysis services. We specialize in interpreting complex data sets to provide clear, concise, and relevant information that supports your business objectives.',
  },
  {
    serviceNumber: 3,
    service: 'ML/AI Devlopment',
    text: 'Harness the power of cutting-edge technology with our expertise in developing machine learning and AI solutions tailored to optimize and elevate your business processes.',
  },
  {
    serviceNumber: 4,
    service: 'Software Development',
    text: 'Craft innovative, scalable, and customized software solutions with our dedicated team. From conceptualization to implementation, we deliver reliable software that aligns seamlessly with your business goals.',
  },
  {
    serviceNumber: 5,
    service: 'Web/App Development',
    text: 'Transform your digital presence with our expert web and app development services. We create user-centric, responsive, and feature-rich solutions, ensuring a seamless and engaging experience for your audience.',
  },
  {
    serviceNumber: 6,
    service: 'Data Labelling',
    text: 'Expertly annotated data for AI and machine learning success. Our team specializes in precise data labeling for image, text, and more, ensuring quality training for your innovative projects.',
  },
  {
    serviceNumber: 7,
    service: 'Bookkeeping',
    text: 'Keep your finances in order and ensure compliance with our professional bookkeeping services. From managing ledgers to preparing financial statements, we handle all aspects of bookkeeping with meticulous attention to detail.',
  },
  {
    serviceNumber: 8,
    service: 'Financial Modeling',
    text: 'Plan for the future with confidence using our financial forecasting services. We provide insights into financial trends, helping you make informed decisions and strategize for long-term success.',
  },
  {
    serviceNumber: 9,
    service: 'Recruiting',
    text: 'Find the right talent for your team with our specialized recruiting services. We connect you with skilled professionals from the global south, ensuring a perfect fit for your company’s needs.',
  },
  {
    serviceNumber: 10,
    service: '',
    text: '',
  },
  {
    serviceNumber: 11,
    service: 'Copy Writing',
    text: 'Find the right talent for your team with our specialized recruiting services. We connect you with skilled professionals from the global south, ensuring a perfect fit for your company’s needs.',
  },
  {
    serviceNumber: 12,
    service: '',
    text: '',
  },
];

const ServicesMembersPanel = () => {
  //   const { [34px], sub[34px], text, buttontext } = props;

  return (
    <div>
      <div className="grid grid-cols-3">
        {servicesList.slice(0, 3).map((service) => (
          <div>
            <div className="relative flex justify-center items-center">
              <div className="absolute inset-0 bg-white "></div>
              <div className="relative w-3/4 flex flex-col my-20 text-navyblue gap-y-10">
                <div className="w-full ">
                  <img
                    src={servicePhoto}
                    alt="meeting"
                    className="w-full h-full"
                  />
                </div>
                <div className="text-[34px] font-normal font-georgia text-left h-16">
                  <h1>{service.service}</h1>
                </div>
                <div className="text-lg font-normal h-44">
                  <p>{service.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3">
        {servicesList.slice(3, 6).map((service) => (
          <div>
            <div className="relative flex justify-center items-center">
              <div className="absolute inset-0 bg-navyblue "></div>
              <div className="relative w-3/4 flex flex-col  my-20 text-white gap-y-10">
                <div className="w-full ">
                  <img
                    src={servicePhoto}
                    alt="meeting"
                    className="w-full h-full"
                  />
                </div>
                <div className="text-[34px] font-normal font-georgia text-left h-16">
                  <h1>{service.service}</h1>
                </div>
                <div className="text-lg font-normal h-44">
                  <p>{service.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3">
        {servicesList.slice(6, 9).map((service) => (
          <div>
            <div className="relative flex justify-center items-center">
              <div className="absolute inset-0 bg-white "></div>
              <div className="relative w-3/4 flex flex-col  my-20 text-navyblue gap-y-10">
                <div className="w-full ">
                  <img
                    src={servicePhoto}
                    alt="meeting"
                    className="w-full h-full"
                  />
                </div>
                <div className="text-[34px] font-normal font-georgia text-left h-16">
                  <h1>{service.service}</h1>
                </div>
                <div className="text-lg font-normal h-44">
                  <p>{service.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3">
        {servicesList.slice(9, 12).map((service) => (
          <div>
            <div className="relative flex justify-center items-center">
              <div className="absolute inset-0 bg-navyblue "></div>
              <div className="relative w-3/4 flex flex-col  my-20 text-white gap-y-10">
                <div className="w-full ">
                  <img
                    src={servicePhoto}
                    alt="meeting"
                    className="w-full h-full"
                  />
                </div>
                <div className="text-[34px] font-normal font-georgia text-left h-16">
                  <h1>{service.service}</h1>
                </div>
                <div className="text-lg font-normal h-44">
                  <p>{service.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center py-10">
        <button className="font-georgia bg-navyblue font-bold hover:bg-violet text-white px-5 rounded-xl py-2 flex  items-center">
        Let’s Discuss Your Business Needs
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-white text-2xl ml-4"
          />
        </button>
      </div>
    </div>
  );
};

export default ServicesMembersPanel;
