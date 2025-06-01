// EducationPage.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import EDUCATION from "../../config/education-config";

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

export function EducationPage({ inView }: Props) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex flex-col gap-6 sm:gap-8 min-h-screen"
    >
      <motion.h3
        variants={itemVariants}
        className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-green"
      >
        Education
      </motion.h3>

      {EDUCATION.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          onClick={() =>
            window.open(item.link, "_blank", "noopener,noreferrer")
          }
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.15, ease: "linear" }}
          className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 border-lightSlate bg-background border-2 rounded-lg cursor-pointer"
        >
          <p className="text-sm sm:text-base text-lightSlate">
            {item.graduationDate}
          </p>
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold">
            {item.name}
          </p>
          <p className="text-sm sm:text-base italic text-slate">
            {item.degree}
          </p>

          <div className="flex flex-wrap mt-2 sm:mt-3">
            {item.relevantWork.map((work, i) => (
              <div
                key={i}
                className="w-fit px-3 py-1 m-1 bg-green bg-opacity-20 text-green rounded-full text-xs sm:text-sm"
              >
                {work}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
