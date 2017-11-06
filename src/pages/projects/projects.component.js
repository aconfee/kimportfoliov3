import React from 'react';
import '../home/home.component.css';
import ResponsiveImage from '../../atoms/responsiveImage/responsiveImage.component.js';
import { Link } from 'react-router-dom';

const tempImg = "./images/styleguide-default-image.jpg";

function Projects() {
  return (
    <div>
      <Link to="/fishbowls">
        { ResponsiveImage({ imageUrl: tempImg }) }
      </Link>
    </div>
  );
};

export default Projects;
