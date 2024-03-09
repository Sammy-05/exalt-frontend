import LeftFiller from "../components/LeftFiller";
import RightFiller from "../components/RightFiller";
import PrimaryPanel from "../components/primaryPanel";
import SecondaryPanel from "../components/secondaryPanel";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Links from "../assets/links.json"

import pic1 from "../assets/about/pic1.jpg";
import pic2 from "../assets/about/pic2.jpg";
import pic3 from "../assets/about/pic3.jpg";
import pic4 from "../assets/about/pic4.jpg";
import pic5 from "../assets/about/pic5.jpg";


const About = () => {
  // useEffect(() => {
  //   const animateValue = (element, start, end, duration) => {
  //     let startTimestamp = null;
  //     const step = (timestamp) => {
  //       if (!startTimestamp) startTimestamp = timestamp;
  //       const progress = Math.min((timestamp - startTimestamp) / duration, 1);
  //       element.textContent = Math.floor(progress * (end - start) + start) + "+"; // Append plus sign
  //       if (progress < 1) {
  //         window.requestAnimationFrame(step);
  //       }
  //     };
  //     window.requestAnimationFrame(step);
  //   };

  //   const projectsCounter = document.getElementById("projectsCounter");
  //   const clientsCounter = document.getElementById("clientsCounter");
  //   const expertsCounter = document.getElementById("expertsCounter");
  //   const entriesCounter = document.getElementById("entriesCounter");

  //   animateValue(projectsCounter, 0, 50, 800);
  //   animateValue(clientsCounter, 0, 10, 800);
  //   animateValue(expertsCounter, 0, 5, 800);
  //   animateValue(entriesCounter, 0, 15, 800);
  // }, []);

  const projectsCounterRef = useRef(null);
  const clientsCounterRef = useRef(null);
  const expertsCounterRef = useRef(null);
  const entriesCounterRef = useRef(null);

  useEffect(() => {
    const animateValue = (element, start, end, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent =
          Math.floor(progress * (end - start) + start) + "+"; // Append plus sign
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    const options = {
      threshold: 0.5, // When 50% of the element is visible
    };

  
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateValue(
            entry.target,
            0,
            parseInt(entry.target.dataset.value),
            800
          );
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    if (projectsCounterRef.current)
      observer.observe(projectsCounterRef.current);
    if (clientsCounterRef.current) observer.observe(clientsCounterRef.current);
    if (expertsCounterRef.current) observer.observe(expertsCounterRef.current);
    if (entriesCounterRef.current) observer.observe(entriesCounterRef.current);

    return () => {
      observer.disconnect(); // Cleanup when component unmounts
    };
  }, []);

  const handleButtonClick = (url) => {
    // open the url in the new tab
    window.open(url, '_blank');
  };

  return (
    <div className="">
      <PrimaryPanel
        heading="Shaping the Future of Outsourcing"
        text="Empowerment Through Innovation, Integrity, and Collaboration"
        buttontext="Explore"
      />
      <SecondaryPanel
        heading="About Us?"
        text="Founded in 2020, Exalt Solutions has rapidly become a trusted outsourcing partner for businesses in the Middle East and the West. Specializing in market research, data analysis, and strategic business support, we've enabled numerous companies to successfully launch and expand in dynamic markets like UAE and Dubai. Our diverse team of 15 in-house professionals, supplemented by a vast network of part-time talent, brings expertise in data science, software and IT, finance, recruiting, and business development. We're driven by the vision of our founders, who recognized a unique opportunity to fill critical market gaps by providing high-quality services at a fraction of the cost of in-house employees.
        "
      />
      <div className="bg-navyblue h-screen flex flex-col justify-center gap-y-32">
        <div className="flex justify-center">
          <h1 className="font-georgia text-heading text-white">
            Milestones Of Success
          </h1>
        </div>
        <div className="flex items-center justify-evenly text-white">
          <div className="text-center">
            <p
              ref={projectsCounterRef}
              className="text-[66px] font-georgia"
              data-value="50"
            >
              0+
            </p>
            <p className="text-button font-thin">Successful Projects</p>
          </div>
          <div className="flex items-center justify-center w-2 h-64 border-l"></div>
          <div className="text-center">
            <p
              ref={clientsCounterRef}
              className="text-[66px] font-georgia"
              data-value="10"
            >
              0+
            </p>
            <p className="text-button font-thin">Global Clients</p>
          </div>
          <div className="flex items-center justify-center w-2 h-64 border-l"></div>
          <div className="text-center">
            <p
              ref={expertsCounterRef}
              className="text-[66px] font-georgia"
              data-value="5"
            >
              0+
            </p>
            <p className="text-button font-thin">In-House Experts</p>
          </div>
          <div className="flex items-center justify-center w-2 h-64 border-l"></div>
          <div className="text-center">
            <p
              ref={entriesCounterRef}
              className="text-[66px] font-georgia"
              data-value="15"
            >
              0+
            </p>
            <p className="text-button font-thin">Market Entries Facilitated</p>
          </div>
        </div>

        <div className="flex justify-center">
          <button onClick={() => handleButtonClick(Links.Calendly)} className="font-georgia font-bold hover:bg-violet bg-navyblue text-white px-5 rounded-xl py-2 flex border-2 border-white items-center">
            Start Your Journey With Us
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-white text-2xl ml-4"
            />
          </button>
        </div>
      </div>
      <LeftFiller
        heading="Cores Values"
        subheading="Rooted in Integrity, Driven by Innovation"
        text="Why Exalt Solutions? Because we understand the pulse of global business. Our expertise lies in harnessing the potential of the global south, offering cost-effective solutions without compromising on quality. With Exalt Solutions, experience seamless integration of international talent into your business processes."
        pageName="about"
        picName={pic1}
      />
      <RightFiller
        heading="Vision Statement"
        subheading="A Vision for Global Business Synergy"
        text="Our vision is to become a leading force in the outsourcing industry, seamlessly integrating businesses from diverse markets. We aspire to be the bridge that connects ambitions to realities, facilitating growth and success in new and flourishing markets."
        // buttontext="Book a Call"
        pageName="about"
        picName={pic2}
      />
      <LeftFiller
        heading="Our Mission"
        subheading="Empowering Global Businesses, One Project at a Time"
        text="Exalt Solutions is dedicated to empowering businesses with exceptional outsourcing services. From insightful market research to cutting-edge data analysis and comprehensive software solutions, we tailor each service to meet and exceed the unique demands of our clients."
        // buttontext="Book a Call"
        pageName="about"
        picName={pic3}
      />
      <RightFiller
        heading="Our Strategic Approach"
        subheading="Client-Centric, Transparent, and Efficient"
        text="Our approach is grounded in a deep understanding of our clients' needs. We embrace transparency and efficiency at every stage, ensuring a streamlined and satisfying experience from the initial engagement to project completion."
        buttontext="Unveil Our Process"
        pageName="about"
        picName={pic4}
        onclickFunction={"/process"}
      />
      <LeftFiller
        heading="Impact and Legacy"
        subheading="Creating Enduring Value and Relationships"
        text="Our journey is marked by numerous success stories, from aiding companies in establishing their foothold in the UAE and Dubai to long-term collaborations across various sectors. Our true impact lies in the enduring relationships and mutual growth we foster with our clients."
        buttontext="Book a Call"
        pageName="about"
        picName={pic5}
        onclickFunction="call"
      />
    </div>
  );
};

export default About;
