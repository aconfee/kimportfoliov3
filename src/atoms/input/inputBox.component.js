import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './inputBox.component.css';

class InputBox extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };
  };

  getPlaceholder = () => {
    return this.isMobile() ? "" : this.props.placeholder;
  };

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
      <div className="input-box">
        <input
          className={ this.props.error ? "input-error" : "" }
          value={ this.state.value }
          type={ this.props.type }
          name={ this.props.name }
          placeholder={ this.getPlaceholder() }
          onChange={ this.handleChange }
        />
      </div>
    );
  };
};

InputBox.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired
};

export default InputBox;
