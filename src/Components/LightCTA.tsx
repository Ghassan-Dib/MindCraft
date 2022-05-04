import React from 'react';
import { useGlobalThemeContext } from '.././theme/themeContext';
import SubscribeForm from './SubscribeForm';

interface CTAInfo {
  data: {
    img: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    text5: string;
    text6: string;
  };
}

const LightCTA: React.FC<CTAInfo> = ({
  data: { img, text1, text2, text3, text4, text5, text6 }
}) => {
  const { theme } = useGlobalThemeContext();
  const themeClass = theme === 'dark' ? 'is-dark' : '';
  return (
    <div className={`content ${themeClass}`}>
      <div className="content__texts">
        <h3>{text3}</h3>
        <h2 className="desk">{text4}</h2>
        <h2 className="mobile">{text5}</h2>
        <h4>{text6}</h4>
      </div>
      <div className="content__img">
        <img src={require('../images/' + img)} alt="newsletter" />
      </div>
      <div className="content__subscribe">
        <h3>{text1}</h3>
        <p>{text2}</p>
        <SubscribeForm />
      </div>
    </div>
  );
};

export default LightCTA;
