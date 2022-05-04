import React from 'react';
import { useGlobalThemeContext } from '.././theme/themeContext';
import mail from '../images/mail.png';
import phone from '../images/phone.png';
import location from '../images/location.png';
import map from '../images/map.png';
import ContactItem from './ContactItem';
import ContactForm from './ContactForm';
import ContactList from './ContactsList';
import { IoLogoFacebook } from 'react-icons/io';
import { IoLogoLinkedin } from 'react-icons/io';
import { IoLogoTwitter } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

interface ContactInfo {
  data: {
    text: string;
    text2: string;
    title: string;
  };
}

const Contact: React.FC<ContactInfo> = ({ data: { text, text2, title } }) => {
  const { theme } = useGlobalThemeContext();
  const themeClassIcon = theme === 'dark' ? 'dark' : 'icon';
  const themeClass = theme === 'dark' ? 'is-dark' : '';
  return (
    <div className={`contact-content ${themeClass}`}>
      <div className="contact-content__text">
        <h2>{title}</h2>
        <h4 className="mobile">{text}</h4>
        <h4 className="desk">{text2}</h4>
      </div>
      <div className="container">
        <div className="container__media">
          <BrowserRouter>
            <Link to="">
              <IoLogoTwitter size={50} className={themeClassIcon} />
            </Link>
            <Link to="">
              <IoLogoFacebook size={50} className={themeClassIcon} />
            </Link>
            <Link to="">
              <IoLogoLinkedin size={50} className={themeClassIcon} />
            </Link>
          </BrowserRouter>
        </div>
        <div className="container__items">
          <ContactItem
            img={location}
            text={'6386 Spring St undefined Anchorage, Georgia 12473 United States'}
          />
          <ContactItem img={phone} text={'(843) 555-0130'} />
          <ContactItem img={mail} text={'willie.jennings@example.com'} />
        </div>
        <ContactForm />
        <div className="container__map">
          <img src={map} alt="map" />
        </div>
      </div>
      <ContactList />
    </div>
  );
};

export default Contact;
