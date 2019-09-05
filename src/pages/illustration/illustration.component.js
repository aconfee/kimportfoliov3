import React from 'react';
import './illustration.component.css';
import Gallery from '../../molecules/gallery/gallery.component';
import ContactForm from '../../organisms/forms/contactForm.component.js';

const GALLERY_PATH = "./images/galleries/illustration/";

function Illustration() {
  return (
    <div>
      <Gallery imageRowUrls={[
        [GALLERY_PATH + "01.jpg", GALLERY_PATH + "02.jpg"],
        [GALLERY_PATH + "03.jpg", GALLERY_PATH + "04.png"],
        [GALLERY_PATH + "05.jpg", GALLERY_PATH + "06.jpg"],
        [GALLERY_PATH + "07.jpg", GALLERY_PATH + "08.jpg"]
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

export default Illustration;
