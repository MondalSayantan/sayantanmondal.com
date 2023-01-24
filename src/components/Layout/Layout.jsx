import React from "react";
import "./Layout.scss";
import Navbar from "../Navbar";
import { Header, Skills, Timeline, Projects, Contact } from "../../containers";
import Carousel from "../Carousel";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      {/* <Carousel /> */}
    </div>
  );
};

export default Layout;
