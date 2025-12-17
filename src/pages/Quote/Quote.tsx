import React from 'react';
import { Helmet } from 'react-helmet-async';

const Quote: React.FC = () => {
  return (
    <div> {/* Main container */}
      <Helmet>
        <title>Get a Quote - Request Your Free Estimate</title>
        <meta name="description" content="Request a free quote for your interior design project. Get an estimate tailored to your needs and budget." />
        <meta name="keywords" content="get quote, free estimate, interior design quote, project estimate" />
        <meta property="og:title" content="Get a Quote - Request Your Free Estimate" />
        <meta property="og:description" content="Request a free quote for your interior design project." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div>
        <div>
          <div>
            <h2>Professional Interior Design Services for Modern & Affordable Spaces</h2>
            <p>Ten View Interiors delivers stylish, functional, and budget-friendly interior design with 15+ years of expertise. Our Mumbai-based team offers smart planning, turnkey solutions, renovation support, and custom furniture for homes and commercial spaces. From living rooms to bedrooms and full home makeovers, we ensure creative, practical, and seamless transformations tailored to your lifestyle.. Praesent nec lorem tortor. Nulla ut imperdiet dui.</p>
            <img src="/assets/images/08_GetQuotePage/GetQuoteSection_01.jpg" alt="Get Quote" />
          </div>
          
          <div>
            <div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
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
    </div>
  );
};

export default Quote;

