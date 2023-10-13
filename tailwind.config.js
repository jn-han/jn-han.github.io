/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-nunito)"],
      },
      colors: {
        background: "#0a192f",
        foreground: "#829399",
        accent: "#233554",
        blue: "#8EC9ED",
        green: "#64ffda",
        darkTeal: "#42B896",
        white: "#e6f1ff",
        lightSlate: "#ccd6f6",
        slate: "#a8b2d1",
        lightNavy: "#112240",
      },
      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
        square: "square",
        roman: "upper-roman",
        arrow: "arrow",
      },
    },
  },
  plugins: [],
};
