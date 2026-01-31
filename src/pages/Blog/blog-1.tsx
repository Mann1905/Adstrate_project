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
        <title>Transforming Your Home with Timeless Interior Design</title>
        <meta name="description" content="Creating a home that feels stylish, comfortable, and enduring is the goal of timeless interior design. Learn about key elements and how we help create timeless spaces." />
        <meta name="keywords" content="interior design blog post, design tips, home inspiration, design insights, timeless design" />
        <meta property="og:title" content="Transforming Your Home with Timeless Interior Design" />
        <meta property="og:description" content="Creating a home that feels stylish, comfortable, and enduring is the goal of timeless interior design. Learn about key elements and how we help create timeless spaces." />
        <meta property="og:type" content="article" />
      </Helmet>

      <img className="hero" src={blog?.image || '/assets/images/01_HomePage/HeroSection_01.jpg'} alt="Transforming Your Home with Timeless Interior Design" />

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
          <h1>Transforming Your Home with Timeless Interior Design</h1>
          <p>Creating a home that feels stylish, comfortable, and enduring is the goal of timeless interior design. Trends come and go, but a well-designed space grounded in classic principles will always feel fresh and inviting.</p>

          <h2>What Is Timeless Interior Design?</h2>
          <p>Timeless design focuses on balance, proportion, and quality. Instead of chasing every new trend, it blends neutral color palettes, natural materials, and thoughtful details that age beautifully. Think warm woods, stone textures, elegant lighting, and furniture with clean, classic lines.</p>

          <h2>Key Elements of a Timeless Home</h2>
          <p><strong>Neutral foundations:</strong> Whites, creams, beiges, and soft greys create a calm base that can evolve over time.</p>
          <p><strong>Quality over quantity:</strong> Investing in well-made furniture and finishes ensures longevity and comfort.</p>
          <p><strong>Layered textures:</strong> Linen, wool, leather, and wood add depth without overwhelming the space.</p>
          <p><strong>Thoughtful accents:</strong> Art, books, and personal objects bring character and individuality.</p>

          <h2>How We Help Create Timeless Spaces</h2>
          <p>Our interior design process begins with understanding how you live in your space. We design interiors that reflect your personality while maintaining a refined, lasting aesthetic. The result is a home that feels elegant today and for years to come.</p>
        </div>
      </div>

      <div className="navigation">
        <div className={`nav-item ${!previousBlog ? 'nav-item-empty' : ''}`}>
          {previousBlog ? (
            <>
              <h3>{previousBlog.title}</h3>
              <p>{previousBlog.description}</p>
              <button onClick={() => navigate(`/blog/${previousBlog.id}`)}>Previous</button>
            </>
          ) : null}
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
