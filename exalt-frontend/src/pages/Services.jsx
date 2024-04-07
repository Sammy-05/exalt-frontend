import LeftFiller from "../components/LeftFiller";
import CenterFiller from "../components/centerFiller";
import ServicesMembersPanel from "../components/servicesMembersPanel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PrimaryPanel from "../components/primaryPanel";
import pic11 from "../assets/services/pic11.jpg";
import background from "../assets/Backgrounds/bg4-min.jpg";


const Services = () => {
  return (
    <div className="">
      <Navbar />
      <PrimaryPanel
        heading="Our Services - Tailored to Your Business Needs"
        text="Discover a Range of Solutions from Global Experts."
        buttontext="Explore"
        image={background}
      />

      <ServicesMembersPanel />
      <LeftFiller
        heading="Tailored Services for Unique Business Requirements"
        text="Don’t see exactly what you need? At Exalt Solutions, we pride ourselves on flexibility and customization. Reach out to us to discuss how we can tailor our services to meet your unique business challenges."
        buttontext="Book a Call"
        pageName="services"
        picName={pic11}
        onclickFunction="call"
      />

      <div><br /><br /></div>
      <CenterFiller
        heading="Empower Your Business with Expert Outsourcing"
        text="Contact us today to learn more about how we can support your growth."
        buttontext="Get Started"
      />
      <Footer />
    </div>
  );
};

export default Services;
