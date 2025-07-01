import React from "react";
import projectTrial from "../../assets/images/projectTrial.jpg";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Project = () => {
  return (
    <div className="wrapper md:py-10 md:px-10 my-10">
      <h2 className="text-3xl font-bold text-center mb-4 underline">Project</h2>
      <div className="projectBox  bg-gray-100 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="projectSection bg-gray-50 grid gap-y-7 p-5 rounded-lg">
          <div className="image grid place-items-center">
            <img src={projectTrial} alt="" className="rounded-lg " />
          </div>
          <div className="technology grid grid-flow-col gap-x-3">
            <button className="bg-gray-700 text-white text-lg  rounded-full px-">
              hello hello
            </button>
            <button className="bg-gray-700 text-white text-lg  rounded-full px-">
              hello
            </button>
            <button className="bg-gray-700 text-white text-lg  rounded-full px-">
              hello
            </button>
            <button className="bg-gray-700 text-white text-lg  rounded-full px-">
              hello
            </button>
          </div>
          <div className="link text-3xl ">
            <p className="grid grid-flow-col w-1/5 m-auto gap-x-3">
              <FaGithub /> <FaExternalLinkAlt />{" "}
            </p>
          </div>
        </div>
        {/* second box     */}
        <div className="projectSection bg-gray-50 grid gap-y-7 p-5 rounded-lg">
          <div className="image grid place-items-center">
            <img src={projectTrial} alt="" className="rounded-lg " />
          </div>
          <div className="technology grid grid-flow-col gap-x-3">
            <button className="bg-gray-700 text-white text-lg  rounded-full px-">
              hello hello
            </button>
            <button className="bg-gray-700 text-white text-lg  rounded-full px-">
              hello
            </button>
            <button className="bg-gray-700 text-white text-lg  rounded-full px-">
              hello
            </button>
            <button className="bg-gray-700 text-white text-lg  rounded-full px-">
              hello
            </button>
          </div>
          <div className="link text-3xl ">
            <p className="grid grid-flow-col w-1/5 m-auto gap-x-3">
              <FaGithub /> <FaExternalLinkAlt />{" "}
            </p>
          </div>
        </div>
        {/* third box */}
        <div className="projectSection bg-gray-50 grid gap-y-7 p-5 rounded-lg">
          <div className="image grid place-items-center">
            <img src={projectTrial} alt="" className="rounded-lg " />
          </div>
          <div className="technology grid grid-flow-col gap-x-3">
            <button className="bg-gray-700 text-white text-lg  rounded-full px-">
              hello hello
            </button>
            <button className="bg-gray-700 text-white text-lg  rounded-full px-">
              hello
            </button>
            <button className="bg-gray-700 text-white text-lg  rounded-full px-">
              hello
            </button>
            <button className="bg-gray-700 text-white text-lg  rounded-full px-">
              hello
            </button>
          </div>
          <div className="link text-3xl ">
            <p className="grid grid-flow-col w-1/5 m-auto gap-x-3">
              <FaGithub /> <FaExternalLinkAlt />{" "}
            </p>
          </div>
        </div>
        {/* fourth box */}
        <div className="projectSection bg-gray-50 grid gap-y-7 p-5 rounded-lg">
          <div className="image grid place-items-center">
            <img src={projectTrial} alt="" className="rounded-lg " />
          </div>
          <div className="technology grid grid-flow-col gap-x-3">
            <button className="bg-gray-700 text-white text-lg  rounded-full px-">
              hello hello
            </button>
            <button className="bg-gray-700 text-white text-lg  rounded-full px-">
              hello
            </button>
            <button className="bg-gray-700 text-white text-lg  rounded-full px-">
              hello
            </button>
            <button className="bg-gray-700 text-white text-lg  rounded-full px-">
              hello
            </button>
          </div>
          <div className="link text-3xl ">
            <p className="grid grid-flow-col w-1/5 m-auto gap-x-3">
              <FaGithub /> <FaExternalLinkAlt />{" "}
            </p>
          </div>
        </div>
        {/* fifth box */}
        <div className="projectSection bg-gray-50 grid gap-y-7 p-5 rounded-lg">
          <div className="image grid place-items-center">
            <img src={projectTrial} alt="" className="rounded-lg " />
          </div>
          <div className="technology grid grid-flow-col gap-x-3">
            <button className="bg-gray-700 text-white text-lg  rounded-full px-">
              hello hello
            </button>
            <button className="bg-gray-700 text-white text-lg  rounded-full px-">
              hello
            </button>
            <button className="bg-gray-700 text-white text-lg  rounded-full px-">
              hello
            </button>
            <button className="bg-gray-700 text-white text-lg  rounded-full px-">
              hello
            </button>
          </div>
          <div className="link text-3xl ">
            <p className="grid grid-flow-col w-1/5 m-auto gap-x-3">
              <FaGithub /> <FaExternalLinkAlt />{" "}
            </p>
          </div>
        </div>
        {/* sixth box */}
        <div className="projectSection bg-gray-50 grid gap-y-7 p-5 rounded-lg">
          <div className="image grid place-items-center">
            <img src={projectTrial} alt="" className="rounded-lg " />
          </div>
          <div className="technology grid grid-flow-col gap-x-3">
            <button className="bg-gray-700 text-white text-lg  rounded-full px-">
              hello hello
            </button>
            <button className="bg-gray-700 text-white text-lg  rounded-full px-">
              hello
            </button>
            <button className="bg-gray-700 text-white text-lg  rounded-full px-">
              hello
            </button>
            <button className="bg-gray-700 text-white text-lg  rounded-full px-">
              hello
            </button>
          </div>
          <div className="link text-3xl ">
            <p className="grid grid-flow-col w-1/5 m-auto gap-x-3">
              <FaGithub /> <FaExternalLinkAlt />{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
