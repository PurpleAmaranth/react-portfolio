import React from 'react';
import banner from '../assets/images/gunnison-country-ledgestone-banner.png';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Welcome</h1>
      <img src={banner} alt="Dark slate bricks"></img>
      {props.children}
    </header>
  );
}

export default Header;
