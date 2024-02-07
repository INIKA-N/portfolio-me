// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../Styles/main.css';

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="bar">
      <div className="burger-icon" onClick={toggleNav}>
        <div className={`bar1 ${showNav ? 'change' : ''}`}></div>
        <div className={`bar2 ${showNav ? 'change' : ''}`}></div>
        <div className={`bar3 ${showNav ? 'change' : ''}`}></div>
      </div>
      <nav className={`nav-links ${showNav ? 'show' : ''}`}>
        <Link to='container' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Home</Link>
        <Link to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</Link>
        <Link to='group' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</Link>
        <Link to='edu' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Education</Link>
        <Link to='wo' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Works</Link>
        <Link to='contact-container' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</Link>
      </nav>
    </div>
  );
}

export default Navbar;
