import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/footer.css';

const Footer: React.FC = () => {
  return (
    <div className="footer-container">

      {/* Top Title */}
      <div className="footer-title">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1>Ten View Interiors</h1>
        </Link>
      </div>

      {/* Horizontal Line */}
      <div className="footer-divider"></div>

      {/* Footer Main Grid */}
      <div className="footer-main">

        {/* Left Column (Links column 1) */}
        <div className="footer-links-column footer-links-col-1">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <p>Home</p>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
            <p>About</p>
          </Link>
          <Link to="/services" style={{ textDecoration: 'none', color: 'inherit' }}>
            <p>Services</p>
          </Link>
          <Link to="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>
            <p>Our Projects</p>
          </Link>
        </div>

        {/* Middle-Left Column (Links column 2) */}
        <div className="footer-links-column footer-links-col-2">
          <Link to="/process" style={{ textDecoration: 'none', color: 'inherit' }}>
            <p>Process</p>
          </Link>
        </div>

        {/* Middle-Right Column (Links column 3) */}
        <div className="footer-links-column footer-links-col-3">
          <Link to="/quote" style={{ textDecoration: 'none', color: 'inherit' }}>
            <p>Get Quote</p>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
            <p>Contact</p>
          </Link>
        </div>

        {/* Right Column (Contact Information) */}
        <div className="footer-contact">
          <p>Phone No: <a href="tel:+918169360309" style={{ textDecoration: 'none', color: 'inherit' }}>+91 816 936 0309</a></p>
          <p>Email: <a href="mailto:tenviewinteriors@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>tenviewinteriors@gmail.com</a></p>

          {/* Social Icons */}
          <div className="footer-social-icons">
            <a href="https://www.instagram.com/tenviewinteriors/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className="footer-social-icon" title="Instagram">
                <img src="/assets/images/01_HomePage/Instagram.png" alt="Instagram" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/ten-view-interiors/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className="footer-social-icon" title="LinkedIn">
                <img src="/assets/images/01_HomePage/LinkedIn.png" alt="LinkedIn" />
              </div>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="footer-bottom-divider"></div>

      {/* Bottom Footer Links */}
      <div className="footer-bottom-links">
        <p>Privacy Policies</p>
        <p>Terms & Condition</p>
      </div>

    </div>
  );
};

export default Footer;
