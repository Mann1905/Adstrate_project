import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../../assets/styles/style.css';
import './contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-main-container"> {/* Main container */}
      <Helmet>
        <title>Contact Us - Get in Touch</title>
        <meta name="description" content="Contact us for interior design consultations, quotes, and inquiries. We're here to help bring your vision to life." />
        <meta name="keywords" content="contact, interior design consultation, get quote, contact form" />
        <meta property="og:title" content="Contact Us - Get in Touch" />
        <meta property="og:description" content="Contact us for interior design consultations, quotes, and inquiries." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Overlay */}

      <div className="contact-container"> {/* Contact container */}
        {/* Left Section - Contact Information */}
        <div className="contact-info-section"> {/* Contact info section */}
          <h2>Modern Interior Design Services for Stylish & Affordable Spaces</h2> {/* Contact Us title */}
          <p>With a streamlined design-to-delivery process and
            budget-conscious creativity, we craft spaces that
            feel personal, functional, and beautifully aligned
            with modern living.</p> {/* Contact description */}
          <div className="contact-details-container"> {/* Contact details container */}
            <p>Phone No: <a href="tel:+911234123123" style={{ textDecoration: 'none', color: 'inherit' }}>+91 1234 123 123</a></p> {/* Phone number */}
            <p>Email: <a href="mailto:contact@tenviewinteriors.in" style={{ textDecoration: 'none', color: 'inherit' }}>contact@tenviewinteriors.in</a></p> {/* Email address */}
            {/* Social Icons */}
            <div className="contact-social-icons">
              <div className="contact-social-icon" title="Instagram">
                <img src="/assets/images/01_HomePage/Instagram.png" alt="Instagram" />
              </div> {/* Instagram icon */}
              <div className="contact-social-icon" title="LinkedIn">
                <img src="/assets/images/01_HomePage/LinkedIn.png" alt="LinkedIn" />
              </div> {/* LinkedIn icon */}
            </div>
          </div>

        </div>

        {/* Right Section - Contact Form */}
        <div className="contact-form-section"> {/* Contact form section */}
          <form className="contact-form"> {/* Contact form */}
            <div className="contact-form-field"> {/* Form field 1 - Full Name */}
              <label>Full Name</label> {/* Full Name label */}
              <input type="text" placeholder="Full Name" /> {/* Full Name input */}
            </div>
            <div className="contact-form-field"> {/* Form field 2 - Phone No */}
              <label>Phone No</label> {/* Phone No label */}
              <input type="tel" placeholder="Phone No" /> {/* Phone No input */}
            </div>
            <div className="contact-form-field"> {/* Form field 3 - Message */}
              <label>Message</label> {/* Message label */}
              <textarea placeholder="Message"></textarea> {/* Message textarea */}
            </div>
            <button type="submit" className="contact-submit-button">Submit</button> {/* Submit button */}
          </form>
        </div>
      </div>

    </div>
  );
};

export default Contact;

