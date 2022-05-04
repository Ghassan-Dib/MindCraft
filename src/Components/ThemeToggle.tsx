import React from 'react';
import { useGlobalThemeContext } from '.././theme/themeContext';
import { BsMoon, BsSun } from 'react-icons/bs';

const ThemeToggle = () => {
  const { theme, themeToggler } = useGlobalThemeContext();
  return (
    <button className="toggle_btn" onClick={() => themeToggler()}>
      {theme === 'dark' ? <BsSun size="24" /> : <BsMoon size="24" />}
    </button>
  );
};

export default ThemeToggle;
