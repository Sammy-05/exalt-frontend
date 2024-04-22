import { useEffect } from 'react';
import HalfPrimaryPanel from '../components/halfPrimaryPanel';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import background from '../assets/Backgrounds/bg5-min.jpg';
import background1 from '../assets/Backgrounds/bg3-min.jpg';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {

  const [state, handleSubmit] = useForm('mvoedoez');

  
  useEffect(() => {
    if (state.succeeded) {
      alert('Your message has been sent. We will contact you shortly. Thank you!');
      for(const form of document.getElementsByTagName('form')) {
        form.reset();
      }
    }
  }, [state.succeeded]);

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
                      id="name"
                      type="text"
                      name="name"
                      placeholder=""
                      className="w-full px-4 py-3 bg-navyblue placeholder-white text-white border border-white bg-transparent"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <h1 className="text-p font-thin">
                      Email <span className="font-bold text-asterisk">*</span>
                    </h1>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder=""
                      className="w-full px-4 py-3 bg-navyblue placeholder-white text-white border border-white bg-transparent"
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                    
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <h1 className="text-p font-thin">Company Name</h1>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      placeholder=""
                      className="w-full px-4 py-3 bg-navyblue placeholder-white text-white border border-white bg-transparent"
                    />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <h1 className="text-p font-thin">
                      Message Inquiry{' '}
                      <span className="font-bold text-asterik">*</span>
                    </h1>
                    <textarea
                      id="message"
                      name="message"
                      placeholder=""
                      className="w-full px-4 py-2 bg-navyblue placeholder-white text-white h-32 border border-white bg-transparent"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
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
