import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Skills from "../components/Skills";

export default function IndexPage() {
  return (
    <>
      <div className="scroll-smooth">
        <Navbar />
        <Header />
        <Skills />
      </div>
    </>
  );
}
