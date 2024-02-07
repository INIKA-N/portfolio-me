import React from 'react';
import './Contact.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h5 className='animated-underline'>Contact Me </h5>
      <div className="input-row">
        <input type="text" placeholder="  Your Name" required className="name-input" />
        <input type="text" placeholder="  Contact No" required className="contact-input" />
      </div>
      <div className="input-row">
        <input type="text" placeholder="  Email" required className="email-input" />
        <input type="text" placeholder="  Subject" required className="sub-input" />
      </div>
      <div className="input-row">
        <input type="text" placeholder="  Message" required className="msg-input" />
      </div>
      <div className="button-container">
        <a href="/Home">
        <button type="submit" className="submit-button">Send Message</button>
        </a>
      </div>

    </div>
  );
};

export default ContactPage;
