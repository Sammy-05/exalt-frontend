import TertiaryPanel from "../components/tertiaryPanel";
import LeftFiller from "../components/LeftFiller";
import RightFiller from "../components/RightFiller";
import CenterFiller from "../components/centerFiller";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import pic1 from "../assets/process/pic1.jpg"
import pic2 from "../assets/process/pic2.jpg"
import pic3 from "../assets/process/pic3.jpg"
import pic4 from "../assets/process/pic4.jpg"
import pic5 from "../assets/process/pic5.jpg"
import pic6 from "../assets/process/pic6.jpg"
import pic7 from "../assets/process/pic7.jpg"



const Process = () => {

  return (
    <div>
      <Navbar />
      <TertiaryPanel
        heading="Streamlined Process for Superior Results"
        subheading="Efficient, Transparent, and Tailored to Your Needs"
        text="At Exalt Solutions, we pride ourselves on a seamless and client-centric approach. From the initial meeting to the final delivery, our process is designed to ensure efficiency, transparency, and satisfaction."
        buttontext="Explore"
      />
      <div>
        <h1 className="text-heading text-navyblue flex font-georgia justify-center py-10">
          Here Is How We Work
        </h1>
      </div>
      <LeftFiller
        heading="Book a Meeting"
        text="Why Exalt Solutions? Because we understand the pulse of global business. Our expertise lies in harnessing the potential of the global south, offering cost-effective solutions without compromising on quality. With Exalt Solutions, experience seamless integration of international talent into your business processes."
        pageName="process"
        picName={pic1}

      />
      <RightFiller
        heading="Discuss and Tailor Solutions"
        text="Based on our discussion, we craft a solution uniquely tailored to your business. We consider all aspects of your project to ensure our approach aligns perfectly with your goals."
        pageName="process"
        picName={pic2}
      />
      <LeftFiller
        heading="Receive a Custom Quote"
        text="We provide a clear and detailed quote, outlining the project hours and time estimate. Our pricing is transparent, with no hidden fees, ensuring you know exactly what to expect."
        pageName="process"
        picName={pic3}
      />
      <RightFiller
        heading="Secure and Simple Payment"
        text="To initiate the project, we collect 50% of the payment upfront. This ensures a commitment to excellence from both sides and smooth progression of the project."
        pageName="process"
        picName={pic4}
      />
      <LeftFiller
        heading="Timely Delivery"
        text="We pride ourselves on timely delivery. Upon completion of the project, we collect the remaining 50% of the payment, ensuring your satisfaction with the final outcome."
        pageName="process"
        picName={pic5}
      />
      <div>
        <h1 className="text-heading text-navyblue flex font-georgia justify-center py-10">
          Recruiting Process at Exalt Solutions
        </h1>
      </div>
      <LeftFiller
        heading="Direct Hiring"
        text="Our direct hiring service offers a simple, one-time fee structure for full-time talent acquisition. We identify and refer qualified candidates, allowing you to seamlessly integrate top-tier professionals into your permanent team. We only charge compensation on successful hiring of candidates that we refer, no upfront charges!"
        pageName="process"
        picName={pic6}
      />
      <RightFiller
        heading="Employee Management Service"
        text="Our comprehensive service goes beyond recruitment; we manage your hires at our facilities. This includes equipping them and handling all HR tasks. You pay a fixed fee plus the employee's salary, offering a streamlined, cost-effective solution to expand your workforce without additional overhead."
        pageName="process"
        picName={pic7}
      />
      <CenterFiller
        heading="Committed to your Success"
        text="At every step, Exalt Solutions is committed to your success. We combine our expertise with a deep understanding of your needs to deliver solutions that truly make a difference. Ready to start? Let’s talk about how we can help your business reach new heights."
        buttontext="Book a Meeting Now"
        pageName="process"
      />
        <Footer />
    </div>
  );
};

export default Process;
