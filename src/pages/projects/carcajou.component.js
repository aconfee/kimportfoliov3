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
        [PATH + "Carcajou_00.png"],
        [PATH + "carcajou_01.png"],
        [PATH + "carcajou_02.png"],
        [PATH + "carcajou_03.png"],
        [PATH + "carcajou_04.png"],
        [PATH + "carcajou_05.png"],
        [PATH + "carcajou_06.png"],
        [PATH + "carcajou_07.png"],
        [PATH + "carcajou_08.png"]
      ]} />
    );
  };
};

export default Carcajou;
