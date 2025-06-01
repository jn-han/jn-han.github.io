import React, { useState } from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <div>
      <section id="home" className="relative z-2 h-screen ">
        <div className="w-full h-screen flex justify-center items-center">
          <div className="flex flex-col text-white justify-center items-center dark:text-green">
            <h2 className="text-lg md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl text-center dark:text-green">
              Hello! My name is
            </h2>
            <h1 className="text-4xl text-center md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl text-green dark:text-white ">
              Joshua Nguyen
            </h1>
            <h2 className="text-lg md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl m-4 text-center text-white ">
              Software Engineer and Student at the University of British
              Columbia
            </h2>
            <div className="text-xl flex justify-evenly w-4/5 p-2 text-slate">
              <a
                href="https://github.com/jn-han"
                className="flex flex-wrap items-center p-3 justify-between bg-accent rounded-full hover:text-green transition duration-500 ease-in-out hover:scale-[102%]"
              >
                <FontAwesomeIcon icon={faGithub} className=" mx-1" />
                <p className="mx-1 text-sm md:text-xl">GitHub</p>
              </a>
              <a
                href="https://www.linkedin.com/in/jn-han/"
                className="flex flex-wrap items-center justify-between bg-accent rounded-full p-3 hover:text-green transition duration-500 ease-in-out hover:scale-[102%]"
              >
                <FontAwesomeIcon icon={faLinkedin} className="mx-1" />
                <p className="mx-1 text-sm md:text-xl">LinkedIn</p>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute text-accent bottom-0 left-0 right-0 flex flex-col items-center mb-2 animate-bounce text-xs md:text-lg dark:text-green">
          <p className="my-3">Learn more</p>
          <FontAwesomeIcon
            className="w-3 md:w-4 scale-150"
            icon={faArrowDown}
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
