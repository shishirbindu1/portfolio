import React from "react";
import projectTrial from '../../assets/images/projectTrial.jpg'
import { FaGithub } from "react-icons/fa";

const Project = () => {
  return (
    <div className="wrapper md:py-10 md:px-10 my-10 bg-gray-100">
      <div className="projectSection bg-gray-50 grid gap-y-7 p-5 rounded-lg">
        <div className="image grid place-items-center">
          <img src={projectTrial} alt="" className="rounded-lg " />
        </div>
        <div className="technology grid grid-flow-col gap-x-5 px-5">
          <button className="bg-gray-700 text-white text-xl rounded-full px-2 py-1" >hello hello</button>
          <button className="bg-gray-700 text-white text-xl rounded-full px-3 py-1" >hello</button>
          <button className="bg-gray-700 text-white text-xl rounded-full px-3 py-1" >hello</button>
          <button className="bg-gray-700 text-white text-xl rounded-full px-3 py-1" >hello</button>
        </div>
        <div className="link">
            <p><FaGithub/> </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
