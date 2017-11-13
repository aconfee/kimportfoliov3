import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './textArea.component.css';

const MOBILE_WIDTH = 500;

class TextArea extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };
  };

  mobileLabel = () => {
    return this.isMobile() ? this.props.label : "";
  }

  desktopLabel = () => {
    return this.isMobile() ? null : ( <label>{ this.props.label }</label> );
  }

  isMobile = () => {
    return window.innerWidth < MOBILE_WIDTH;
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ value });
    this.props.onChange(name, value);
  };

  render() {
    return (
      <div className="text-area">
        { this.desktopLabel() }
        <textarea
          className={ this.props.error ? "input-error" : "" }
          value={ this.state.value }
          name={ this.props.name }
          placeholder={ this.mobileLabel() }
          onChange={ this.handleChange }
          disabled={ this.props.isDisabled }
        ></textarea>
        <p className="error-message">{ this.props.error }</p>
      </div>
    );
  };
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  label: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool
};

export default TextArea;
