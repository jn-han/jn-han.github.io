import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import PROJECTS from "../config/allProjects-config";
import { FloatingAccent } from "../components/FloatingAccent";

const domainLabel = (link: string) => {
  if (!link.startsWith("http")) {
    return link.replace("/", "") || "internal";
  }

  return link.replace(/^https?:\/\/(www\.)?/, "").split("/")[0];
};

export default function ArchivedPage() {
  return (
    <main className="relative min-h-screen overflow-hidden border-t border-frame px-6 py-20 sm:py-28">
      <FloatingAccent
        className="fixed left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 bg-accent/20"
        rangeXVw={48}
        rangeYVh={34}
      />
      <div className="pointer-events-none absolute right-[-120px] top-1/3 h-72 w-72 rounded-full bg-ink/5 blur-3xl" />

      <section className="relative z-10 mx-auto w-full max-w-content">
        <div className="mb-10">
          <Link
            href="/#work"
            className="text-sm uppercase tracking-[0.14em] text-accent transition hover:text-ink"
          >
            Back
          </Link>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Project Archive
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            Previous builds, experiments, and shipped work collected in one
            place.
          </p>
        </div>

        <div className="space-y-4">
          {PROJECTS.map((project) => (
            <article key={project.name} className="glass-card p-6">
              <div className="relative z-10 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-muted">{project.date}</p>
                  <h2 className="mt-1 text-2xl font-semibold tracking-tight">
                    {project.name}
                  </h2>
                  <p className="text-sm text-muted">{project.place}</p>
                </div>
                <a
                  href={project.link}
                  target={project.link.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    project.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-1 text-muted transition hover:text-accent"
                  aria-label={`Open ${project.name}`}
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>

              <div className="relative z-10 mt-5 flex flex-wrap gap-2">
                {project.builtWith.map((tech) => (
                  <span
                    key={`${project.name}-${tech}`}
                    className="glass-pill px-3 py-1 text-xs text-ink/85"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="relative z-10 mt-5 text-sm text-muted">
                {domainLabel(project.link)}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
