import React, { Component } from 'react';
import './tilt.component.css';

class Tilt extends Component {
  constructor(props){
    super(props);

    this.$el = null;

    this.state = {
      tiltStyle: {
        transformStyle: "preserve-3d"
      }
    };
  };

  componentWillUnmount = () => {
    this.$el.removeEventListener("mousemove", this.handleMouseMove);
    this.$el.removeEventListener("mouseleave", this.handleMouseLeave);
  };

  initRef = el => {
    this.$el = el;
    if(!this.$el) {
      console.error("No ref for tilt.");
      return;
    }

    this.$el.addEventListener("mousemove", this.handleMouseMove);
    this.$el.addEventListener("mouseleave", this.handleMouseLeave);
  };

  handleMouseMove = (event) => {
    const { offsetX, offsetY } = event;
    const { maxTiltX, maxTiltY } = this.props;

    const width = this.$el.offsetWidth;
    const height = this.$el.offsetHeight;

    const percentOfMaxTiltX = (offsetX - (width / 2)) / width;
    const percentOfMaxTiltY = (offsetY - (height / 2)) / height;

    const tiltYDegrees = percentOfMaxTiltX * maxTiltX * -2/*Since division by 2 above to produce negatives*/;
    const tiltXDegrees = percentOfMaxTiltY * maxTiltY * 2;

    this.setState({ tiltStyle: {
      ...this.state.tiltStyle,
      transform: `perspective(1000px) rotateX(${tiltXDegrees}deg) rotateY(${tiltYDegrees}deg) scale3d(0.96, 0.96, 0.96)`
    }});
  };

  handleMouseLeave = () => {
    this.setState({ tiltStyle: {
      ...this.state.tiltStyle,
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    }});
  };

  render() {
    return (
      <div style={ this.state.tiltStyle } ref={ this.initRef } className="tilt">
          { this.props.children }
      </div>
    );
  };
};

export default Tilt;
