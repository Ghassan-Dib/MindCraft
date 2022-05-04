import React from 'react';
import { useState } from 'react';
import { ThemeContext } from '.././theme/themeContext';

export const ThemeProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [theme, setTheme] = useState<string>('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return <ThemeContext.Provider value={{ theme, themeToggler }}>{children}</ThemeContext.Provider>;
};
