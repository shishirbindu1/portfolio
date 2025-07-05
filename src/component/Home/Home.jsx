import React from "react";
import removedBgimg from "../../assets/images/removedBgimg.png";

const Home = () => {
  return (
    <div className="wrapper md:grid grid-cols-2 md:py-10 md:px-10 my-10 ">
      <div className="image w-3/4  grid justify-self-center md:w-full md:place-self-center lg:justify-items-end ">
        <img src={removedBgimg} alt="" className=""/>
      </div>
      <div className="content text-center grid   py-10">
        <h1 className="text-8xl font-bold pb-5 dark:text-white">
          Hi, I am <span className="text-blue-800 dark:text-blue-300">Shishir.</span>
        </h1>
        <h3 className="text-4xl font-semibold pb-5 dark:text-white 
        ">A Web Developer</h3>
        <p className="text-xl md:w-2/3 m-auto dark:text-white">
          I'm a frontend web developer skilled in HTML, CSS, JavaScript, React,
          Next.js, Redux, and Firebase. I build fast, responsive, and scalable
          web apps with clean and efficient code.
        </p>
      </div>
    </div>
  );
}

export default Home;
