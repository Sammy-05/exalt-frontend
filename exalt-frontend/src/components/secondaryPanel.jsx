import homeBackground2 from "../assets/homeBackground2.png";

const SecondaryPanel = (props) => {
  const { heading, text } = props;

  return (
    <div className="bg-white w-full text-navyblue flex text-left">
      <div className="w-1/2 h-[520px] flex justify-center items-center">
        <img src={homeBackground2} alt="meeting" className="h-4/5"/>
      </div>
      <div className="w-1/2 flex items-center ">
        <div className="py-18 w-5/6">
          <div className="font-georgia text-mainheading">
            <h1>{heading}</h1>
          </div>
          <div className="pt-12 text-p">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryPanel;
