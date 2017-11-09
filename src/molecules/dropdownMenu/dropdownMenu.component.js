import React, { Component } from 'react';
import './dropdownMenu.component.css';
import LinkGroup from '../links/linkGroup.component.js';

class DropdownMenu extends Component {

  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  };

  toggleOpen = () => {
    this.setState( prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    const { isOpen } = this.state;
    const { linkData } = this.props;

    return (
      <div onClick={ this.toggleOpen }>
        <div className={ "menu-container " + (isOpen ? "open" : "") }>
            { LinkGroup({
              linkData,
              orientation: "vertical"
            })}
        </div>
        <p className="menu-button">MENU</p>
      </div>
    );
  };
};

export default DropdownMenu;
