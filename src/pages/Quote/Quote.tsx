import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Quote.css';

const Quote: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

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
            <div>
              <label>Full Name</label>
              <input type="text" placeholder="Full Name" />
            </div>
            
            <div>
              <label>Phone No</label>
              <input type="tel" placeholder="Phone No" />
            </div>
            
            <button type="button">Next</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quote;

