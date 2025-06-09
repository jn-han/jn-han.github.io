"use client";
import React from "react";
import { motion } from "framer-motion";
import EXPERIENCE from "../config/experience-config";

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

export function ExperiencePage({ inView }: Props) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex flex-col gap-6 sm:gap-8"
    >
      <motion.h3
        variants={itemVariants}
        className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-green"
      >
        Experience
      </motion.h3>

      {EXPERIENCE.map((exp, idx) => (
        <motion.div
          key={idx}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.15, ease: "linear" }}
          onClick={() => window.open(exp.link, "_blank", "noopener,noreferrer")}
          className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 border-lightSlate bg-background border-2 rounded-lg cursor-pointer"
        >
          <p className="text-sm sm:text-base text-lightSlate">{exp.date}</p>
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold">
            {exp.title || exp.company}
          </p>
          <p className="text-sm sm:text-base italic text-slate">
            {exp.company}
            {exp.title && ` · ${exp.location}`}
          </p>

          {exp.responsibilities && (
            <ul className="list-disc ml-5 mt-1 sm:mt-2 space-y-1 text-sm sm:text-base">
              {exp.responsibilities.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}

          {exp.skills && (
            <div className="flex flex-wrap">
              {exp.skills.map((skill, i) => (
                <div
                  key={i}
                  className="w-fit px-3 py-1 m-1 bg-green bg-opacity-20 text-green rounded-full text-xs sm:text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
