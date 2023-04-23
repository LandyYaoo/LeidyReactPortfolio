import React, { useState, useEffect } from "react";
import { BsSunFill, BsSun } from "react-icons/bs";
import stylesTheme from "../css/ThemeToggle.module.css";

function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
      <button className={stylesTheme.changeTheme} onClick={toggleTheme}>
        {theme === "light" ? <BsSunFill size={20}/> : <BsSun size={20}/> }
      </button>
  );
}

export default ThemeToggle;
