import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { IoLogoFacebook } from 'react-icons/io';
import { IoLogoLinkedin } from 'react-icons/io';
import { IoLogoTwitter } from 'react-icons/io';
import ThemeToggle from './ThemeToggle';

interface NavInfo {
  img: string;
}

const Navbar: React.FC<NavInfo> = ({ img }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };
  const menuOpenClassname = menuOpen ? 'is-menu-open' : '';
  return (
    <div className="navbar__content">
      <nav className={`navbar__content__nav ${menuOpenClassname}`}>
        <ul className="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <img className="center" src={require('../images/' + img)} alt="logo" />
      <div className={`right${menuOpenClassname}`}>
        <Link to="">
          <IoLogoTwitter size={40} className="icon" />
        </Link>
        <Link to="">
          <IoLogoFacebook size={40} className="icon" />
        </Link>
        <Link to="">
          <IoLogoLinkedin size={40} className="icon" />
        </Link>
        <ThemeToggle />
      </div>

      <div className="navbar__content__toggle">
        {!menuOpen ? (
          <BiMenuAltRight onClick={menuToggleHandler} />
        ) : (
          <AiOutlineClose onClick={menuToggleHandler} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
