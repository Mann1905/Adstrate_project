import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <div className="projects">
      <Helmet>
        <title>Ten View Interiors Project Showcase</title>
        <meta
          name="description"
          content="Explore interior design projects by Ten View Interiors featuring smart layouts, budget-friendly styling, and modern home transformations."
        />
      </Helmet>

      <div className="hero">
        <img
          className="hero-img"
          src="/assets/images/05_OurProjectDetailsPage/IMG_20250301_193551204_HDR.jpg"
          alt="Warm interior detail with coffee cup and decor on table"
        />

        <div className="hero-row">
          <h1 className="hero-title">Ten View Interiors Project Showcase</h1>
          <p className="hero-text">
            Explore our interior design projects featuring smart layouts, budget-friendly styling,
            and modern transformations for homes across Mumbai by expert interior designers.
          </p>
        </div>

        <div className="hero-line" />
      </div>

      <section className="section section-border">
        <div className="section-grid">
          <div className="info">
            <h2 className="title">Home Interior Design</h2>
            <p className="label">Project Overview</p>
            <p className="copy">
              A 650 sq. ft. Malad home redesigned with practical, stylish interior design focused
              on smart layouts, functional storage, and a modern budget-friendly aesthetic tailored
              to compact living.
            </p>
            <Link to="/project" className="projects-btn-link">
              <span className="projects-btn">View Project Detail</span>
            </Link>
          </div>
          <div className="image-wrap">
            <img
              className="image"
              src="/assets/images/05_OurProjectDetailsPage/IMG-20250317-WA0007.jpg"
              alt="Living room interior design with sofa, ceiling lights and wall decor"
            />
          </div>
        </div>
      </section>

      <section className="section section-border">
        <div className="section-grid">
          <div className="info">
            <h2 className="title">Interior Design Makeover</h2>
            <p className="label">Project Overview</p>
            <p className="copy">
              A 1000 sq. ft. Dahisar home refreshed with modern interior design, featuring cohesive
              layouts, improved aesthetics, and a standout antique mural transforming the space&apos;s
              visual appeal.
            </p>
            <Link to="/project3" className="projects-btn-link">
              <span className="projects-btn">View Project Detail</span>
            </Link>
          </div>
          <div className="image-wrap">
            <img
              className="image"
              src="/assets/images/05_OurProjectDetailsPage/project3/IMG-20250101-WA0005.jpg"              alt="Modern living room makeover with TV unit and lighting details"
            />
          </div>
        </div>
      </section>

      <section className="section section-border">
        <div className="section-grid">
          <div className="info">
            <h2 className="title">Interior Design Project</h2>
            <p className="label">Project Overview</p>
            <p className="copy">
              A 650 sq. ft. Bhayandar home upgraded with functional, stylish interior design
              centered on a personalized mandir, efficient layouts, and warm, budget-conscious
              styling for compact living.
            </p>
            <Link to="/project2" className="projects-btn-link">
              <span className="projects-btn">View Project Detail</span>
            </Link>
          </div>
          <div className="image-wrap">
            <img
              className="image"
              src="/assets/images/05_OurProjectDetailsPage/project2/IMG-20250318-WA0007.jpg"
              alt="Bedroom interior design with feature wall and storage"
            />
          </div>
        </div>
      </section>

      <section className="section section-border section-border-last">
        <div className="section-grid">
          <div className="info">
            <h2 className="title">Raheja Complex Hall Interior Design</h2>
            <p className="label">Project Overview</p>
            <p className="copy">
              A 350 sq. ft. hall in Goregaon East transformed with modern interior design,
              featuring refined lighting, clean aesthetics, and a functional layout shaped to
              exceed client expectations.
            </p>
            <Link to="/project4" className="projects-btn-link">
              <span className="projects-btn">View Project Detail</span>
            </Link>
          </div>
          <div className="image-wrap">
            <img
              className="image"
          src="public\assets\images\05_OurProjectDetailsPage\project4\IMG-20250717-WA0000.jpg"
              alt="Raheja Complex hall interior with seating and storage"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;


