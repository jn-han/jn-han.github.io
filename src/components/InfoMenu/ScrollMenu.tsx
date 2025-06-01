"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import {
  menuContainerVariants,
  menuItemVariants,
  sectionIds,
  SectionId,
} from "../../types/variants";

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
      className="hidden lg:block text-white sticky top-32 self-start w-full"
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
      </motion.div>

      {/* Menu Items */}
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
    </motion.div>
  );
}
