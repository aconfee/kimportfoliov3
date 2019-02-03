import React, { Component } from 'react';
import Gallery from '../../molecules/gallery/gallery.component.js';

const PATH = "./images/galleries/fun/";

class Fun extends Component {

  componentWillMount = () => {  
    window.scrollTo(0, 0);
    console.log('scrolling to top');
  };

  render() {
    return (
      <Gallery imageRowUrls={[
        [PATH + "Fun_02.JPG", PATH + "Fun_03.jpg", PATH + "Fun_04.jpg"],
        [PATH + "Fun_05.jpg", PATH + "Fun_06.jpg", PATH + "Fun_07.jpg", PATH + "Fun_08.jpg"]
      ]} />
    );
  };
};

export default Fun;
