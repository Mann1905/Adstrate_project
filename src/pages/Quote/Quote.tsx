import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Quote.css';

const Quote: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => {
    if (activeStep < 4) {
      setActiveStep(activeStep + 1);
    }
  };

  const renderFormContent = () => {
    switch (activeStep) {
      case 1:
        return (
          <>
            <div>
              <label>Full Name</label>
              <input type="text" placeholder="Full Name" />
            </div>
            
            <div>
              <label>Phone No</label>
              <input type="tel" placeholder="Phone No" />
            </div>
          </>
        );
      
      case 2:
        return (
          <>
            <div>
              <label>Service Required</label>
              <input type="text" placeholder="1BHK" />
            </div>
            
            <div>
              <label>Your Budget</label>
              <input type="text" placeholder="Phone No" />
            </div>
          </>
        );
      
      case 3:
        return (
          <>
            <div>
              <label>Your Location</label>
              <input type="text" placeholder="Full Name" />
            </div>
          </>
        );
      
      case 4:
        return (
          <>
            <label>Any Customization Required</label>
            <div>
              <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat rhoncus pretium. Praesent nec lorem tortor. Nulla ut imperdiet dui."></textarea>
            </div>
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <Helmet>
        <title>Get a Quote - Request Your Free Estimate</title>
        <meta name="description" content="Request a free quote for your interior design project. Get an estimate tailored to your needs and budget." />
        <meta name="keywords" content="get quote, free estimate, interior design quote, project estimate" />
        <meta property="og:title" content="Get a Quote - Request Your Free Estimate" />
        <meta property="og:description" content="Request a free quote for your interior design project." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="wrapper">
        <div className="left">
          <h2>Professional Interior Design Services for Modern & Affordable Spaces</h2>
          <p>Ten View Interiors offers budget-friendly, functional design with smart planning and turnkey solutions for seamless, stylish home transformations.</p>
          <img src="/assets/images/08_GetQuotePage/GetQuoteSection_01.jpg" alt="Get Quote" />
        </div>
        
        <div className="right">
          <div className="steps">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`step ${activeStep === step ? 'active' : ''}`}
                onClick={() => setActiveStep(step)}
              >
                {step}
              </div>
            ))}
          </div>
          
          <form>
            {renderFormContent()}
            
            <button type="button" onClick={handleNext}>
              {activeStep === 4 ? 'Submit' : 'Next'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quote;

