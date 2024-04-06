import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import logo1 from '../assets/Home/logo1.png';
import logo2 from '../assets/Home/logo2.png';
import logo3 from '../assets/Home/logo3.png';
import logo4 from '../assets/Home/logo4.png';
import logo5 from '../assets/Home/logo5.png';
import logo6 from '../assets/Home/logo6.png';
import logo7 from '../assets/Home/logo7.png';
import logo8 from '../assets/Home/logo8.png';
import logo9 from '../assets/Home/logo9.png';
import logo10 from '../assets/Home/logo10.png';
import logo11 from '../assets/Home/logo11.png';


const Companies = () => {
  //   const { heading, text, buttontext } = props;
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const logos = [logo1, logo2, logo3, logo4, logo5, logo7, logo10, logo11];

  return (
    <div className="py-10 bg-white px-10 md:px-20">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div>
            <div  className="w-full h-44 flex  items-center justify-center">
              <img src={logo} alt="Company Logo" className="w-[210px]" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Companies;
