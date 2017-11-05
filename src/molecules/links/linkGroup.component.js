import React from 'react';
import './linkGroup.component.css';
import PropTypes from 'prop-types';
import Link from '../../atoms/link/link.component.js';

LinkGroup.propTypes = {
  linkData: PropTypes.shape({
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  orientation: PropTypes.string
};

function LinkGroup({ linkData, orientation }) {

  const renderLinks = () => {
    return linkData.map((data, index) => {
      if(orientation === "vertical"){
        return (
          <div key={ index } className="link-group-item-vertical">{ Link({ url: data.url, text: data.text }) }</div>
        );
      }

      // Horizontal
      return (
        <span key={ index } className="link-group-item-horizontal">{ Link({ url: data.url, text: data.text }) }</span>
      );
    });
  };

  return (
    <span className="link-group-container">{ renderLinks() }</span>
  );
};

export default LinkGroup;
