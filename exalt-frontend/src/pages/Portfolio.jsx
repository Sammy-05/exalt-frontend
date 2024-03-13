import pic1 from "../assets/portfolio/portfolio1.jpg";
import pic2 from "../assets/portfolio/portfolio2.jpg";
import pic3 from "../assets/portfolio/portfolio3.jpg";
import pic4 from "../assets/portfolio/portfolio4.jpg";
import CenterFiller from "../components/centerFiller";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Portfolio = () => {
  const portfolio = [
    [
      {
        image1: pic1,
        heading1: "Hot Tub Market Entry",
        subheading1:
          "Detailed analysis for a hot tub company targeting Dubai's wellness sector, highlighting consumer trends and competitive landscape.",
        url1: "https://drive.google.com/file/d/19Qck7au2be3Hdji6rVEkZx27WzzzLjQI/view?usp=sharing",
      },
      {
        image2: pic2,
        heading2: "Audio Distributor Analysis",
        subheading2:
          "Strategic market entry plan for an audio distributor, focusing on demand, key players, and opportunities in Dubai.",
        url2: "https://drive.google.com/file/d/1f5U8kV49_cPZvJ-yH0lCtOeQlBvG56H8/view?usp=sharing",
      },
    ],
    [
      {
        image1: pic3,
        heading1: "Floor Decking Market Research",
        subheading1:
          "Market dynamics and customer needs analysis for a floor decking company venturing into Dubai's construction sector.",
        url1: "https://drive.google.com/file/d/16ZF-YznRwH-Ic8Y_X3RDUNhU6lKdkFwh/view?usp=sharing",
      },
      {
        image2: pic4,
        heading2: "GDP Forecasting Model",
        subheading2:
          "Advanced forecasting model project predicting economic trends, aiding strategic planning and decision-making. ",
        url2: "https://drive.google.com/file/d/1ViJpFCvDm0UBx1Br7FhcRU8pK3PcrpLu/view?usp=sharing",
      },
    ],
  ];

  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <Navbar />
      <div className="h-screen relative">
        {portfolio.map((item, index) => {
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              <div className="h-screen w-full bg-navyblue absolute opacity-60 z-10"></div>
              <div className="relative">
                <img
                  src={item[0].image1}
                  alt="meeting"
                  className="w-full h-full object-cover absolute"
                />
                <div className="absolute flex flex-col justify-center items-center h-full md:h-screen z-20">
                  <div className="flex flex-col gap-y-7 mx-10 md:mx-0 md:w-3/4">
                    <h1 className="text-white text-mobile-mainheading md:text-mainheading font-georgia font-bold md:h-40">
                      {item[0].heading1}
                    </h1>
                    <p className="text-mobile-subheading md:text-subheading text-white md:h-44">
                      {item[0].subheading1}
                    </p>

                    <div>
                      <button onClick={()=>{handleButtonClick(item[0].url1)}} className="font-georgia font-bold hover:bg-violet hover:text-white bg-white text-navyblue px-3 py-2 items-center">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={item[1].image2}
                  alt="meeting"
                  className="w-full h-full object-cover absolute"
                />
                <div className="absolute flex flex-col justify-center items-center h-full md:h-screen z-20">
                  <div className="flex flex-col gap-y-7 mx-10  md:mx-0 md:w-3/4">
                    <h1 className="text-white text-mobile-mainheading md:text-mainheading font-georgia font-bold md:h-40">
                      {item[1].heading2}
                    </h1>
                    <p className="text-mobile-subheading md:text-subheading text-white md:h-44">
                      {item[1].subheading2}
                    </p>

                    <div>
                      <button onClick={()=>{handleButtonClick(item[1].url2)}} className="font-georgia font-bold hover:bg-violet hover:text-white bg-white text-navyblue px-3 py-2 items-center">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      <CenterFiller
        heading="Ready to Elevate Your Business with Global Expertise?"
        text="Let's discuss how we can tailor our services to your unique needs."
        buttontext="Book a Meeting Now"
      />
      <Footer />
      </div>
    </div>

  );
};
export default Portfolio;
