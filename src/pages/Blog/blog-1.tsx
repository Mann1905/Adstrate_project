import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import blogMeta from '../../data/blogmeta';
import './Blog.css';

const Blog1: React.FC = () => {
  const navigate = useNavigate();
  const blog = blogMeta.find(b => b.id === 'blog-1');
  const currentIndex = blogMeta.findIndex(b => b.id === 'blog-1');
  const previousBlog = currentIndex > 0 ? blogMeta[currentIndex - 1] : null;
  const nextBlog = currentIndex < blogMeta.length - 1 ? blogMeta[currentIndex + 1] : null;

  return (
    <div className="container">
      <Helmet>
        <title>Top 10 Physical Therapies to Speed Up Injury Recovery</title>
        <meta name="description" content="Discover the top 10 physical therapies that speed up injury recovery, reduce pain, and restore mobility fast. Expert tips from ARC Medical Rehab." />
        <meta name="keywords" content="interior design blog post, design tips, home inspiration, design insights" />
        <meta property="og:title" content="Top 10 Physical Therapies to Speed Up Injury Recovery" />
        <meta property="og:description" content="Discover the top 10 physical therapies that speed up injury recovery, reduce pain, and restore mobility fast. Expert tips from ARC Medical Rehab." />
        <meta property="og:type" content="article" />
      </Helmet>

      <img className="hero" src={blog?.image || '/assets/images/01_HomePage/HeroSection_01.jpg'} alt="Top 10 Physical Therapies to Speed Up Injury Recovery" />

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
          <h1>Top 10 Physical Therapies to Speed Up Injury Recovery</h1>
          <p>Recovering from an injury can feel frustrating—especially when pain, stiffness, or weakness hold you back from your regular routine. The good news? Modern physical therapies have evolved dramatically, offering faster and more effective recovery options than ever before. Whether you're dealing with a sports injury, post-surgical healing, or chronic pain, the right therapy can shorten downtime and restore strength safely.</p>
          <p>In this expert guide, we break down the top 10 physical therapies that speed up injury recovery, when to use them, and how they work—all backed by real-world clinical results from rehabilitation specialists.</p>

          <p><strong>⭐ Quick Featured Snippet Answer</strong><br />
          The best physical therapies for speeding up injury recovery include manual therapy, therapeutic exercise, cryotherapy, heat therapy, electrical stimulation, ultrasound therapy, dry needling, aquatic therapy, kinesio taping, and shockwave therapy. These methods reduce pain, increase mobility, and accelerate tissue healing.</p>

         
          

         

         
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
              <button>Previous</button>
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

export default Blog1;
