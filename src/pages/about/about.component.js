import React from 'react';
import "./about.component.css";

function About() {
  return (
    <div className="about-container">

      <div>
        <p className="about-description-header">Hello!</p>

        <p className="about-description">Thanks for your interest! I&#39;m a recently matriculated artist and freelancer currently located in Austin, TX. I attended DigiPen Institute of Technology, and have pursued additional learning opportunities under the guidence of industry talent including Nathan Fawkes and Anthony Jones.</p>
        <br />
        <br />
        <p className="about-description">I&#39;m currently looking for full-time employment as a visual development artist in animation and games, and am willing to relocate.</p>
        <br />
        <br />
        <p className="about-description">I hope you enjoy looking through my art. Please contact me if you have any questions or interest. Thanks!</p>
      </div>
      <img className="self-portrait" src="./images/kim_cover.jpg" alt="Kim Greenough self portrait." title="Kim Greenough self portrait." />
    </div>
  );
};

export default About;
