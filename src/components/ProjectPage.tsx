"use client";
import React from "react";
import { motion } from "framer-motion";
import PROJECTS from "../config/projects-config";

const containerVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "linear",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "linear",
    },
  },
};

interface Props {
  inView: boolean;
}

export function ProjectPage({ inView }: Props) {
  const hackathons = PROJECTS.filter((item) => item.isHackathon);
  const personals = PROJECTS.filter((item) => !item.isHackathon);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex flex-col gap-10 sm:gap-14"
    >
      {/* Personal Projects Section */}
      <section id="personal-projects" className="scroll-mt-32">
        <motion.h4
          variants={itemVariants}
          className="text-xl sm:text-2xl font-semibold text-green mb-2"
        >
          Personal Projects
        </motion.h4>
        <div className="flex flex-col gap-6 sm:gap-8">
          {personals.map((item, index) => (
            <motion.div
              key={index}
              onClick={() =>
                window.open(item.link, "_blank", "noopener,noreferrer")
              }
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.15, ease: "linear" }}
              className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 border-lightSlate bg-background border-2 rounded-lg cursor-pointer"
            >
              <p className="text-sm sm:text-base text-lightSlate">
                {item.date}
              </p>
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                {item.name}
              </p>
              <p className="text-sm sm:text-base text-white">
                {item.description}
              </p>
              <div className="flex flex-wrap mt-2 sm:mt-3">
                {[...item.builtWith].sort().map((tech, i) => (
                  <div
                    key={i}
                    className="w-fit px-3 py-1 m-1 bg-green bg-opacity-20 text-green rounded-full text-xs sm:text-sm"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Hackathons Section */}
      <section id="hackathons" className="scroll-mt-32">
        <motion.h4
          variants={itemVariants}
          className="text-xl sm:text-2xl font-semibold text-green mb-2"
        >
          Hackathons
        </motion.h4>
        <div className="flex flex-col gap-6 sm:gap-8">
          {hackathons.map((item, index) => (
            <motion.div
              key={index}
              onClick={() =>
                window.open(item.link, "_blank", "noopener,noreferrer")
              }
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.15, ease: "linear" }}
              className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 border-lightSlate bg-background border-2 rounded-lg cursor-pointer"
            >
              <p className="text-sm sm:text-base text-lightSlate">
                {item.date}
              </p>
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                {item.name}
              </p>
              <p className="text-sm sm:text-base italic text-slate">
                {item.place} – {item.award}
              </p>
              <p className="text-sm sm:text-base text-white">
                {item.description}
              </p>
              <div className="flex flex-wrap mt-2 sm:mt-3">
                {[...item.builtWith].sort().map((tech, i) => (
                  <div
                    key={i}
                    className="w-fit px-3 py-1 m-1 bg-green bg-opacity-20 text-green rounded-full text-xs sm:text-sm"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
