import React from 'react';
import './tv.component.css';
import Gallery from '../../molecules/gallery/gallery.component';
import ContactForm from '../../organisms/forms/contactForm.component.js';

const GALLERY_PATH = "./images/galleries/tv/";

function Tv() {
  return (
    <div>
      <Gallery imageRowUrls={[
        [GALLERY_PATH + "DWP_00.png"]
      ]} />
      <br />
      <br />
      <br />
      <br />
      <div className="contact-page-form-container">
        <p className="header">Contact</p>
        <p className="subtitle">Have any questions or comments? Don&#39;t hesitate to reach out!</p>
        <ContactForm />
      </div>
    </div>
  );
};

export default Tv;
