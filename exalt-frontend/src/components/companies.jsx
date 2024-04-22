import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo1 from '../assets/Home/logo1.png';
import logo2 from '../assets/Home/logo2.png';
import logo3 from '../assets/Home/logo3.png';
import logo4 from '../assets/Home/logo4.png';
import logo5 from '../assets/Home/logo5.png';
import logo7 from '../assets/Home/logo7.png';
import logo10 from '../assets/Home/logo10.png';
import logo11 from '../assets/Home/logo11.png';
import logo12 from '../assets/Home/logo12.png'
import './imageSlider.css';

const Companies = () => {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo7,
    logo10,
    logo11,
    logo12,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo7,
    logo10,
    logo11,
    logo12,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo7,
    logo10,
    logo11,
    logo12,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo7,
    logo10,
    logo11,
    logo12,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo7,
    logo10,
    logo11,
    logo12,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo7,
    logo10,
    logo11,
    logo12,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo7,
    logo10,
    logo11,
    logo12,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo7,
    logo10,
    logo11,
    logo12,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo7,
    logo10,
    logo11,
    logo12,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo7,
    logo10,
    logo11,
    logo12,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo7,
    logo10,
    logo11,
    logo12,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo7,
    logo10,
    logo11,
    logo12,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo7,
    logo10,
    logo11,
    logo12,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo7,
    logo10,
    logo11,
    logo12,
  ];

  return (
    <div>
      <div className="slider">
        <div className="slide-track">
          {logos.map((logo) => {
            return (
              <div className="slide">
                <img src={logo} alt="Img" />
              </div>
            );
          })}
          
        </div>
      </div>
    </div>
  );
};

export default Companies;
