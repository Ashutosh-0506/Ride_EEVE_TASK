import React from 'react';

const HamburgerButton = ({ toggleSidebar }) => {
  return (
    <button className="hamburgerButton" onClick={toggleSidebar}>
      ☰
    </button>
  );
};

export default HamburgerButton;
