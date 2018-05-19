import React, { Component } from 'react';
import Gallery from '../../molecules/gallery/gallery.component.js';
import '../about/about.component';

const PATH = "./images/projects/carcajou/";

class Carcajou extends Component {

  componentWillMount = () => {  
    window.scrollTo(0, 0);
    console.log('scrolling to top');
  };

  render() {
    return (
      <Gallery imageRowUrls={[
        [PATH + "vincent_testimony.jpg"],
        [PATH + "carcajou_01.png"],
        [PATH + "carcajou_02.png"],
        [PATH + "carcajou_03.png"],
        [PATH + "carcajou_04.png"],
        [PATH + "carcajou_05.png"],
        [PATH + "carcajou_06.png"],
        [PATH + "carcajou_07.png"],
        [PATH + "carcajou_08.png"],
        [PATH + "carcajou_09.png"],
        [PATH + "carcajou_10.png"],
        [PATH + "carcajou_11.png"],
        [PATH + "carcajou_12.png"],
        [PATH + "carcajou_13.png"],
        [PATH + "carcajou_14.png"],
        [PATH + "carcajou_15.png"],
        [PATH + "carcajou_16.png"],
        [PATH + "carcajou_17.png"],
        [PATH + "carcajou_18.png"],
        [PATH + "carcajou_19.png"],
        [PATH + "carcajou_20.png"],
        [PATH + "carcajou_21.png"],
        [PATH + "carcajou_22.png"],
        [PATH + "carcajou_23.png"]
      ]} />
    );
  };
};

export default Carcajou;
