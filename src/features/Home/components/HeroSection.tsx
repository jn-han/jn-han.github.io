import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import contactLinks from "@/config/contactLinks";
import { itemVariants, sectionVariants } from "../Motion";
import { FloatingAccent } from "@/components/FloatingAccent";
import { heroSlides } from "@/types/content";

type PhotoLayout = {
  rotation: number;
  left: number;
  top: number;
  width: number;
};

const HERO_PHOTO_LAYOUTS: [PhotoLayout, PhotoLayout][] = [
  [
    { rotation: -8, left: 0, top: 4, width: 60 },
    { rotation: 6, left: 55, top: 34, width: 42 },
  ],
  [
    { rotation: 7, left: 2, top: 6, width: 42 },
    { rotation: -8, left: 48, top: 30, width: 50 },
  ],
  [
    { rotation: -6, left: 1, top: 2, width: 56 },
    { rotation: 8, left: 58, top: 36, width: 39 },
  ],
  [
    { rotation: 8, left: 4, top: 8, width: 46 },
    { rotation: -7, left: 46, top: 28, width: 50 },
  ],
];

export function HeroSection() {
  const [activeTitle, setActiveTitle] = useState(0);
  const activeSlide = heroSlides[activeTitle];
  const activeLayout =
    HERO_PHOTO_LAYOUTS[activeTitle % HERO_PHOTO_LAYOUTS.length];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveTitle((currentTitle) => (currentTitle + 1) % heroSlides.length);
    }, 2200);

    return () => window.clearInterval(intervalId);
  }, []);

  const photoFigures = activeSlide.images.map((image, imageIndex) => {
    const layout = activeLayout[imageIndex % activeLayout.length];

    return (
      <figure
        key={`${image.src}-${image.caption}-desktop-${imageIndex}`}
        className="absolute rounded-[0.35rem] border border-black/5 bg-white p-2 pb-6 shadow-[0_14px_28px_-16px_rgba(10,17,24,0.55)]"
        style={{
          left: `${layout.left}%`,
          top: `${layout.top}%`,
          width: `${layout.width}%`,
          transform: `rotate(${layout.rotation}deg)`,
          zIndex: imageIndex + 1,
        }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={0}
          height={0}
          unoptimized
          sizes="(min-width: 1024px) 28rem, 70vw"
          className="block h-auto w-full"
        />
        <figcaption className="min-h-[1.9rem] pt-2 text-[0.7rem] font-medium lowercase leading-tight tracking-[0.14em] text-slate/85">
          {image.caption}
        </figcaption>
      </figure>
    );
  });

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-frame pt-14"
    >
      <FloatingAccent
        className="fixed left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 bg-accent/20"
        rangeXVw={46}
        rangeYVh={34}
      />
      <div className="pointer-events-none absolute right-0 top-40 h-64 w-64 rounded-full bg-ink/5 blur-3xl" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-content px-6 pb-24 pt-20 sm:pb-32 sm:pt-40"
      >
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_30rem]">
          <div className="relative z-20">
            <motion.h1
              variants={itemVariants}
              className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight sm:text-7xl"
            >
              joshua nguyen
              <span className="mt-2 block text-accent">
                <span className="relative inline-flex min-h-[1.2em] min-w-[23ch] items-start">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={activeSlide.title}
                      initial={{ opacity: 0, y: 18, filter: "blur(3px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -18, filter: "blur(3px)" }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-0 top-0 whitespace-nowrap"
                    >
                      {activeSlide.title}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-2xl text-xl leading-relaxed text-muted"
            >
              building thoughtful digital experiences
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 border-b border-accent pb-1 text-md font-semibold text-accent transition-colors duration-300 ease-out"
              >
                get in touch
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-xs transition-transform duration-300 ease-out group-hover:translate-x-1"
                />
              </a>
              <div className="flex items-center gap-4 text-muted">
                <a
                  href={contactLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-accent"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-3xl" />
                </a>
                <a
                  href={contactLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-accent"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative z-10 hidden lg:block"
          >
            <div className="relative lg:h-[27rem]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeSlide.title}
                  initial={{ opacity: 0, y: 18, filter: "blur(3px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -18, filter: "blur(3px)" }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                  style={{ willChange: "transform, opacity, filter" }}
                >
                  <div className="h-full">{photoFigures}</div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
