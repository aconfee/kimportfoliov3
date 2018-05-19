import React, { Component } from 'react';
import Gallery from '../../molecules/gallery/gallery.component.js';

const PATH = "./images/projects/jesse/";

class Jesse extends Component {

  componentWillMount = () => {  
    window.scrollTo(0, 0);
    console.log('scrolling to top');
  };

  render(){
    return (
      <Gallery imageRowUrls={[
        [PATH + "jesse_turn.png"]
      ]} />
    );
  };
};

export default Jesse;
