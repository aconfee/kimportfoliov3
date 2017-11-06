import React from 'react';
import './siteTitle.component.css';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
//import Link from '../link/link.component.js';

SiteTitle.propTypes = {
  text: PropTypes.string.isRequired
};

function SiteTitle({ text }) {
  return (
    <a href="/">
      <div className="site-title">
        {/* TODO: Links should transclude -- render children between link so images and text style can be controled by me */ }
        {/* Link({ url: "/", text: "Kim Greenough" }) */}
        Kim Greenough
      </div>
    </a>
  );
};

export default SiteTitle;
