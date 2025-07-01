import React from "react";

const Skills = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-4 underline">Skills</h2>
      <div className="pb-5 flex flex-wrap gap-4 w-2/4 m-auto justify-center">
        <p className="skill bg-white shadow-xl px-3 py-1 border-l-2 border-gray-300 border-r-2 border-b-2">
          JavaScript
        </p>
        <p className="skill bg-white shadow-xl px-3 py-1 border-l-2 border-gray-300 border-r-2 border-b-2">
          React
        </p>
        <p className="skill bg-white shadow-xl px-3 py-1 border-l-2 border-gray-300 border-r-2 border-b-2">
          Tailwind
        </p>
        <p className="skill bg-white shadow-xl px-3 py-1 border-l-2 border-gray-300 border-r-2 border-b-2">
          Firebase
        </p>
        <p className="skill bg-white shadow-xl px-3 py-1 border-l-2 border-gray-300 border-r-2 border-b-2">
          Redux
        </p>
      </div>
    </>
  );
};

export default Skills;
