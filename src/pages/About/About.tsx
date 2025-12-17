import React from 'react';
import { Helmet } from 'react-helmet-async';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About Us - Our Story &amp; Values</title>
        <meta
          name="description"
          content="Learn about our interior design company, our mission, values, and how we craft smart, stylish spaces for modern living."
        />
      </Helmet>

      <section className="about-hero">
        <div className="about-hero-left">
          <h1>Crafting Smart &amp; Stylish Spaces 
          with Expert Interior Design</h1>
        </div>
        <div className="about-hero-right">
          <p>
            Ten View Interiors offers affordable, stylish interior design with smart layouts,
            seamless execution, and personalized spaces tailored for modern, comfortable living.
          </p>
        </div>
      </section>
      
      <div className="about-image-wrap">
        <img
          className="about-image"
          src="/assets/images/02_AboutPage/HeroSection_01.jpg"
          alt="Warm modern kitchen interior"
        />
      </div>

      <section className="about-content">
        <div className="about-col-1">
          <h2 className="about-section-title">What we Do</h2>
          <p className="about-section-text-left">
            We deliver complete home interior design and turnkey solutions with renovation, space planning, furniture, and project management, creating elegant, functional, and modern spaces tailored to your lifestyle and budget.
          </p>
        </div>

        <div className="about-col-2">
          <div className="about-section">
            <h2 className="about-section-title">Our Values</h2>
            <p className="about-section-text">
              We believe in "maximum design with minimum budget," ensuring every client receives high-quality interiors without overspending. Transparency, creativity, and reliability form the foundation of our work.
            </p>
            <p className="about-section-text">
              From concept development to final delivery, we stay committed to delivering practical solutions, innovative ideas, and designs that elevate everyday living.
            </p>
          </div>

          <div className="about-section about-section-mission">
            <h2 className="about-section-title">Our Mission</h2>
            <p className="about-section-text">
              We make good design accessible with affordable, well-planned, and personalized interiors, offering clear communication, efficient execution, and customized concepts for every room and style.
            </p>
          </div>
        </div>

        <div className="about-col-3">
          <img
            className="about-content-image"
            src="/assets/images/02_AboutPage/WhatWeDoSection_01.jpg"
            alt="Modern interior design"
          />
        </div>
      </section>

      <section className="founder-section">
        <div className="founder-left">
          <h2 className="founder-heading">Meet Our Founder</h2>
          <div className="founder-name-wrapper">
            <h3 className="founder-name">Arvind</h3>
            <h3 className="founder-name">Nishad</h3>
          </div>
          <p className="founder-text">
            Arvind Nishad, with 15+ years of experience, leads Ten View Interiors through creativity, practical design, and budget-friendly innovation. His expertise in materials, space planning, and efficient execution builds functional, beautiful, and affordable homes.
          </p>
        </div>
        <div className="founder-right">
          <img
            className="founder-image"
            src="/assets/images/02_AboutPage/FounderSection_01.jpg"
            alt="Founder Arvind Nishad"
          />
        </div>
      </section>
    </div>
  );
};

export default About;

