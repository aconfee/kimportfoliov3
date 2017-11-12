import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './inputBox.component.css';

const MOBILE_WIDTH = 500;

class InputBox extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };
  };

  mobileLabel = () => {
    return this.isMobile() ? this.props.label : "";
  };

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
      <div className="input-box">
        { this.desktopLabel() }
        <input
          className={ this.props.error ? "input-error" : "" }
          value={ this.state.value }
          type={ this.props.type }
          name={ this.props.name }
          placeholder={ this.mobileLabel() }
          onChange={ this.handleChange }
        />
        <p className="error-message">{ this.props.error }</p>
      </div>
    );
  };
};

InputBox.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  label: PropTypes.string.isRequired
};

export default InputBox;
