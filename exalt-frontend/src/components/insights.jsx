import blogPhoto1 from "../assets/blogPhoto1.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <div className=" bg-white w-full px-20 py-10">
      <div>
        <h1 className="text-mainheading font-georgia font-normal ">
          Insights and Updates
        </h1>
        <p className="font-roboto font-normal text-subheading mt-3 mb-10">
          Stay ahead of the curve with the latest trends and tips from our
          industry experts.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-20">
        {blogList.map((blog) => (
          <div className="w-full flex justify-center items-center">
            <div
              key={blog["blog number"]}
              className="flex flex-col text-white  bg-navyblue rounded-2xl"
            >
              <div className="w-full">
                <img
                  src={blogPhoto1}
                  alt="meeting"
                  className="w-full h-[300px]"
                />
              </div>
              <div className="px-10 py-5 flex flex-col gap-y-10">
                <h1 className="font-georgia font-normal text-heading ">
                  {blog.heading}
                </h1>
                <p className="font-roboto font-normal text-p ">{blog.blog}</p>
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
      <div className="flex justify-center pt-20">
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
