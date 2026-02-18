import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import FEATURED_WORK from "@/config/featured-work-config";
import { itemVariants, sectionVariants } from "../Motion";
import { prettifyTitle, summary } from "@/utils/utils";

export function WorkSection() {
  return (
    <section id="work" className="border-b border-frame py-20 sm:py-28">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        className="mx-auto max-w-content px-6"
      >
        <motion.h2
          variants={itemVariants}
          className="max-w-2xl text-4xl tracking-tight sm:text-5xl"
        >
          projects
        </motion.h2>

        <div className="mt-12 space-y-4">
          {FEATURED_WORK.map((project) => (
            <motion.a
              key={project.name}
              href={project.link}
              target={project.link.startsWith("http") ? "_blank" : "_self"}
              rel={
                project.link.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              aria-label={`Open ${prettifyTitle(project.name)}`}
              variants={itemVariants}
              whileHover={{
                y: -4,
                scale: 1.01,
                boxShadow: "0 22px 32px -24px rgba(10, 17, 24, 0.32)",
              }}
              whileTap={{ scale: 0.998 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="work-glass-card group block p-6 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
            >
              <div className="relative z-10 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-accent lowercase">
                    {prettifyTitle(project.name)}
                  </h3>
                  <p className="mt-1 text-sm ">{project.date}</p>
                </div>
                <span className="text-ink/70 transition-colors duration-300 group-hover:text-accent">
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="text-sm"
                  />
                </span>
              </div>

              <p className="relative z-10 mt-5 max-w-4xl text-[0.95rem] font-medium leading-relaxed text-lightSlate lowercase">
                {summary(project.description)}
              </p>

              <div className="relative z-10 mt-5 flex flex-wrap gap-2">
                {project.builtWith.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="glass-pill px-3 py-1 text-xs font-medium text-ink/85"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
