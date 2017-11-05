import React from 'react';
import './siteTitle.component.css';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
import Link from '../link/link.component.js';

SiteTitle.propTypes = {
  text: PropTypes.string.isRequired
};

function SiteTitle({ text }) {
  return (
    <div className="site-title">
      { Link({ url: "/", text: "Kim Greenough" }) }
    </div>
    //<Link to="/">
      //<span className="site-title">{ text }</span>
    //</Link>
  );
};

export default SiteTitle;
