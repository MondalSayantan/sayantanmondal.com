import React from "react";
import "./Layout.scss";
import Navbar from "../Navbar";
import {
  Header,
  Skills,
  Timeline,
  Projects,
  Contact,
  Footer,
} from "../../containers";
import { SnackbarProvider } from "notistack";
import SocialsWrapper from "../SocialsWrapper";

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
      <SocialsWrapper />
        <Navbar />
        <Header />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </SnackbarProvider>
  );
};

export default Layout;
