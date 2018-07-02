import React, { Component } from 'react';
import Gallery from '../../molecules/gallery/gallery.component.js';

const PATH = "./images/fun/";

class Fun extends Component {

  componentWillMount = () => {  
    window.scrollTo(0, 0);
    console.log('scrolling to top');
  };

  render() {
    return (
      <Gallery imageRowUrls={[
        [PATH + "fun_01.png", PATH + "fun_02.png", PATH + "fun_03.png", PATH + "fun_04.png", PATH + "fun_05.png"],
        [PATH + "fun_06.png", PATH + "fun_07.png", PATH + "fun_08.png", PATH + "fun_09.png", PATH + "fun_10.png"],
        [PATH + "fun_11.png"]
      ]} />
    );
  };
};

export default Fun;
