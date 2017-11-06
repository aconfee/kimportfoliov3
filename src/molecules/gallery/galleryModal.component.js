import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './galleryModal.component.css';
import ButtonRoundText from '../../atoms/button/roundTextButton.component.js';

class GalleryModal extends Component {

  constructor(props){
    super(props);
    const { activeIndex } = this.props;

    this.state = {
      activeIndex: activeIndex || 0
    };
  }

  handleCloseClick = () => {
    this.props.onClose();
  };

  handleNextClick = () => {
    const { activeIndex } = this.state;
    const nextIndex = activeIndex === this.props.imageUrls.length - 1 ? 0 : activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  handlePreviousClick = () => {
    const { activeIndex } = this.state;
    const nextIndex = activeIndex === 0 ? this.props.imageUrls.length - 1 : activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  render() {

    const { imageUrls, isOpen } = this.props;
    const { activeIndex } = this.state;

    if(!isOpen) return null;

    return (
      <div className="modal-overlay">
        <div className="modal-content-container">
          <img src={ imageUrls[activeIndex] } alt="Kim Greenough art." title="Kim Greenough art." />
          <div id="modal-close-button" className="modal-button">
            <ButtonRoundText text="CLOSE" onClick={ this.handleCloseClick }/>
          </div>
          <div id="modal-next-button" className="modal-button">
            <ButtonRoundText text="NEXT" onClick={ this.handleNextClick }/>
          </div>
          <div id="modal-previous-button" className="modal-button">
            <ButtonRoundText text="PREVIOUS" onClick={ this.handlePreviousClick }/>
          </div>
        </div>
      </div>
    );
  };
};

GalleryModal.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
  isOpen: PropTypes.bool.isRequired,
  activeIndex: PropTypes.number
};

export default GalleryModal;
