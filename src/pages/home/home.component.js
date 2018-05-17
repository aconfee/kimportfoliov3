import React from 'react';
import './home.component.css';
import ResponsiveImage from '../../atoms/responsiveImage/responsiveImage.component.js';
import { Link } from 'react-router-dom';
import ContactForm from '../../organisms/forms/contactForm.component.js';
import Tilt from '../../molecules/tilt/tilt.component.js';
import InstagramFeed from '../../molecules/instagramFeed/instagramFeed.component.js';

function Home() {
  return (
    <div>
      { /* Using a single image instead of just the row because this will be replaced by another component with
       parallaxing later. */ }
      <ResponsiveImage imageUrl="./images/illustration/illustration_01.png" />
      <br />
      <br />
      <div className="image-link-row">
        <Tilt maxTiltX={1} maxTiltY={1}>
          <div className="image-left">
            <Link to="/projects">
              <ResponsiveImage imageUrl="./images/cover_projects.png" />
            </Link>
          </div>
        </Tilt>
      </div>
      <br />
      <div className="image-link-row">
        <Tilt maxTiltX={5} maxTiltY={5}>
          <div className="image-left">
            <Link to="/illustration">
              <ResponsiveImage imageUrl="./images/cover_illustration.png" />
            </Link>
          </div>
        </Tilt>
        <Tilt maxTiltX={5} maxTiltY={5}>
          <div className="image-right">
            <Link to="/fun">
              <ResponsiveImage imageUrl="./images/cover_fun.png" />
            </Link>
          </div>
        </Tilt>
        <Tilt maxTiltX={5} maxTiltY={5}>
          <div className="image-right">
            <a href="https://medium.com/@kimgreenough">
              <ResponsiveImage imageUrl="./images/cover_concept.png" />
            </a>
          </div>
        </Tilt>
      </div>
      <div className="contact-page-form-container">
        <div className="contact-image">
          <img src="./images/email-sent.png" title="Email sent cute otter." alt="Email sent cute otter."/>
        </div>
        <p className="header">Contact</p>
        <p className="subtitle">Have any questions or comments? Don&#39;t hesitate to reach out!</p>
        <ContactForm />
      </div>
      <div className="instagram-feed-container">
        <a href="https://www.instagram.com/kimbyarting/">
          <InstagramFeed />
        </a>
      </div>
    </div>
  );
};

export default Home;
