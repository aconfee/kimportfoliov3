import React from 'react';
import './resume.component.css';

const GALLERY_PATH = "./images/resume/";

function Resume() {
  return (
    <div className="resume">
      <div className="resume-header">
        <p className="connect-text">Click to connect on LinkedIn or view my full printable resume.</p>
        <a href="https://www.linkedin.com/in/kimgreenough/" rel="noopener noreferrer" target="_blank" className="resume">
          <div className="resume-button">
            <div className="text">LinkedIn</div>
          </div>
        </a>
        <a href="https://drive.google.com/open?id=14QvuWuKOymddhfrG0XpmmX043zKbaCGQ" rel="noopener noreferrer" target="_blank" className="resume">
          <div className="resume-button">
            <div className="text">Resume</div>
          </div>
        </a>
      </div>
      <div className="work">
        <div className="image"><img src={ GALLERY_PATH + "lego_logo.jpg"} alt="Lego" /></div>
        <div className="bio">
          <div className="text-bold">Lego</div>
          <div>Untitled Project</div>
          <div>April 2019 - May 2019</div>
          <div>Illustrator and Concept Artist</div>
        </div>
      </div>
      <div className="work">
        <div className="image"><img src={ GALLERY_PATH + "buffa_logo.png"} alt="Buffa Pictures" /></div>
        <div className="bio">
          <div className="text-bold">Buffa Pictures</div>
          <div>Untitled Project</div>
          <div>February 2019 - Current</div>
          <div>Character Designer and Visual Development Artist</div>
        </div>
      </div>
      <div className="work">
        <div className="image"><img src={ GALLERY_PATH + "carcajou_logo.png"} alt="Carcajou Games" /></div>
        <div className="bio">
          <div className="text-bold">Carcajou Games</div>
          <div>Untitled Project</div>
          <div>January 2018 - May 2018</div>
          <div>Character Designer</div>
        </div>
      </div>
      <div className="work">
        <div className="image"></div>
        <div className="bio">
          <div className="text-bold">Ongoing Freelance</div>
          <div>Freelance character design and illustration.</div>
          <div>November 2016 - Current</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
