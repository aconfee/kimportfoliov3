import React from 'react';
import './contact.component.css';

import ContactForm from '../../organisms/forms/contactForm.component.js';

function Contact() {
  return (
    <div>
      <div className="contact-page-form-container">
        <div className="contact-image">
          <img src="./images/email-sent.png" title="Email sent cute otter." alt="Email sent cute otter."/>
        </div>
        <p className="header">Contact</p>
        <p className="subtitle">Have any questions or comments? Don&#39;t hesitate to reach out!</p>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
