import { useState } from "react";
import HalfPrimaryPanel from "../components/halfPrimaryPanel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import background from "../assets/Backgrounds/bg5-min.jpg";
import background1 from "../assets/Backgrounds/bg3-min.jpg";




const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const emailAddress = ["faraz.zafar@exaltsolutions.co","info@exaltsolutions.co"]
  const emailSubject = "Exalt Website Contact";

  const handleSubmit = (e) => {
    e.preventDefault();
    let messageBody = "Dear Sir/Ma'am,\n\n";
    messageBody += `My name is ${formData.name}`;
    // messageBody += `Email: ${formData.email}\n`;
    if (formData.company) {
      messageBody += ` and I am from ${formData.company}.\n\n`;
    }
    else
    {
      messageBody += `.\n\n`;
    }
    messageBody += `${formData.message}`;
  
    messageBody += "\n\nSincerely,\n";
    messageBody += `${formData.name}`;
  
    const mailtoLink = `mailto:${emailAddress.join(",")}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(messageBody)}`;
  
    window.location.href = mailtoLink;
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <Navbar />
      <HalfPrimaryPanel
        heading="Get in Touch with Exalt Solutions"
        text="We’re Here to Answer Your Questions and Start Your Journey"
        image={background}
      />

      <div className="relative w-full">
        <img
          src={background1}
          alt="meeting"
          className="w-full h-screen object-cover absolute"
        />
        <div className="md:w-1/3 mx-10 md:ml-48 h-screen bg-navyblue relative opacity-90">
          <div className="absolute inset-0 flex flex-col gap-y-10 justify-center ml-8 md:ml-16 text-white text-left">
            <div>
              <div className="font-georgia text-heading md:text-6xl pb-14">
                <h1>Contact Us</h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-y-5 w-4/5">
                  <div className="flex flex-col gap-y-2">
                    <h1 className="text-p font-thin">
                      Name <span className="font-bold text-asterik">*</span>
                    </h1>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder=""
                      className="w-full px-4 py-3 bg-navyblue placeholder-white text-white border border-white bg-transparent" // Added bg-transparent class
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <h1 className="text-p font-thin">
                      Email <span className="font-bold text-asterisk">*</span>
                    </h1>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=""
                      className="w-full px-4 py-3 bg-navyblue placeholder-white text-white border border-white bg-transparent" // Added bg-transparent class
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <h1 className="text-p font-thin">Company Name</h1>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder=""
                      className="w-full px-4 py-3 bg-navyblue placeholder-white text-white border border-white bg-transparent" // Added bg-transparent class
                    />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <h1 className="text-p font-thin">
                      Message Inquiry{" "}
                      <span className="font-bold text-asterik">*</span>
                    </h1>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder=""
                      className="w-full px-4 py-2 bg-navyblue placeholder-white text-white h-32 border border-white bg-transparent" // Added bg-transparent class
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-white text-navyblue font-bold py-2 px-4 hover:bg-violet hover:text-white"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
