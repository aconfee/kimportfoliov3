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
        [PATH + "Grinch_00.png"],
        [PATH + "Grinch_01.png"],
        [PATH + "Grinch_02.png"],
        [PATH + "Grinch_03.png"],
        [PATH + "Grinch_04.png"],
        [PATH + "Grinch_05.png"],
        [PATH + "Grinch_06.png"],
        [PATH + "Grinch_07.png"]
      ]} />
    );
  };
};

export default Grinch;
