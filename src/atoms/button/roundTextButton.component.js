import React from 'react';
import PropTypes from 'prop-types';
import './roundTextButton.component.css';

ButtonRoundText.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

function ButtonRoundText({ text, onClick }) {
    return (
      <div onClick={ onClick } className="button-round-text">
        <p className="button-label">{ text }</p>
      </div>
    );
};

export default ButtonRoundText;
