import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './home.css';

const Home: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [hoveredProcess, setHoveredProcess] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
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
      // Use environment variable or fallback to direct PHP server URL
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
    <div className="homepage-container">
      <Helmet>
        <title>Home - Interior Design & Home Solutions</title>
        <meta name="description" content="Transform your living spaces with our premium interior design services. Expert consultation, custom design, and quality materials for your dream home." />
        <meta name="keywords" content="interior design, home design, living spaces, modular kitchen, bedrooms, home renovation" />
        <meta property="og:title" content="Home - Interior Design & Home Solutions" />
        <meta property="og:description" content="Transform your living spaces with our premium interior design services." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Section 1 - Hero */}
      <section className="hero-section">
        <div className="hero-inner">
        <div className="hero-left">
          <p className="hero-subtitle">Budget-Friendly Interior Design Experts in Mumbai</p>
          <h2 className="home-hero-title">
            Elevating Spaces
            with Expert Interior
            Design Solutions
          </h2>
          <p className="hero-description">
            Ten View Interiors delivers creative, practical, and affordable interior design with 15+ years of expertise. From home interiors to turnkey execution, we provide smart, stylish, and personalized solutions for seamless, budget-friendly transformations.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
              <button className="btn-outlined">Consultation</button>
            </Link>
            <Link to="/quote" style={{ textDecoration: 'none', color: 'inherit' }}>
              <button className="btn-filled">Get Quote</button>
            </Link>
          </div>
          <div className="hero-highlights">
            <p>15+ yrs Experts</p>
            <p>1BHK @ 5–6L</p>
            <p>Full Turnkey</p>
          </div>
        </div>
        <div className="hero-right">
          <img src="/assets/images/01_HomePage/HeroSection_01.jpg" alt="Interior Design" />
        </div>
        </div>
      </section>

      {/* Section 2 - Below Portion */}
      <section className="about-section-home">
        <div className="about-left">
          <p className="about-tagline">Transforming space into a new face—beautiful design made truly affordable.</p>
          <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
            <button className="btn-outlined">Explore More</button>
          </Link>
        </div>
        <div className="about-right">
          <p className="about-heading">About Us</p>
          <p className="about-description">
            Ten View Interiors is a Mumbai-based studio dedicated to creating stylish and cost-effective home interior design solutions. With a strong belief in "maximum design with minimum budget," we offer residential and commercial interior services, including planning, renovation, furniture design, painting, electrical work, and project management. Our experienced interior designers curate every element to match your lifestyle, taste, and budget. Whether it's a compact apartment or a spacious home, we deliver practical layouts, smart material choices, and aesthetic concepts that elevate your everyday living.
          </p>
        </div>
      </section>

      {/* Offerings */}
      <section className="offerings-section">
        <h2 className="offerings-title">Our Offerings</h2>
        <div className="offerings-cards">
          <div className="offering-card">
            <img src="/assets/images/01_HomePage/OurOfferingSection_01.jpg" alt="Living Space" />
            <h3 className="offering-card-text">Living Space</h3>
          </div>
          <div className="offering-card">
            <img src="/assets/images/01_HomePage/OurOfferingSection_02.jpg" alt="Modular Kitchen" />
            <h3 className="offering-card-text">Modular Kitchen</h3>
          </div>
          <div className="offering-card">
            <img src="/assets/images/01_HomePage/OurOfferingSection_03.jpg" alt="Bedrooms" />
            <h3 className="offering-card-text">Bedrooms</h3>
          </div>
        </div>
        <div className="offerings-button-container">
          <Link to="/services" style={{ textDecoration: 'none', color: 'inherit' }}>
            <button className="offerings-view-all-btn">View more</button>
          </Link>
        </div>
      </section>

      {/* Projects */}
      <section className="projects-section">
        <div className="projects-list-container">
          <Link to="/project" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div 
              className="project-item"
              onMouseEnter={() => setHoveredProject(0)}
              onMouseLeave={() => setHoveredProject(null)}
              onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
            >
              <div className="project-content">
                <div className="project-left">
                  <h3 className="project-title-home">Home Interior Design</h3>
                  <p className="project-location">Mumbai | Malad</p>
                </div>
                <svg className="project-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </Link>
          <Link to="/project3" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div 
              className="project-item"
              onMouseEnter={() => setHoveredProject(1)}
              onMouseLeave={() => setHoveredProject(null)}
              onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
            >
              <div className="project-content">
                <div className="project-left">
                  <h3 className="project-title-home">Interior Design Makeover</h3>
                  <p className="project-location">Mumbai | Dahisar</p>
                </div>
                <svg className="project-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </Link>
          <Link to="/project2" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div 
              className="project-item"
              onMouseEnter={() => setHoveredProject(2)}
              onMouseLeave={() => setHoveredProject(null)}
              onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
            >
              <div className="project-content">
                <div className="project-left">
                  <h3 className="project-title-home">Interior Design Project</h3>
                  <p className="project-location">Mumbai | Bhayandar</p>
                </div>
                <svg className="project-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </Link>
          <Link to="/project4" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div 
              className="project-item project-item-last"
              onMouseEnter={() => setHoveredProject(3)}
              onMouseLeave={() => setHoveredProject(null)}
              onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
            >
              <div className="project-content">
                <div className="project-left">
                  <h3 className="project-title-home">Raheja Complex Hall Interior Design</h3>
                  <p className="project-location">Mumbai | Goregaon East</p>
                </div>
                <svg className="project-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </Link>
        </div>
        <div 
          className={`projects-image-container ${hoveredProject !== null ? 'visible' : ''}`}
          style={{
            left: hoveredProject !== null ? `${mousePosition.x}px` : 'auto',
            top: hoveredProject !== null ? `${mousePosition.y}px` : 'auto',
          }}
        >
          {hoveredProject !== null ? (
            <img 
              src={
                hoveredProject === 0 
                  ? '/assets/images/05_OurProjectDetailsPage/IMG-20250101-WA0014.jpg' // Home Interior Design - Project1
                  : hoveredProject === 1
                  ? '/assets/images/05_OurProjectDetailsPage/project3/IMG-20250101-WA0005.jpg' // Interior Design Makeover - Project3
                  : hoveredProject === 2
                  ? '/assets/images/05_OurProjectDetailsPage/project2/IMG-20250318-WA0007.jpg' // Interior Design Project - Project2
                  : '/assets/images/05_OurProjectDetailsPage/project4/IMG-20250717-WA0000.jpg' // Raheja Complex Hall - Project4
              }
              alt={
                hoveredProject === 0 
                  ? 'Home Interior Design'
                  : hoveredProject === 1
                  ? 'Interior Design Makeover'
                  : hoveredProject === 2
                  ? 'Interior Design Project'
                  : 'Raheja Complex Hall Interior Design'
              }
              className="project-featured-image"
              onError={(e) => {
                // Fallback to default image if specific project image doesn't exist
                (e.target as HTMLImageElement).src = '/assets/images/01_HomePage/HeroSection_01.jpg';
              }}
            />
          ) : null}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="why-choose-image-container">
          <img 
            src="/assets/images/01_HomePage/image 8.png" 
            alt="Interior Design Process" 
            className="why-choose-image"
          />
        </div>
        <h2 className="why-choose-title">Why Choose Ten View Interiors for Your Interior Design Needs?</h2>
        <p className="why-choose-description">Ten View Interiors delivers reliable, affordable, personalized interior design with seamless execution, quality materials, and creative concepts tailored to your lifestyle and comfort.</p>
      </section>

      {/* The Process */}
      <section className="process-section">
        <h2 className="process-section-title">Processes steps heading only as follows.</h2>
        <div className="process-list-container">
          <div 
            className="process-item"
            onMouseEnter={() => setHoveredProcess(0)}
            onMouseLeave={() => setHoveredProcess(null)}
            onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
          >
            <div className="process-content">
              <div className="process-left">
                <h3 className="process-number">01</h3>
                <h4 className="process-title">Consultation</h4>
              </div>
              <Link to="/process" style={{ textDecoration: 'none', color: 'inherit' }}>
                <p className="process-details">Details</p>
              </Link>
            </div>
          </div>
          <div 
            className="process-item"
            onMouseEnter={() => setHoveredProcess(1)}
            onMouseLeave={() => setHoveredProcess(null)}
            onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
          >
            <div className="process-content">
              <div className="process-left">
                <h3 className="process-number">02</h3>
                <h4 className="process-title">Concept Development</h4>
              </div>
              <Link to="/process" style={{ textDecoration: 'none', color: 'inherit' }}>
                <p className="process-details">Details</p>
              </Link>
            </div>
          </div>
          <div 
            className="process-item"
            onMouseEnter={() => setHoveredProcess(2)}
            onMouseLeave={() => setHoveredProcess(null)}
            onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
          >
            <div className="process-content">
              <div className="process-left">
                <h3 className="process-number">03</h3>
                <h4 className="process-title">Design Proposal</h4>
              </div>
              <Link to="/process" style={{ textDecoration: 'none', color: 'inherit' }}>
                <p className="process-details">Details</p>
              </Link>
            </div>
          </div>
          <div 
            className="process-item"
            onMouseEnter={() => setHoveredProcess(3)}
            onMouseLeave={() => setHoveredProcess(null)}
            onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
          >
            <div className="process-content">
              <div className="process-left">
                <h3 className="process-number">04</h3>
                <h4 className="process-title">Material Selection</h4>
              </div>
              <Link to="/process" style={{ textDecoration: 'none', color: 'inherit' }}>
                <p className="process-details">Details</p>
              </Link>
            </div>
          </div>
          <div 
            className="process-item"
            onMouseEnter={() => setHoveredProcess(4)}
            onMouseLeave={() => setHoveredProcess(null)}
            onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
          >
            <div className="process-content">
              <div className="process-left">
                <h3 className="process-number">05</h3>
                <h4 className="process-title">Execution</h4>
              </div>
              <Link to="/process" style={{ textDecoration: 'none', color: 'inherit' }}>
                <p className="process-details">Details</p>
              </Link>
            </div>
          </div>
          <div 
            className="process-item process-item-last"
            onMouseEnter={() => setHoveredProcess(5)}
            onMouseLeave={() => setHoveredProcess(null)}
            onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
          >
            <div className="process-content">
              <div className="process-left">
                <h3 className="process-number">06</h3>
                <h4 className="process-title">Delivery</h4>
              </div>
              <Link to="/process" style={{ textDecoration: 'none', color: 'inherit' }}>
                <p className="process-details">Details</p>
              </Link>
            </div>
          </div>
        </div>
        <div 
          className={`process-image-container ${hoveredProcess !== null ? 'visible' : ''}`}
          style={{
            left: hoveredProcess !== null ? `${mousePosition.x}px` : 'auto',
            top: hoveredProcess !== null ? `${mousePosition.y}px` : 'auto',
          }}
        >
          {hoveredProcess !== null ? (
            <img 
              src={
                hoveredProcess === 0 
                  ? '/assets/images/01_HomePage/TheProcessSection_01.jpg' // Consultation
                  : hoveredProcess === 1
                  ? '/assets/images/01_HomePage/TheProcessSection_02.jpg' // Concept Development
                  : hoveredProcess === 2
                  ? '/assets/images/01_HomePage/TheProcessSection_03.jpg' // Design Proposal
                  : hoveredProcess === 3
                  ? '/assets/images/01_HomePage/TheProcessSection_04.jpg' // Material Selection
                  : hoveredProcess === 4
                  ? '/assets/images/01_HomePage/TheProcessSection_05.jpg' // Execution
                  : '/assets/images/01_HomePage/TheProcessSection_06.jpg' // Delivery
              }
              alt={
                hoveredProcess === 0 
                  ? 'Consultation'
                  : hoveredProcess === 1
                  ? 'Concept Development'
                  : hoveredProcess === 2
                  ? 'Design Proposal'
                  : hoveredProcess === 3
                  ? 'Material Selection'
                  : hoveredProcess === 4
                  ? 'Execution'
                  : 'Delivery'
              }
              className="process-featured-image"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/images/01_HomePage/HeroSection_01.jpg';
              }}
            />
          ) : null}
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section">
        <div className="contact-left">
          <h2 className="contact-title">Let's Design Your Dream Home</h2>
          <p className="contact-description">Reach out to Ten View Interiors to begin your journey toward a beautifully designed space. Whether you need full home interiors, renovation support, or expert guidance from interior designers, our team is ready to assist with budget-friendly and creative solutions.</p>
          <div className="contact-info">
            <p className="contact-phone">Phone No: <a href="tel:+911234123123" style={{ textDecoration: 'none', color: 'inherit' }}>+91 1234 123 123</a></p>
            <p className="contact-email">Email: <a href="mailto:contact@tenviewinteriors.in" style={{ textDecoration: 'none', color: 'inherit' }}>contact@tenviewinteriors.in</a></p>
            <div className="contact-social-icons">
              <div className="contact-social-icon" title="Instagram">
                <img src="/assets/images/01_HomePage/Instagram.png" alt="Instagram" />
              </div>
              <div className="contact-social-icon" title="LinkedIn">
                <img src="/assets/images/01_HomePage/LinkedIn.png" alt="LinkedIn" />
              </div>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="home-form">
              <label className="contact-form-label">Full Name</label>
              <input 
                type="text" 
                name="name"
                placeholder="Full Name" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="home-form">
              <label className="contact-form-label">Email</label>
              <input 
                type="email" 
                name="email"
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="home-form">
              <label className="contact-form-label">Subject</label>
              <input 
                type="text" 
                name="subject"
                placeholder="Subject" 
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="home-form">
              <label className="contact-form-label">Message</label>
              <textarea 
                name="message"
                placeholder="Message" 
                value={formData.message}
                onChange={handleChange}
                required
              />
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
              className="contact-submit-btn"
              disabled={isSubmitting}
              style={{
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'wait' : 'pointer'
              }}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Home;
