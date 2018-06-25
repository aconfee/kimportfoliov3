import React from 'react';
import './socialiconGroup.component.css';

import SocialIcon from '../../atoms/socialicon/socialicon.component.js';

function SocialIconGroup() {
  return (
    <span className="socialicon-group">
      { SocialIcon({ iconType: "instagram", link: "https://www.instagram.com/kimbyarting/" }) }
      { SocialIcon({ iconType: "linkedin", link: "https://www.linkedin.com/in/kimberly-greenough-089215b9/" }) }
      { SocialIcon({ iconType: "youtube", link: "https://www.youtube.com/kimbyarting" }) }
      { SocialIcon({ iconType: "facebook", link: "https://www.facebook.com/kimbyarting/" }) }
      { SocialIcon({ iconType: "twitter", link: "https://twitter.com/kimbyarting" }) }
    </span>
  );
};

export default SocialIconGroup;
