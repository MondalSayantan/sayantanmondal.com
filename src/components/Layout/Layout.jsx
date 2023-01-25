import React from "react";
import "./Layout.scss";
import Navbar from "../Navbar";
import { Header, Skills, Timeline, Projects, Contact } from "../../containers";
import Carousel from "../Carousel";
import { SnackbarProvider } from "notistack";

const Layout = ({ children }) => {
  return (
    <SnackbarProvider
      maxSnack={1}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      preventDuplicate
    >
      <div>
        <Navbar />
        <Header />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
        {/* <Carousel /> */}
      </div>
    </SnackbarProvider>
  );
};

export default Layout;
