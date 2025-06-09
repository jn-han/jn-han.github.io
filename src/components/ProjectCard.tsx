import React, { useRef } from "react";
import { motion } from "framer-motion";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

export interface Project {
  name: string;
  src: any; // Imported Lottie JSON
  link: string;
}

interface ProjectCardProps {
  item: Project;
  variants?: any;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ item, variants }) => {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  const handleMouseEnter = () => {
    lottieRef.current?.setDirection(1);
    lottieRef.current?.play();
  };

  const handleMouseLeave = () => {
    lottieRef.current?.setDirection(-1);
    lottieRef.current?.play();
  };

  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.01, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18)" }}
      transition={{ duration: 0.15, ease: "linear" }}
      className="flex flex-col rounded-2xl overflow-hidden cursor-pointer shadow hover:shadow-lg"
      onClick={() => window.open(item.link, "_blank", "noopener,noreferrer")}
    >
      <div
        className="rounded-lg overflow-clip"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Lottie
          lottieRef={lottieRef}
          animationData={item.src}
          loop={false}
          autoplay={false}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </motion.div>
  );
};
