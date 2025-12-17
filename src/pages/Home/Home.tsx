import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './home.css';

const Home: React.FC = () => {
  return (
    <div> {/* Main container */}
      <Helmet>
        <title>Home - Interior Design & Home Solutions</title>
        <meta name="description" content="Transform your living spaces with our premium interior design services. Expert consultation, custom design, and quality materials for your dream home." />
        <meta name="keywords" content="interior design, home design, living spaces, modular kitchen, bedrooms, home renovation" />
        <meta property="og:title" content="Home - Interior Design & Home Solutions" />
        <meta property="og:description" content="Transform your living spaces with our premium interior design services." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero */}
      <div> {/* Hero section container */}
        <div> {/* Hero content wrapper */}
          <p>Budget-Friendly Interior Design Experts in Mumbai</p> {/* Hero subtitle */}
          <h4>Elevating Spaces with Expert Interior Design Solutions</h4> {/* Hero main title */}
          <p>Ten View Interiors delivers creative, practical, and affordable interior design with 15+ years of expertise. From home interiors to turnkey execution, we provide smart, stylish, and personalized solutions for seamless, budget-friendly transformations.</p> {/* Hero description */}
          <div> {/* Hero action buttons */}
            <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div>contact</div> {/* Contact button */}
            </Link>
            <Link to="/quote" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div>Get Quote</div> {/* Get Quote button */}
            </Link>
          </div>
          {/* Highlights */}
          <div> {/* Highlights section container */}
            <p>Highlights</p> {/* Highlights label */}
            <div> {/* Highlights items container */}
              <p>- Complete 1BHK Interiors Starting at Just 5–6 Lakhs</p>
              <p> Turnkey Solutions: Design, Execution & Delivery</p>
              <p>Expert Designers with 15+ Years of Experience</p>
            </div>
          </div>
        </div>
        <img src="/assets/images/01_HomePage/HeroSection_01.jpg" alt="Hero Section" /> {/* Hero image */}
      </div>



      {/* About Us */}
      <div> {/* About Us section container */}
        <div> {/* About Us left content */}
          <h4> "Transforming space into a new face—beautiful design made truly affordable."</h4>
          <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
            <button>Explore More</button>
          </Link>

        </div>
        <div>
          <p>About Us</p>
          <p>Ten View Interiors is a Mumbai-based studio dedicated to creating stylish and cost-effective home interior design solutions. With a strong belief in “maximum design with minimum budget,” we offer residential and commercial interior services, including planning, renovation, furniture design, painting, electrical work, and project management. Our experienced interior designers curate every element to match your lifestyle, taste, and budget. Whether it’s a compact apartment or a spacious home, we deliver practical layouts, smart material choices, and aesthetic concepts that elevate your everyday living.</p> {/* About Us right description */}
        </div>
      </div>

      {/* Offerings */}
      <div> {/* Offerings section container */}
        <h2>Our offerings</h2> {/* Offerings title */}
        <div> {/* Offerings grid container */}
          <div> {/* Offering card 1 - Living Space */}
            <img src="/assets/images/01_HomePage/OurOfferingSection_01.jpg" alt="Custom Home Interior Solutions" /> {/* Offering image */}
            <h3>Custom Home Interior Solutions</h3> {/* Offering title */}
          </div>
          <div> {/* Offering card 2 - Modular Kitchen */}
            <img src="/assets/images/01_HomePage/OurOfferingSection_02.jpg" alt="Turnkey Design & Build Services" /> {/* Offering image */}
            <h3>Turnkey Design & Build Services</h3> {/* Offering title */}
          </div>
          <div> {/* Offering card 3 - Bedrooms */}
            <img src="/assets/images/01_HomePage/OurOfferingSection_03.jpg" alt="Online Consultation & Virtual Design Packages" /> {/* Offering image */}
            <h3> Online Consultation & Virtual Design Packages</h3> {/* Offering title */}
          </div>
        </div>
        <div>
          <button>
          </button>
        </div> {/* View more button */}
      </div>

      {/* Projects */}
      <div> {/* Projects section container */}
        <h2> Projects </h2> {/* Projects title */}
        <div> {/* Projects list container */}
          <div> {/* Project item 1 */}
            <h3>Dahisar 2BHK Modern Home</h3> {/* Project title */}
            <div></div> {/* Project arrow icon */}
            <p>Mumbai/Dahisar</p> {/* Project location */}

          </div>
          <div> {/* Project item 2 */}
            <h3>Andheri Compact 1BHK Transformation</h3> {/* Project title */}
            <div></div> {/* Project arrow icon */}
            <p>Mumbai/Dahisar</p> {/* Project location */}
          </div>
          <div> {/* Project item 3 */}
            <h3>Thane Contemporary Family Apartment</h3> {/* Project title */}
            <div></div> {/* Project arrow icon */}
            <p>Mumbai/Dahisar</p> {/* Project location */}
          </div>
        </div>
        <img src="/assets/images/01_HomePage/HeroSection_01.jpg" alt="Projects" /> {/* Projects featured image */}
      </div>

      {/* Why Choose Us */}
      <div> {/* Why Choose Us section container */}
        <h2>Why Choose Ten View Interiors for Your Interior Design Needs?</h2> {/* Why Choose Us title */}
        <p>Choosing Ten View Interiors means choosing reliability, creativity, and affordability. We focus on practical house interior design that enhances day-to-day comfort while reflecting your personality. Our team manages everything—from planning to final delivery—ensuring a seamless and stress-free experience. With transparent pricing, quality materials, and customized concepts, we create homes you love living in. Whether you need budget interiors, modern themes, or personalized bedroom interior design, we bring your vision to life with precision and care.</p> {/* Why Choose Us content */}
      </div>

      {/* The Process */}
      <div> {/* The Process section container */}
        <h2>The Process</h2> {/* The Process title */}
        <div> {/* Process steps container */}
          <div> {/* Process step 1 - Consultation */}
            <h3>01</h3> {/* Process number */}
            <h4>Consultation</h4> {/* Process name */}
            <Link to="/process" style={{ textDecoration: 'none', color: 'inherit' }}>
              <p>Details</p> {/* Process details link */}
            </Link>
          </div>
          <div> {/* Process step 2 - Design */}
            <h3> 02</h3> {/* Process number */}
            <h4>Concept Development</h4> {/* Process name */}
            <Link to="/process" style={{ textDecoration: 'none', color: 'inherit' }}>
              <p>Details</p> {/* Process details link */}
            </Link>
          </div>
          <div> {/* Process step 3 - Materials */}
            <h3>03</h3> {/* Process number */}
            <h4>Design Proposal</h4> {/* Process name */}
            <Link to="/process" style={{ textDecoration: 'none', color: 'inherit' }}>
              <p>Details</p> {/* Process details link */}
            </Link>
          </div>
          <div> {/* Process step 4 - Delivery */}
            <h3>04</h3> {/* Process number */}
            <h4>Material Selection</h4> {/* Process name */}
            <Link to="/process" style={{ textDecoration: 'none', color: 'inherit' }}>
              <p>Details</p> {/* Process details link */}
            </Link>
          </div>
          <div> {/* Process step 5 - Live */}
            <h3>05</h3> {/* Process number */}
            <h4>Execution</h4> {/* Process name */}
            <Link to="/process" style={{ textDecoration: 'none', color: 'inherit' }}>
              <p>Details</p> {/* Process details link */}
            </Link>
          </div>
          <div> {/* Process step 5 - Live */}
            <h3>06</h3> {/* Process number */}
            <h4>Delivery</h4> {/* Process name */}
            <Link to="/process" style={{ textDecoration: 'none', color: 'inherit' }}>
              <p>Details</p> {/* Process details link */}
            </Link>
          </div>
        </div>
        <div> {/* Process images container */}
          <img src="/assets/images/01_HomePage/TheProcessSection_01.jpg" alt="Consultation" /> {/* Process step 1 image */}
          <img src="/assets/images/01_HomePage/TheProcessSection_02.jpg" alt="Concept Development" /> {/* Process step 2 image */}
          <img src="/assets/images/01_HomePage/TheProcessSection_03.jpg" alt="Design Proposal" /> {/* Process step 3 image */}
          <img src="/assets/images/01_HomePage/TheProcessSection_04.jpg" alt="Material Selection" /> {/* Process step 4 image */}
          <img src="/assets/images/01_HomePage/TheProcessSection_05.jpg" alt="Execution" /> {/* Process step 5 image */}
          <img src="/assets/images/01_HomePage/TheProcessSection_06.jpg" alt="Delivery" /> {/* Process step 6 image */}
        </div>
      </div>

      {/* Contact */}
      <div> {/* Contact section container */}
        <div> {/* Contact content left side */}
          <h2>Let’s Design Your Dream Home</h2> {/* Contact title */}
          <p>Reach out to Ten View Interiors to begin your journey toward a beautifully designed space. Whether you need full home interiors, renovation support, or expert guidance from interior designers, our team is ready to assist with budget-friendly and creative solutions.</p> {/* Contact description */}
          <div> {/* Contact info container */}
            <p>phone no: <a href="tel:+911234123123" style={{ textDecoration: 'none', color: 'inherit' }}>+91 1234 123 123</a></p> {/* Phone number */}
            <p>email: <a href="mailto:contact@tenviewinteriors.in" style={{ textDecoration: 'none', color: 'inherit' }}>contact@tenviewinteriors.in</a></p> {/* Email address */}
            <div> {/* Social media icons */}
              <div></div> {/* Social icon 1 */}
              <div></div> {/* Social icon 2 */}
            </div>
          </div>
        </div>
        <div> {/* Contact form container */}
          <div> {/* Form field 1 - Full Name */}
            <div> Full Name </div> {/* Label */}
            <div> <input type="text" placeholder="Full Name" /> </div> {/* Input */}
          </div>
          <div> {/* Form field 2 - Phone No */}
            <div> Phone No </div> {/* Label */}
            <div> <input type="tel" placeholder="Phone No" /> </div> {/* Input */}
          </div>
          <div> {/* Form field 3 - Message */}
            <div> Message </div> {/* Label */}
            <div> <textarea placeholder="Message" /> </div> {/* Textarea */}
          </div>
          <div> <button> Submit </button> </div> {/* Submit button */}
        </div>
      </div>

    </div>
  );
};

export default Home;
