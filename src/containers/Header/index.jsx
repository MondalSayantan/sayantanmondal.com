import React from "react";
import * as styles from "./Header.module.css";
import { StaticImage } from "gatsby-plugin-image";
import wave from "../../assets/waving-hand.gif";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

const socials = [
  {
    name: "Github",
    link: "https://github.com/MondalSayantan",
    id: "github",
    icon: <AiFillGithub className="text-3xl text-blue-600" />,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/mondalsayantan/",
    id: "linkedin",
    icon: <AiFillLinkedin className="text-3xl text-blue-600" />,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/sayantannnnn",
    id: "twitter",
    icon: <AiOutlineTwitter className="text-3xl text-blue-600" />,
  },
];

const Header = () => {
  return (
    <header className={`${styles.bg} lg:h-screen w-full`}>
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row lg:h-screen md:h-3/4 h-full my-auto pt-20 justify-around items-center md:px-5 ">
        <div className="flex flex-col w-3/4 lg:w-1/2">
          <div className="flex items-center justify-center lg:justify-start lg:items-end">
            <h1 className=" text-3xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl ">
              Hello
            </h1>
            <img src={wave} alt="gif" className="h-10 md:h-16 ml-1 lg:ml-5 " />
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-start">
            <h1 className="text-3xl lg:py-4 font-bold tracking-tight leading-none text-gray-900 md:text-4xl mr-5 pb-5 md:pb-0">
              I am
            </h1>
            <h1 className="md:text-6xl text-4xl text-center lg:py-4 font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Sayantan Mondal
            </h1>
          </div>
          <div>
            {/* subtext */}
            {/* <p className="text-1xl text-justify font-semibold text-gray-900 mt-5">
              With a background in web development and a love for all things
              tech, I'm a full-stack developer and an aspiring software engineer
              who's always on the lookout for the next big thing. I'm passionate
              about using my skills to create intuitive, user-friendly websites
              and applications that make people's lives easier.
            </p> */}
            <p className="text-xl text-justify font-semibold text-gray-900">
              Full-Stack Developer and Aspiring Software Engineer
            </p>
          </div>
          <div className="flex">
            {socials.map(({ name, link, id, icon }) => (
              <div key={id} className="my-10 mr-5">
                <a href={link} target="_blank">
                  {icon}
                </a>
              </div>
            ))}
          </div>
        </div>
        <StaticImage
          src="../../assets/avatar.png"
          alt="hero"
          className="h-40 w-40 md:h-80 md:w-80 rounded-lg rotate-6"
        />
      </div>
    </header>
  );
};

export default Header;
