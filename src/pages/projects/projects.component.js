import React from 'react';
import '../home/home.component.css';
import ResponsiveImage from '../../atoms/responsiveImage/responsiveImage.component.js';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div>
      <Link to="/fishbowls">
        <ResponsiveImage imageUrl="./images/projects/fishbowls/project_cover_fishbowls.png" />
      </Link>
      <ResponsiveImage imageUrl="./images/projects/project_cover_comingsoon.jpg" />
    </div>
  );
};

export default Projects;
