import type { FeaturedWork } from "../types/content";

const FEATURED_WORK: FeaturedWork[] = [
  {
    name: "Freyt",
    date: "Apr 2025",
    description:
      "logistics operations platform that tracks shipping and receiving KPIs with clear visual reporting for retail teams.",
    builtWith: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    link: "/notes",
  },
  {
    name: "Arc'Connect",
    date: "May 2025",
    description:
      "arc’teryx-inspired application connecting community through local events.",
    builtWith: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    link: "/notes",
  },
  {
    name: "Plotgen",
    date: "Sept 2023",
    description:
      "AI storytelling tool built during Hack the North to help creators generate narrative ideas with LLM and diffusion workflows.",
    builtWith: ["Next.js", "Tailwind CSS", "Cohere", "BentoML"],
    link: "https://devpost.com/software/plotgen",
  },
  {
    name: "Inteflow",
    date: "July 2023",
    description:
      "iOS assistant that scans math problems and provides guided, step-by-step explanations through a conversational interface.",
    builtWith: ["SwiftUI", "OpenAI", "Xcode", "iOS"],
    link: "https://devpost.com/software/inteflow",
  },
  {
    name: "Kizuna",
    date: "Jan 2023",
    description:
      "community-focused streaming product using decentralized infrastructure to improve audience engagement and playback collaboration.",
    builtWith: ["React", "Livepeer", "Lens Protocol", "CSS"],
    link: "https://devpost.com/software/kizuna-gevr8p",
  },
];

export default FEATURED_WORK;
