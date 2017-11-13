import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './responsiveImage.component.css';

class ResponsiveImage extends Component {

  constructor(props) {
    super(props);

    this.state = { fadeIn: false };
  };

  componentWillMount = () => {
    this.attachFade();
  };

  attachFade = () => {
    var callback = this.playFade;

    let image = new Image();
    image.src = this.props.imageUrl;
    image.onload = function() {
      callback();
    };
  };

  playFade = () => {
    this.setState({ fadeIn: true });
  };

  handleClick = () => {
    if(this.props.onClick){
      this.props.onClick(this.props.index);
    }
  };

  render() {
    return (
      <div className={ "responsive-image" + (this.props.onClick ? " is-clickable" : "") + (this.state.fadeIn ? " fadeIn" : "")} onClick={ this.handleClick }>
        <img src={ this.props.imageUrl } alt="Kim Greenough art." title="Kim Greenough art." />
      </div>
    );
  };
};

ResponsiveImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  index: PropTypes.number,
  onClick: PropTypes.func
};

export default ResponsiveImage;
