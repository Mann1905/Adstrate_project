import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Project.css';

const Project2: React.FC = () => {
    return (
        <div className="project-container">
            <Helmet>
                <title>Project Details 2 - Interior Design Case Study</title>
                <meta name="description" content="Explore detailed insights into our interior design project, including challenges, solutions, and final results." />
                <meta name="keywords" content="project details, interior design case study, project overview, design solutions" />
                <meta property="og:title" content="Project Details 2 - Interior Design Case Study" />
                <meta property="og:description" content="Explore detailed insights into our interior design project." />
                <meta property="og:type" content="article" />
            </Helmet>

            <div className="project-hero-image-wrap">
                <img 
                    className="project-hero-image"
                    src="/assets/images/05_OurProjectDetailsPage/project2/IMG-20250318-WA0007.jpg"

                    alt="Bedroom interior design with upholstered headboard and feature wall" 
                />
            </div>
            
            <h1 className="project-title">Interior Design Project</h1>

            <div className="project-main-content">
                <div className="project-col-1">
                    <div className="project-section">
                        <h2 className="project-section-title">Project Overview</h2>
                        <p className="project-section-text-left">
                            A 650 sq. ft. Bhayandar home upgraded with functional, stylish interior design centered on a personalized mandir, efficient layouts, and warm, budget-conscious styling for compact living.
                        </p>
                    </div>
                    <div className="project-details">
                        <p>2025</p>
                        <p>Bhayandar</p>
                        <p>650 Sq. Ft.</p>
                    </div>
                </div>

                <div className="project-col-2">
                    <div className="project-section">
                        <h2 className="project-section-title">Challenges</h2>
                        <p className="project-section-text">
                            Mandir integration in limited space, maintaining aesthetics and Vastu alignment, ensuring functionality, and balancing spiritual and modern design elements effectively.
                        </p>
                    </div>

                    <div className="project-section project-section-solutions">
                        <h2 className="project-section-title">Solutions</h2>
                        <p className="project-section-text">
                            Designed a custom mandir, introduced space-saving layouts, added cohesive styling, used warm textures, and created a practical, elegant interior theme.
                        </p>
                    </div>
                </div>

                <div className="project-col-3">
                    <img 
                        className="project-content-image"
                        src="/assets/images/05_OurProjectDetailsPage/project2/IMG-20250317-WA0026.jpg"
                        alt="Modern kitchen interior with red and white cabinetry" 
                    />
                </div>
            </div>

            <div className="project-bottom-images">
                <img 
                    className="project-bottom-image-large"
                    src="/assets/images/05_OurProjectDetailsPage/project2/IMG-20250317-WA0028.jpg"
                    alt="Bedroom interior with study area and wardrobe" 
                />
                <img 
                    className="project-bottom-image-small"
                    src="/assets/images/05_OurProjectDetailsPage/project2/IMG-20250318-WA0001.jpg"
                    alt="Compact study nook with partition design" 
                />
                <img 
                    className="project-bottom-image-small"
                    src="/assets/images/05_OurProjectDetailsPage/project2/IMG-20250317-WA0024.jpg"
                    alt="Bathroom interior with shower and tiled walls" 
                />
            </div>
        </div>
    );
};

export default Project2;

