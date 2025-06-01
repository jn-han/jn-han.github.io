"use client";
import { MainPage } from "../components/MainPage";
import { config } from "@fortawesome/fontawesome-svg-core";
// import { useGradient } from "../../contexts/GradientContexts";
import { useDarkMode } from "../../contexts/DarkModeContexts";

config.autoAddCss = false;

export default function Home() {
  const { darkMode, setDarkMode } = useDarkMode();
  // const { gradientStyle } = useGradient();

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="relative bg-background snap-y">
        <div
          // style={gradientStyle}
          className="absolute inset-0 pointer-events-none transition-all duration-100"
        />

        <div className="relative z-10 min-h-screen">
          <MainPage />
        </div>
      </main>
    </div>
  );
}
