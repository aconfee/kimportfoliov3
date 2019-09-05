import React from 'react';
import './home.component.css';
import Gallery from '../../molecules/gallery/gallery.component';
import ContactForm from '../../organisms/forms/contactForm.component.js';

const GALLERY_PATH = "./images/galleries/characterdesign/";

function Home() {
  return (
    <div>
      <Gallery imageRowUrls={[
        [GALLERY_PATH + "Feat_01.jpg"],
        [GALLERY_PATH + "Feat_02.jpg", GALLERY_PATH + "Feat_03.jpg"],
        [GALLERY_PATH + "Feat_04.jpg", GALLERY_PATH + "Feat_05.jpg"],
        [GALLERY_PATH + "Feat_06.jpg", GALLERY_PATH + "Feat_07.jpg"],
        [GALLERY_PATH + "Feat_08.jpg"],
        [GALLERY_PATH + "Feat_09.jpg", GALLERY_PATH + "Feat_10.jpg"],
        [GALLERY_PATH + "Feat_11.png", GALLERY_PATH + "Feat_12.png"],
        [GALLERY_PATH + "Feat_13.jpg"], 
        [GALLERY_PATH + "Feat_14.jpg", GALLERY_PATH + "Feat_15.jpg"],
        [GALLERY_PATH + "Feat_16.jpg", GALLERY_PATH + "Feat_17.jpg"], 
        [GALLERY_PATH + "Feat_18.jpg", GALLERY_PATH + "Feat_19.jpg"]
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
