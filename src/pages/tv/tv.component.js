import React from 'react';
import './tv.component.css';
import Gallery from '../../molecules/gallery/gallery.component';
import ContactForm from '../../organisms/forms/contactForm.component.js';

const GALLERY_PATH = "./images/galleries/tv/";

function Tv() {
  return (
    <div>
      <Gallery imageRowUrls={[
        [GALLERY_PATH + "DWP_00.png"],
        [GALLERY_PATH + "DWP_01.png", GALLERY_PATH + "DWP_01b.png"],
        [GALLERY_PATH + "DWP_02.png", GALLERY_PATH + "DWP_02a.png"],
        [GALLERY_PATH + "DWP_03.png", GALLERY_PATH + "DWP_04.png"],
        [GALLERY_PATH + "DWP_04a.png", GALLERY_PATH + "DWP_05.png"],
        [GALLERY_PATH + "DWP_06.png", GALLERY_PATH + "DWP_06a.png"],
        [GALLERY_PATH + "DWP_07.png", GALLERY_PATH + "DWP_08.png"],
        [GALLERY_PATH + "DWP_09.png"]
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
