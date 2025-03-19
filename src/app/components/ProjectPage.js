import React from "react";
import {
  faGripLinesVertical,
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PROJECTS from "../config/projects-config";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

const ProjectPage = () => {
  return (
    <section
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-between"
    >
      <div className="mt-24 p-10 md:p-0 lg:p-0 xl:p-0 2xl:p-0 flex flex-col justify-center items-center text-green w-full">
        <h2 className="text-green text-xl md:text-4xl w-3/4 lg:text-3xl xl:text-3xl 2xl:text-3xl border-b-2 text-center pb-5 border-accent">
          Projects
        </h2>

        {PROJECTS.map((item) => (
          <ProjectCard info={item} key={item.name} />
        ))}
        <div className="w-3/4 p-4 text-xl">
          <div className=" link link-underline link-underline-black w-fit group">
            <Link
              className=" text-white x text-lg flex flex-row"
              href="/archived"
            >
              Josh&apos;s Project Archive
              <FontAwesomeIcon
                className="w-4 mx-2 group-hover:-translate-y-0.5 transition duration-200 ease-in-out"
                icon={faSquareArrowUpRight}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
