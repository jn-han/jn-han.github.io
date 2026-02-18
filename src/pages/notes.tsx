import Link from "next/link";
import { FloatingAccent } from "../components/FloatingAccent";

export default function NotesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden border-t border-frame px-6 py-28 sm:py-36">
      <FloatingAccent
        className="fixed left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 bg-accent/20"
        rangeXVw={46}
        rangeYVh={34}
      />
      <div className="pointer-events-none absolute right-[-80px] bottom-16 h-64 w-64 rounded-full bg-ink/5 blur-3xl" />

      <section className="glass-card relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center p-10 text-center sm:p-14">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">Updates</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Product notes in progress
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          This section is under active development. I am currently refining
          project write-ups and adding detailed case studies.
        </p>

        <Link
          className="glass-pill mt-8 inline-flex items-center px-5 py-2 text-sm font-semibold text-accent transition hover:-translate-y-0.5"
          href="/"
        >
          Back to home
        </Link>
      </section>
    </main>
  );
}
