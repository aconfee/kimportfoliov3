import React from 'react';
import './header.component.css';
import SiteTitle from '../../atoms/siteTitle/siteTitle.component.js';
import LinkGroup from '../../molecules/links/linkGroup.component.js';
import TextDivider from '../../atoms/divider/textDivider.component.js';
import DropdownMenu from '../../molecules/dropdownMenu/dropdownMenu.component.js';

function Header() {
  return (
    <div className="header-container">
      <div className="title-container">
        { SiteTitle({ text: "Kim Greenough" }) }
      </div>

      <div className="link-groups-container">
        { LinkGroup({ linkData: [
          { url: "/projects", text: "PROJECTS" },
          { url: "/concept", text: "CONCEPT" },
          { url: "/illustration", text: "ILLUSTRATION" },
          { url: "/fun", text: "FUN!" }
        ]})}
        { TextDivider() }
        { LinkGroup({ linkData: [
          { url: "/about", text: "ABOUT" },
          { url: "", text: "RESUME" },
          { url: "/contact", text: "CONTACT" }
        ]})}
      </div>

      <div className="dropdown-menu-container">
        <DropdownMenu linkData={[
          { url: "/projects", text: "PROJECTS" },
          { url: "/concept", text: "CONCEPT" },
          { url: "/illustration", text: "ILLUSTRATION" },
          { url: "/fun", text: "FUN!" },
          { url: "/about", text: "ABOUT" },
          { url: "/resume", text: "RESUME" },
          { url: "/contact", text: "CONTACT" }
        ]} />
      </div>

    </div>
  );
};

export default Header;
