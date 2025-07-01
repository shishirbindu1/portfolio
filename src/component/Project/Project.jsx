import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../ProjectData/ProjectData";

const Project = () => {
  return (
    <div className="wrapper md:py-10 md:px-10 my-10">
      <h2 className="text-3xl font-bold text-center mb-4 underline">PROJECTS</h2>
      <div className="projectBox bg-gray-100 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((project) => (
        <div key={project.id} className="projectSection bg-gray-50 grid gap-y-7 p-5 rounded-lg">
          <div className="image grid place-items-center">
            <img src={project.image} alt="project preview" className="rounded-lg" />
          </div>

          <div className="technology grid grid-flow-col gap-x-3 overflow-auto">
            {project.technologies.map((tech, index) => (
              <button
                key={index}
                className="bg-gray-700 text-white text-sm rounded-full px-3 py-1"
              >
                {tech}
              </button>
            ))}
          </div>

          <div className="link text-2xl">
            <p className="grid grid-flow-col w-1/5 m-auto gap-x-3">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt />
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Project;
