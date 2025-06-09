"use client";
import React from "react";
import { motion } from "framer-motion";
import PROJECTS from "../config/projects-config";
import { ProjectCard } from "./ProjectCard";
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
      className="flex flex-col gap-16 items-start px-4 py-12 min-h-screen"
    >
      {/* Personal Projects Section */}
      <section className="w-full mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-green mb-8 ml-2">
          Personal Projects
        </h2>
        <div className="flex flex-col w-100 gap-12 justify-center">
          {personals.map((item, idx) => (
            <ProjectCard key={idx} item={item} variants={itemVariants} />
          ))}
        </div>
      </section>

      {/* Hackathons Section */}
      <section className="w-full mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-green mb-8 ml-2">
          Hackathons
        </h2>
        <div className="flex flex-wrap gap-12 justify-center">
          {hackathons.map((item, idx) => (
            <ProjectCard key={idx} item={item} variants={itemVariants} />
          ))}
        </div>
      </section>
    </motion.div>
  );
}
