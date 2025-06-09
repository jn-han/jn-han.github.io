import kizuna from "../animations/kizuna.json";
import inteflow from "../animations/inteflow.json";
import plotgen from "../animations/plotgen.json";
import freyt from "../animations/freyt.json";
import beyondElectric from "../animations/beyondElectric.json";

const PROJECTS = [
  {
    isHackathon: true,
    name: "plotgen",
    date: "Sept 2023",
    place: "Hack the North",
    description:
      "'plotgen' drew inspiration from the storytellers and artists who excite, move and thrill us with the magic that can be found in their work. We wanted to empower others with the same kind of magic that is now realizable with AI developments like LLMs and Diffusion Models. Seeing how new tools from companies like BentoML and Cohere make it easy for developers to build products from these developments, we knew we had to do something in the space of generative AI.",
    award: '"Best Project Using BentoML"',
    builtWith: [
      "Next.js",
      "Tailwind CSS",
      "Cohere",
      "BentoML",
      "Stable Diffusion",
    ],
    src: plotgen,
    link: "https://devpost.com/software/plotgen",
  },
  {
    isHackathon: true,
    name: "kizuna",
    date: "Feb 2023",
    place: "NwHacks",
    description:
      "'kizuna' is a web application developed for communities as a solution to the lack of audience engagement features in common streaming platforms such as YouTube and Twitch. Using both Livepeer and Lens Protocol, our goal was to bring the lens community together to stream, watch, and playback video on a decentralilzed network. ",
    award: '"Best Video Application"',
    builtWith: [
      "React.JS",
      "CSS",
      "Livepeer",
      "Lens Protocol",
      "Decentralized Tech",
      "LPT",
    ],
    src: kizuna,
    link: "https://devpost.com/software/kizuna-gevr8p",
  },
  {
    isHackathon: true,
    name: "inteflow",
    date: "Aug 2023",
    place: "Ignition Hacks",
    description:
      "'inteflow' is an iOS mobile app designed to streamline your math problem-solving experience. It's your personal problem-solving companion that scans both formula and text-based math problems. Once scanned, inteflow breaks down these problems, offering detailed explanations that guide you to the solution through a chatbot. It also offers a wide range of supplementary resources, curated practice problems and textbooks to aid in reinforcing your understanding.",
    award: "Finalist",
    builtWith: ["Swift", "SwiftUI", "Xcode", "OpenAI"],
    src: inteflow,
    link: "https://devpost.com/software/inteflow",
  },
  {
    isHackathon: false,
    name: "Freyt",
    date: "May 2025 - Present",
    place: "",
    description:
      "Drawing on my hands-on experience in shipping and receiving logistics at Aritzia, I developed Freyt to streamline and optimize retail logistics operations. Freyt enables businesses to efficiently track, log, and visualize essential key performance indicators (KPIs) related to shipping and receiving. By providing actionable insights and clear data visualizations, the platform empowers managers to identify operational bottlenecks, uncover process improvement opportunities, and recognize high-performing employees. Over time, Freyt aims to support data-driven decision making, helping retail teams enhance productivity, drive accountability, and continuously improve their logistics workflows.",
    award: "",
    builtWith: ["NextJS", "JavaScript", "Tailwind", "MongoDB"],
    src: freyt,
    link: "/notes",
  },
  // {
  //   isHackathon: false,
  //   name: "Tournament Tracker",
  //   date: "Just starting :)",
  //   place: "",
  //   description:
  //     "After years of playing competitive volleyball, I noticed a significant gap: there was no user-friendly digital platform for organizing and managing tournament draws for both organizers and players. This inspired me to develop an all-in-one application tailored to the needs of volleyball leagues and tournaments.",
  //   award: "",
  //   builtWith: ["NextJS", "REST", "Tailwind"],
  //   src: kizuna,
  //   link: "/notes",
  //   // The app streamlines the entire tournament experience. Organizers can easily communicate essential information, such as court assignments, schedules, and venue details. Players, in turn, can log their match results through a peer verification system, ensuring that scores are accurate and mutually agreed upon. The platform then automatically updates court availability, tracks which teams advance or are eliminated, and provides real-time updates for all participants. The result is a transparent, efficient, and intuitive tool designed to simplify volleyball event management for everyone involved.
  // },
  {
    isHackathon: false,
    name: "Beyond Electric",
    date: "May 2018 - Present",
    place: "",
    description:
      "As one of my first personal projects, I developed and continue to maintain a website for my father's company, Beyond Electric, based in the Lower Mainland of British Columbia. The primary motivation was to reduce business expenses by eliminating the need for costly website builders. By creating a custom solution, I was able to save my family’s company approximately 95% annually compared to their previous website costs.",
    award: "",
    builtWith: ["NextJS", "REST", "Tailwind"],
    src: beyondElectric,
    link: "https://www.beyondelectric.ca",
  },
];

export default PROJECTS;
