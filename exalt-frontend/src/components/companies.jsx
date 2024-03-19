import companies from '../assets/companies.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import logo1 from '../assets/Home/logo_1.png';
import logo2 from '../assets/Home/logo_2.png';
import logo3 from '../assets/Home/logo_3.png';
import logo4 from '../assets/Home/logo_4.png';

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
  const logos = [logo1, logo2, logo3, logo4];

  return (
    <div className="py-10 bg-white px-20">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div>
            <div  className="w-full h-44 flex  items-center">
              <img src={logo} alt="Company Logo" className="w-[200px]" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Companies;
