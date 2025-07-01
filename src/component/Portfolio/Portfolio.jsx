import React from "react";
import Home from "../Home/Home";
import Project from "../Project/Project";
import Skills from "../Skill/Skills";
import Contact from "../Contact/Contact";

const Portfolio = () => {
  return (
    <div className="wrapper px-6 grid gap-y-16">
      <section id="home">
        <Home />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Portfolio;
