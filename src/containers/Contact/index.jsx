import React, { useState } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import "./Contact.scss";
import axios from "axios";
import { useSnackbar } from "notistack";
import validator from "validator";
import { AiOutlineSend } from "react-icons/ai";
import { StaticImage } from "gatsby-plugin-image";

const Contact = () => {
  const style = {
    display: "none",
  };

  const { enqueueSnackbar } = useSnackbar();
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();
  const [token, setToken] = useState("");

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (!email || !subject || !message) {
      enqueueSnackbar("Please fill all the fields", { variant: "warning" });
      setLoading(false);
      return;
    }
    if (validator.isEmail(email) === false) {
      enqueueSnackbar("Please enter a valid email", { variant: "warning" });
      setLoading(false);
      return;
    }
    if (name) {
      enqueueSnackbar("Hello Bot!", { variant: "error" });
      setLoading(false);
      return;
    }
    const result = await executeRecaptcha("homepage");
    setToken(result);
    const data = {
      email,
      subject,
      message,
      token: result,
    };
    try {
      const res = await axios.post(
        "https://www.sayantanmondal.com/.netlify/functions/sendEmail",
        data
      );
      enqueueSnackbar("Message Sent Succesfully!", { variant: "success" });
      setSent(true);
    } catch (error) {
      enqueueSnackbar("Could not message", { variant: "error" });
    }
    setLoading(false);
  };

  return (
    <>
      <section className="text-white" id="contact">
        <div className="py-8 lg:py-16 px-4 mx-auto xl:w-4/5">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
            Contact Me
          </h2>
              <p className="mb-8 lg:mb-16 font-light text-center text-gray-100 sm:text-xl">
                Get in touch with me and let's make something great happen!
              </p>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <StaticImage
              src="../../assets/contact.png"
              alt="Contact"
              className="w-full md:w-1/2 h-auto object-cover md:mr-8 mb-8 md:mb-0 animate-bounceY"
            />
            <div className="w-full md:w-1/2">
              <form action="#" className="space-y-8">

                <div>
                  <label for="email" className="block mb-2 text-sm font-medium">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-theme-blue text-gray-300 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Otherwise how do I respond?"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div style={style}>
                  <label for="name" className="block mb-2 text-sm font-medium ">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="shadow-sm  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    placeholder="Your name"
                    onChange={(e) => window.location.reload()}
                    required
                  />
                </div>
                <div>
                  <label for="subject" className="block mb-2 text-sm font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="block p-3 w-full text-sm bg-theme-blue text-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Every message deserves a cringe subject"
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label for="message" className="block mb-2 text-sm font-medium">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm bg-theme-blue text-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Let me know how can I help!"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="flex justify-center items-center text-white font-bold text-1xl">
                  {sent ? (
                    <p className="">
                      Yay! I have received your message. Have a great day!
                    </p>
                  ) : loading ? (
                    <button
                      class="rounded-lg px-4 py-2 bg-green-700  opacity-50 cursor-not-allowed didsabled:cursor-not-allowed disabled:opacity-50"
                      disabled
                    >
                      <div className="flex items-center justify-between">
                        Send Message &nbsp;&nbsp;
                        <AiOutlineSend className="text-white" />
                      </div>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="rounded-lg px-4 py-2 bg-green-700 hover:bg-green-800 duration-300 flex "
                      onClick={handleSubmit}
                    >
                      <div className="flex items-center justify-between">
                        Send Message &nbsp;&nbsp;
                        <AiOutlineSend className="text-white" />
                      </div>
                    </button>
                  )}
                  {/* if loading display loading.. */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );

};

export default AppWrap(
  MotionWrap(Contact, "app__footer"),
  "contact",
  "bg-contact "
);

