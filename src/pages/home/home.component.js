import React from 'react';
import './home.component.css';
import Gallery from '../../molecules/gallery/gallery.component';
import ContactForm from '../../organisms/forms/contactForm.component.js';

const GALLERY_PATH = "./images/galleries/portfolio/";

function Home() {
  return (
    <div>
      <Gallery imageRowUrls={[
        [GALLERY_PATH + "Peter_1.jpg"],
        [GALLERY_PATH + "Peter_2.jpg"],
        [GALLERY_PATH + "Peter_3.jpg"],
        [GALLERY_PATH + "Peter_4.jpg"],
        [GALLERY_PATH + "000_grinch.png"],
        [GALLERY_PATH + "010_grinch.png"],
        [GALLERY_PATH + "020_grinch.png"],
        [GALLERY_PATH + "030_grinch.png"],
        [GALLERY_PATH + "040_grinch.png"],
        [GALLERY_PATH + "050_grinch.png"],
        [GALLERY_PATH + "060_grinch.png"],
        [GALLERY_PATH + "070_carcajou.png"],
        [GALLERY_PATH + "080_carcajou.png"],
        [GALLERY_PATH + "090_carcajou.png"],
        [GALLERY_PATH + "100_carcajou.png"],
        [GALLERY_PATH + "110_carcajou.png"],
        [GALLERY_PATH + "120_carcajou.png"],
        [GALLERY_PATH + "130_carcajou.png"],
        [GALLERY_PATH + "140_carcajou.png"]
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
