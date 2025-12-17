import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Project.css';

const Project: React.FC = () => {
    return (
        <div className="project-container">
            <Helmet>
                <title>Project Details - Interior Design Case Study</title>
                <meta name="description" content="Explore detailed insights into our interior design project, including challenges, solutions, and final results." />
                <meta name="keywords" content="project details, interior design case study, project overview, design solutions" />
                <meta property="og:title" content="Project Details - Interior Design Case Study" />
                <meta property="og:description" content="Explore detailed insights into our interior design project." />
                <meta property="og:type" content="article" />
            </Helmet>

            <div className="project-hero-image-wrap">
                <img 
                    className="project-hero-image"
                    src="/assets/images/05_OurProjectDetailsPage/IMG-20250101-WA0014.jpg"
                    alt="Modern bedroom interior design" 
                />
            </div>

            <h1 className="project-title">Home Interior Design</h1>

            <div className="project-main-content">
                <div className="project-col-1">
                    <div className="project-section">
                        <h2 className="project-section-title">Project Overview</h2>
                        <p className="project-section-text-left">
                            A 650 sq. ft. Malad home redesigned with practical, stylish interior design focused on smart layouts, functional storage, and a modern budget-friendly aesthetic tailored to compact living.
                        </p>
                    </div>
                    <div className="project-details">
                        <p>2024</p>
                        <p>Malad</p>
                        <p>650 Sq. Ft.</p>
                    </div>
                </div>

                <div className="project-col-2">
                    <div className="project-section">
                        <h2 className="project-section-title">Challenges</h2>
                        <p className="project-section-text">
                            Limited space, low natural light, and the need for multifunctional storage and efficient placements while maintaining a clean, modern, low-maintenance design approach.
                        </p>
                    </div>

                    <div className="project-section project-section-solutions">
                        <h2 className="project-section-title">Solutions</h2>
                        <p className="project-section-text">
                            Optimized space with smart furniture, added warm lighting, used reflective surfaces, created custom storage, and ensured cohesive modern styling across living and bedroom areas.
                        </p>
                    </div>
                </div>

                <div className="project-col-3">
                    <img 
                        className="project-content-image"
                        src="/assets/images/05_OurProjectDetailsPage/IMG-20250317-WA0007.jpg"
                        alt="Wall mural design with wooden planks and LED lighting" 
                    />
                </div>
            </div>

            <div className="project-bottom-images">
                <img 
                    className="project-bottom-image-large"
                    src="/assets/images/05_OurProjectDetailsPage/IMG_20250301_193551204_HDR.jpg"
                    alt="Wall mural design with wooden planks and LED lighting" 
                />
                <img 
                    className="project-bottom-image-small"
                    src="/assets/images/05_OurProjectDetailsPage/IMG-20250310-WA0003.jpg"
                    alt="Living room interior design" 
                />
                <img 
                    className="project-bottom-image-small"
                    src="/assets/images/05_OurProjectDetailsPage/IMG-20250317-WA0003.jpg"
                    alt="Dining area interior design" 
                />
            </div>
        </div>
    );
};

export default Project;

