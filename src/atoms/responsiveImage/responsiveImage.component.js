import React from 'react';
import PropTypes from 'prop-types';
import './responsiveImage.component.css';

ResponsiveImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  index: PropTypes.number,
  onClick: PropTypes.func
};

function ResponsiveImage({ imageUrl, index, onClick }) {

  const handleClick = () => {
    if(onClick){
      onClick(index);
    }
  };

  return (
    <div className={ "responsive-image " + (onClick ? "is-clickable" : "")} onClick={ handleClick }>
      <img src={ imageUrl } alt="Kim Greenough art." title="Kim Greenough art." />
    </div>
  );
};

export default ResponsiveImage;
