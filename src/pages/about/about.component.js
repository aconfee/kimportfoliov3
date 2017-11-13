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
          <p className="about-font thin">Thanks for your interest! I&#39;m a recently matriculated artist and freelancer currently located in Austin, TX. I attended DigiPen Institute of Technology, and have pursued additional learning opportunities under the guidence of industry talent including Nathan Fawkes and Anthony Jones.</p>
          <br />
          <br />
          <p className="about-font light">I&#39;m currently looking for full-time employment as a visual development artist in animation and games, and am willing to relocate.</p>
        </div>
      </div>
      <div className="testimony-container">
        <img className="testimony-portrait left" src="./images/kim_cover.jpg" alt="Kim Greenough self portrait." title="Kim Greenough self portrait." />
        <div>
          <p className="about-font italic thin">Kim is a f*cking machine.</p>
          <p className="about-subtitle">Adam Estela, Software Developer II at vAuto, Inc. (Worked with Kim on Fishbowls)</p>
        </div>
      </div>
      <div className="testimony-container">
        <img className="testimony-portrait left" src="./images/kim_cover.jpg" alt="Kim Greenough self portrait." title="Kim Greenough self portrait." />
        <div>
          <p className="about-font italic thin">Kim is a f*cking machine. Kim is a f*cking machine.Kim is a f*cking machine.Kim is a f*cking machine.Kim is a f*cking machine. Kim is a f*cking machine.Kim is a f*cking machine. Kim is a f*cking machine.</p>
          <p className="about-subtitle">Adam Estela, Software Developer II at vAuto, Inc. (Worked with Kim on Fishbowls)</p>
        </div>
      </div>
      <div className="testimony-container">
        <img className="testimony-portrait left" src="./images/kim_cover.jpg" alt="Kim Greenough self portrait." title="Kim Greenough self portrait." />
        <div>
          <p className="about-font italic thin">Kim is a f*cking machine.</p>
          <p className="about-subtitle"> ADD LINKEDIN ICON!!!!! Adam Estela, Software Developer II at vAuto, Inc. (Worked with Kim on Fishbowls)</p>
        </div>
      </div>
    </div>
  );
};

export default About;
