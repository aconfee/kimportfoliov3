import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './contactForm.component.css';

import axios from 'axios';
import InputBox from '../../atoms/input/inputBox.component.js';
import TextArea from '../../atoms/input/textArea.component.js';
import HeartBox from '../heartbox/heartbox.component.js';

const SEND_EMAIL_URL = 'https://iu81vnqiwb.execute-api.us-west-2.amazonaws.com/dev/portfolio/contact';

class ContactForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      isSending: false,
      isSent: false
    };

    this.inputs = {
      first: "",
      last: "",
      email: "",
      captcha: "",
      message: ""
    }; // Not using state because theres no need to re-render.
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if(this.state.isSending || this.state.isSent) return;

    if(this.sanitizeInput()) {
      this.setState({ isSending: true });
      axios.post(SEND_EMAIL_URL, this.inputs)
        .then(response => {
          if(response.status === 200) {
            this.setState({ isSending: false, isSent: true });
            if(this.props.onSubmitSuccess) {
              this.props.onSubmitSuccess();
            }
          } else {
            this.setState({ isSending: false, errors: { response: "Sorry! I goofed up. Try refreshing the page, possibly switch browsers, and send again." }});
            console.error(response);
          }
        })
        .catch(error => {
          this.setState({ isSending: false, errors: { response: "Sorry! I goofed up. Try refreshing the page, possibly switch browsers, and send again." }});
          console.error(error);
        });
    }
  };

  handleInputChange = (name, value) => {
    this.inputs = { ...this.inputs, [name]: value };
  };

  // Return true if input produced no errors.
  sanitizeInput = () => {
    let { first, last, email, captcha, message } = this.inputs;
    let errors = {};

    first = first.trim();
    last = last.trim();
    email = email.trim();
    captcha = captcha.trim();
    message = message.trim();

    if(first.length === 0) errors.first = "Please provide your first name.";
    if(last.length === 0) errors.last = "Please provide your last name.";
    if(email.indexOf('@') === -1) errors.email = "Please enter a valid email.";
    if(captcha !== "5") errors.captcha = "Please enter the correct result of 2 + 3.";
    if(message.length < 10) errors.message = "Please include a message.";

    this.setState({ errors });

    return Object.keys(errors).length === 0;
  };

  renderSubmitButton = () => {
    let classNames = "";
    classNames += this.state.isSending ? " sending" : "";
    classNames += this.state.isSent ? " sent" : "";

    // Don't use 'value'. Make another object that better allows me to add variable html.
    return (
      <div className={ "submit-button" + classNames }>
        { this.state.isSending ? <HeartBox repeat={ true } /> : null }
        { !this.state.isSending ? <input type="submit" value="&hearts;" /> : null }
      </div>
    );
  };

  render() {
    return (
      <div className="contact-form">
        <form onSubmit={ this.handleSubmit }>
          <div className="input-row">
            <div className="input-row-item">
              <InputBox label="First *" type="text" name="first" onChange={ this.handleInputChange } error={ this.state.errors.first || false } isDisabled={this.state.isSending || this.state.isSent } />
            </div>
            <div className="input-row-item">
              <InputBox label="Last" type="text" name="last" onChange={ this.handleInputChange } error={ this.state.errors.last || false } isDisabled={this.state.isSending || this.state.isSent } />
            </div>
          </div>
          <div className="input-row">
            <div className="input-row-item">
              <InputBox label="Email *" type="text" name="email" onChange={ this.handleInputChange } error={ this.state.errors.email || false } isDisabled={this.state.isSending || this.state.isSent } />
            </div>
            <div className="input-row-item">
              <InputBox label="What is 2 + 3? *" type="text" name="captcha" onChange={ this.handleInputChange } error={ this.state.errors.captcha || false } isDisabled={this.state.isSending || this.state.isSent } />
            </div>
          </div>
          <div className="item">
            <TextArea label="Message *" name="message" onChange={ this.handleInputChange } error={ this.state.errors.message || false } isDisabled={this.state.isSending || this.state.isSent } />
          </div>
          { this.renderSubmitButton() }
          <span className="error">{ this.state.errors.response }</span>
        </form>
      </div>
    );
  };
};

ContactForm.propTypes = {
  onSubmitSuccess: PropTypes.func,
};

export default ContactForm;
