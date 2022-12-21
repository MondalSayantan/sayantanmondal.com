import React from "react";
import { TypeAnimation } from "react-type-animation";
import { StaticImage } from "gatsby-plugin-image";
import SkillsIcons from "./skillsIcons";
import * as styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={`${styles.bg} flex flex-col`} id="about">
      <div className=" flex py-10 w-full justify-around">
        <div class="flex flex-col items-center lg:bg-white bg-purple-50 border lg:rounded-lg lg:shadow-md md:flex-row m-5 max-w-7xl hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          {/* small card on the left side */}
          {/* <StaticImage
            class="object-cover w-full rounded-t-lg h-100 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg grow"
            src="../assets/skills.jpg"
            alt=""
          /> */}
          <div class="flex flex-col justify-between p-4 leading-normal">
            <div className="flex items-center">
              <h2 class="mb-2 lg:text-4xl py-1 m-0 font-bold tracking-tight text-gray-900 md:text-3xl">
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
                    fontSize: "2.3rem",
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
                    fontSize: "1.8rem",
                    color: "#D946EF",
                    fontWeight: "bold",
                    marginLeft: "0.5rem",
                    marginBottom: "0.25em",
                    marginTop: "0",
                  }}
                />
              </div>
            </div>
            <p class="mb-3 lg:font-normal text-gray-900 max-w-3xl md:text-1xl">
              I have a deep love for frontend and backend development, and I am
              particularly skilled in using JavaScript to create fully
              functional websites. I have completed a variety of projects for my
              university and even worked on a prestigious government project,
              which has only further ignited my passion for this field. I am
              always eager to learn new technologies and techniques, and I enjoy
              the challenge of creating innovative solutions for complex
              problems.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <SkillsIcons />
      </div>
    </div>
  );
};

export default Skills;
