import React from 'react';
import './vizdev.component.css';
import Gallery from '../../molecules/gallery/gallery.component';
import ContactForm from '../../organisms/forms/contactForm.component.js';

const GALLERY_PATH = "./images/galleries/vizdev/";

function Vizdev() {
  return (
    <div>
      <Gallery imageRowUrls={[
        [GALLERY_PATH + "VisDev_01.png"]
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

export default Vizdev;
