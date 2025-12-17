import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Project.css';

const Project4: React.FC = () => {
    return (
        <div className="project-container">
            <Helmet>
                <title>Project Details 4 - Raheja Complex Hall Interior Design</title>
                <meta
                    name="description"
                    content="Raheja Complex hall interior design case study with project overview, challenges, and solutions."
                />
                <meta
                    name="keywords"
                    content="Raheja Complex hall interior design, project details, project overview, design solutions"
                />
                <meta
                    property="og:title"
                    content="Raheja Complex Hall Interior Design - Case Study"
                />
                <meta
                    property="og:description"
                    content="350 sq. ft. Raheja Complex hall transformed with modern interior design, refined lighting, and cohesive styling."
                />
                <meta property="og:type" content="article" />
            </Helmet>

            <div className="project-hero-image-wrap">
                <img
                    className="project-hero-image"
                    src="/assets/images/05_OurProjectDetailsPage/project4/IMG-20250717-WA0000.jpg"

                    alt="Raheja Complex hall interior design with modern kitchen counter"
                />
            </div>

            <h1 className="project-title">Raheja Complex Hall Interior Design</h1>

            <div className="project-main-content">
                <div className="project-col-1">
                    <div className="project-section">
                        <h2 className="project-section-title">Project Overview</h2>
                        <p className="project-section-text-left">
                            A 350 sq. ft. hall in Goregaon East transformed with modern interior
                            design, featuring refined lighting, clean aesthetics, and a functional
                            layout shaped to exceed client expectations.
                        </p>
                    </div>
                    <div className="project-details">
                        <p>2025</p>
                        <p>Goregaon East</p>
                        <p>350 Sq. Ft.</p>
                    </div>
                </div>

                <div className="project-col-2">
                    <div className="project-section">
                        <h2 className="project-section-title">Challenges</h2>
                        <p className="project-section-text">
                            Unclear design direction, uncertain lighting placement, compact space,
                            and need for a cohesive, modern hall with balanced functionality and
                            visual appeal.
                        </p>
                    </div>

                    <div className="project-section project-section-solutions">
                        <h2 className="project-section-title">Solutions</h2>
                        <p className="project-section-text">
                            Developed layered lighting, applied a modern theme, optimized layout
                            flow, used warm textures, and delivered a stylish hall design beyond
                            expectations.
                        </p>
                    </div>
                </div>

                <div className="project-col-3">
                    <img
                        className="project-content-image"
                        src="/assets/images/05_OurProjectDetailsPage/project4/IMG-20250717-WA0002.jpg"

                        alt="Tall storage and kitchen unit in Raheja Complex hall interior"
                    />
                </div>
            </div>

            <div className="project-bottom-images">
                <img
                    className="project-bottom-image-large"
                    src="/assets/images/05_OurProjectDetailsPage/project4/IMG-20250717-WA0004.jpg"

                    alt="Hall seating area with wall art and display niches"
                />
                <img
                    className="project-bottom-image-small"
                    src="/assets/images/05_OurProjectDetailsPage/project4/IMG-20250717-WA0000.jpg"

                    alt="Hall bench seating with decorative wall panel"
                />
                <img
                    className="project-bottom-image-small"
                    src="/assets/images/05_OurProjectDetailsPage/project4/IMG-20250814-WA0023.jpeg"
                    alt="Decorative mandir and display shelves detail in hall design"
                />
            </div>
        </div>
    );
};

export default Project4;


