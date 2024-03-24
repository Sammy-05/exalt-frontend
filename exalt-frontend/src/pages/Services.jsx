import LeftFiller from "../components/LeftFiller";
import CenterFiller from "../components/centerFiller";
import ServicesPrimaryPanel from "../components/servicesPrimaryPanel";
import ServicesSecondaryPanel from "../components/servicesSecondaryPanel copy";
import ServicesMembersPanel from "../components/servicesMembersPanel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PrimaryPanel from "../components/primaryPanel";
import pic11 from "../assets/services/pic11.jpg";

const Services = () => {
  return (
    <div className="">
      <Navbar />
      <PrimaryPanel
        heading="Our Services - Tailored to Your Business Needs"
        text="Discover a Range of Solutions from Global Experts."
        buttontext="Explore"
      />

      {/* <ServicesSecondaryPanel
        heading="Diverse Outsourcing Solutions for Global Challenges"
        text="Founded in 2020, Exalt Solutions has rapidly become a trusted outsourcing partner for businesses in the Middle East and the West. Specializing in market research, data analysis, and strategic business support, we've enabled numerous companies to successfully launch and expand in dynamic markets like UAE and Dubai. Our diverse team of 15 in-house professionals, supplemented by a vast network of part-time talent, brings expertise in data science, software and IT, finance, recruiting, and business development. We're driven by the vision of our founders, who recognized a unique opportunity to fill critical market gaps by providing high-quality services at a fraction of the cost of in-house employees."
      /> */}

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
