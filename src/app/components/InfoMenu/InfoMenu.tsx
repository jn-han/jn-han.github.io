// src/app/components/InfoMenu/InfoMenu.tsx
"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
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

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
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
             px-4 sm:px-6 md:px-10 lg:px-20 xl:px-36 pt-32 pb-32"
    >
      {/* Mobile header (shows only on small screens) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="block lg:hidden mb-12"
      >
        <h2 className="text-2xl text-lightSlate">Joshua Nguyen</h2>
        <h3 className="text-xl text-slate">Software Developer</h3>
      </motion.div>

      {/* Left sticky menu (hidden on small screens) */}
      <div className="hidden lg:sticky lg:top-32 lg:block lg:w-1/4">
        <ScrollMenu refs={refs} active={activeSection} onSelect={scrollTo} />
      </div>

      {/* Right Content Area */}
      <motion.div
        className="w-full lg:w-4/6 text-white flex flex-col pr-0 lg:pr-4 gap-24 mt-10 lg:mt-0"
        variants={rightContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {sectionIds.map((section) => {
          const ref = refs[section];
          const inView = useInView(ref, { amount: 0.5 });

          return (
            <motion.div
              key={section}
              ref={ref}
              variants={rightItemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="lg:scroll-mt-32"
            >
              {section === "Experience" && <ExperiencePage inView={inView} />}
              {section === "Education" && <EducationPage inView={inView} />}
              {section === "Projects" && <ProjectPage inView={inView} />}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Horizontal expanding bottom nav */}
      {/* Horizontal expanding bottom nav */}
      <div className="fixed bottom-4 left-4 right-4 z-50 lg:hidden">
        <div className="flex items-center">
          {/* Hamburger Button */}
          <motion.button
            onClick={toggleMenu}
            className="w-12 h-12 rounded-full border border-green bg-background text-white shadow-lg flex items-center justify-center relative"
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute w-6 h-0.5 bg-white rounded origin-center"
              animate={{
                rotate: menuOpen ? 45 : 0,
                y: menuOpen ? 0 : -6,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute w-6 h-0.5 bg-white rounded origin-center"
              animate={{
                rotate: menuOpen ? -45 : 0,
                y: menuOpen ? 0 : 6,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* Expanding Nav Items (directly beside toggle) */}
          <AnimatePresence>
            {menuOpen && (
              <motion.ul
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                }}
                className="flex gap-2 ml-3"
              >
                {sectionIds.map((id) => (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 15,
                    }}
                  >
                    <button
                      onClick={() => {
                        scrollTo(id);
                        setMenuOpen(false);
                      }}
                      className="px-4 py-2 rounded-full border bg-background border-lightSlate text-green shadow-md text-sm capitalize whitespace-nowrap"
                    >
                      {id}
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
