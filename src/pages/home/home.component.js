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
            <ResponsiveImage imageUrl="./images/projects/grinch/project_cover_grinch.png" />
          </Link>
        </div>

        <div className="image-right">
          <Link to="/carcajou">
            <ResponsiveImage imageUrl="./images/projects/carcajou/project_cover_carcajou.png" />
          </Link>
        </div>
        
      </div>
      <br />
      <div className="image-link-row">
        <div className="image-left">
          <Link to="/fishbowls">
            <ResponsiveImage imageUrl="./images/projects/fishbowls/project_cover_fishbowls.png" />
          </Link>
        </div>
        <div className="image-right">
          <Link to="/fun">
            <ResponsiveImage imageUrl="./images/cover_fun.png" />
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
