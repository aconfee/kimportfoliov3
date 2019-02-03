import React from 'react';
import './home.component.css';
import Gallery from '../../molecules/gallery/gallery.component';
import ContactForm from '../../organisms/forms/contactForm.component.js';

const GALLERY_PATH = "./images/galleries/feature/";

function Home() {
  return (
    <div>
      <Gallery imageRowUrls={[
        [GALLERY_PATH + "Feat_01.jpg"],
        [GALLERY_PATH + "Feat_02.jpg", GALLERY_PATH + "Feat_03.jpg"],
        [GALLERY_PATH + "Feat_04.jpg", GALLERY_PATH + "Feat_05.jpg"],
        [GALLERY_PATH + "Feat_06.png", GALLERY_PATH + "Feat_07.png"],
        [GALLERY_PATH + "Feat_08.png", GALLERY_PATH + "Feat_09.png"],
        [GALLERY_PATH + "Feat_10.png"],
        [GALLERY_PATH + "Feat_11.png", GALLERY_PATH + "Feat_12a.jpg"],
        [GALLERY_PATH + "Feat_12.png", GALLERY_PATH + "Feat_13.png"],
        [GALLERY_PATH + "Feat_14.png", GALLERY_PATH + "Feat_15.png"],
        [GALLERY_PATH + "Feat_16.png", GALLERY_PATH + "Feat_17.png"]
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

export default Home;
