import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Process.css';

const Process: React.FC = () => {
  return (
    <div className="process-main-container"> {/* Main container */}
      <Helmet>
        <title>Our Process - How We Work</title>
        <meta name="description" content="Learn about our step-by-step interior design process from initial consultation to final delivery. Understand how we bring your vision to life." />
        <meta name="keywords" content="design process, interior design workflow, consultation process, design steps" />
        <meta property="og:title" content="Our Process - How We Work" />
        <meta property="og:description" content="Learn about our step-by-step interior design process from consultation to delivery." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero/Intro Section */}
      <div className="service-hero-section">
        <div className="service-hero-image-container">
          <img src="/assets/images/07_TheProcess/ProcessSection_01.jpg" alt="Our process" className="service-hero-image" />
          <div className="service-hero-text">
            <h2>Premium & Budget-Friendly Interior
              Design Services in Mumbai</h2>
            <p>Ten View Interiors delivers 15+ years of creative, functional, and budget-friendly interior design,
              offering personalized planning and turnkey execution to transform homes into stylish, practical, and
              comfortable spaces.</p>
          </div>
        </div>
      </div>


      <div className="process-step">
        <div>Step 1</div>
        <div>Consultation</div>
        <div>We begin with an in-depth consultation to understand your needs, preferences, and budget, ensuring the right foundation for personalized design solutions.</div>
      </div>

      <div className="process-step">
        <div>Step 2</div>
        <div>Concept Development</div>
        <div>Our team creates conceptual directions that blend style, practicality, and innovation, helping you visualize the overall flow of your dream space.</div>
      </div>

      <div className="process-step">
        <div>Step 3</div>
        <div>Design Proposal</div>
        <div>We present detailed design proposals, layout plans, and style concepts tailored to your home interior design goals and daily living requirements.</div>
      </div>

      <div className="process-step">
        <div>Step 4</div>
        <div>Material Selection</div>
        <div>From finishes to furnishings, we help you select durable and aesthetic materials that enhance your interiors while staying within budget.</div>
      </div>

      <div className="process-step">
        <div>Step 5</div>
        <div>Execution</div>
        <div>Our experienced professionals handle complete execution with precision, ensuring every design element is implemented seamlessly and efficiently.</div>
      </div>

      <div className="process-step">
        <div>Step 6</div>
        <div>Delivery</div>
        <div>We complete your project with quality checks and final touches, delivering a beautifully finished space that reflects your vision and lifestyle.</div>
      </div>

    </div>
  );
};

export default Process;

