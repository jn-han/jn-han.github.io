// src/app/components/InfoMenu/InfoMenu.tsx
"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ScrollMenu } from "./ScrollMenu";
import { ExperiencePage } from "./ExperiencePage";
import { EducationPage } from "./EducationPage";
import { ProjectPage } from "./ProjectPage";
import {
  sectionIds,
  SectionId,
  rightContainerVariants,
  rightItemVariants,
} from "../../types/variants";
import { useActiveSection } from "./ActiveSectionManager/types";

export function InfoMenu() {
  const expRef = useRef<HTMLDivElement>(null);
  const eduRef = useRef<HTMLDivElement>(null);
  const projRef = useRef<HTMLDivElement>(null);

  const refs: Record<SectionId, React.RefObject<HTMLDivElement>> = {
    Experience: expRef,
    Education: eduRef,
    Projects: projRef,
  };

  const activeSection = useActiveSection(expRef, eduRef, projRef);

  const scrollTo = (id: SectionId) => {
    refs[id].current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="projects"
      className="flex flex-col lg:flex-row w-full items-start justify-between
                 px-6 lg:px-44 pt-32 pb-10 min-h-screen"
    >
      {/* Left Sticky Menu */}
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
