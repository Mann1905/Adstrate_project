import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import '../../assets/styles/style.css';
import './contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error' | null; text: string }>({ type: null, text: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ type: null, text: '' });

    try {
      // Try proxy first, fallback to direct PHP server URL
      const apiUrl = import.meta.env.VITE_PHP_API_URL || 
                     (window.location.hostname === 'localhost' ? 'http://localhost:8000/mail.php' : '/mail.php');
      
      console.log('Sending request to:', apiUrl);
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Response error:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Response data:', data);

      if (data.success) {
        setSubmitMessage({ type: 'success', text: data.message || 'Email sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitMessage({ type: 'error', text: data.message || 'Failed to send email. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setSubmitMessage({ 
        type: 'error', 
        text: `Network error: ${errorMessage}. Please ensure the PHP server is running on port 8000.` 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <p>Phone No: <a href="tel:+918169360309" style={{ textDecoration: 'none', color: 'inherit' }}>+91 816 936 0309</a></p> {/* Phone number */}
            <p>Email: <a href="mailto:tenviewinteriors@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>tenviewinteriors@gmail.com</a></p> {/* Email address */}
            {/* Social Icons */}
            <div className="contact-social-icons">
              <a href="https://www.instagram.com/tenviewinteriors/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div className="contact-social-icon" title="Instagram">
                  <img src="/assets/images/01_HomePage/Instagram.png" alt="Instagram" />
                </div> {/* Instagram icon */}
              </a>
              <a href="https://www.linkedin.com/in/ten-view-interiors/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div className="contact-social-icon" title="LinkedIn">
                  <img src="/assets/images/01_HomePage/LinkedIn.png" alt="LinkedIn" />
                </div> {/* LinkedIn icon */}
              </a>
            </div>
          </div>

        </div>

        {/* Right Section - Contact Form */}
        <div className="contact-form-section"> {/* Contact form section */}
          <form className="contact-form" onSubmit={handleSubmit}> {/* Contact form */}
            <div className="contact-form-field"> {/* Form field 1 - Full Name */}
              <label>Full Name</label> {/* Full Name label */}
              <input 
                type="text" 
                name="name"
                placeholder="Full Name" 
                value={formData.name}
                onChange={handleChange}
                required
              /> {/* Full Name input */}
            </div>
            <div className="contact-form-field"> {/* Form field 2 - Email */}
              <label>Email</label> {/* Email label */}
              <input 
                type="email" 
                name="email"
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}
                required
              /> {/* Email input */}
            </div>
            <div className="contact-form-field"> {/* Form field 3 - Subject */}
              <label>Subject</label> {/* Subject label */}
              <input 
                type="text" 
                name="subject"
                placeholder="Subject" 
                value={formData.subject}
                onChange={handleChange}
                required
              /> {/* Subject input */}
            </div>
            <div className="contact-form-field"> {/* Form field 4 - Message */}
              <label>Message</label> {/* Message label */}
              <textarea 
                name="message"
                placeholder="Message" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea> {/* Message textarea */}
            </div>
            {submitMessage.type && (
              <div style={{ 
                padding: '10px', 
                marginBottom: '10px',
                borderRadius: '4px',
                backgroundColor: submitMessage.type === 'success' ? '#d4edda' : '#f8d7da',
                color: submitMessage.type === 'success' ? '#155724' : '#721c24'
              }}>
                {submitMessage.text}
              </div>
            )}
            <button 
              type="submit" 
              className="contact-submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button> {/* Submit button */}
          </form>
        </div>
      </div>

    </div>
  );
};

export default Contact;

