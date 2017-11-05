import React from 'react';
import './styleguide.component.css';

function StyleGuideItem({ title, type, itemProps, children }) {

  const renderProps = () => {
    if(!itemProps) return null;

    return itemProps.map(( itemProp, index ) => {
      return (
        <p key={ index }>{ itemProp.name } -- { itemProp.isRequired } -- { itemProp.description }</p>
      );
    });
  };

  return (
    <div>
      <div className="line-break"></div>
      <p className="styleguide-item-title">{ title }</p>
      <p>Type: { type }</p>
      <p><u>Props</u></p>
      { renderProps() }
      <br />
      <br />
      { children }
    </div>
  );
};

export default StyleGuideItem;
