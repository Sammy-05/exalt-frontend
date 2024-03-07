import background from '../assets/homeBackground3.jpg';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BlogPrimaryPanel = (props) => {
  const { heading } = props;

  return (
    <div className=" relative w-full ">
      <div className=" w-full bg-navyblue absolute "></div>
      <img
        src={background}
        alt="meeting"
        className="w-full h-[600px] object-cover "
      />
      <div className="mx-20 absolute inset-0 flex flex-col justify-center items-center text-white text-left font-bold">
        <div>
          <div className="font-georgia text-9xl  leading-normal">
            <h1>{heading}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPrimaryPanel;
