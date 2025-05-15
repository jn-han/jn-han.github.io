"use client";
import React from "react";
import { motion } from "framer-motion";
import { rightItemVariants } from "../../types/variants";

const EXPERIENCE = [
  {
    company: "BC Cancer",
    title: "Software Developer + Research Assistant",
    location: "Vancouver, BC",
    date: "Feb 2025 – Present",
    responsibilities: [
      "Contributing to software development initiatives in a research-driven healthcare environment.",
      "Supporting bioinformatics and research teams with data management tools and backend infrastructure.",
    ],
    link: "https://www.bccrc.ca/",
  },
  {
    company: "UBC BEST",
    title: "M2M: Software Engineer",
    location: "Vancouver, BC",
    date: "Sep 2024 – Present",
    responsibilities: [
      "Developing a mobile application using Dart and Flutter to support individuals with multiple sclerosis.",
      "Collaborating in a cross-functional team of 8, emphasizing mentorship and peer learning.",
      "Building core features for a commercial-ready app targeting widespread user adoption.",
      "Writing scalable, efficient code for long-term maintainability and growth.",
    ],
    link: "https://www.linkedin.com/company/ubcbest/?originalSubdomain=ca",
  },
  {
    company: "Aritzia",
    location: "Vancouver, BC",
    date: "June 2018 – Present",
    subRoles: [
      {
        title: "Senior Inventory Associate",
        date: "May 2022 – Present",
        responsibilities: [
          "Leading inventory operations and streamlining logistics in a high-volume retail environment.",
        ],
      },
      {
        title: "Inventory Associate",
        date: "Aug 2021 – May 2022",
        responsibilities: [
          "Managed product restocking, system accuracy, and back-of-house flow.",
        ],
      },
      {
        title: "Boutique Associate",
        date: "June 2018 – Aug 2021",
        responsibilities: [
          "Delivered personalized customer service while supporting daily store operations.",
        ],
      },
    ],
    link: "https://www.aritzia.com/en/aritzia/corporate-hub/corporate-landing",
  },
];

export function ExperiencePage() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-3xl font-semibold text-green">Experience</h3>

      {EXPERIENCE.map((exp, idx) => (
        <motion.div
          key={idx}
          variants={rightItemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.15, ease: "linear" }}
          onClick={() => window.open(exp.link, "_blank", "noopener,noreferrer")}
          className="flex flex-col gap-2 p-5 border-lightSlate bg-background border-2 rounded-lg cursor-pointer"
        >
          <p className="text-lg text-lightSlate">{exp.date}</p>
          <p className="text-2xl font-semibold">{exp.title || exp.company}</p>
          <p className="text-lg italic text-slate">
            {exp.company}
            {exp.title && ` · ${exp.location}`}
          </p>

          {exp.responsibilities && (
            <ul className="list-disc ml-5 mt-2 space-y-1 text-sm md:text-base">
              {exp.responsibilities.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}

          {exp.subRoles && (
            <ul className="list-disc ml-5 mt-3 space-y-4 text-sm md:text-base">
              {exp.subRoles.map((role, i) => (
                <li key={i}>
                  <p className="font-medium">
                    {role.title} ({role.date})
                  </p>
                  <ul className="list-disc ml-5 space-y-1 mt-1">
                    {role.responsibilities.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}
    </div>
  );
}
