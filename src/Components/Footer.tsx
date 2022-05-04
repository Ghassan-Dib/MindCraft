import React from 'react';
import phone from '../images/phone.png';
import location from '../images/location.png';
import ContactItem from './ContactItem';
import { IoLogoFacebook } from 'react-icons/io';
import { IoLogoLinkedin } from 'react-icons/io';
import { IoLogoTwitter } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

interface FooterInfo {
  data: { title: string; list: string[] }[];
}

const Footer: React.FC<FooterInfo> = ({ data: footerLists }) => {
  return (
    <div className="footer">
      <div className="footer__list">
        {footerLists
          ? footerLists.map((d, i) => (
              <div key={i} className="item">
                <h3 className="title">{d.title}</h3>
                <ul className="list">
                  {d.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))
          : 'Loading...'}
      </div>
      <div className="footer__contacts">
        <ContactItem img={location} text="7480 Mockingbird Hill undefined" />
        <ContactItem img={phone} text="(239) 555-0108" />
        <div className="social-media">
          <BrowserRouter>
            <Link to="">
              <IoLogoTwitter size={50} className="icon" />
            </Link>
            <Link to="">
              <IoLogoFacebook size={50} className="icon" />
            </Link>
            <Link to="">
              <IoLogoLinkedin size={50} className="icon" />
            </Link>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default Footer;
