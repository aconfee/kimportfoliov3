import React from 'react';
import Gallery from '../../molecules/gallery/gallery.component.js';

const PATH = "./images/projects/fishbowls/";

function Fishbowls() {
  return (
    <Gallery imageRowUrls={[
      [PATH + "gobie_1.png"],
      [PATH + "gobie_2.png"],
      [PATH + "gobie_3.png"],
      [PATH + "gobie_4.png"],
      [PATH + "gobie_5.png", PATH + "gobie_6.png"],
      [PATH + "gobie_7.png"],
      [PATH + "gobie_8.png"],
      [PATH + "gobie_9.png"],
      [PATH + "gobie_10.png"],
      [PATH + "gobie_11.png"],
      [PATH + "gobie_12.png"],
      [PATH + "gobie_13.png", PATH + "gobie_14.jpg"]
    ]} />
  );
};

export default Fishbowls;
