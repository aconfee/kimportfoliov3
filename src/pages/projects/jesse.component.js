import React from 'react';
import Gallery from '../../molecules/gallery/gallery.component.js';

const PATH = "./images/projects/jesse/";

function Jesse() {
  return (
    <Gallery imageRowUrls={[
      [PATH + "jesse_turn.png"]
    ]} />
  );
};

export default Jesse;
