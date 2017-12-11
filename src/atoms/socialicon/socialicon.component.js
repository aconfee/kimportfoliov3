import React from 'react';
import PropTypes from 'prop-types';
import './socialicon.component.css';

SocialIcon.propTypes = {
  iconType: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

function SocialIcon({ iconType, link }) {
  return (
    <a href={ link } className={"social-icon " + iconType}><span alt="Social media link."></span></a>
  );
};

export default SocialIcon;
