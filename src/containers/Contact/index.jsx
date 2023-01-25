import React, { useState } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import "./Contact.scss";
import axios from "axios";

const Contact = () => {
  const style = {
    display: "none",
  };

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const { executeRecaptcha } = useGoogleReCaptcha();
  const [token, setToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await executeRecaptcha("homepage");
    setToken(result);
    const data = {
      email,
      subject,
      message,
      token: result,
    };
    axios
      .post("https://www.sayantanmondal.com/.netlify/functions/sendEmail", data)
      // .post("http://localhost:57868/.netlify/functions/sendEmail", data)
      .then(() => {
        console.log("Message Sent");
      });
  };

  return (
    <>
      <section className="bg-white">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
            Contact Me
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
            Get in touch with me and let's make something great happen!
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="name@abc.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div style={style}>
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
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
              <label
                for="subject"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Let me know how I can help!"
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a comment..."
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
              onClick={handleSubmit}
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AppWrap(
  MotionWrap(Contact, "app__footer"),
  "contact",
  "bg-white"
);
