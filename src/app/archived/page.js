"use client";
import { React, useState } from "react";
import Particle from "../components/Particle";
import Link from "next/link";
import particlesConfig from "../config/particles-config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import PROJECTS from "../config/allProjects-config";
import { useGradient } from "../../../contexts/GradientContexts";

const page = () => {
  const { gradientStyle } = useGradient();

  return (
    <div className="bg-background relative h-screen w-screen">
      {/* Apply gradient overlay separately */}
      <div
        style={gradientStyle}
        className="absolute inset-0 pointer-events-none transition-all duration-100"
      />

      {/* Particles background */}
      <div className="absolute inset-0 -z-10">
        <Particle particlesConfig={particlesConfig} />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <div className="w-[95%] px-4">
          <Link href="/#projects" className="text-green hover:text-lightGreen">
            Go Back
          </Link>
          <h1 className="text-3xl text-green">Josh's Project Archive</h1>
        </div>

        <table className="border-separate border-spacing-4 text-left w-[95%]">
          <thead>
            <tr className="text-green dark:text-lightGreen">
              <th>Date</th>
              <th>Name</th>
              <th className="hidden md:table-cell">Tech Stack</th>
              <th>Association</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {PROJECTS.map((project) => (
              <tr
                className="border border-gray-500 dark:border-gray-700"
                key={project.name}
              >
                <td className="text-gray-800 dark:text-gray-300">
                  {project.date}
                </td>
                <td className="text-gray-800 dark:text-gray-300">
                  {project.name}
                </td>
                <td className="hidden md:table-cell">
                  {project.builtWith.map((item, key) => (
                    <span
                      className="px-3 py-1 m-1 text-xs bg-lightNavy dark:bg-darkGreen dark:text-green text-green rounded-full"
                      key={key}
                    >
                      {item}
                    </span>
                  ))}
                </td>
                <td className="text-gray-800 dark:text-gray-300">
                  {project.place}
                </td>
                <td className="hover:text-white">
                  <a
                    href={project.link}
                    className="group text-green dark:text-lightGreen"
                  >
                    {project.link.replace(/^https?:\/\/([^\/]+\.com).*/, "$1")}
                    <FontAwesomeIcon
                      className="mx-2 group-hover:-translate-y-0.5 transition ease-in-out"
                      size="sm"
                      icon={faSquareArrowUpRight}
                    />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
