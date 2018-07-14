import React from 'react';
import './header.component.css';
import SiteTitle from '../../atoms/siteTitle/siteTitle.component.js';
import LinkGroup from '../../molecules/links/linkGroup.component.js';
import TextDivider from '../../atoms/divider/textDivider.component.js';
import DropdownMenu from '../../molecules/dropdownMenu/dropdownMenu.component.js';
import Link from '../../atoms/link/link.component.js';
import SocialIconGroup from '../../molecules/socialiconGroup/socialiconGroup.component.js';

function Header() {
  return (
    <div className="header-container">
      <div className="title-container">
        { SiteTitle({ text: "Kim Greenough" }) }
      </div>

      <div className="link-groups-container">
        <span id="projects-link">{ Link({ url: "/", text: "PROJECTS"}) }</span>
        { LinkGroup({ linkData: [
          { url: "/fun", text: "FUN!" }
        ]})}
        { TextDivider() }
        { LinkGroup({ linkData: [
          { url: "https://medium.com/@kimgreenough", text: "BLOG" },
          { url: "/about", text: "ABOUT" },
          { url: "https://drive.google.com/open?id=14QvuWuKOymddhfrG0XpmmX043zKbaCGQ", text: "RESUME" },
          { url: "/contact", text: "CONTACT" }
        ]})}
      </div>

      <div className="dropdown-menu-container">
        <DropdownMenu linkData={[
          { url: "/", text: "PROJECTS" },
          { url: "/fun", text: "FUN!" },
          { url: "https://medium.com/@kimgreenough", text: "BLOG" },
          { url: "/about", text: "ABOUT" },
          { url: "https://drive.google.com/open?id=14QvuWuKOymddhfrG0XpmmX043zKbaCGQ", text: "RESUME" },
          { url: "/contact", text: "CONTACT" }
        ]} />
      </div>

      <div className="socialiconGroup-container">
        { SocialIconGroup() }
      </div>
    </div>
  );
};

export default Header;
