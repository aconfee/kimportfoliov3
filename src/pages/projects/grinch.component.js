import React, { Component } from 'react';
import Gallery from '../../molecules/gallery/gallery.component.js';

const PATH = "./images/projects/grinch/";

class Grinch extends Component {

  componentWillMount = () => {  
    window.scrollTo(0, 0);
    console.log('scrolling to top');
  };

  render() {
    return (
      <Gallery imageRowUrls={[
        [PATH + "01_grinch.png"],
        [PATH + "02_grinch.png"]
      ]} />
    );
  };
};

export default Grinch;
