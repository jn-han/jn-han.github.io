export const menuContainerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.4,
      ease: "linear",
      when: "beforeChildren",
    },
  },
};

export const menuItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "linear" } },
};

export const rightContainerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.5,
      ease: "linear",
    },
  },
};

export const rightItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "linear" },
  },
};

export const sectionIds = ["Experience", "Education", "Projects"] as const;

export type SectionId =
  | "Experience"
  | "Education"
  | "Projects"
  | "Personal Projects"
  | "Hackathons";
