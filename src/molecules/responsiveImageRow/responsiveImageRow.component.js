import React from 'react';
import PropTypes from 'prop-types';
import './responsiveImageRow.component.css';
import ResponsiveImage from '../../atoms/responsiveImage/responsiveImage.component.js';

ResponsiveImageRow.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired
};

function ResponsiveImageRow({ imageUrls }) {

  const spacerClass = (index) => {
    if(imageUrls.length <= 1) return "";

    let spacerClass = "spacer";
    switch(index){
      case 0:
        spacerClass = "spacer-right";
        break;
      case imageUrls.length - 1:
        spacerClass = "spacer-left";
    };

    return spacerClass;
  }

  const renderImages = () => {
    return imageUrls.map(( url, index ) => {
      return (
        <div key={ index } className={ spacerClass(index) }>
          <ResponsiveImage imageUrl={ url } />
        </div>
      );
    });
  };

  return (
    <div>
      <div className="image-row-container">
        { renderImages() }
      </div>
    </div>
  );
};

export default ResponsiveImageRow;
