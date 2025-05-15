"use client";
import React from "react";
import { motion } from "framer-motion";
import PROJECTS from "../../../config/projects-config";

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "linear",
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "linear",
    },
  },
};

export function ProjectPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-4"
    >
      <h3 className="text-3xl font-semibold text-green">Projects</h3>

      {PROJECTS.map((item, index) => (
        <motion.div
          key={index}
          onClick={() =>
            window.open(item.link, "_blank", "noopener,noreferrer")
          }
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.15, ease: "linear" }}
          className="flex flex-col gap-2 p-5 border-lightSlate bg-background border-2 rounded-lg cursor-pointer"
        >
          <p className="text-lg text-lightSlate">{item.date}</p>
          <p className="text-2xl font-semibold">{item.name}</p>
          <p className="text-lg italic text-slate">
            {item.place} - {item.award}
          </p>
          <p className="text-md text-white">{item.description}</p>

          <div className="flex flex-wrap mt-2">
            {item.builtWith.map((tech, i) => (
              <div
                key={i}
                className="w-fit px-3 m-1 bg-green bg-opacity-20 text-green rounded-full text-sm"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
