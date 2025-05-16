"use client";
import React from "react";
import { motion } from "framer-motion";
import { rightItemVariants } from "../../types/variants";

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

const EXPERIENCE = [
  {
    company: "BC Cancer",
    title: "Software Developer + Research Assistant",
    location: "Vancouver, BC",
    date: "Feb 2025 – Present",
    responsibilities: [
      "Redesigned 10+ user-facing interfaces in Figma to improve usability and accessibility across dermatology data workflows.",
      "Implemented new UI components using React, TypeScript, and Bootstrap 5, reducing code redundancy by 30%.",
      "Built and maintained backend functionality via an Express.js server, including API endpoints and SQL queries for global health datasets.",
      "Collaborated in a lean team of 3 developers and researchers to deploy clinical tools meeting privacy and information security standards.",
      "Led documentation and weekly technical updates to ensure compliance with ILDS and WHO healthcare data protocols.",
    ],
    skills: [
      "React",
      "TypeScript",
      "Express.js",
      "SQL",
      "Bootstrap 5",
      "CSS",
      "Figma",
      "Node.js",
      "REST APIs",
      "Git",
    ],
    link: "https://www.bccrc.ca/",
  },
  {
    company: "UBC BEST",
    title: "Software Engineer, Muscle 2 Movement",
    location: "Vancouver, BC",
    date: "Sep 2024 – Present",
    responsibilities: [
      "Developed and shipped core features for a cross-platform health tracking app using Flutter and Dart, supporting individuals with neurological and physical impairments",
      "Built interactive Unity-based cognitive and motor skill games and integrated them into the Flutter app using platform channels.",
      "Collaborated in a fast-paced, agile team of 8 (including clinical advisors and developers) with bi-weekly sprint reviews and shared code ownership.",
      "Contributed to technical planning, UI design input, and backend API integration to ensure seamless user experience.",
      "Maintained clean Git workflows and wrote unit-tested, production-ready code aligned with accessibility and healthcare compliance standards.",
    ],
    skills: [
      "Flutter",
      "Dart",
      "Unity",
      "Cross-Platform Engineering",
      "REST APIs",
      "Agile Development",
      "Git",
    ],
    link: "https://www.linkedin.com/company/ubcbest/?originalSubdomain=ca",
  },
];

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
            <div className="flex flex-wrap mt-2 sm:mt-3">
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
