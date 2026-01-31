import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import blogMeta from '../../data/blogmeta';
import './Blog.css';

const Blog2: React.FC = () => {
  const navigate = useNavigate();
  const blog = blogMeta.find(b => b.id === 'blog-2');
  const currentIndex = blogMeta.findIndex(b => b.id === 'blog-2');
  const previousBlog = currentIndex > 0 ? blogMeta[currentIndex - 1] : null;
  const nextBlog = currentIndex < blogMeta.length - 1 ? blogMeta[currentIndex + 1] : null;

  return (
    <div className="container">
      <Helmet>
        <title>The Power of Color in Interior Design</title>
        <meta name="description" content="Color is one of the most powerful tools in interior design. Learn how color affects mood, creates cohesive palettes, and transforms your home." />
        <meta name="keywords" content="interior design blog post, design tips, home inspiration, design insights, color in interior design" />
        <meta property="og:title" content="The Power of Color in Interior Design" />
        <meta property="og:description" content="Color is one of the most powerful tools in interior design. Learn how color affects mood, creates cohesive palettes, and transforms your home." />
        <meta property="og:type" content="article" />
      </Helmet>

      <img className="hero" src={blog?.image || '/assets/images/01_HomePage/HeroSection_01.jpg'} alt="The Power of Color in Interior Design" />

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
          <h1>The Power of Color in Interior Design</h1>
          <p>Color is one of the most powerful tools in interior design. It influences mood, defines spaces, and brings a room to life. Choosing the right palette can completely transform how your home looks and feels.</p>

          <h2>How Color Affects Mood</h2>
          <p><strong>Soft neutrals</strong> promote calm and relaxation, perfect for bedrooms and living areas.</p>
          <p><strong>Warm tones</strong> like terracotta, beige, and soft browns create comfort and intimacy.</p>
          <p><strong>Cool hues</strong> such as blues and greens evoke tranquility and balance.</p>
          <p><strong>Bold accents</strong> add personality and visual interest when used intentionally.</p>

          <h2>Creating a Cohesive Color Palette</h2>
          <p>A successful color scheme flows naturally from room to room. We often start with a neutral base and layer in complementary tones through furniture, textiles, and accessories. This approach keeps the home cohesive while allowing each room to have its own identity.</p>

          <h2>Professional Guidance Makes the Difference</h2>
          <p>Many homeowners feel overwhelmed by color choices. Our designers help you select palettes that suit your space, lighting, and lifestyle—ensuring a harmonious and polished result.</p>
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

export default Blog2;

