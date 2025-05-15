"use client";
import React from "react";
import { motion } from "framer-motion";
import EDUCATION from "../../../config/education-config";

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

export function EducationPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-4"
    >
      <h3 className="text-3xl font-semibold text-green">Education</h3>

      {EDUCATION.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          onClick={() =>
            window.open(item.link, "_blank", "noopener,noreferrer")
          }
          whileHover={{ scale: 1.02 }}
          className="flex flex-col gap-2 p-5 border-lightSlate bg-background border-2 rounded-lg"
        >
          <p className="text-lg text-lightSlate">{item.graduationDate}</p>
          <p className="text-2xl font-semibold">{item.name}</p>
          <p className="text-lg italic text-slate">{item.degree}</p>

          <div className="flex flex-wrap mt-2">
            {item.relevantWork.map((work, i) => (
              <div
                key={i}
                className="w-fit px-3 m-1 bg-green bg-opacity-20 text-green rounded-full text-sm"
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
