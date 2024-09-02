// ThemeContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

// Create a context with a default value
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Get the user's preferred theme from localStorage or default to dark mode
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    // Apply the theme to the body element
    document.body.className = theme;
    // Save the user's theme preference in localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    // Toggle between 'light' and 'dark' theme
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
