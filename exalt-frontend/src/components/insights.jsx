import blogPhoto1 from "../assets/blogPhoto1.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import blogsData from '../assets/blogsData.json';

const blogList = [
  {
    "blog number": 1,
    heading: "Blog 1 Name",
    blog: "Why Exalt Solutions? Because we understand the pulse of global business. Our expertise lies in harnessing the potential of the global south, offering cost-effective solutions without compromising on quality.",
  },
  {
    "blog number": 2,
    heading: "Blog 2 Name",
    blog: "Why Exalt Solutions? Because we understand the pulse of global business. Our expertise lies in harnessing the potential of the global south, offering cost-effective solutions without compromising on quality.",
  },
];

const Insights = () => {
  //   const { heading, text, buttontext } = props;

  return (
    <div className=" bg-white w-full px-10 md:px-20 py-5 md:py-10">
      <div>
        <h1 className="text-mobile-mainheading md:text-mainheading font-georgia font-normal ">
          Insights and Updates
        </h1>
        <p className="font-roboto font-normal text-mobile-subheading md:text-subheading mt-3 mb-10">
          Stay ahead of the curve with the latest trends and tips from our
          industry experts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
        {blogsData.slice(0,2).map((blog) => (
          <div className="w-full flex justify-center items-center">
            <div
              key={blog["blog number"]}
              className="flex flex-col text-white my-5 bg-navyblue rounded-2xl"
            >
              <div className="w-full">
                <img
                  src={blogPhoto1}
                  alt="meeting"
                  className="w-full h-[200px] md:h-[300px] rounded-2xl"
                />
              </div>
              <div className="px-5 md:px-10 py-5 flex flex-col gap-y-10">
                <h1 className="font-georgia font-normal text-mobile-heading  md:text-heading ">
                  {blog.mainHeading}
                </h1>
                <h2 className="font-roboto font-normal text-mobile-subheading md:text-subheading ">{blog.mainSubHeading}</h2>
                <p className="font-roboto font-normal text-mobile-p md:text-p  h-48 ">{blog.displayText}</p>
              </div>
              <div className="w-full flex justify-end items-center pt-5 mb-3">
                <div className="group">
                  <button className="font-georgia font-bold group-hover:text-violet text-button text-white px-5 flex justify-center items-center">
                    Read More
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-white group-hover:text-violet ml-4"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="w-full flex justify-center pt-10">
        <button className="text-3xl font-georgia font-bold hover:bg-violet hover:text-white bg-white text-violet px-5 rounded-xl py-2 flex border-2 border-violet items-center">
          Visit Our Blog
          <FontAwesomeIcon icon={faArrowRight} className=" ml-4" />
        </button>
      </div> */}
      <div className="flex justify-center pt-10 md:pt-20">
          <button className="font-georgia font-bold hover:bg-violet bg-navyblue text-white px-5 rounded-xl py-2 flex border-2 border-white items-center">
            Start Your Journey With Us
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-white text-2xl ml-4"
            />
          </button>
        </div>
    </div>
  );
};

export default Insights;
