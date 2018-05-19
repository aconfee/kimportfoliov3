import React, { Component } from 'react';
import Gallery from '../../molecules/gallery/gallery.component.js';

const PATH = "./images/projects/lilly/";

class Lilly extends Component {
  componentWillMount = () => {  
    window.scrollTo(0, 0);
    console.log('scrolling to top');
  };

  render(){
    return (
      <Gallery imageRowUrls={[
        [PATH + "lilly_01.png"],
        [PATH + "lilly_02.png"]
      ]} />
    );
  };
};

export default Lilly;
