import React from 'react';
import "./about.component.css";

import ResponsiveImage from '../../atoms/responsiveImage/responsiveImage.component.js';

function About() {
  return (
    <div>
      <div className="section-container">
      <div className="portrait">
        <ResponsiveImage imageUrl="./images/kim_cover.jpg" />
      </div>
        <div>
          <p className="about-description-header">Hello!</p>
          <p className="about-font thin">Thanks for your interest! I&#39;m a recently matriculated artist and freelancer currently located in Austin, TX. I attended DigiPen Institute of Technology, and have pursued additional learning opportunities under the guidance of industry talent including Nathan Fawkes and Anthony Jones.</p>
          <br />
          <br />
          <p className="about-font light">I&#39;m currently looking for full-time employment as a visual development artist in animation and games, and am willing to relocate.</p>
        </div>
      </div>
      <div className="testimony-container">
        <img className="testimony-portrait left" src="./images/nathan_cover.png" alt="Kim Greenough self portrait." title="Kim Greenough self portrait." />
        <div>
          <p className="about-font italic thin">I endorse Kimberly for cartoon and comics, character design, illustration, concept art, digital painting, portrait painting and sketching. Kim did some label design for my brewery and knocked it out of the park. Professional and easy to work with, I can&#39;t recommend her highly enough.</p>
          <p className="about-subtitle">Nathan Rice, New Braunfels Brewing Co.</p>
        </div>
      </div>
      <div className="testimony-container">
        <img className="testimony-portrait left" src="./images/adam_cover.png" alt="Kim Greenough self portrait." title="Kim Greenough self portrait." />
        <div>
          <p className="about-font italic thin">Unlike other freelancers I&#39;ve worked with, I never felt like I was left in the dark while working with Kim. Her process of showing milestones through the project is perfect for allowing me to give my creative input, but also not be overly involved, and in the end, get even better than what I hoped for! She&#39;s a joy to work with, excellent at listening and understanding needs, and I recommend her to anyone.</p>
          <p className="about-subtitle">Adam Estela, Software Developer II at Cox Automotive</p>
        </div>
      </div>
    </div>
  );
};

export default About;
