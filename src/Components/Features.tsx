import React from 'react';
import { useGlobalThemeContext } from '.././theme/themeContext';
import Item from './Item';
import VideoEmbed from './VideoEmbed';

interface FeaturesInfo {
  data: {
    title: string;
    text: string;
    text2: string;
    list: { img: string; title: string; text: string }[];
  };
}

const Features: React.FC<FeaturesInfo> = ({ data: { list, text, text2, title } }) => {
  const { theme } = useGlobalThemeContext();
  const themeClass = theme === 'dark' ? 'is-dark' : '';
  return (
    <div className={`features ${themeClass}`}>
      <div className="features__text-content">
        <h2>{title}</h2>
        <h4 className="mobile">{text}</h4>
        <h4 className="desk">{text2}</h4>
      </div>
      <div className="features__items dark">
        {list
          ? list.map((d, i) => <Item key={i} img={d.img} title={d.title} text={d.text} />)
          : 'loading..'}
      </div>
      <div className="features__screen-content">
        <VideoEmbed />
      </div>
    </div>
  );
};

export default Features;
