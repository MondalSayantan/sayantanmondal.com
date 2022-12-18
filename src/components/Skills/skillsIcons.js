import React from "react";
import { DiJavascript1, DiReact } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { FaBootstrap, FaNodeJs } from "react-icons/fa";
import { TbBrandTailwind, TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiGatsby, SiTypescript } from "react-icons/si";

const icons = [
  {
    icon: <AiFillHtml5 className="text-5xl text-orange-700" />,
    span: (
      <span class="animate-ping absolute top-1 right-0.5 block h-2 w-2 rounded-full bg-blue-800" />
    ),
    name: "HTML5",
  },
  {
    icon: <IoLogoCss3 className="text-5xl text-blue-700" />,
    span: (
      <span class="animate-ping absolute top-1 right-0.5 block h-2 w-2 rounded-full bg-blue-800" />
    ),
    name: "CSS3",
  },
  {
    icon: <DiJavascript1 className="text-5xl text-yellow-500" />,
    span: (
      <span class="animate-ping absolute top-1 right-0.5 block h-2 w-2 rounded-full bg-blue-800" />
    ),
    name: "JavaScript",
  },
  {
    icon: <FaBootstrap className="text-5xl text-purple-600" />,
    span: (
      <span class="animate-ping absolute top-1 right-0.5 block h-2 w-2 rounded-full bg-blue-800" />
    ),
    name: "Bootstrap",
  },
  {
    icon: <TbBrandTailwind className="text-5xl text-blue-400" />,
    span: (
      <span class="animate-ping absolute top-1 right-0.5 block h-2 w-2 rounded-full bg-blue-800" />
    ),
    name: "Tailwind",
  },
  {
    icon: <SiTypescript className="text-5xl text-blue-500" />,
    span: (
      <span class="animate-ping absolute top-1 right-0.5 block h-2 w-2 rounded-full bg-blue-800" />
    ),
    name: "TypeScript",
  },
  {
    icon: <DiReact className="text-5xl text-blue-600" />,
    span: (
      <span class="animate-ping absolute top-1 right-0.5 block h-2 w-2 rounded-full bg-red-800" />
    ),
    name: "React",
  },
  {
    icon: <FaNodeJs className="text-5xl text-green-700" />,
    span: (
      <span class="animate-ping absolute top-1 right-0.5 block h-2 w-2 rounded-full bg-blue-800" />
    ),
    name: "Node",
  },
  {
    icon: <SiMongodb className="text-5xl text-green-800" />,
    span: (
      <span class="animate-ping absolute top-1 right-0.5 block h-2 w-2 rounded-full bg-blue-800" />
    ),
    name: "MongoDB",
  },
  {
    icon: <SiGatsby className="text-5xl text-purple-800" />,
    span: (
      <span class="animate-ping absolute top-1 right-0.5 block h-2 w-2 rounded-full bg-blue-800" />
    ),
    name: "Gatsby",
  },
  //   {
  //     icon: <TbBrandNextjs className="text-5xl" />,
  //     span: (
  //       <span class="animate-ping absolute top-1 right-0.5 block h-2 w-2 rounded-full ring-2 ring-green-400 bg-blue-800" />
  //     ),
  //     name: "Next",
  //   },
];

const SkillsIcons = () => {
  return (
    <div className="flex flex-wrap justify-around items-center">
      {icons.map((icon) => (
        <div className="m-4 bg-white lg:mx-10 md:mx-8 p-5 justify-around items-center rounded-full inline-block relative">
          <button class="inline-block relative">
            {icon.icon}
            {/* {icon.span} */}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SkillsIcons;
