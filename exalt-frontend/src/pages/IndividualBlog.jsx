import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import blogData from "../assets/blogsData.json";
import { useParams } from "react-router-dom";
import TertiaryPanel from "../components/tertiaryPanel";
import background from "../assets/Backgrounds/bg4-min.jpg"
import CenterFiller from "../components/centerFiller";
import { useEffect } from "react";

const IndividualBlog = ({ props }) => {
  const { blogId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <TertiaryPanel
          heading={blogData[blogId]?.mainHeading}
          subheading={blogData[blogId]?.mainSubHeading}
          text={blogData[blogId]?.displayText}
          image={background}
        />
        <div className="py-10 md:py-20">
          {blogData[blogId]?.body?.map((bodyItem, index) => (
            <div
              key={index}
              className={`${"bg-white"} mx-10 md:px-20 flex flex-col gap-y-5 py-5 md:py-8 md:mx-60`}
            >
              <h1 className="font-georgia text-[24px] md:text-heading ">{bodyItem.bodyHeading}</h1>
              {bodyItem.text?.map((text) => (
                <p className="md:text-subheading text-mobile-button text-blogtext font-light">{text}</p>
              ))}
            </div>
          ))}
        </div>
        <CenterFiller
          heading={blogData[blogId]?.consultationHeading}
          text={blogData[blogId]?.consultationText}
          buttontext="Book a Meeting"
        />
        
      </div>

      <Footer />
    </div>
  );
};

export default IndividualBlog;
