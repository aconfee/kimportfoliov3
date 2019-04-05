import React from 'react';
import './resume.component.css';

const GALLERY_PATH = "./images/resume/";

function Resume() {
  return (
    <div className="resume">
      <div className="resume-header">
        <p style={{ fontSize: "25px", color: "#442c2e", marginTop: 0 }}>Click to connect on LinkedIn or view my full printable resume.</p>
        <div className="resume-button">
          <div className="text">
            <a href="https://www.linkedin.com/in/kimgreenough/" rel="noopener noreferrer" target="_blank" className="resume">
              LinkedIn
            </a>
          </div>
        </div>
        <div style={{ width: "25px", display: "inline-block" }}></div>
        <div className="resume-button">
          <div className="text">
            <a href="https://drive.google.com/open?id=14QvuWuKOymddhfrG0XpmmX043zKbaCGQ" rel="noopener noreferrer" target="_blank" className="resume">
              Resume
            </a>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "50px" }}></div>
      <div className="work">
        <div className="image"><img src={ GALLERY_PATH + "buffa_logo.png"} alt="Buffa Pictures" /></div>
        <div style={{ margin: "17px", display: "inline-block" }}></div>
        <div className="bio">
          <div className="text-bold">Buffa Pictures</div>
          <div>Untitled Project</div>
          <div>February 2019 - Current</div>
          <div>Character Designer and Visual Development Artist</div>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}></div>
      <div className="work">
        <div className="image"><img src={ GALLERY_PATH + "carcajou_logo.png"} alt="Carcajou Games" /></div>
        <div style={{ margin: "17px", display: "inline-block" }}></div>
        <div className="bio">
          <div className="text-bold">Carcajou Games</div>
          <div>Untitled Project</div>
          <div>January 2018 - May 2018</div>
          <div>Character Designer</div>
        </div>
      </div>
      <div className="work">
        <div className="image"><img src="" alt="Ongoing Freelance" /></div>
        <div style={{ margin: "17px", display: "inline-block" }}></div>
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
