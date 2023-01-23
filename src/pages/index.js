import React from "react";

import Layout from "../components/Layout/Layout";
import { SEO } from "../components/seo";

export default function IndexPage() {
  return (
    <>
      <div className="scroll-smooth">
        <SEO title="Sayantan Mondal - Full-Stack Developer" />
        <Layout />
      </div>
    </>
  );
}

export const Head = () => <SEO />;
