import { motion } from "framer-motion";
import EXPERIENCE, { expertise } from "@/config/experience-config";
import { itemVariants, sectionVariants } from "../Motion";

export function AboutSection() {
  return (
    <section id="about" className="border-b border-frame py-20 sm:py-28">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid max-w-content gap-14 px-6 lg:grid-cols-[1.1fr_1fr]"
      >
        <motion.div variants={itemVariants}>
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            About
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            I&apos;m a software developer based in Vancouver with a strong
            interest in building products that are both technically solid and
            easy to use.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            My work sits at the intersection of engineering and design. I enjoy
            solving complex problems, shaping user-facing details, and shipping
            reliable software from concept to production.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Outside of coding, I spend time on side projects, new product ideas,
            and exploring ways to improve team workflows.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-10">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-accent">
              Expertise
            </p>
            <div className="glass-card mt-5 divide-y divide-frame p-5">
              {expertise.map((item) => (
                <div
                  key={item.area}
                  className="relative z-10 grid grid-cols-[110px_1fr] gap-4 py-3 text-sm"
                >
                  <span className="font-semibold">{item.area}</span>
                  <span className="text-muted">{item.stack}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              Experience
            </p>
            <div className="glass-card mt-5 space-y-4 p-5">
              {EXPERIENCE.map((role) => (
                <div
                  key={`${role.company}-${role.date}`}
                  className="relative z-10"
                >
                  <p className="font-semibold">{role.company}</p>
                  <p className="text-sm text-muted">{role.title}</p>
                  <p className="text-xs text-muted">{role.date}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
