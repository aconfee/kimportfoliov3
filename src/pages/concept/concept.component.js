import React from 'react';
import Gallery from '../../molecules/gallery/gallery.component.js';

const PATH = "./images/concept/";

function Concept() {
  return (
    <Gallery imageRowUrls={[
      [PATH + "concept_1.png"],
      [PATH + "concept_2.png", PATH + "concept_3.png"],
      [PATH + "concept_5.png"],
      [PATH + "concept_6.png"],
      [PATH + "concept_7.png"],
      [PATH + "concept_8.png", PATH + "concept_9.png"]
    ]} />
  );
};

export default Concept;
