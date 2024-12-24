import React, { useState } from "react";
import "../App.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  }

  return(
  <nav className="navbar">
    <div className="max-width">
      <div className="logo"><a href="#">P<span>R</span></a></div>
      <div className="menu-toggle" 
      onClick={toggleMenu}
      aria-expanded = {isMenuOpen} 
      role="button" 
      tabIndex={0}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`menu ${isMenuOpen ? "active" : ""}`}>
        <li><a href="#home" className="menu-btn" onClick={handleLinkClick}>Home</a></li>
        <li><a href="#about" className="menu-btn" onClick={handleLinkClick}>About</a></li>
        <li><a href="#skills" className="menu-btn" onClick={handleLinkClick}>Skills</a></li>
        <li><a href="#contact" className="menu-btn" onClick={handleLinkClick}>Contact</a></li>
      </ul>
    </div>
  </nav>
);
}

export default Navbar;