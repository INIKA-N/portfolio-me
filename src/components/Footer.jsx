// Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="row">
        <div className="column contact-section">
          <h3>Contact</h3>
          <p>9360349192</p>
        </div>
        <div className="column address-section">
          <h3>Address</h3>
          <p>Dharapuram,TamilNadu</p>
        </div>
        <div className="column email-section">
          <h3>Email</h3>
          <p>inikainika11@gmai.com</p>
        </div>
      </div>
      <div className="row copyright-section">
        <p>&copy; 2024 created and designed by Inika</p>
      </div>
    </footer>
  );
};

export default Footer;
