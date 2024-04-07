import HalfPrimaryPanel from "../components/halfPrimaryPanel";
import author from "../assets/blogs/Faraz.jpg"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import blogsData from "../assets/blogsData.json";
import background from "../assets/Backgrounds/bg6-min.jpg";
import { useEffect, useState } from "react";

const Blog = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleBlockClicks = (blogID) => {
    window.location.href = `/individualBlog/${blogID}`;
  };

  return (
    
    <div>
      <Navbar />
      <HalfPrimaryPanel heading="Featured Insights" image={background} />
      <div
        className={`grid ${
          window.innerWidth > 768 ? "grid-cols-3 mx-16 py-16" : "grid-cols-1 mx-5"
        } `}
      >
        {blogsData.map((blog, index) => {
          const sentences = blog.displayText[0].split(/\.|\?|!/);
          
          const firstSentence = sentences[0].trim() + ". " + sentences[1].trim() + ".";
          return (
            <div
              key={index}
              className="flex flex-col mx-5 my-5 hover:cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out rounded-2xl bg-grey hover:bg-navyblue hover:text-white group text-navyblue drop-shadow-3xl"
              style={{ flex: "1 1 300px", marginBottom: "20px" }}
              onClick={() => handleBlockClicks(blog.blogID - 1)}
            >
              <div>
                <img
                  src={background}
                  className="w-full h-[250px] object-fill rounded-t-2xl"
                  alt=""
                />
              </div>
              <div className="mx-7 flex flex-col justify-between h-full">
                <div>
                  <div className="flex gap-x-8 pt-4">
                    <h1 className="text-violet group-hover:text-lightblue text-[22px] md:text-3xl font-georgia">
                      {blog.mainHeading}
                    </h1>
                  </div>
                  <div className="text-[16px] md:text-button font-thin pt-1">
                    <p>{blog.mainSubHeading}</p>
                  </div>
                  <div className="pt-5 md:pt-10 text-mobile-p md:text-[16px] flex-1">
                    <p>{firstSentence}</p>
                  </div>
                </div>
                <div>
                  <div className="pt-3 md:pt-10 text-navbarscroll">
                    <hr />
                  </div>
                  <div className="pt-3 pb-4 flex items-center">
                    <img className="w-1/12 rounded-full" src={author} alt="" />
                    <p className="text-[12px] md:text-[16px] pl-2">
                      {blog.author}
                    </p>

                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
