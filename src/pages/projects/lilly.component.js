import React from 'react';
import Gallery from '../../molecules/gallery/gallery.component.js';

const PATH = "./images/projects/lilly/";

function Lilly() {
  return (
    <Gallery imageRowUrls={[
      [PATH + "lilly_01.png"],
      [PATH + "lilly_02.png"]
    ]} />
  );
};

export default Lilly;
