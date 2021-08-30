import React from 'react';
import coverImage from '../assets/images/gunnison-country-ledgestone.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Welcome</h1>
      <img src={coverImage} alt="Dark slate bricks"></img>
      {props.children}
    </header>
  );
}

export default Header;
