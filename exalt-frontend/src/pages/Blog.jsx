import HalfPrimaryPanel from "../components/halfPrimaryPanel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import blogsData from "../assets/blogsData.json";
import background from "../assets/Backgrounds/bg6-min.jpg";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Faraz from "../assets/blogs/Faraz.jpg"
import Huzaifa from "../assets/blogs/Huzaifa.jpg"
import Imran from "../assets/blogs/Imran.jpg"
import Taha from "../assets/blogs/Taha.jpg"

import pic1 from "../assets/blogs/pic1.jpg"
import pic2 from "../assets/blogs/pic2.jpg"
import pic3 from "../assets/blogs/pic3.jpg"
import pic4 from "../assets/blogs/pic4.jpg"
import pic5 from "../assets/blogs/pic5.jpg"
import pic6 from "../assets/blogs/pic6.jpg"
import pic7 from "../assets/blogs/pic7.jpg"
import pic8 from "../assets/blogs/pic8.jpg"
import pic9 from "../assets/blogs/pic9.jpg"


const Blog = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [blogs, setBlogs] = useState([]);

  const AuthorPics = [
    { "Faraz Zafar" : Faraz },
    { "Huzaifa Imran" : Huzaifa },
    { "Imran Anwar" : Imran },
    { "Taha Abid" : Taha }
  ];

  const Background = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
    pic9
  ];

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect(() => {
  //   axios.get("http://localhost:3001/blogs").then((response) => {
  //     console.log(response.data);
  //     setBlogs(response.data);
  //   });
  // }, []);

  
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
          const sentences = blog.Display_Text[0].split(/\.|\?|!/);
          
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
                  src={Background[blog.blogID - 1]}
                  className="w-full h-[250px] object-cover rounded-t-2xl"
                  alt=""
                />
              </div>
              <div className="mx-7 flex flex-col justify-between h-full">
                <div>
                  <div className="flex gap-x-8 pt-4">
                    <h1 className="text-violet group-hover:text-lightblue text-[22px] md:text-3xl font-georgia">
                      {blog.Main_Heading}
                    </h1>
                  </div>
                  <div className="text-[16px] md:text-button font-thin pt-1">
                    <p>{blog.Sub_Heading}</p>
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
                    <img className="w-1/12 rounded-full" src={AuthorPics.find(author => Object.keys(author)[0] === blog.Author_Name)[blog.Author_Name]} alt="" />
                    <p className="text-[12px] md:text-[16px] pl-2">
                      {blog.Author_Name}
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
