import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import blogMeta from '../../data/blogmeta';
import Blog1 from './blog-1';
import './Blog.css';

const Blog: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // If it's blog-1, use the dedicated Blog1 component with full content
  if (id === 'blog-1') {
    return <Blog1 />;
  }
  
  const blog = blogMeta.find(b => b.id === id);
  const currentIndex = blog ? blogMeta.findIndex(b => b.id === id) : -1;
  const previousBlog = currentIndex > 0 ? blogMeta[currentIndex - 1] : null;
  const nextBlog = currentIndex >= 0 && currentIndex < blogMeta.length - 1 ? blogMeta[currentIndex + 1] : null;

  if (!blog) {
    return (
      <div className="container">
        <Helmet>
          <title>Blog Post - Interior Design Insights</title>
          <meta name="description" content="Read our latest interior design blog post with expert insights, tips, and inspiration for your home." />
        </Helmet>
        <div className="text">
          <h1>Blog Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <Helmet>
        <title>{blog.title}</title>
        <meta name="description" content={blog.description} />
        <meta name="keywords" content="interior design blog post, design tips, home inspiration, design insights" />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:type" content="article" />
      </Helmet>

      <img className="hero" src={blog.image} alt={blog.title} />

      <div className="content">
        <div className="icons">
          <a href="https://www.instagram.com/tenviewinteriors/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <img src="/assets/images/01_HomePage/Instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/ten-view-interiors/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <img src="/assets/images/01_HomePage/LinkedIn.png" alt="LinkedIn" />
          </a>
        </div>

        <div className="text">
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
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

export default Blog;
