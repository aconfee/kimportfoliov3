import React, { Component } from 'react';
import '../home/home.component.css';
import ResponsiveImage from '../../atoms/responsiveImage/responsiveImage.component.js';
import { Link } from 'react-router-dom';

class Projects extends Component {

  componentWillMount = () => {  
    window.scrollTo(0, 0);
    console.log('scrolling to top');
  };

  render() {
    return (
      <div>
        <Link to="/carcajou">
          <ResponsiveImage imageUrl="./images/projects/carcajou/project_cover_carcajou.png" />
        </Link>
        <Link to="/grinch">
          <ResponsiveImage imageUrl="./images/projects/grinch/project_cover_grinch.png" />
        </Link>
        <Link to="/alice">
          <ResponsiveImage imageUrl="./images/projects/alice/project_cover_alice.png" />
        </Link>
        <Link to="/fishbowls">
          <ResponsiveImage imageUrl="./images/projects/fishbowls/project_cover_fishbowls.png" />
        </Link>
        {/* <Link to="/jesse">
          <ResponsiveImage imageUrl="./images/projects/jesse/project_cover_jesse.png" />
        </Link> */}
        <Link to="/lilly">
          <ResponsiveImage imageUrl="./images/projects/lilly/project_cover_lilly.png" />
        </Link>
      </div>
    );
  };
};

export default Projects;
