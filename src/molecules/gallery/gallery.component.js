import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './gallery.component.css';
import ResponsiveImageRow from '../responsiveImageRow/responsiveImageRow.component.js';
import GalleryModal from './galleryModal.component.js';

class Gallery extends Component {

  constructor(props) {
    super(props);
    // Will need state later to manage the lightbox.

    this.state = {
      modalIsOpen: false,
      modalActiveIndex: 0
    };

    this.modalImageUrls = [];

    for(let i = 0; i < this.props.imageRowUrls.length; i++) {
      this.modalImageUrls = this.modalImageUrls.concat(this.props.imageRowUrls[i]);
    }
  };

  handleModalToggle = () => {
    this.setState( prevState => ({ modalIsOpen: !prevState.modalIsOpen }));
  };

  handleImageClick = (index) => {
    this.setState({
      modalActiveIndex: index,
      modalIsOpen: true
    });
  };

  renderRows = () => {
    const { imageRowUrls } = this.props;
    let index = 0;

    return imageRowUrls.map((row) => {
      index += row.length; // This witchcraft is so index will be linear with respect to all rows concatenated. (more witchcraft in responsiveimagerow.)
      return (
        <div className="gallery-row" key={ index - row.length }>
          <ResponsiveImageRow
            index={ index - row.length }
            imageUrls={ row }
            onClick={ this.handleImageClick } />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="gallery-container">

        { this.state.modalIsOpen
          ? <GalleryModal
            imageUrls={ this.modalImageUrls }
            activeIndex={ this.state.modalActiveIndex }
            isOpen={ this.state.modalIsOpen }
            onClose={ this.handleModalToggle } />
          : this.renderRows()
        }
      </div>
    );
  };
};

Gallery.propTypes = {
  imageRowUrls: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired
};

export default Gallery;
