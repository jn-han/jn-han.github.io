import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCopy,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDev,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import contactLinks from "@/config/contactLinks";
import { itemVariants, sectionVariants } from "../Motion";
import { getEmailLabel } from "@/utils/utils";
import { FloatingAccent } from "@/components/FloatingAccent";

export function ContactSection() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">(
    "idle",
  );
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const socialLinks = [
    { label: "GitHub", href: contactLinks.github, icon: faGithub },
    { label: "LinkedIn", href: contactLinks.linkedin, icon: faLinkedin },
    { label: "Devpost", href: contactLinks.devpost, icon: faDev },
  ];
  const emailAddress = getEmailLabel(contactLinks.email);
  const tileHover = { y: -2, scale: 1.01 };
  const tileTap = { scale: 0.99 };
  const tileTransition = { duration: 0.2, ease: [0.22, 1, 0.36, 1] as const };
  const tileClassName =
    "group glass-inset flex items-center gap-2.5 border border-lightSlate/75 p-4 text-sm font-medium text-ink/85 transition-colors duration-300 hover:border-accent/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70";
  const hoverColorClass =
    "transition-colors duration-300 ease-out group-hover:text-accent";
  const hoverIconClass =
    "transition-[color,transform] duration-300 ease-out group-hover:-translate-y-0.5 group-hover:text-accent";
  const copyStatus =
    copyState === "copied"
      ? { label: "Copied", icon: faCheck, className: "text-accent" }
      : copyState === "error"
        ? { label: "Copy failed", icon: faCopy, className: "text-ink/70" }
        : { label: "Copy email", icon: faCopy, className: "text-ink/70" };

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const handleCopyEmail = async () => {
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(emailAddress);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = emailAddress;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      setCopyState("copied");
    } catch {
      setCopyState("error");
    }

    resetTimerRef.current = setTimeout(() => {
      setCopyState("idle");
      resetTimerRef.current = null;
    }, 1800);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <FloatingAccent
        className="fixed left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 bg-accent/15"
        rangeXVw={44}
        rangeYVh={30}
      />
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-content px-6"
      >
        <div className="glass-card p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-accent/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-56 w-56 rounded-full bg-ink/10 blur-3xl" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.08fr_1fr] lg:items-end">
            <motion.div variants={itemVariants}>
              <p className="text-xs lowercase tracking-[0.18em] text-accent">
                contact
              </p>
              <motion.h2
                variants={itemVariants}
                className="mt-4 max-w-xl text-3xl tracking-tight sm:text-4xl"
              >
                lets connect!
              </motion.h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed lowercase text-ink/80 sm:text-lg">
                building something interesting or just want to chat? send me a
                message.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <motion.button
                type="button"
                onClick={handleCopyEmail}
                aria-label={`Copy ${emailAddress} to clipboard`}
                whileHover={tileHover}
                whileTap={tileTap}
                transition={tileTransition}
                className={`${tileClassName} w-full justify-between text-left`}
              >
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className={`text-base text-ink/90 ${hoverIconClass}`}
                  />
                  <div>
                    <p
                      className={`text-xs uppercase tracking-[0.16em] text-ink/65 ${hoverColorClass}`}
                    >
                      Email
                    </p>
                    <p
                      className={`text-sm font-semibold text-ink ${hoverColorClass}`}
                    >
                      {emailAddress}
                    </p>
                  </div>
                </div>
                <span className="inline-flex min-w-[6.75rem] justify-end">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={copyState}
                      initial={{ opacity: 0, y: 3 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -3 }}
                      transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold ${copyStatus.className}`}
                    >
                      <FontAwesomeIcon icon={copyStatus.icon} className="text-xs" />
                      {copyStatus.label}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.button>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={tileHover}
                    whileTap={tileTap}
                    transition={tileTransition}
                    className={tileClassName}
                  >
                    <FontAwesomeIcon
                      icon={link.icon}
                      className={`text-base text-ink/90 ${hoverIconClass}`}
                    />
                    <span className={hoverColorClass}>{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
