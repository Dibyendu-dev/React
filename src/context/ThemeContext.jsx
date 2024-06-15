// ThemeContext.js
import  { createContext, useState } from 'react';

// Create the ThemeContext (the radio channel)
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Initial theme is 'light'

  // Updater function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}> {/* Pass both theme and toggleTheme */}
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
