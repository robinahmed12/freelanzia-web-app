import React from "react";
import { Sun, Moon } from "lucide-react";
import useTheme from "../context/theme";

const DarkModeBtn = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className={`
        relative w-14 h-8 md:w-16 md:h-9 lg:w-20 lg:h-10 
        flex items-center px-1 rounded-full 
        bg-gradient-to-r from-orange-500 to-orange-600 
        dark:from-gray-700 dark:to-gray-800
        shadow-md hover:shadow-lg 
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-orange-400
        hover:scale-105 active:scale-95
      `}
      aria-label={`Toggle ${darkMode ? "light" : "dark"} mode`}
    >
      {/* Toggle knob */}
      <div
        className={`
          absolute left-1 top-1/2 transform -translate-y-1/2 
          w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 
          bg-white rounded-full flex items-center justify-center 
          transition-all duration-500
          ${
            darkMode
              ? "translate-x-6 md:translate-x-7 lg:translate-x-10"
              : "translate-x-0"
          }
          shadow-md
        `}
      >
        {darkMode ? (
          <Moon
            size={16}
            className="text-gray-800 md:w-5 md:h-5 lg:w-6 lg:h-6"
          />
        ) : (
          <Sun
            size={16}
            className="text-orange-500 md:w-5 md:h-5 lg:w-6 lg:h-6"
          />
        )}
      </div>

      {/* Icons on sides (hidden on mobile, visible on larger screens) */}
      <div className="hidden md:flex w-full justify-between items-center px-2 text-white">
        <Sun size={14} className="lg:w-4 lg:h-4" />
        <Moon size={14} className="lg:w-4 lg:h-4" />
      </div>
    </button>
  );
};

export default DarkModeBtn;
