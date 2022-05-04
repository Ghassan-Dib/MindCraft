import { createContext, useContext } from "react";

type ThemeContent = {
  theme: string;
  themeToggler: () => void;
};

export const ThemeContext = createContext<ThemeContent>({
  theme: "light",
  themeToggler: () => {
    return;
  },
});

export const useGlobalThemeContext = () => useContext(ThemeContext);
