/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        base: "rgb(from var(--color-base) r g b / <alpha-value>)",
        ink: "rgb(from var(--color-ink) r g b / <alpha-value>)",
        muted: "rgb(from var(--color-muted) r g b / <alpha-value>)",
        frame: "rgb(from var(--color-frame) r g b / <alpha-value>)",
        accent: "rgb(from var(--color-accent) r g b / <alpha-value>)",
        "accent-soft":
          "rgb(from var(--color-accent-soft) r g b / <alpha-value>)",
        background: "rgb(from var(--background) r g b / <alpha-value>)",
        foreground: "rgb(from var(--foreground) r g b / <alpha-value>)",
        blue: "rgb(from var(--blue) r g b / <alpha-value>)",
        green: "rgb(from var(--green) r g b / <alpha-value>)",
        darkTeal: "rgb(from var(--darkTeal) r g b / <alpha-value>)",
        white: "rgb(from var(--white) r g b / <alpha-value>)",
        lightSlate: "rgb(from var(--lightSlate) r g b / <alpha-value>)",
        slate: "rgb(from var(--slate) r g b / <alpha-value>)",
        lightNavy: "rgb(from var(--lightNavy) r g b / <alpha-value>)",
      },
      boxShadow: {
        panel: "0 30px 35px -30px rgba(10, 17, 24, 0.45)",
      },
      maxWidth: {
        content: "80rem",
      },
    },
  },
  plugins: [],
};
