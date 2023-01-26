import React from "react";
import { TypeAnimation } from "react-type-animation";
import { StaticImage } from "gatsby-plugin-image";
import SkillsIcons from "./skillsIcons";
import * as styles from "./Skills.module.css";
import SkillBox from "../../components/SkillBox";
import { AppWrap, MotionWrap } from "../../wrapper";

const Skills = () => {
  return (
    <div
      className={`${styles.bg} flex flex-col  w-screen  lg:flex-col   `}
      id="about"
    >
      <div className=" flex lg:p-10 w-full justify-around">
        <div class="flex flex-col items-center lg:bg-white bg-purple-50 border lg:rounded-lg lg:shadow-md justify-between m-5 max-w-1xl hover:shadow-xl transition duration-500 ease-in-out ">
          <div class="flex flex-col justify-around p-4 leading-normal h-3/5 my-auto">
            <p className="mb-3 font-bold text-theme-blue text-2xl md:text-3xl lg:text-5xl text-center">
              About Me
            </p>
            <div className="flex items-center flex-col justify-around">
              <h2 class="lg:text-3xl py-1 m-0 font-bold tracking-tight text-gray-900 md:text-3xl text-1xl">
                I love
              </h2>
              <div className="hidden lg:block">
                <TypeAnimation
                  sequence={[
                    "JavaScript", // Types 'One'
                    2000,
                    "developing interactive interfaces", // Types 'One'
                    2000, // Waits 1s
                    "designing APIs", // Types 'One'
                    2000, // Waits 1s
                    "building full stack applications", // Types 'One'
                    2000, // Waits 1s
                    "algorithms", // Types 'One'
                    2000, // Waits 1s
                  ]}
                  wrapper="h2"
                  cursor={true}
                  repeat={Infinity}
                  style={{
                    fontSize: "1.8rem",
                    color: "#D946EF",
                    fontWeight: "bold",
                    marginLeft: "0.5rem",
                    marginBottom: "0.2em",
                    marginTop: "0",
                  }}
                />
              </div>
              <div className="hidden md:block lg:hidden">
                <TypeAnimation
                  sequence={[
                    "JavaScript", // Types 'One'
                    2000,
                    "developing interactive interfaces", // Types 'One'
                    2000, // Waits 1s
                    "designing APIs", // Types 'One'
                    2000, // Waits 1s
                    "building full stack applications", // Types 'One'
                    2000, // Waits 1s
                    "algorithms", // Types 'One'
                    2000, // Waits 1s
                  ]}
                  wrapper="h2"
                  cursor={true}
                  repeat={Infinity}
                  style={{
                    fontSize: "1.7rem",
                    color: "#D946EF",
                    fontWeight: "bold",
                    marginLeft: "0.5rem",
                    marginBottom: "0.25em",
                    marginTop: "0",
                  }}
                />
              </div>
              <div className="block md:hidden lg:hidden">
                <TypeAnimation
                  sequence={[
                    "JavaScript", // Types 'One'
                    2000,
                    "developing interactive interfaces", // Types 'One'
                    2000, // Waits 1s
                    "designing APIs", // Types 'One'
                    2000, // Waits 1s
                    "building full stack applications", // Types 'One'
                    2000, // Waits 1s
                    "algorithms", // Types 'One'
                    2000, // Waits 1s
                  ]}
                  wrapper="h2"
                  cursor={true}
                  repeat={Infinity}
                  style={{
                    fontSize: "0.9rem",
                    color: "#D946EF",
                    fontWeight: "bold",
                    marginLeft: "0.5rem",
                    marginBottom: "0.25em",
                    marginTop: "0",
                  }}
                />
              </div>
              <p class="mb-3 lg:font-semibold text-black max-w-3xl md:text-base text-sm text-justify leading-tight">
                I have a deep love for frontend and backend development, and I
                am particularly skilled in using JavaScript to create fully
                functional websites. I have completed a variety of projects for
                my university and even worked on a prestigious government
                project, which has only further ignited my passion for this
                field. I am always eager to learn new technologies and
                techniques, and I enjoy the challenge of creating innovative
                solutions for complex problems.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen mx-auto flex justify-center items-center">
        {/* <SkillsIcons /> */}
        <SkillBox />
      </div>
    </div>
  );
};

// export default Skills;
export default AppWrap(MotionWrap(Skills, "app__works"), "about", "bg-blue");
