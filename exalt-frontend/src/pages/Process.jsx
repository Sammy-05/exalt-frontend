import TertiaryPanel from "../components/tertiaryPanel";
import LeftFiller from "../components/LeftFiller";
import RightFiller from "../components/RightFiller";
import CenterFiller from "../components/centerFiller";

const Process = () => {
  return (
    <div>
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
        pictureHeight="400"
      />
      <RightFiller
        heading="Discuss and Tailor Solutions"
        text="Based on our discussion, we craft a solution uniquely tailored to your business. We consider all aspects of your project to ensure our approach aligns perfectly with your goals."
        pictureHeight="400"
      />
      <LeftFiller
        heading="Receive a Custom Quote"
        text="We provide a clear and detailed quote, outlining the project hours and time estimate. Our pricing is transparent, with no hidden fees, ensuring you know exactly what to expect."
        pictureHeight="400"
      />
      <RightFiller
        heading="Secure and Simple Payment"
        text="To initiate the project, we collect 50% of the payment upfront. This ensures a commitment to excellence from both sides and smooth progression of the project."
        pictureHeight="400"
      />
      <LeftFiller
        heading="Timely Delivery"
        text="We pride ourselves on timely delivery. Upon completion of the project, we collect the remaining 50% of the payment, ensuring your satisfaction with the final outcome."
        pictureHeight="400"
      />
      <div>
        <h1 className="text-heading text-navyblue flex font-georgia justify-center py-10">
          Recruiting Process at Exalt Solutions
        </h1>
      </div>
      <LeftFiller
        heading="Direct Hiring"
        text="Our direct hiring service offers a simple, one-time fee structure for full-time talent acquisition. We identify and refer qualified candidates, allowing you to seamlessly integrate top-tier professionals into your permanent team. We only charge compensation on successful hiring of candidates that we refer, no upfront charges!"
        pictureHeight="400"
      />
      <RightFiller
        heading="Employee Management Service"
        text="Our comprehensive service goes beyond recruitment; we manage your hires at our facilities. This includes equipping them and handling all HR tasks. You pay a fixed fee plus the employee's salary, offering a streamlined, cost-effective solution to expand your workforce without additional overhead."
        pictureHeight="400"
      />
      <CenterFiller
        heading="Empower Your Business with Expert Outsourcing"
        text="Contact us today to learn more about how we can support your growth."
        buttontext="Get Started"
        pictureHeight="400"
      />
    </div>
  );
};

export default Process;
