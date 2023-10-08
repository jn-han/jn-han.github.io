import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Particle from "./Particle";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage = () => {
  return (
    <section id="home" className="z-2">
      <div className="absolute w-full h-screen flex justify-center items-center ">
        <div className="flex flex-col justify-center items-center text-green">
          <h2 className="text-2xl">Hello! My name is</h2>
          <h1 className="text-6xl">Joshua Nguyen</h1>
          <h2 className="text-2xl m-4">
            Software Engineer and Student at the University of British Columbia
          </h2>
          <div className="text-xl flex justify-evenly w-4/5  p-2 text-green">
            <a
              href="https://github.com/jn-han"
              className="flex flex-wrap items-center p-3 justify-between bg-accent rounded-full hover:bg-green hover:text-accent transition duration-500 ease-in-out"
            >
              <FontAwesomeIcon icon={faGithub} className="w-8 mx-2" />
              <p className="mx-2">GitHub</p>
            </a>
            <a
              href="https://www.linkedin.com/in/jn-han/"
              className="flex flex-wrap items-center justify-between bg-accent rounded-full p-3 hover:bg-green hover:text-accent transition duration-500 ease-in-out"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-8 mx-2" />
              <p className="mx-2">LinkedIn</p>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 animate-bounce flex flex-col items-center w-full mb-2 text-green">
        <p>learn more</p>
        <FontAwesomeIcon className="w-8" icon={faArrowDown} />
      </div>

      <Particle className="absolute" />
    </section>
  );
};

export default HomePage;
