import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './textArea.component.css';

class TextArea extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };
  };

  getPlaceholder = () => {
    return this.isMobile() ? "" : this.props.placeholder;
  }

  isMobile = () => {
    return window.innerWidth < 1000;
  };

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ value });
    this.props.onChange(value);
  };

  render() {
    return (
      <div className="text-area">
        <textarea
          className={ this.props.error ? "input-error" : "" }
          value={ this.state.value }
          name={ this.props.name } 
          placeholder={ this.getPlaceholder() }
          onChange={ this.handleChange }
        ></textarea>
      </div>
    );
  };
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired
};

export default TextArea;
