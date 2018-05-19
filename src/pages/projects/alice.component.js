import React, { Component } from 'react';
import Gallery from '../../molecules/gallery/gallery.component.js';

const PATH = "./images/projects/alice/";

class Alice extends Component {

  componentWillMount = () => {  
    window.scrollTo(0, 0);
    console.log('scrolling to top');
  };

  render() {
    return (
      <Gallery imageRowUrls={[
        [PATH + "alice_01.png"],
        [PATH + "alice_02.png"],
        [PATH + "alice_03.png"],
        [PATH + "madHatter_01.png"],
        [PATH + "madHatter_02.png"]
      ]} />
    );
  };
};

export default Alice;
