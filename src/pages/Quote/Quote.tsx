import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Quote.css';

const Quote: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceRequired: '',
    budget: '',
    location: '',
    customization: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error' | null; text: string }>({ type: null, text: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    if (activeStep < 4) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ type: null, text: '' });

    try {
      // Use environment variable or fallback to direct PHP server URL
      const apiUrl = import.meta.env.VITE_PHP_API_URL || 
                     (window.location.hostname === 'localhost' ? 'http://localhost:8000/quote.php' : '/quote.php');
      
      console.log('Sending quote request to:', apiUrl);
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Response error:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Response data:', data);

      if (data.success) {
        setSubmitMessage({ type: 'success', text: data.message || 'Quote request sent successfully!' });
        setFormData({ name: '', phone: '', serviceRequired: '', budget: '', location: '', customization: '' });
        setActiveStep(1); // Reset to first step
      } else {
        setSubmitMessage({ type: 'error', text: data.message || 'Failed to send quote request. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting quote form:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setSubmitMessage({ 
        type: 'error', 
        text: `Network error: ${errorMessage}. Please ensure the PHP server is running on port 8000.` 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderFormContent = () => {
    switch (activeStep) {
      case 1:
        return (
          <>
            <div>
              <label>Full Name</label>
              <input 
                type="text" 
                name="name"
                placeholder="Full Name" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label>Phone No</label>
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone No" 
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </>
        );
      
      case 2:
        return (
          <>
            <div>
              <label>Service Required</label>
              <input 
                type="text" 
                name="serviceRequired"
                placeholder="e.g., 1BHK, 2BHK, 3BHK" 
                value={formData.serviceRequired}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label>Your Budget</label>
              <input 
                type="text" 
                name="budget"
                placeholder="Your Budget" 
                value={formData.budget}
                onChange={handleChange}
                required
              />
            </div>
          </>
        );
      
      case 3:
        return (
          <>
            <div>
              <label>Your Location</label>
              <input 
                type="text" 
                name="location"
                placeholder="Your Location" 
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
          </>
        );
      
      case 4:
        return (
          <>
            <label>Any Customization Required</label>
            <div>
              <textarea 
                name="customization"
                placeholder="Any customization requirements (optional)" 
                value={formData.customization}
                onChange={handleChange}
              ></textarea>
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
          
          <form onSubmit={(e) => {
            e.preventDefault();
            if (activeStep === 4 && !isSubmitting) {
              handleSubmit(e);
            }
          }}>
            {renderFormContent()}
            
            {submitMessage.type && (
              <div style={{ 
                padding: '10px', 
                marginBottom: '10px',
                borderRadius: '4px',
                backgroundColor: submitMessage.type === 'success' ? '#d4edda' : '#f8d7da',
                color: submitMessage.type === 'success' ? '#155724' : '#721c24'
              }}>
                {submitMessage.text}
              </div>
            )}
            
            <button 
              type={activeStep === 4 ? 'submit' : 'button'} 
              onClick={activeStep !== 4 ? (e) => {
                e.preventDefault();
                handleNext();
              } : undefined}
              disabled={isSubmitting}
              style={{
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'wait' : 'pointer'
              }}
            >
              {isSubmitting ? 'Sending...' : (activeStep === 4 ? 'Submit' : 'Next')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quote;

