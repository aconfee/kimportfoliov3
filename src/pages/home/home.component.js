import React from 'react';
import './home.component.css';
import ResponsiveImage from '../../atoms/responsiveImage/responsiveImage.component.js';
import { Link } from 'react-router-dom';
import ContactForm from '../../organisms/forms/contactForm.component.js';

function Home() {
  return (
    <div>
      <div className="image-link-row">

        <div className="image-left">
          <Link to="/grinch">
            <ResponsiveImage imageUrl="./images/Grinch_Cover.png" />
          </Link>
        </div>

        <div className="image-right">
          <Link to="/carcajou">
            <ResponsiveImage imageUrl="./images/Carcajou_Cover.png" />
          </Link>
        </div>
        
      </div>
      <br />
      <div className="image-link-row">
        <div className="image-left">
          <Link to="/fishbowls">
            <ResponsiveImage imageUrl="./images/Gobie_Cover.png" />
          </Link>
        </div>
        <div className="image-right">
          <Link to="/fun">
            <ResponsiveImage imageUrl="./images/Personal_Cover.png" />
          </Link>
        </div>
      </div>
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
