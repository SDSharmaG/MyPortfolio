// components/ThemeToggle.js
import React, { useContext } from "react";
import { ThemeContext } from "../App";
import "../assets/css/ThemeToggle.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <i className="bi bi-sun-fill"></i>
      ) : (
        <i className="bi bi-moon-fill"></i>
      )}
    </button>
  );
};

export default ThemeToggle;
