import React from 'react';
import Gallery from '../../molecules/gallery/gallery.component.js';

const PATH = "./images/projects/alice/";

function Alice() {
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

export default Alice;
