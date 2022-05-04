import React from 'react';
import { useGlobalThemeContext } from '.././theme/themeContext';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';

interface HeaderInfo {
  data: { img: string; text: string; text2: string; title: string };
}

const Header: React.FC<HeaderInfo> = ({ data: { img, text, text2, title } }) => {
  const { theme } = useGlobalThemeContext();
  const themeClass = theme === 'dark' ? 'is-dark' : '';
  return (
    <div className={`container ${themeClass}`}>
      <div className="header">
        <div className="header__navbar">
          <div className="menu">
            <BrowserRouter>
              <Navbar img={img} />
            </BrowserRouter>
          </div>
        </div>
        <div className="header__content">
          <div className="text">
            <h2>{title}</h2>
            <h4 className="mobile">{text}</h4>
            <h4 className="desk">{text2}</h4>
          </div>
          <button className="btn">Try For Free</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
