import React from 'react';
import { Link } from 'react-router-dom';
import './link.component.css';
import PropTypes from 'prop-types';

MyLink.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

function MyLink({ url, text }) {

  const renderInternalLink = () => {
    return (<Link to={ url } className="link">{ text }</Link>);
  };

  const renderExternalLink = () => {
    return(<a href={ url } className="link" rel="noopener noreferrer" target="_blank">{ text }</a>);
  };

  const renderLink = () => {
    if(url[0] === "/"){
      return renderInternalLink();
    }

    return renderExternalLink();
  };

  return (
    <span>{ renderLink() }</span>
  );
};

export default MyLink;
