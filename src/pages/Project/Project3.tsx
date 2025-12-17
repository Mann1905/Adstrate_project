import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Project.css';

const Project3: React.FC = () => {
    return (
        <div className="project-container">
            <Helmet>
                <title>Project Details 3 - Interior Design Case Study</title>
                <meta name="description" content="Explore detailed insights into our interior design project, including challenges, solutions, and final results." />
                <meta name="keywords" content="project details, interior design case study, project overview, design solutions" />
                <meta property="og:title" content="Project Details 3 - Interior Design Case Study" />
                <meta property="og:description" content="Explore detailed insights into our interior design project." />
                <meta property="og:type" content="article" />
            </Helmet>

            <div className="project-hero-image-wrap">
                <img 
                    className="project-hero-image"
                    src="/assets/images/05_OurProjectDetailsPage/project3/IMG-20250101-WA0005.jpg"
                    alt="Living room interior design makeover with TV unit and antique mural" 
                />
            </div>
            
            <h1 className="project-title">Interior Design Makeover</h1>

            <div className="project-main-content">
                <div className="project-col-1">
                    <div className="project-section">
                        <h2 className="project-section-title">Project Overview</h2>
                        <p className="project-section-text-left">
                            A 1000 sq. ft. Dahisar home refreshed with modern interior design, featuring cohesive layouts, improved aesthetics, and a standout antique mural transforming the space&apos;s visual appeal.
                        </p>
                    </div>
                    <div className="project-details">
                        <p>2025</p>
                        <p>Dahisar</p>
                        <p>1000 Sq. Ft.</p>
                    </div>
                </div>

                <div className="project-col-2">
                    <div className="project-section">
                        <h2 className="project-section-title">Challenges</h2>
                        <p className="project-section-text">
                            An unattractive wall, need for cohesive styling, budget limits, and ensuring harmony between new features and existing furniture while maintaining premium aesthetics.
                        </p>
                    </div>

                    <div className="project-section project-section-solutions">
                        <h2 className="project-section-title">Solutions</h2>
                        <p className="project-section-text">
                            Redesigned the wall with an antique mural, upgraded finishes, enhanced lighting, improved room zoning, and delivered a functional, elegant home design flow.
                        </p>
                    </div>
                </div>

                <div className="project-col-3">
                    <img 
                        className="project-content-image"
                        src="/assets/images/05_OurProjectDetailsPage/project3/IMG-20250101-WA0035.jpg"
                        alt="Modern kitchen interior design with blue and white cabinets" 
                    />
                </div>
            </div>

            <div className="project-bottom-images">
                <img 
                    className="project-bottom-image-large"
                    src="/assets/images/05_OurProjectDetailsPage/project3/IMG-20250101-WA0013.jpg"
                    alt="Bedroom interior design with twin beds and storage" 
                />
                <img 
                    className="project-bottom-image-small"
                    src="/assets/images/05_OurProjectDetailsPage/project3/IMG-20250101-WA0022.jpg"
                    alt="Wardrobe and dresser unit in bedroom interior" 
                />
                <img 
                    className="project-bottom-image-small"
                     src="/assets/images/05_OurProjectDetailsPage/project3/IMG-20250101-WA0009.jpg"
                    
                    alt="Bedroom interior with feature ceiling and TV unit" 
                />
            </div>
        </div>
    );
};

export default Project3;

