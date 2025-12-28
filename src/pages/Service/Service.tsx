import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Service.css';

const Service: React.FC = () => {
  return (
    <div className="serviceee-main-container"> {/* Main container */}
      <Helmet>
        <title>Services - Our Interior Design Services</title>
        <meta name="description" content="Discover our comprehensive range of interior design services. From consultation to execution, we provide end-to-end solutions." />
        <meta name="keywords" content="interior design services, design consultation, home renovation services, design solutions" />
        <meta property="og:title" content="Services - Our Interior Design Services" />
        <meta property="og:description" content="Discover our comprehensive range of interior design services." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      {/* Hero Section */}
      <div className="serviceee-hero-section">
        <div className="serviceee-hero-image-container">
          <img src="/assets/images/03_ServicesPage/HeroSection_01.jpg" alt="Our Services" className="serviceee-hero-image" />
          <div className="serviceee-hero-text">
            <h2>Transforming Every Space with Creative & Affordable Interior Design</h2>
            <p>Ten View Interiors delivers 15+ years of stylish, functional, and budget-friendly interior design, offering smart layouts and seamless home transformations across living rooms, bedrooms, kitchens, and full homes.</p>
          </div>
        </div>
      </div>

      {/* Service Section */}
      <section className="serviceee-section">
        {/* Mobile: Big Image with Text Overlay */}
        <div className="serviceee-big-image-container">
          <img 
            src="/assets/images/03_ServicesPage/HomeSection_01.jpg" 
            alt="Interior design showcase" 
            className="serviceee-big-image" 
          />
          <div className="serviceee-image-text-overlay">
            <h3>Designing Entire Homes</h3>
            <p>
              We create well-planned and beautifully curated full home interior design solutions that balance style, comfort, and utility, ensuring every corner of your home reflects your personality.
            </p>
          </div>
        </div>
        {/* Desktop: Two Column Layout */}
        <div className="serviceee-section-grid">
          <div className="serviceee-left-image-container">
            <img 
              src="/assets/images/03_ServicesPage/HomeSection_01.jpg" 
              alt="Interior design showcase" 
              className="serviceee-left-image" 
            />
          </div>
          <div className="serviceee-right-column">
            <div className="serviceee-right-image-container">
              <img 
                src="/assets/images/03_ServicesPage/HomeSection_02.jpg" 
                alt="Modern interior design" 
                className="serviceee-right-image" 
              />
            </div>
            <div className="serviceee-text-content">
              <h3 className="serviceee-heading">Designing Entire Homes</h3>
              <p className="serviceee-description">
                We create well-planned and beautifully curated full home interior design solutions that balance style, comfort, and utility, ensuring every corner of your home reflects your personality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section - Reversed Layout */}
      <section className="serviceee-section serviceee-section-reversed">
        {/* Mobile: Big Image with Text Overlay */}
        <div className="serviceee-big-image-container">
          <img 
            src="/assets/images/03_ServicesPage/LivingRoomSection_01.jpg" 
            alt="Interior design showcase" 
            className="serviceee-big-image" 
          />
          <div className="serviceee-image-text-overlay">
            <h3>Designing Just Living Room</h3>
            <p>
              Our living room concepts enhance your everyday experience with smart layouts, elegant elements, and practical designs that maximize comfort and visual appeal.
            </p>
          </div>
        </div>
        {/* Desktop: Two Column Layout */}
        <div className="serviceee-section-grid serviceee-section-grid-reversed">
          <div className="serviceee-right-column serviceee-right-column-reversed">
            <div className="serviceee-right-image-container">
              <img 
                src="/assets/images/03_ServicesPage/LivingRoomSection_02.jpg" 
                alt="Modern interior design" 
                className="serviceee-right-image" 
              />
            </div>
            <div className="serviceee-text-content">
              <h3 className="serviceee-heading">Designing Just Living Room</h3>
              <p className="serviceee-description">
                Our living room concepts enhance your everyday experience with smart layouts, elegant elements, and practical designs that maximize comfort and visual appeal.
              </p>
            </div>
          </div>
          <div className="serviceee-left-image-container serviceee-left-image-container-reversed">
            <img 
              src="/assets/images/03_ServicesPage/LivingRoomSection_01.jpg" 
              alt="Interior design showcase" 
              className="serviceee-left-image serviceee-left-image-reversed" 
            />
          </div>
        </div>
      </section>

      {/* Service Section 3 - Kitchen */}
      <section className="serviceee-section">
        {/* Mobile: Big Image with Text Overlay */}
        <div className="serviceee-big-image-container">
          <img 
            src="/assets/images/03_ServicesPage/KitchenSection_01.jpg" 
            alt="Modern kitchen interior" 
            className="serviceee-big-image" 
          />
          <div className="serviceee-image-text-overlay">
            <h3>Designing Just Modular Kitchen</h3>
            <p>
              We craft efficient modular kitchens with optimal storage, sleek finishes, and user-friendly designs that make cooking effortless and enjoyable.
            </p>
          </div>
        </div>
        {/* Desktop: Two Column Layout */}
        <div className="serviceee-section-grid">
          <div className="serviceee-left-image-container">
            <img 
              src="/assets/images/03_ServicesPage/KitchenSection_01.jpg" 
              alt="Modern kitchen interior" 
              className="serviceee-left-image" 
            />
          </div>
          <div className="serviceee-right-column">
            <div className="serviceee-right-image-container">
              <img 
                src="/assets/images/03_ServicesPage/KitchenSection_02.jpg" 
                alt="Kitchen appliance" 
                className="serviceee-right-image" 
              />
            </div>
            <div className="serviceee-text-content">
              <h3 className="serviceee-heading">Designing Just Modular Kitchen</h3>
              <p className="serviceee-description">
                We craft efficient modular kitchens with optimal storage, sleek finishes, and user-friendly designs that make cooking effortless and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section 4 - Bedroom (Reversed Layout) */}
      <section className="serviceee-section serviceee-section-reversed">
        {/* Mobile: Big Image with Text Overlay */}
        <div className="serviceee-big-image-container">
          <img 
            src="/assets/images/03_ServicesPage/BedroomSection_01.jpg" 
            alt="Bedroom interior design" 
            className="serviceee-big-image" 
          />
          <div className="serviceee-image-text-overlay">
            <h3>Designing Just Bedroom</h3>
            <p>
              With a focus on calm and comfort, our bedroom interior design blends thoughtful lighting, soothing colors, and smart furniture to create a peaceful retreat.
            </p>
          </div>
        </div>
        {/* Desktop: Two Column Layout */}
        <div className="serviceee-section-grid serviceee-section-grid-reversed">
          <div className="serviceee-right-column serviceee-right-column-reversed">
            <div className="serviceee-right-image-container">
              <img 
                src="/assets/images/03_ServicesPage/BedroomSection_02.jpg" 
                alt="Bedroom design details" 
                className="serviceee-right-image" 
              />
            </div>
            <div className="serviceee-text-content">
              <h3 className="serviceee-heading">Designing Just Bedroom</h3>
              <p className="serviceee-description">
                With a focus on calm and comfort, our bedroom interior design blends thoughtful lighting, soothing colors, and smart furniture to create a peaceful retreat.
              </p>
            </div>
          </div>
          <div className="serviceee-left-image-container serviceee-left-image-container-reversed">
            <img 
              src="/assets/images/03_ServicesPage/BedroomSection_01.jpg" 
              alt="Bedroom interior design" 
              className="serviceee-left-image serviceee-left-image-reversed" 
            />
          </div>
        </div>
      </section>

      {/* Service Section 5 - Bathroom */}
      <section className="serviceee-section">
        {/* Mobile: Big Image with Text Overlay */}
        <div className="serviceee-big-image-container">
          <img 
            src="/assets/images/03_ServicesPage/BathroomSection_01.jpg" 
            alt="Modern bathroom interior" 
            className="serviceee-big-image" 
          />
          <div className="serviceee-image-text-overlay">
            <h3>Designing Just Bathroom</h3>
            <p>
              We design stylish, functional bathrooms with modern fittings, durable materials, and space-saving ideas for a premium everyday experience.
            </p>
          </div>
        </div>
        {/* Desktop: Two Column Layout */}
        <div className="serviceee-section-grid">
          <div className="serviceee-left-image-container">
            <img 
              src="/assets/images/03_ServicesPage/BathroomSection_01.jpg" 
              alt="Modern bathroom interior" 
              className="serviceee-left-image" 
            />
          </div>
          <div className="serviceee-right-column">
            <div className="serviceee-right-image-container">
              <img 
                src="/assets/images/03_ServicesPage/BathroomSection_02.jpg" 
                alt="Bathroom design details" 
                className="serviceee-right-image" 
              />
            </div>
            <div className="serviceee-text-content">
              <h3 className="serviceee-heading">Designing Just Bathroom</h3>
              <p className="serviceee-description">
                We design stylish, functional bathrooms with modern fittings, durable materials, and space-saving ideas for a premium everyday experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section 6 - Dining Area (Reversed Layout) */}
      <section className="serviceee-section serviceee-section-reversed">
        {/* Mobile: Big Image with Text Overlay */}
        <div className="serviceee-big-image-container">
          <img 
            src="/assets/images/03_ServicesPage/DiningSection_01.jpg" 
            alt="Dining area interior" 
            className="serviceee-big-image" 
          />
          <div className="serviceee-image-text-overlay">
            <h3>Designing Just Dining Area</h3>
            <p>
              Our dining space concepts bring warmth and elegance to family gatherings, pairing functionality with stylish décor for an inviting atmosphere.
            </p>
          </div>
        </div>
        {/* Desktop: Two Column Layout */}
        <div className="serviceee-section-grid serviceee-section-grid-reversed">
          <div className="serviceee-right-column serviceee-right-column-reversed">
            <div className="serviceee-right-image-container">
              <img 
                src="/assets/images/03_ServicesPage/DiningSection_02.jpg" 
                alt="Dining area details" 
                className="serviceee-right-image" 
              />
            </div>
            <div className="serviceee-text-content">
              <h3 className="serviceee-heading">Designing Just Dining Area</h3>
              <p className="serviceee-description">
                Our dining space concepts bring warmth and elegance to family gatherings, pairing functionality with stylish décor for an inviting atmosphere.
              </p>
            </div>
          </div>
          <div className="serviceee-left-image-container serviceee-left-image-container-reversed">
            <img 
              src="/assets/images/03_ServicesPage/DiningSection_01.jpg" 
              alt="Dining area interior" 
              className="serviceee-left-image serviceee-left-image-reversed" 
            />
          </div>
        </div>
      </section>

      {/* Service Section 7 - Commercial */}
      <section className="serviceee-section">
        {/* Mobile: Big Image with Text Overlay */}
        <div className="serviceee-big-image-container">
          <img 
            src="/assets/images/03_ServicesPage/CommercialSection_01.jpg" 
            alt="Commercial office interior" 
            className="serviceee-big-image" 
          />
          <div className="serviceee-image-text-overlay">
            <h3>Commercial Designing</h3>
            <p>
              From offices to retail spaces, our commercial designs promote productivity, flow, and brand identity while maintaining cost-effective execution.
            </p>
          </div>
        </div>
        {/* Desktop: Two Column Layout */}
        <div className="serviceee-section-grid">
          <div className="serviceee-left-image-container">
            <img 
              src="/assets/images/03_ServicesPage/CommercialSection_01.jpg" 
              alt="Commercial office interior" 
              className="serviceee-left-image" 
            />
          </div>
          <div className="serviceee-right-column">
            <div className="serviceee-right-image-container">
              <img 
                src="/assets/images/03_ServicesPage/CommercialSection_02.jpg" 
                alt="Commercial space design" 
                className="serviceee-right-image" 
              />
            </div>
            <div className="serviceee-text-content">
              <h3 className="serviceee-heading">Commercial Designing</h3>
              <p className="serviceee-description">
                From offices to retail spaces, our commercial designs promote productivity, flow, and brand identity while maintaining cost-effective execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section 8 - Custom Made Furnishing (Reversed Layout) */}
      <section className="serviceee-section serviceee-section-reversed">
        {/* Mobile: Big Image with Text Overlay */}
        <div className="serviceee-big-image-container">
          <img 
            src="/assets/images/03_ServicesPage/FurnitureSection_01.jpg" 
            alt="Custom furniture design" 
            className="serviceee-big-image" 
          />
          <div className="serviceee-image-text-overlay">
            <h3>Custom Made Furnishing</h3>
            <p>
              We offer tailored furniture solutions crafted to fit your space perfectly, enhancing comfort, usability, and the overall aesthetic of your interiors.
            </p>
          </div>
        </div>
        {/* Desktop: Two Column Layout */}
        <div className="serviceee-section-grid serviceee-section-grid-reversed">
          <div className="serviceee-right-column serviceee-right-column-reversed">
            <div className="serviceee-right-image-container">
              <img 
                src="/assets/images/03_ServicesPage/FurnitureSection_02.jpg" 
                alt="Furniture design details" 
                className="serviceee-right-image" 
              />
            </div>
            <div className="serviceee-text-content">
              <h3 className="serviceee-heading">Custom Made Furnishing</h3>
              <p className="serviceee-description">
                We offer tailored furniture solutions crafted to fit your space perfectly, enhancing comfort, usability, and the overall aesthetic of your interiors.
              </p>
            </div>
          </div>
          <div className="serviceee-left-image-container serviceee-left-image-container-reversed">
            <img 
              src="/assets/images/03_ServicesPage/FurnitureSection_01.jpg" 
              alt="Custom furniture design" 
              className="serviceee-left-image serviceee-left-image-reversed" 
            />
          </div>
        </div>
      </section>
    
    </div>
  );
};

export default Service;

