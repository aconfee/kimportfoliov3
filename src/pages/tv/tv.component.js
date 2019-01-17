import React from 'react';
import './tv.component.css';
import Gallery from '../../molecules/gallery/gallery.component';
import ContactForm from '../../organisms/forms/contactForm.component.js';

const GALLERY_PATH = "./images/galleries/tv/";

function Tv() {
  return (
    <div>
      <Gallery imageRowUrls={[
        [GALLERY_PATH + "TV_01.png", GALLERY_PATH + "TV_02.png"],
        [GALLERY_PATH + "TV_03.png", GALLERY_PATH + "TV_04.png"],
        [GALLERY_PATH + "TV_05.png", GALLERY_PATH + "TV_06.png"],
        [GALLERY_PATH + "TV_07.png", GALLERY_PATH + "TV_08.png"],
        [GALLERY_PATH + "TV_09.png", GALLERY_PATH + "TV_10.png"],
        [GALLERY_PATH + "TV_11.png", GALLERY_PATH + "TV_12.png"],
        [GALLERY_PATH + "TV_13.png"]
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
