import blogPhoto1 from '../assets/blogPhoto1.png';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import blogsData from '../assets/blogsData.json';

import Links from '../assets/links.json';

const Insights = () => {
  const handleNavigate = () => {
    window.open(Links.Calendly, '_blank');
  };

  const truncateText = (text, maxLength) => {
    console.log(text);
    console.log('type of text: ', typeof text);
    const words = text.split('.');
    const truncatedWords = words.slice(0, maxLength);
    return truncatedWords.join(' ') + '...';
  };

  const handleBlockClicks = (blogId) => {
    window.open(`/individualBlog/${blogId}`, '_blank');
  };

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

      <div className="grid grid-cols-1 md:grid-cols-2">
        {blogsData.slice(0, 2).map((blog, index) => (
          <div
            key={index}
            className="flex flex-col md:mx-5 my-5 hover:cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out rounded-2xl bg-white hover:bg-navyblue hover:text-white group text-navyblue drop-shadow-3xl"
            style={{ flex: '1 1 300px', marginBottom: '20px' }}
            onClick={() => handleBlockClicks(blog.blogID - 1)}
          >
            <div>
              <img
                src={blogPhoto1}
                className="w-full h-[250px] object-fill rounded-t-2xl"
                alt=""
              />
            </div>
            <div className="mx-4 md:mx-7 flex flex-col justify-between h-full">
              <div>
                <div className="flex gap-x-8 pt-4">
                  <h1 className="text-violet group-hover:text-lightblue text-[22px] md:text-3xl font-georgia">
                    {blog.mainHeading}
                  </h1>
                </div>
                <div className="text-[16px] md:text-button font-light pt-1">
                  <p>{blog.mainSubHeading}</p>
                </div>
                <div className="pt-5 md:pt-10 text-mobile-p md:text-[16px] flex-1">
                  <p>{truncateText(blog.displayText[0], 3)}</p>
                </div>
              </div>
              <div className="w-full flex justify-end items-end pt-5 mb-3">
                <div className="group">
                  <button className="font-georgia font-bold group-hover:text-lightblue text-mobile-button md:text-button text-navyblue flex justify-center items-center">
                    Read More
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-navyblue group-hover:text-lightblue ml-2 md:ml-4"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center  md:pt-10">
        <div className="mt-10 md:mt-20 ">
          <div className="">
            <button
              onClick={handleNavigate}
              className="font-georgia font-bold text-mobile-p md:text-base hover:border-navyblue  rounded-xl px-3 md:px-5 py-2 md:py-3 flex border-2 border-white items-center bg-navyblue hover:bg-white transition-colors group"
            >
              <div className="text-mobile-p md:text-button flex items-center group-hover:text-navyblue  text-white">
                Start Your Journey With Us
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-white md:text-2xl ml-4 group-hover:text-navyblue"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
