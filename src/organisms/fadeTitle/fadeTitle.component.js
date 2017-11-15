import React, { Component } from 'react';
import './fadeTitle.component.css';

class FadeTitle extends Component {

  constructor(props) {
    super(props);

    this.state = {
      animate: false
    };
  };

  componentDidMount = () => {
    console.log('mounted');
    if(!this.state.animate) {
      setTimeout(function() { this.setState({ animate: true }); }.bind(this), 500);
    }
  };

  render() {
    const { animate } = this.state;

    return (
      <div className="title-thing">
        <span className={ "stuff" + (animate ? " animate" : " still") } style={{ transitionDelay: "1s" }}>K</span>
        <span className={ "stuff" + (animate ? " animate" : " still") } style={{ transitionDelay: "2s" }}>i</span>
        <span className={ "stuff" + (animate ? " animate" : " still") } style={{ transitionDelay: "3s" }}>m</span>
        &nbsp;
        <span>G</span>
        <span>r</span>
        <span>e</span>
        <span>e</span>
        <span>n</span>
        <span>o</span>
        <span>u</span>
        <span>g</span>
        <span>h</span>
      </div>
    );
  };
};

export default FadeTitle;
