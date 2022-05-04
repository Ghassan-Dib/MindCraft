import React from 'react';
import { useGlobalThemeContext } from '.././theme/themeContext';
import PartnersItem from './PartnersItem';

interface PartnersInfo {
  data: { title: string; text: string; images: string[] };
}

const Partners: React.FC<PartnersInfo> = ({ data: { title, text, images } }) => {
  const { theme } = useGlobalThemeContext();
  const themeClass = theme === 'dark' ? 'is-dark' : '';
  return (
    <div className={`content-partner ${themeClass}`}>
      <div className="content-partner__text">
        <h2>{title}</h2>
        <h4>{text}</h4>
      </div>
      <div className="content-partner__items">
        <div className="row">
          {images
            ? images.map((image, index) => <PartnersItem key={index} img={image} />)
            : 'loading..'}
        </div>
      </div>
      <div className="content-partner__action">
        <button>Try For Free</button>
      </div>
    </div>
  );
};

export default Partners;
