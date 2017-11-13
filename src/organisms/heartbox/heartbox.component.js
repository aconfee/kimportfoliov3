import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './heartbox.component.css';

const frames = [
  { __html: "&hearts;" },
  { __html: "&hearts;&nbsp;&nbsp;&hearts;" },
  { __html: "&hearts;&nbsp;&nbsp;&hearts;&nbsp;&nbsp;&hearts;" }
];

class HeartBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      frame: 0
    };
  };

  renderFrame = () => {
    return ( <div dangerouslySetInnerHTML={ frames[this.state.frame] }></div>)
  }

  play = () => {
    if(this.state.frame === 0){
      setTimeout(function() { this.setState({ frame: 1 }); }.bind(this), 300);
      setTimeout(function() { this.setState({ frame: 2 }); }.bind(this), 600);

      if(this.props.repeat) {
        setTimeout(function() { this.setState({ frame: 0 }); }.bind(this), 900);
      }
    }

    return this.renderFrame();
  };

  render() {
    return (
      <div className="heartbox">
        { this.play() }
      </div>
    );
  };
};

HeartBox.propTypes = {
  repeat: PropTypes.bool.isRequired
};

export default HeartBox;
