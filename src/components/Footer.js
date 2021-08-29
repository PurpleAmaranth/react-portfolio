import React from 'react';
import '../styles/Footer.css';

function Footer() {

  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/PurpleAmaranth"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/tiffany-lovett-9135b2ba/"
    },
    {
      name: "fab fa-stack-overflow",
      link: "https://stackoverflow.com/users/9440331/purple-amaranth"
    }
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;