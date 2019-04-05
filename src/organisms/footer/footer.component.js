import React from 'react';
import './footer.component.css';

function Footer() {
  return (
    <div className="footer-container">
      <p>Site made with &hearts; by Adam Estela</p>
      <p>All content © {new Date().getFullYear()} Kim Greenough, all rights reserved.</p>
    </div>
  );
};

export default Footer;
