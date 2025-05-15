"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ScrollMenu } from "./ScrollMenu";
import { ExperiencePage } from "./ExperiencePage/page";
import { EducationPage } from "./EducationPage/page";
import { ProjectPage } from "./ProjectPage/page";
import { sectionIds, SectionId } from "../../types/variants";
import { useActiveSection } from "./ActiveSectionManager/types";
import {
  rightContainerVariants,
  rightItemVariants,
} from "../../types/variants";

export function InfoMenu() {
  // Refs for each section
  const refs: Record<SectionId, React.RefObject<HTMLDivElement>> = {
    Experience: useRef<HTMLDivElement>(null),
    Education: useRef<HTMLDivElement>(null),
    Projects: useRef<HTMLDivElement>(null),
  };

  // Track which section is in view
  const activeSection = useActiveSection(refs);

  // Smooth scroll helper
  const scrollTo = (id: SectionId) => {
    refs[id].current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="projects"
      className="flex flex-col lg:flex-row w-full items-start justify-between
                 px-6 lg:px-44 pt-32 pb-10 min-h-screen"
    >
      {/* Left Sticky Menu (hidden under lg) */}
      <ScrollMenu refs={refs} active={activeSection} onSelect={scrollTo} />

      {/* Right Content Area */}
      <motion.div
        className="w-full lg:w-4/6 text-white flex flex-col pr-0 lg:pr-4 gap-24 mt-10 lg:mt-0"
        variants={rightContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {sectionIds.map((section) => (
          <motion.div
            key={section}
            ref={refs[section]}
            variants={rightItemVariants}
            className="scroll-mt-32"
          >
            {section === "Experience" && <ExperiencePage />}
            {section === "Education" && <EducationPage />}
            {section === "Projects" && <ProjectPage />}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
