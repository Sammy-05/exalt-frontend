import LeftFiller from "../components/LeftFiller";
import RightFiller from "../components/RightFiller";


const Home = () => {
  return (
    <div className="">
      <LeftFiller
        heading="Your Partner for Global Outsourcing Excellence"
        // subheading="A place to learn and grow"
        text="Why Exalt Solutions? Because we understand the pulse of global business. Our expertise lies in harnessing the potential of the global south, offering cost-effective solutions without compromising on quality. With Exalt Solutions, experience seamless integration of international talent into your business processes."
        buttontext="Book a Call"
      />
      <RightFiller
        heading="Your Partner for Global Outsourcing Excellence"
        // subheading="A place to learn and grow"
        text="Why Exalt Solutions? Because we understand the pulse of global business. Our expertise lies in harnessing the potential of the global south, offering cost-effective solutions without compromising on quality. With Exalt Solutions, experience seamless integration of international talent into your business processes."
        buttontext="Book a Call"
      />

    </div>
  );
};

export default Home;
