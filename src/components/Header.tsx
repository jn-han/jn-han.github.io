import type { MouseEvent } from "react";
import Link from "next/link";

export function Header() {
  const handleScrollToTop = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
    window.history.replaceState(null, "", "/");
  };

  const handleSectionScroll = (event: MouseEvent<HTMLAnchorElement>) => {
    const targetSelector = event.currentTarget.getAttribute("href");

    if (!targetSelector?.startsWith("#")) {
      return;
    }

    const targetSection = document.querySelector<HTMLElement>(targetSelector);

    if (!targetSection) {
      return;
    }

    event.preventDefault();
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    targetSection.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", targetSelector);
  };

  return (
    <header className="glass-nav sticky top-3 z-40 mx-auto w-[calc(100%-1.5rem)] max-w-content rounded-full">
      <div className="mx-auto flex h-12 max-w-content items-center justify-between px-5 sm:px-6">
        <Link
          href="/"
          className="text-md font-semibold tracking-tight"
          onClick={handleScrollToTop}
        >
          jn
        </Link>
        <nav className="flex items-center gap-6 text-[11px] tracking-[0.14em] text-muted sm:text-sm">
          <a
            className="transition hover:text-accent"
            href="#work"
            onClick={handleSectionScroll}
          >
            projects
          </a>
          <a
            className="transition hover:text-accent"
            href="#about"
            onClick={handleSectionScroll}
          >
            about
          </a>
          <a
            className="transition hover:text-accent"
            href="#contact"
            onClick={handleSectionScroll}
          >
            contact
          </a>
        </nav>
      </div>
    </header>
  );
}
