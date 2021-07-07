import React from 'react';

const Footer = function () {
  return (
    <footer className="pa2 ph5-m ph6-l tc bg-near-black">
      <small className="pa2 f6 db tc lightest-blue">
        <b className="ttu">GUILHERME BRUNNER</b> © 2019, All Rights Reserved
      </small>
      <small className="pa2">
        <a href="https://sgtbrunner.github.io/" rel="noopener noreferrer" target="_blank">
          <div className="f6 dib ph2 link lightest-blue dim">
            Visit my <b>PORTFOLIO</b>
          </div>
        </a>
      </small>
    </footer>
  );
};

export default Footer;
