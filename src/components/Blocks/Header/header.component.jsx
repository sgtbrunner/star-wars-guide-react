import React from 'react';

import swCover from '../../../assets/img/logo.png';
import './header.styles.css';

const Header = () => (
  <a href="#main">
    <div className="header">
      <img className="cover-image" src={swCover} alt="logo" />
    </div>
  </a>
);

export default Header;
