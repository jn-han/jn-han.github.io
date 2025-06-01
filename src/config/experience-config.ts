const EXPERIENCE: {
  company: string;
  title?: string;
  location?: string;
  date: string;
  responsibilities?: string[];
  skills?: string[];
  link: string;
}[] = [
  {
    company: "BC Cancer",
    title: "Software Developer + Research Assistant",
    location: "Vancouver, BC",
    date: "Feb 2025 – Present",
    responsibilities: [
      "Redesigned user-facing interfaces in Figma to improve usability and accessibility across dermatology data workflows.",
      "Implemented new UI components using React, TypeScript, and Bootstrap 5",
      "Collaborated in a lean team of 3 developers and researchers to deploy clinical tools meeting privacy and information security standards.",
    ],
    skills: [
      "React",
      "TypeScript",
      "Express.js",
      "SQL",
      "Bootstrap 5",
      "CSS",
      "Figma",
      "Node.js",
      "REST APIs",
      "Git",
    ],
    link: "https://www.bccrc.ca/",
  },
  {
    company: "UBC BEST",
    title: "Software Engineer, Muscle 2 Movement",
    location: "Vancouver, BC",
    date: "Sep 2024 – Present",
    responsibilities: [
      "Developed and shipped core features for a cross-platform health tracking app using Flutter and Dart, supporting individuals with neurological and physical impairments",
      "Built interactive Unity-based cognitive and motor skill games and integrated them into the Flutter app using platform channels.",
      "Collaborated in a fast-paced, agile team of 8 (including clinical advisors and developers) with bi-weekly sprint reviews and shared code ownership.",
      "Contributed to technical planning, UI design input, and backend API integration to ensure seamless user experience.",
      "Maintained clean Git workflows and wrote unit-tested, production-ready code aligned with accessibility and healthcare compliance standards.",
    ],
    skills: [
      "Flutter",
      "Dart",
      "Unity",
      "Cross-Platform Engineering",
      "REST APIs",
      "Agile Development",
      "Git",
    ],
    link: "https://www.linkedin.com/company/ubcbest/?originalSubdomain=ca",
  },
];

export default EXPERIENCE;
