import React from "react";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import resumePDF from "../../assets/resume.pdf";
const Contact = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-4 underline dark:text-blue-300 ">CONTACT</h2>
      <div className="contact text-center pb-5">
        <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl border border-gray-700 dark:border-white dark:bg-blue-300 px-3 py-1 hover:bg-gray-400 hover:text-white shadow-lg/30 cursor-pointer dark:hover:bg-blue-100 dark:hover:text-black"
        >
          Resume
        </a>
      </div>
      <div className="two  pb-16">
        <div className="icon grid grid-flow-col text-3xl gap-x-5 w-32 m-auto dark:text-blue-300">
          <a
            href="https://github.com/shishirbindu1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/shishir-bindu-716b39316"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com/shishirbindubishoksrma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com/_shishir_bindu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
