import React from 'react';
import '../home/home.component.css';
import ResponsiveImage from '../../atoms/responsiveImage/responsiveImage.component.js';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div>
      <Link to="/alice">
        <ResponsiveImage imageUrl="./images/projects/alice/project_cover_alice.png" />
      </Link>
      <Link to="/fishbowls">
        <ResponsiveImage imageUrl="./images/projects/fishbowls/project_cover_fishbowls.png" />
      </Link>
      <Link to="/jesse">
        <ResponsiveImage imageUrl="./images/projects/jesse/project_cover_jesse.png" />
      </Link>
      <Link to="/lilly">
        <ResponsiveImage imageUrl="./images/projects/lilly/project_cover_lilly.png" />
      </Link>
    </div>
  );
};

export default Projects;
