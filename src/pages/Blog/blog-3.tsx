import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import blogMeta from '../../data/blogmeta';
import './Blog.css';

const Blog3: React.FC = () => {
  const navigate = useNavigate();
  const blog = blogMeta.find(b => b.id === 'blog-3');
  const currentIndex = blogMeta.findIndex(b => b.id === 'blog-3');
  const previousBlog = currentIndex > 0 ? blogMeta[currentIndex - 1] : null;
  const nextBlog = currentIndex < blogMeta.length - 1 ? blogMeta[currentIndex + 1] : null;

  return (
    <div className="container">
      <Helmet>
        <title>Why Hiring an Interior Designer Is a Smart Investment</title>
        <meta name="description" content="Hiring an interior designer is not just about aesthetics—it's about making smart decisions that save time, money, and stress. Learn what an interior designer brings to your project." />
        <meta name="keywords" content="interior design blog post, design tips, home inspiration, design insights, hiring interior designer" />
        <meta property="og:title" content="Why Hiring an Interior Designer Is a Smart Investment" />
        <meta property="og:description" content="Hiring an interior designer is not just about aesthetics—it's about making smart decisions that save time, money, and stress. Learn what an interior designer brings to your project." />
        <meta property="og:type" content="article" />
      </Helmet>

      <img className="hero" src={blog?.image || '/assets/images/01_HomePage/HeroSection_01.jpg'} alt="Why Hiring an Interior Designer Is a Smart Investment" />

      <div className="content">
        <div className="icons">
          <a href="https://www.instagram.com/tenview.interiors/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <img src="/assets/images/01_HomePage/Instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/ten-view-interiors/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <img src="/assets/images/01_HomePage/LinkedIn.png" alt="LinkedIn" />
          </a>
        </div>

        <div className="text">
          <h1>Why Hiring an Interior Designer Is a Smart Investment</h1>
          <p>Hiring an interior designer is not just about aesthetics—it's about making smart decisions that save time, money, and stress.</p>

          <h2>What an Interior Designer Brings to Your Project</h2>
          <p><strong>Expert planning:</strong> From layouts to lighting, every detail is carefully considered.</p>
          <p><strong>Access to resources:</strong> Designers have access to trusted suppliers, trades, and custom pieces.</p>
          <p><strong>Budget management:</strong> We help you avoid costly mistakes and prioritize where to invest.</p>
          <p><strong>A cohesive vision:</strong> Your space feels intentional, balanced, and professionally finished.</p>

          <h2>From Concept to Completion</h2>
          <p>We manage the design process from initial concept through final styling. This ensures a seamless experience and a result that truly reflects your vision.</p>

          <h2>Elevate Your Space with Confidence</h2>
          <p>Whether you're renovating, building, or refreshing a single room, working with a professional interior designer ensures your space is functional, beautiful, and uniquely yours.</p>
        </div>
      </div>

      <div className="navigation">
        <div className="nav-item">
          {previousBlog ? (
            <>
              <h3>{previousBlog.title}</h3>
              <p>{previousBlog.description}</p>
              <button onClick={() => navigate(`/blog/${previousBlog.id}`)}>Previous</button>
            </>
          ) : (
            <>
              <h3>Blogs Title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              
            </>
          )}
        </div>

        <div className="nav-item">
          {nextBlog ? (
            <>
              <h3>{nextBlog.title}</h3>
              <p>{nextBlog.description}</p>
              <button onClick={() => navigate(`/blog/${nextBlog.id}`)}>Next</button>
            </>
          ) : (
            <>
              <h3>Blogs Title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>Next</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog3;

