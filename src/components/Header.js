import React from 'react';

import swCover from '../assets/img/logo.png';

export const Header = function () {
  return (
    <a href="#flex-container">
      <div className="cover-container">
        <img id="cover-image" src={swCover} alt="logo" />
      </div>
    </a>
  );
};

export default Header;
