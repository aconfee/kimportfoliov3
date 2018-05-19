import React, { Component } from 'react';
import Gallery from '../../molecules/gallery/gallery.component.js';

const PATH = "./images/projects/fishbowls/";

class Fishbowls extends Component {

  componentWillMount = () => {  
    window.scrollTo(0, 0);
    console.log('scrolling to top');
  };

  render(){
    return (
      <Gallery imageRowUrls={[
        [PATH + "gobie_01.png"],
        [PATH + "gobie_02.png"],
        [PATH + "gobie_03.png"],
        [PATH + "gobie_04.png"],
        [PATH + "gobie_05.png"],
        [PATH + "gobie_06.png"],
        [PATH + "gobie_07.png"],
        [PATH + "gobie_08.png"]
      ]} />
    );
  };
};

export default Fishbowls;
