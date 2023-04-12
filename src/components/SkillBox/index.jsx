// src/components/SkillBox.js
import React from "react";
import "./Skills.scss";
import { BsCodeSlash } from "react-icons/bs";
import { SiJavascript } from "react-icons/si";
import { GoServer } from "react-icons/go";

const SkillBox = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center w-screen p-3">
      <div className="gradient-border flex flex-col items-center mb-4" id="box">
        <div className="md:m-4 m-3 bg-theme-blue lg:mx-10 md:mx-8 md:p-5 p-2 justify-around items-center rounded-full inline-block relative">
          <div className="relative flex justify-center items-center">
            <BsCodeSlash className="md:text-5xl text-3xl text-white" />
          </div>
        </div>
        Frontend
        <br />
        <p>
          I can create magical interfaces using HTML and CSS as well as using
          libraries like React and Gatsby
        </p>
      </div>
      <div className="gradient-border flex flex-col items-center m-4" id="box">
        <div className="md:m-4 m-3 bg-theme-blue lg:mx-10 md:mx-8 md:p-5 p-2 justify-around items-center rounded-full inline-block relative">
          <div className="relative flex justify-center items-center">
            <SiJavascript className="md:text-5xl text-3xl text-white" />
          </div>
        </div>
        Everything JavaScript
        <br />
        <p>
          Javascript has been the foundation of my development career and I am
          deeply passionate about it.
        </p>
      </div>
      <div className="gradient-border flex flex-col items-center m-4" id="box">
        <div className="md:m-4 m-3 bg-theme-blue lg:mx-10 md:mx-8 md:p-5 p-2 justify-around items-center rounded-full inline-block relative">
          <div className="relative flex justify-center items-center">
            <GoServer className="md:text-5xl text-3xl text-white" />
          </div>
        </div>
        Backend
        <br />
        <p>
          I can create APIs that work seamlessly with a database and frontend of
          any application
        </p>
      </div>
    </div>
  );
};

export default SkillBox;
