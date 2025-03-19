"use client";
import Taskbar from "./components/Taskbar";
import HomePage from "./components/HomePage";
import ProjectPage from "./components/ProjectPage";
import EducationPage from "./components/EducationPage";
import ContactPage from "./components/ContactPage";
import { usePathname } from "next/navigation";
import { config } from "@fortawesome/fontawesome-svg-core";
import { useState, useEffect } from "react";
import { useGradient } from "../../contexts/GradientContexts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import ThemeBtn from "./components/ThemeBtn";
import { useDarkMode } from "../../contexts/DarkModeContexts";

config.autoAddCss = false;

export default function Home() {
  const { darkMode, setDarkMode } = useDarkMode();
  const { gradientStyle } = useGradient();

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="relative bg-background snap-y">
        <div
          style={gradientStyle}
          className="absolute inset-0 pointer-events-none transition-all duration-100"
        />

        <div className="relative z-10">
          <ThemeBtn />
          <Taskbar />
          <HomePage />
          <ProjectPage />
          <ContactPage />
        </div>
      </main>
    </div>
  );
}
