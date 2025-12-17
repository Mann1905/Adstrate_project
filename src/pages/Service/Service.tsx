import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Service.css';

const Service: React.FC = () => {
  return (
    <div className="service-main-container"> {/* Main container */}
      <Helmet>
        <title>Services - Our Interior Design Services</title>
        <meta name="description" content="Discover our comprehensive range of interior design services. From consultation to execution, we provide end-to-end solutions." />
        <meta name="keywords" content="interior design services, design consultation, home renovation services, design solutions" />
        <meta property="og:title" content="Services - Our Interior Design Services" />
        <meta property="og:description" content="Discover our comprehensive range of interior design services." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      {/* Hero Section */}
      <div className="service-hero-section">
        <div className="service-hero-image-container">
          <img src="/assets/images/03_ServicesPage/HeroSection_01.jpg" alt="Our Services" className="service-hero-image" />
          <div className="service-hero-text">
            <h2>Transforming Every Space with Creative & Affordable Interior Design</h2>
            <p>Ten View Interiors delivers 15+ years of stylish, functional, and budget-friendly interior design, offering smart layouts and seamless home transformations across living rooms, bedrooms, kitchens, and full homes.</p>
          </div>
        </div>
      </div>

      {/* Service Section */}
      <section className="service-section">
        <div className="service-section-grid">
          <div className="service-left-image-container">
            <img 
              src="/assets/images/03_ServicesPage/HomeSection_01.jpg" 
              alt="Interior design showcase" 
              className="service-left-image" 
            />
          </div>
          <div className="service-right-column">
            <div className="service-right-image-container">
              <img 
                src="/assets/images/03_ServicesPage/HomeSection_02.jpg" 
                alt="Modern interior design" 
                className="service-right-image" 
              />
            </div>
            <div className="service-text-content">
              <h3 className="service-heading">Designing Entire Homes</h3>
              <p className="service-description">
                We create well-planned and beautifully curated full home interior design solutions that balance style, comfort, and utility, ensuring every corner of your home reflects your personality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section - Reversed Layout */}
      <section className="service-section service-section-reversed">
        <div className="service-section-grid service-section-grid-reversed">
          <div className="service-right-column service-right-column-reversed">
            <div className="service-right-image-container">
              <img 
                src="/assets/images/03_ServicesPage/LivingRoomSection_02.jpg" 
                alt="Modern interior design" 
                className="service-right-image" 
              />
            </div>
            <div className="service-text-content">
              <h3 className="service-heading">Designing Just Living Room</h3>
              <p className="service-description">
                Our living room concepts enhance your everyday experience with smart layouts, elegant elements, and practical designs that maximize comfort and visual appeal.
              </p>
            </div>
          </div>
          <div className="service-left-image-container service-left-image-container-reversed">
            <img 
              src="/assets/images/03_ServicesPage/LivingRoomSection_01.jpg" 
              alt="Interior design showcase" 
              className="service-left-image service-left-image-reversed" 
            />
          </div>
        </div>
      </section>

      {/* Service Section 3 - Kitchen */}
      <section className="service-section">
        <div className="service-section-grid">
          <div className="service-left-image-container">
            <img 
              src="/assets/images/03_ServicesPage/KitchenSection_01.jpg" 
              alt="Modern kitchen interior" 
              className="service-left-image" 
            />
          </div>
          <div className="service-right-column">
            <div className="service-right-image-container">
              <img 
                src="/assets/images/03_ServicesPage/KitchenSection_02.jpg" 
                alt="Kitchen appliance" 
                className="service-right-image" 
              />
            </div>
            <div className="service-text-content">
              <h3 className="service-heading">Designing Just Modular Kitchen</h3>
              <p className="service-description">
                We craft efficient modular kitchens with optimal storage, sleek finishes, and user-friendly designs that make cooking effortless and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section 4 - Bedroom (Reversed Layout) */}
      <section className="service-section service-section-reversed">
        <div className="service-section-grid service-section-grid-reversed">
          <div className="service-right-column service-right-column-reversed">
            <div className="service-right-image-container">
              <img 
                src="/assets/images/03_ServicesPage/BedroomSection_02.jpg" 
                alt="Bedroom design details" 
                className="service-right-image" 
              />
            </div>
            <div className="service-text-content">
              <h3 className="service-heading">Designing Just Bedroom</h3>
              <p className="service-description">
                With a focus on calm and comfort, our bedroom interior design blends thoughtful lighting, soothing colors, and smart furniture to create a peaceful retreat.
              </p>
            </div>
          </div>
          <div className="service-left-image-container service-left-image-container-reversed">
            <img 
              src="/assets/images/03_ServicesPage/BedroomSection_01.jpg" 
              alt="Bedroom interior design" 
              className="service-left-image service-left-image-reversed" 
            />
          </div>
        </div>
      </section>

      {/* Service Section 5 - Bathroom */}
      <section className="service-section">
        <div className="service-section-grid">
          <div className="service-left-image-container">
            <img 
              src="/assets/images/03_ServicesPage/BathroomSection_01.jpg" 
              alt="Modern bathroom interior" 
              className="service-left-image" 
            />
          </div>
          <div className="service-right-column">
            <div className="service-right-image-container">
              <img 
                src="/assets/images/03_ServicesPage/BathroomSection_02.jpg" 
                alt="Bathroom design details" 
                className="service-right-image" 
              />
            </div>
            <div className="service-text-content">
              <h3 className="service-heading">Designing Just Bathroom</h3>
              <p className="service-description">
                We design stylish, functional bathrooms with modern fittings, durable materials, and space-saving ideas for a premium everyday experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section 6 - Dining Area (Reversed Layout) */}
      <section className="service-section service-section-reversed">
        <div className="service-section-grid service-section-grid-reversed">
          <div className="service-right-column service-right-column-reversed">
            <div className="service-right-image-container">
              <img 
                src="/assets/images/03_ServicesPage/DiningSection_02.jpg" 
                alt="Dining area details" 
                className="service-right-image" 
              />
            </div>
            <div className="service-text-content">
              <h3 className="service-heading">Designing Just Dining Area</h3>
              <p className="service-description">
                Our dining space concepts bring warmth and elegance to family gatherings, pairing functionality with stylish décor for an inviting atmosphere.
              </p>
            </div>
          </div>
          <div className="service-left-image-container service-left-image-container-reversed">
            <img 
              src="/assets/images/03_ServicesPage/DiningSection_01.jpg" 
              alt="Dining area interior" 
              className="service-left-image service-left-image-reversed" 
            />
          </div>
        </div>
      </section>

      {/* Service Section 7 - Commercial */}
      <section className="service-section">
        <div className="service-section-grid">
          <div className="service-left-image-container">
            <img 
              src="/assets/images/03_ServicesPage/CommercialSection_01.jpg" 
              alt="Commercial office interior" 
              className="service-left-image" 
            />
          </div>
          <div className="service-right-column">
            <div className="service-right-image-container">
              <img 
                src="/assets/images/03_ServicesPage/CommercialSection_02.jpg" 
                alt="Commercial space design" 
                className="service-right-image" 
              />
            </div>
            <div className="service-text-content">
              <h3 className="service-heading">Commercial Designing</h3>
              <p className="service-description">
                From offices to retail spaces, our commercial designs promote productivity, flow, and brand identity while maintaining cost-effective execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section 8 - Custom Made Furnishing (Reversed Layout) */}
      <section className="service-section service-section-reversed">
        <div className="service-section-grid service-section-grid-reversed">
          <div className="service-right-column service-right-column-reversed">
            <div className="service-right-image-container">
              <img 
                src="/assets/images/03_ServicesPage/FurnitureSection_02.jpg" 
                alt="Furniture design details" 
                className="service-right-image" 
              />
            </div>
            <div className="service-text-content">
              <h3 className="service-heading">Custom Made Furnishing</h3>
              <p className="service-description">
                We offer tailored furniture solutions crafted to fit your space perfectly, enhancing comfort, usability, and the overall aesthetic of your interiors.
              </p>
            </div>
          </div>
          <div className="service-left-image-container service-left-image-container-reversed">
            <img 
              src="/assets/images/03_ServicesPage/FurnitureSection_01.jpg" 
              alt="Custom furniture design" 
              className="service-left-image service-left-image-reversed" 
            />
          </div>
        </div>
      </section>
    
    </div>
  );
};

export default Service;

