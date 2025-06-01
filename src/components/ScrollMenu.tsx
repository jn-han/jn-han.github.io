"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import {
  menuContainerVariants,
  menuItemVariants,
  sectionIds,
  SectionId,
} from "../types/variants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface Props {
  active: SectionId | null;
  onSelect: (id: SectionId) => void;
}

export function ScrollMenu({ active, onSelect }: Props) {
  const menuRef = React.useRef(null);
  const menuInView = useInView(menuRef, { amount: 0.4 });

  const isSelected = (section: SectionId) => active === section;

  return (
    <motion.div
      ref={menuRef}
      variants={menuContainerVariants}
      initial="hidden"
      animate={menuInView ? "visible" : "hidden"}
      className="text-white sticky top-32 self-start w-full relative min-h-[500px] hidden lg:block"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={menuInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-5xl text-green">Joshua Nguyen</h2>
        <h3 className="text-2xl text-lightSlate">Software Developer</h3>
        <p className="text-slate text-lg">
          Passionate about all things tech and software development
        </p>
        {/* Social icons - Desktop only */}
        <div className=" w-full flex gap-4 justify-start my-4">
          <a
            href="https://github.com/jn-han"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-4xl text-slate hover:text-green hover:-translate-y-0.5  transition"
            />
          </a>
          <a
            href="https://linkedin.com/in/jn-han"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-4xl text-slate hover:text-green hover:-translate-y-0.5 transition"
            />
          </a>
        </div>
      </motion.div>

      {/* Menu Items */}
      <div>
        {sectionIds.map((section) => (
          <motion.div
            key={section}
            variants={menuItemVariants}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.15, ease: "linear" }}
            onClick={() => onSelect(section)}
            className={`mb-4 p-3 cursor-pointer w-fit transition rounded-sm  ${
              isSelected(section)
                ? "border-l-4 border-green"
                : "border-l-4 border-transparent"
            }`}
          >
            <p
              className={`text-lg transition ${
                isSelected(section) ? "text-green" : "hover:text-green"
              }`}
            >
              {section}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
