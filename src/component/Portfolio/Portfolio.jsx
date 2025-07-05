import React, { useEffect, useState } from "react";
import Home from "../Home/Home";
import Project from "../Project/Project";
import Skills from "../Skill/Skills";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ThemeProvider } from "../context/theme";

const Portfolio = () => {
  const [themeMode, setThemeMode] = useState("light");
  const darkMode = () => {
    setThemeMode('dark')
  };
  const lightMode = () => {
    setThemeMode('light')
  };

  useEffect((e)=>{
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{ themeMode, darkMode, lightMode }}>
      <div className="wrapper px-6 grid gap-y-16  bg-gray-100 dark:bg-gray-700">
        <section className="header">
          <Header />
        </section>
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
        <section id="footer">
          <Footer />
        </section>
      </div>
    </ThemeProvider>
  );
};

export default Portfolio;
