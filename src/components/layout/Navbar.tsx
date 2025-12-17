import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/navbar.css';

const Navbar: React.FC = () => {
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
    </div>
  );
};

export default Navbar;

