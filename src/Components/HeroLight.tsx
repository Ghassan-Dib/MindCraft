import React from 'react';
import { useGlobalThemeContext } from '.././theme/themeContext';

interface HLInfo {
  data: { img: string; text: string; text2: string; title: string };
}

const HeroLight: React.FC<HLInfo> = ({ data: { img, text, text2, title } }) => {
  const { theme } = useGlobalThemeContext();
  const themeClass = theme === 'dark' ? 'is-dark' : '';
  return (
    <div className={`light ${themeClass}`}>
      <div className="light__content">
        <div className="frame-18">
          <img src={require('../images/' + img)} alt="macbook" />
        </div>
        <div className="frame-19">
          <div className="text-content">
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

export default HeroLight;
