import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import blogData from "../assets/blogsData.json";
import { useParams } from "react-router-dom";
import TertiaryPanel from "../components/tertiaryPanel";
import background from "../assets/Backgrounds/bg4.jpg"
import CenterFiller from "../components/centerFiller";
import LeftFiller from "../components/LeftFiller";
import pic3 from "../assets/about/pic3.jpg";
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
        <div className="py-20">
          {blogData[blogId]?.body?.map((bodyItem, index) => (
            <div
              key={index}
              className={`${"bg-white"} px-20 flex flex-col gap-y-5 py-8 mx-40`}
            >
              <h1 className="font-georgia text-4xl ">{bodyItem.bodyHeading}</h1>
              {bodyItem.text?.map((text) => (
                <p className="text-xl ">{text}</p>
              ))}
            </div>
          ))}
        </div>
        <CenterFiller
          heading={blogData[blogId]?.consultationHeading}
          text={blogData[blogId]?.consultationText}
          buttontext="Book a Meeting Now"
        />
        {/* {blogData[blogId]?.author ? (
          <LeftFiller
            heading={blogData[blogId]?.author}
            subheading={blogData[blogId]["Upwork Profile Link"]}
            text={blogData[blogId]?.authortext}
            picName={pic3}
            pageName="blog"
          />
        ) : (
          []
        )} */}
      </div>

      <Footer />
    </div>
  );
};

export default IndividualBlog;
