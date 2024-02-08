import React from 'react';
import './Contact.css';
import { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com';



const ContactPage = () => {
  const form=useRef()
  const contactRef = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_skowino', 'template_i7khlzp', form.current, 'ODWYKyRJfOrxEmWx3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
   
    <div ref={contactRef} className="contact-container">
      <h5 className='animated-underline'>Contact Me </h5>
      <form ref={form}
      onSubmit = {sendEmail}>
      <div className="input-row">
        <input type="text" name="user name" placeholder="  Your Name" required className="name-input" />
        <input type="text"  name ="contact no" placeholder="  Contact No" required className="contact-input" />
      </div>
      <div className="input-row">
        <input type="text" name ="email" placeholder="  Email" required className="email-input" />
        <input type="text" name ="sub" placeholder="  Subject" required className="sub-input" />
      </div>
      <div className="input-row">
        <input type="text" name ="message" placeholder="  Message" required className="msg-input" />
      </div>
      <div className="button-container">
        <a href="/Home">
        <button type="submit" className="submit-button">Send Message</button>
        </a>
      </div>
      </form>

    </div>
  );
};

export default ContactPage;
