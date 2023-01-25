import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-slate-900 w-screen md:flex md:items-center md:justify-between flex flex-col justify-center items-center md:p-6 shadow-lg text-white">
      <span className="text-sm md:text-md lg:text-lg sm:text-center ">
        © 2023 <div className="hover:underline">Sayantan Mondal</div>
      </span>
      <div className="flex flex-wrap items-center mt-3 text-sm md:text-md lg:text-lg px-10 sm:mt-0">
        Made with ❤️ Using Gatsby
      </div>
    </footer>
  );
};

export default Footer;
