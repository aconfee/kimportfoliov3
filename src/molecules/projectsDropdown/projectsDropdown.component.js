import React, { Component } from 'react';
import './projectsDropdown.component.css';
import LinkGroup from '../links/linkGroup.component.js';

class ProjectsDropdown extends Component {

  constructor(props) {
    super(props);

    this.linkData = [
      { url: "/grinch", text: "The Grinch" },
      { url: "/carcajou", text: "Carcajou Games" },
      { url: "/fishbowls", text: "Fishbowls" }
    ];
  };

  render() {
    return (
      <div className="projects-dropdown-menu">
          { LinkGroup({
            linkData: this.linkData,
            orientation: "vertical"
          })}
      </div>
    );
  };
};

export default ProjectsDropdown;
