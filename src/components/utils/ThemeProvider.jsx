import React, { createContext, useContext, useState, useEffect } from 'react';
import { dark, light } from './Theme'; // Your theme objects

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Get the user's preferred theme from localStorage or default to dark mode
  // const [theme, setTheme] = useState(() => localStorage.getItem('theme') || dark);
  // Get the user's preferred theme from localStorage or default to dark mode
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : dark;
  });

  useEffect(() => {
    // Apply the theme to the elements.
    document.documentElement.style.setProperty('--banner-bg', theme.bannerbg);
    document.documentElement.style.setProperty('--music-bg', theme.musicbg);
    document.documentElement.style.setProperty('--music-bx-bg', theme.musicbxbg);
    document.documentElement.style.setProperty('--music-p-color', theme.musicpcolor);
    document.documentElement.style.setProperty('--music-h2-color', theme.musich2color);
    document.documentElement.style.setProperty('--spotify-item-bg', theme.spotifyitembg);
    document.documentElement.style.setProperty('--project-bg', theme.projectbg);
    document.documentElement.style.setProperty('--project-p-color', theme.projectpcolor);
    document.documentElement.style.setProperty('--grad-color-0', theme.gradcolor0);
    document.documentElement.style.setProperty('--grad-color-1', theme.gradcolor1);
    document.documentElement.style.setProperty('--books-bg', theme.booksbg);
    // document.documentElement.style.setProperty('--skills-Background', theme.skillsBackground);
    // document.documentElement.style.setProperty('--text-color', theme.text);
    console.log(theme.bannerBackground);
    console.log(theme.skillsBackground);
    console.log(theme.primaryText);
    console.log(theme.secondaryText);
    console.log(theme.text);
    console.log(theme.link);
    // Save the user's theme preference in localStorage
    // localStorage.setItem('theme', theme);
    localStorage.setItem('theme', JSON.stringify(theme));
    console.log("theme changed " + theme.variant);
  }, [theme]);

  const toggleTheme = () => {
    // Toggle between 'light' and 'dark' theme
    setTheme((prevTheme) => (prevTheme === dark ? light : dark));
    console.log("inside the toggleTheme()");
    // console.log("prevTheme: " + prevTheme);
    // console.log("Condition: " + (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
