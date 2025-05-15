"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useDarkMode } from "./DarkModeContexts";

const GradientContext = createContext();

export function GradientProvider({ children }) {
  const { darkMode } = useDarkMode(); // Get dark mode state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const gradientStyle = {
    background: `radial-gradient(800px at ${mousePos.x}px ${
      mousePos.y + scrollY
    }px, ${darkMode ? "rgba(29, 78, 216, 0.15)" : "#bcc0cc"}, transparent 30%)`,
  };

  return (
    <GradientContext.Provider value={{ gradientStyle }}>
      {children}
    </GradientContext.Provider>
  );
}

export function useGradient() {
  return useContext(GradientContext);
}
