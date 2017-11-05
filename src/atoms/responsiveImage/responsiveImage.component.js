import React from 'react';
import PropTypes from 'prop-types';
import './responsiveImage.component.css';

ResponsiveImage.propTypes = {
  imageUrl: PropTypes.string.isRequired
};

function ResponsiveImage({ imageUrl }) {
  return (
    <div className="responsive-image">
      <img src={ imageUrl } alt="Kim Greenough art." title="Kim Greenough art." />
    </div>
  );
};

export default ResponsiveImage;
