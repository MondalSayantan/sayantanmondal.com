import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Skills from "../components/Skills";
import { SEO } from "../components/seo";

export default function IndexPage() {
  return (
    <>
      <div className="scroll-smooth">
        <SEO title="Sayantan Mondal - Full-Stack Developer" />
        <Navbar />
        <Header />
        <Skills />
      </div>
    </>
  );
}

export const Head = () => <SEO />;
