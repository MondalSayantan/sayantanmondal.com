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
        <Footer />
      </div>
    </SnackbarProvider>
  );
};

export default Layout;
