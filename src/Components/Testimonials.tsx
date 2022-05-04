import React from 'react';
import { useGlobalThemeContext } from '.././theme/themeContext';
import client from '../images/client.png';

interface TestimonialsInfo {
  data: { title: string; img: string; text: string; text2: string; text3: string };
}

const Testimonials: React.FC<TestimonialsInfo> = ({ data: { title, img, text, text2, text3 } }) => {
  const { theme } = useGlobalThemeContext();
  const themeClass = theme === 'dark' ? 'is-dark' : '';
  return (
    <div className={`content-testimonials ${themeClass}`}>
      <div className="content-testimonials__text">
        <h2>{title}</h2>
      </div>
      <div className="content-testimonials__items">
        <img className="brand" src={require('../images/' + img)} alt="client" />
        <h4>{text}</h4>
        <div className="client">
          <img src={client} alt="ibm" />
          <div className="client-description">
            <h6>{text2}</h6>
            <p>{text3}</p>
          </div>
        </div>
      </div>
      <div className="content-testimonials__actions">
        <button>More Testimonials</button>
      </div>
    </div>
  );
};

export default Testimonials;
