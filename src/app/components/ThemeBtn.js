import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useDarkMode } from "../../../contexts/DarkModeContexts";

const ThemeBtn = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <button
      onClick={() => {
        setDarkMode(!darkMode);
      }}
      className="fixed top-4 right-4 z-50 p-2 bg-gray-200 dark:bg-accent rounded-full shadow-md transition-all duration-300 flex items-center justify-center w-10 h-10"
    >
      {darkMode ? (
        <Image
          src="/lightMode-icon.svg"
          alt="Light Mode"
          width={24}
          height={24}
          className="transition-all dark:invert duration-300"
        />
      ) : (
        <FontAwesomeIcon
          icon={faMoon}
          className="text-gray-600 dark:text-slate w-6 h-6 transition-all duration-300"
        />
      )}
    </button>
  );
};

export default ThemeBtn;
