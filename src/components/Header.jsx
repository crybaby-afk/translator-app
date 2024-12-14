import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Translator App</h1>
      <button className="theme-toggle">🌙</button> {/* Dark Mode Toggle */}
    </header>
  );
};

export default Header;
