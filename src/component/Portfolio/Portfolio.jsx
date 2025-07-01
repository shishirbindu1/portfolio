import React from "react";
import Home from "../Home/Home";
import Project from "../Project/Project";
import Skills from "../Skill/Skills";

const Portfolio = () => {
  return (
    <div className="wrap bg-gray-100 px-24">
      <Home />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
};

export default Portfolio;
