import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

function useIsLgUp() {
  const [isLgUp, setIsLgUp] = useState(false);
  React.useEffect(() => {
    const check = () => setIsLgUp(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isLgUp;
}

export function InfoMenu() {
  const [activeSection, setActiveSection] = useState<SectionId>("Experience");
  const [menuOpen, setMenuOpen] = useState(false);
  const isLgUp = useIsLgUp();

  // On menu click, change active section and close mobile menu if open
  const handleSectionSelect = (id: SectionId) => {
    setActiveSection(id);
    setMenuOpen(false);
  };

  // For tab content switching
  const sectionComponents: Record<SectionId, React.ReactNode> = {
    Experience: <ExperiencePage inView={true} />,
    Education: <EducationPage inView={true} />,
    Projects: <ProjectPage inView={true} />,
  };

  return (
    <section
      id="projects"
      className="flex flex-col lg:flex-row w-full items-start justify-between
                 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-36 pt-8 sm:pt-10 lg:pt-32 pb-20"
    >
      {/* Mobile header */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="block lg:hidden"
      >
        <h2 className="text-3xl text-green">Joshua Nguyen</h2>
        <h3 className="text-lg text-lightSlate">Software Developer</h3>
        <p className="text-slate">
          Passionate about all things tech and software development
        </p>
      </motion.div>

      {/* Left sticky nav for large screens */}
      <div className="hidden lg:sticky lg:top-32 lg:block lg:w-1/4">
        <ScrollMenu active={activeSection} onSelect={handleSectionSelect} />
      </div>

      {/* Right: Only show the selected section */}
      <motion.div
        className="w-full lg:w-4/6 text-white flex flex-col pr-0 lg:pr-4 gap-24 mt-10 lg:mt-0"
        variants={rightContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            variants={rightItemVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="w-full"
          >
            {sectionComponents[activeSection]}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Mobile horizontal expanding nav */}
      <div className="fixed bottom-4 left-4 right-4 z-50 lg:hidden">
        <div className="flex items-center">
          {/* Toggle button */}
          <motion.button
            onClick={() => setMenuOpen((prev) => !prev)}
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

          {/* Nav items */}
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
                      onClick={() => handleSectionSelect(id)}
                      className={`px-4 py-2 rounded-full border bg-background border-lightSlate text-green shadow-md text-sm capitalize whitespace-nowrap ${
                        activeSection === id ? "font-bold border-green" : ""
                      }`}
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
