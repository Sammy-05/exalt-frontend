// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import servicePhoto from '../assets/servicePhoto.png';
// import HalfPrimaryPanel from '../components/halfPrimaryPanel';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// import blogsData from '../assets/blogsData.json';


// import { Link } from 'react-router-dom';

// const Blog = () => {
//   const blogs = [
//     [
//       {
//         heading1: 'The Outsourcing Boom',
//         subheading1: 'How Businesses are Thriving with Global Talent',
//         photo1: servicePhoto,
//         text1:
//           'In the age of information, data is the new currency. In every gigabyte of data, there lies a story waiting to be told, insights waiting to be discovered, and strategies waiting to be formulated. Data analysis, the process of inspecting, cleansing, transforming, and modeling data, has become a cornerstone in the decision-making process of modern businesses.',
//       },
//       {
//         heading2: 'The Outsourcing Boom',
//         subheading2: 'How Businesses are Thriving with Global Talent',
//         photo2: servicePhoto,
//         text2:
//           'In the age of information, data is the new currency. In every gigabyte of data, there lies a story waiting to be told, insights waiting to be discovered, and strategies waiting to be formulated. Data analysis, the process of inspecting, cleansing, transforming, and modeling data, has become a cornerstone in the decision-making process of modern businesses.',
//       },
//       {
//         heading3: 'The Outsourcing Boom',
//         subheading3: 'How Businesses are Thriving with Global Talent',
//         photo3: servicePhoto,
//         text3:
//           'In the age of information, data is the new currency. In every gigabyte of data, there lies a story waiting to be told, insights waiting to be discovered, and strategies waiting to be formulated. Data analysis, the process of inspecting, cleansing, transforming, and modeling data, has become a cornerstone in the decision-making process of modern businesses.',
//       },
//       {
//         heading4: 'The Outsourcing Boom',
//         subheading4: 'How Businesses are Thriving with Global Talent',
//         photo4: servicePhoto,
//         text4:
//           'In the age of information, data is the new currency. In every gigabyte of data, there lies a story waiting to be told, insights waiting to be discovered, and strategies waiting to be formulated. Data analysis, the process of inspecting, cleansing, transforming, and modeling data, has become a cornerstone in the decision-making process of modern businesses.',
//       },
//     ],
//   ];

//   return (
//     <div>
//       <Navbar />
//       <HalfPrimaryPanel heading="Featured Insights" />

//       {blogsData.map((blog, index) => {
//         return (
//           <div>
//             <div className="grid grid-cols-2">
//               <Link to={`/individualBlog/0`}>
//                 <div className="col-span-1 bg-navyblue text-white">
//                   <div className="mx-20 py-20">
//                     <div className="">
//                       <img
//                         className="w-full h-[250px] object-fill"
//                         src={blog[0].photo1}
//                         alt=""
//                       />
//                     </div>
//                     <div className="flex items-center gap-x-8 pt-4">
//                       <h1 className="text-4xl font-georgia">
//                         {blog[0].heading1}
//                       </h1>
//                       <FontAwesomeIcon
//                         className="text-3xl"
//                         icon={faArrowRight}
//                       />
//                     </div>
//                     <div className="text-subheading font-thin pt-1">
//                       <p>{blog[0].subheading1}</p>
//                     </div>
//                     <div className="pt-10 text-p">
//                       <p>{blog[0].text1}</p>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//               <Link to={`/individualBlog/1`}>
//                 <div className="col-span-1 bg-white text-navyblue">
//                   <div className="mx-20 py-20">
//                     <div className="">
//                       <img
//                         className="w-full h-[250px] object-fill"
//                         src={blog[1].photo2}
//                         alt=""
//                       />
//                     </div>
//                     <div className="flex items-center gap-x-8 pt-4">
//                       <h1 className="text-4xl font-georgia">
//                         {blog[1].heading2}
//                       </h1>
//                       <FontAwesomeIcon
//                         className="text-3xl"
//                         icon={faArrowRight}
//                       />
//                     </div>
//                     <div className="text-subheading font-thin pt-1">
//                       <p>{blog[1].subheading2}</p>
//                     </div>
//                     <div className="pt-10 text-p">
//                       <p>{blog[1].text2}</p>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//             <div className="grid grid-cols-2">
//               <Link to={`/individualBlog/2`}>
//                 <div className="col-span-1 bg-white text-navyblue  ">
//                   <div className="mx-20 py-20">
//                     <div className="">
//                       <img
//                         className="w-full h-[250px] object-fill"
//                         src={blog[2].photo3}
//                         alt=""
//                       />
//                     </div>
//                     <div className="flex items-center gap-x-8 pt-4">
//                       <h1 className="text-4xl font-georgia">
//                         {blog[2].heading3}
//                       </h1>
//                       <FontAwesomeIcon
//                         className="text-3xl"
//                         icon={faArrowRight}
//                       />
//                     </div>
//                     <div className="text-subheading font-thin pt-1">
//                       <p>{blog[2].subheading3}</p>
//                     </div>
//                     <div className="pt-10 text-p">
//                       <p>{blog[2].text3}</p>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//               <Link to={`/individualBlog/3`}>
//                 <div className="col-span-1 bg-navyblue text-white">
//                   <div className="mx-20 py-20">
//                     <div className="">
//                       <img
//                         className="w-full h-[250px] object-fill"
//                         src={blog[3].photo4}
//                         alt=""
//                       />
//                     </div>
//                     <div className="flex items-center gap-x-8 pt-4">
//                       <h1 className="text-4xl font-georgia">
//                         {blog[3].heading4}
//                       </h1>
//                       <FontAwesomeIcon
//                         className="text-3xl"
//                         icon={faArrowRight}
//                       />
//                     </div>
//                     <div className="text-subheading font-thin pt-1">
//                       <p>{blog[3].subheading4}</p>
//                     </div>
//                     <div className="pt-10 text-p">
//                       <p>{blog[3].text4}</p>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         );
//       })}
//       <Footer />
//     </div>
//   );
// };

// export default Blog;


import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import servicePhoto from '../assets/servicePhoto.png';
import HalfPrimaryPanel from '../components/halfPrimaryPanel';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import blogsData from '../assets/blogsData.json';

const Blog = () => {

  return (
    <div>
      <Navbar />
      <HalfPrimaryPanel heading="Featured Insights" />

      <div className="grid grid-cols-2">
        {blogsData.map((blog, index) => (
          <Link key={index} to={`/individualBlog/${blog.blogID-1}`}>
            <div className={`h-screen col-span-1 ${index % 3 === 0 || index % 3 === 3 || index % 3 === 4 ? 'bg-navyblue text-white' : 'bg-white text-navyblue'}`}>
              <div className="mx-20 py-20">
                <div className="">
                  <img
                    className="w-full h-[250px] object-fill"
                    src={servicePhoto}
                    alt=""
                  />
                </div>
                <div className="flex items-center gap-x-8 pt-4">
                  <h1 className="text-4xl font-georgia">
                    {blog.mainHeading}
                  </h1>
                  <FontAwesomeIcon
                    className="text-3xl"
                    icon={faArrowRight}
                  />
                </div>
                <div className="text-subheading font-thin pt-1">
                  <p>{blog.mainSubHeading}</p>
                </div>
                <div className="pt-10 text-p">
                  <p>{blog.displayText[0]}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
