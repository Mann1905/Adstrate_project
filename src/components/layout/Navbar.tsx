import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-brand">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1>Ten View Interiors</h1>
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/services">
          <button>Services</button>
        </Link>
        <Link to="/projects">
          <button>Projects</button>
        </Link>
        <Link to="/process">
          <button>Process</button>
        </Link>
        <Link to="/blogs">
          <button>Blogs</button>
        </Link>
      </div>
      <div className="navbar-actions">
        <Link to="/contact">
          <button className="contact-btn">Consultation</button>
        </Link>
        <Link to="/quote">
          <button className="quote-btn">Get Quote</button>
        </Link>
      </div>
      <div className="navbar-menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isMenuOpen && (
        <div className="navbar-dropdown">
          <Link to="/about" onClick={closeMenu}>
            <p>About</p>
          </Link>
          <Link to="/services" onClick={closeMenu}>
            <p>Services</p>
          </Link>
          <Link to="/projects" onClick={closeMenu}>
            <p>Projects</p>
          </Link>
          <Link to="/process" onClick={closeMenu}>
            <p>Process</p>
          </Link>
          <Link to="/blogs" onClick={closeMenu}>
            <p>Blogs</p>
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            <p>Consultation</p>
          </Link>
          <Link to="/quote" onClick={closeMenu}>
            <p>Get Quote</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

