import React from 'react';
import './home.component.css';
import Gallery from '../../molecules/gallery/gallery.component';
import ContactForm from '../../organisms/forms/contactForm.component.js';

const GRINCH_PATH = "./images/projects/grinch/";
const CARCAJOU_PATH = "./images/projects/carcajou/";

function Home() {
  return (
    <div>
      <Gallery imageRowUrls={[
        [GRINCH_PATH + "Grinch_00.png"],
        [GRINCH_PATH + "Grinch_01.png"],
        [GRINCH_PATH + "Grinch_02.png"],
        [GRINCH_PATH + "Grinch_03.png"],
        [GRINCH_PATH + "Grinch_04.png"],
        [GRINCH_PATH + "Grinch_05.png"],
        [GRINCH_PATH + "Grinch_06.png"],
        [GRINCH_PATH + "Grinch_07.png"],
        [CARCAJOU_PATH + "vincent_testimony.jpg"],
        [CARCAJOU_PATH + "Carcajou_00.png"],
        [CARCAJOU_PATH + "carcajou_01.png"],
        [CARCAJOU_PATH + "carcajou_02.png"],
        [CARCAJOU_PATH + "carcajou_03.png"],
        [CARCAJOU_PATH + "carcajou_04.png"],
        [CARCAJOU_PATH + "carcajou_05.png"],
        [CARCAJOU_PATH + "carcajou_06.png"],
        [CARCAJOU_PATH + "carcajou_07.png"],
        [CARCAJOU_PATH + "carcajou_08.png"]
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
