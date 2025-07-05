// Skills.jsx
import React from "react";
import  skills  from "../ProjectData/skillData";

const Skills = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-4 underline dark:text-blue-300">SKILLS</h2>
      <div className="pb-5 flex flex-wrap gap-4 w-2/5 m-auto justify-center">
        {skills[0].skillsOf.map((skill, index) => (
          <p
            key={index}
            className="skill bg-white shadow-xl px-3 py-1 border-l-2 border-gray-300 border-r-2 border-b-2 dark:bg-blue-300"
          >
            {skill}
          </p>
        ))}
      </div>
    </>
  );
};

export default Skills;
