import LeftFiller from '../components/LeftFiller';
import RightFiller from '../components/RightFiller';
import CenterFiller from '../components/centerFiller';
import Companies from '../components/companies';
import Insights from '../components/insights';
import MembersPanel from '../components/membersPanel';
import PrimaryPanel from '../components/primaryPanel';
import SecondaryPanel from '../components/secondaryPanel';
import ServicesPanel from '../components/servicesPanel';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

import pic1 from "../assets/Home/pic1.jpg";
import pic2 from "../assets/Home/pic2.jpg";
import homeBackground5 from "../assets/homeBackground5.jpg";
import background from '../assets/homeBackground3.jpg';


const Home = () => {
  return (
    <div className="">
      <Navbar />
      <PrimaryPanel
        heading="Empowering Your Business with Global Talent"
        text="Outsource with Excellence, Deliver with Confidence."
        buttontext="Explore"
        image={background}
      />
      
      {/* <CenterFiller
        heading="Welcome to Exalt Solutions"
        text="At Exalt Solutions, we bridge the gap between dynamic business needs and exceptional global talent. Specializing in outsourcing services, we work with top professionals from the global south to fuel your international market success."
        // buttontext="Get Started"
      /> */}
      <SecondaryPanel
        heading="Welcome to Exalt Solutions"
        text="At Exalt Solutions, we bridge the gap between dynamic business needs and exceptional global talent. Specializing in outsourcing services, we work with top professionals from the global south to fuel your international market success."
      />
      <ServicesPanel />
      <div className='bg-white'>
        <h1 className="text-mobile-heading md:text-mainheading text-navyblue flex font-georgia justify-center py-10 ">
          Client Testimonials
        </h1>
      </div>
      <MembersPanel />
      <LeftFiller
        heading="Your Partner for Global Outsourcing Excellence"
        // subheading="A place to learn and grow"
        text="Why Exalt Solutions? Because we understand the pulse of global business. Our expertise lies in harnessing the potential of the global south, offering cost-effective solutions without compromising on quality."
        text2="With Exalt Solutions, experience seamless integration of international talent into your business processes."
        buttontext="Book a Call"
        pageName="home"
        picName={pic1}
        onclickFunction="call"

      />
      <Companies />
      <RightFiller
        heading="Dedicated to Delivering Excellence"
        // subheading="A place to learn and grow"
        text="Quality and reliability are the cornerstones of our service. At Exalt Solutions, we are committed to delivering excellence in every project, ensuring your business objectives are met with precision and professionalism."
        buttontext="Book a Call"
        pageName="home"
        picName={pic2}
        onclickFunction="call"

        
      />
      <Insights/>
      <CenterFiller
        heading="Ready to Elevate Your Business with Global Expertise?"
        text="Let's discuss how we can tailor our services to your unique needs."
        buttontext="Get Started"
      />
      <Footer />

    </div>
  );
};

export default Home;
