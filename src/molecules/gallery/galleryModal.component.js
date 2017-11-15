import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './galleryModal.component.css';
import ButtonRoundText from '../../atoms/button/roundTextButton.component.js';

const KEYCODE_LEFT = 37;
const KEYCODE_RIGHT = 39;

class GalleryModal extends Component {

  constructor(props){
    super(props);
    const { activeIndex } = this.props;

    this.state = {
      activeIndex: activeIndex || 0,
      animateClass: ""
    };
  };

  componentWillMount = () => {
    window.addEventListener("keydown", this.handleKeyPress);
  };

  componentWillUnmount = () => {
    window.removeEventListener("keydown", this.handleKeyPress);
  };

  handleKeyPress = (e) => {
    const { keyCode } = e;

    if(keyCode !== KEYCODE_LEFT && keyCode !== KEYCODE_RIGHT) return;

    if(keyCode === 39) this.handleNextClick();
    else if(keyCode === 37) this.handlePreviousClick();
  };

  handleCloseClick = () => {
    this.props.onClose();
  };

  handleNextClick = () => {
    const { activeIndex } = this.state;
    const nextIndex = activeIndex === this.props.imageUrls.length - 1 ? 0 : activeIndex + 1;

    let img = new Image();
    img.src = this.props.imageUrls[nextIndex];
    img.onload = function() {
      setTimeout(function() {
        this.setState({ animateClass: "animate-end" });
      }.bind(this), 100);
    }.bind(this);

    this.setState({
      activeIndex: nextIndex,
      animateClass: "animate-start-next"
    });
  };

  handlePreviousClick = () => {
    const { activeIndex } = this.state;
    const nextIndex = activeIndex === 0 ? this.props.imageUrls.length - 1 : activeIndex - 1;

    let img = new Image();
    img.src = this.props.imageUrls[nextIndex];
    img.onload = function() {
      setTimeout(function() {
        this.setState({ animateClass: "animate-end" });
      }.bind(this), 100);
    }.bind(this);

    this.setState({
      activeIndex: nextIndex,
      animateClass: "animate-start-previous"
    });
  };

  render() {

    const { imageUrls, isOpen } = this.props;
    const { activeIndex } = this.state;

    if(!isOpen) return null;

    return (
      <div className="modal-overlay">
        <div className="modal-content-container">
          <img className={ this.state.animateClass } src={ imageUrls[activeIndex] } alt="Kim Greenough art." title="Kim Greenough art." />
          <div id="modal-close-button" className="modal-button">
            <ButtonRoundText text="CLOSE" onClick={ this.handleCloseClick }/>
          </div>
          <div id="modal-next-button" className="modal-button">
            <ButtonRoundText text="NEXT" onClick={ this.handleNextClick }/>
          </div>
          <div id="modal-previous-button" className="modal-button">
            <ButtonRoundText text={ window.innerWidth > 1000 ? "PREVIOUS" : "PREV" } onClick={ this.handlePreviousClick }/>
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
