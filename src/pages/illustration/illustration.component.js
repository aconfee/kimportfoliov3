import React from 'react';
import Gallery from '../../molecules/gallery/gallery.component.js';

const PATH = "./images/illustration/";

function Illustration() {
  return (
    <Gallery imageRowUrls={[
      [PATH + "illustration_01.png"],
      [PATH + "illustration_04.png"],
      [PATH + "illustration_02.png"],
      [PATH + "illustration_03.jpg"]
    ]} />
  );
};

export default Illustration;
