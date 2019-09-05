import React, { Component } from 'react';
import './header.component.css';
import SiteTitle from '../../atoms/siteTitle/siteTitle.component.js';
import LinkGroup from '../../molecules/links/linkGroup.component.js';
import TextDivider from '../../atoms/divider/textDivider.component.js';
import DropdownMenu from '../../molecules/dropdownMenu/dropdownMenu.component.js';
import Link from '../../atoms/link/link.component.js';
import SocialIconGroup from '../../molecules/socialiconGroup/socialiconGroup.component.js';
import ProjectsDropdown from '../../molecules/projectsDropdown/projectsDropdown.component';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { projectsDropdownIsVisible: false };
  };

  renderProjectsDropdown = () => {
    if(this.state.projectsDropdownIsVisible)
    {
      return (
        <div className="projects-dropdown-container" onMouseLeave={ this.hideProjectsDropdown } onClick={ this.hideProjectsDropdown } >
          <ProjectsDropdown />
        </div>
      );
    }

    return null;
  };

  showProjectsDropdown = () => {
    debugger;
    this.setState({ projectsDropdownIsVisible: true });
  };

  hideProjectsDropdown = () => {
    this.setState({ projectsDropdownIsVisible: false });
  };

  render() {
    return (
      <div className="header-container">
        <div className="title-container">
          { SiteTitle({ text: "Kim Greenough" }) }
        </div>

        <div className="link-groups-container">
          <span id="projects-link">{ Link({ url: "/", text: "CHARACTER DESIGN"}) }</span>
          <span id="projects-link">{ Link({ url: "/illustration", text: "ILLUSTRATION"}) }</span>
          { LinkGroup({ linkData: [
            { url: "/fun", text: "FUN!" }
          ]})}
          { TextDivider() }
          { LinkGroup({ linkData: [
            // { url: "https://medium.com/@kimgreenough", text: "BLOG" },
            { url: "/about", text: "ABOUT" },
            { url: "/resume", text: "RESUME" },
            { url: "/contact", text: "CONTACT" }
          ]})}
          { this.renderProjectsDropdown() }
        </div>

        <div className="dropdown-menu-container">
          <DropdownMenu linkData={[
            { url: "/", text: "CHARACTER DESIGN" },
            { url: "/illustration", text: "ILLUSTRATION" },
            { url: "/fun", text: "FUN!" },
            // { url: "https://medium.com/@kimgreenough", text: "BLOG" },
            { url: "/about", text: "ABOUT" },
            { url: "/resume", text: "RESUME" },
            { url: "/contact", text: "CONTACT" }
          ]} />
        </div>

        <div className="socialiconGroup-container">
          { SocialIconGroup() }
        </div>
      </div>
    );
  };
}

export default Header;
