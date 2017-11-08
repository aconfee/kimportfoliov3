import React from 'react';
import './home.component.css';
import ResponsiveImage from '../../atoms/responsiveImage/responsiveImage.component.js';
import { Link } from 'react-router-dom';

const tempImg = "./images/styleguide-default-image.jpg";

function Home() {
  return (
    <div>
      { /* Using a single image instead of just the row because this will be replaced by another component with
       parallaxing later. */ }
      { ResponsiveImage({ imageUrl: tempImg }) }
      <br />
      <br />
      <div className="image-link-row">
        <div className="image-left">
          <Link to="/projects">
            { ResponsiveImage({ imageUrl: "./images/cover_projects.jpg" }) }
          </Link>
        </div>
        <div className="image-right">
          <Link to="/concept">
            { ResponsiveImage({ imageUrl: "./images/cover_concept.jpg" }) }
          </Link>
        </div>
      </div>
      <br />
      <div className="image-link-row">
        <div className="image-left">
          <Link to="/illustration">
            { ResponsiveImage({ imageUrl: "./images/cover_illustration.jpg" }) }
          </Link>
        </div>
        <div className="image-right">
          <Link to="/fun">
            { ResponsiveImage({ imageUrl: "./images/cover_fun.jpg" }) }
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
