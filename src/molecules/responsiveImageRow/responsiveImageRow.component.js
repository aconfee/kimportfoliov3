import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './responsiveImageRow.component.css';
import ResponsiveImage from '../../atoms/responsiveImage/responsiveImage.component.js';

class ResponsiveImageRow extends Component {

  constructor(props) {
    super(props);

    this.state = { imageRatios: new Array(this.props.imageUrls.length)};
  };

  componentWillMount() {
    this.preloadImages(this.saveAspectRatio);
  };

  spacerClass = (index) => {
    const { imageUrls } = this.props;

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

  saveAspectRatio = (aspectRatio, index) => {
    let newArr = this.state.imageRatios;
    newArr[index] = aspectRatio.toString();
    this.setState({ imageRatios: newArr });
  };

  preloadImages = (callback) => {
    const { imageUrls } = this.props;
    for(let i = 0; i < imageUrls.length; i++) {
      let image = new Image();
      image.src = imageUrls[i];
      image.onload = function() {
        const ii = i; // JS fundamentals yo.
        callback(this.width / this.height, ii);
      };
    }
  };

  handleImageClick = (index) => {
    this.props.onClick(index);
  };

  renderImages = () => {
    return this.props.imageUrls.map(( url, index ) => {
      const startIndex = this.props.index || 0;

      return (
        <div
          key={ startIndex + index }
          className={ this.spacerClass(index) }
          style={{ flex: this.state.imageRatios[index] }}
        >
          <ResponsiveImage
            imageUrl={ url }
            index={ startIndex + index }
            onClick={ this.handleImageClick } />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="image-row-container">
          { this.renderImages() }
        </div>
      </div>
    );
  };
};

ResponsiveImageRow.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func,
  index: PropTypes.number
};

export default ResponsiveImageRow;
