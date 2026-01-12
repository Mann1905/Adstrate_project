import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import blogMeta from '../../data/blogmeta';
import './Blogs.css';

interface BlogPost {
  id: number | string;
  title: string;
  description: string;
  image: string;
}

const Blogs: React.FC = () => {
  const navigate = useNavigate();

  
  const integratedBlogs: BlogPost[] = blogMeta.map(blog => ({
    id: blog.id,
    title: blog.title,
    description: blog.description,
    image: blog.image,
  }));

  
  const remainingBlogs: BlogPost[] = [
    {
      id: 5,
      title: 'Blogs Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/assets/images/01_HomePage/HeroSection_01.jpg'
    },
    {
      id: 6,
      title: 'Blogs Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/assets/images/01_HomePage/HeroSection_01.jpg'
    },
    {
      id: 7,
      title: 'Blogs Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/assets/images/01_HomePage/HeroSection_01.jpg'
    },
    {
      id: 8,
      title: 'Blogs Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/assets/images/01_HomePage/HeroSection_01.jpg'
    },
    {
      id: 9,
      title: 'Blogs Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/assets/images/01_HomePage/HeroSection_01.jpg'
    }
  ];

  // Combine: first 4 from reference data, remaining 5 unchanged
  const allBlogs = [...integratedBlogs, ...remainingBlogs];

  return (
    <div className="blogs-container">
      <Helmet>
        <title>Blogs - Interior Design Articles & Tips</title>
        <meta name="description" content="Explore our collection of interior design blogs, tips, and inspiration for your home renovation projects." />
        <meta name="keywords" content="interior design blog, home design tips, renovation advice, design inspiration" />
        <meta property="og:title" content="Blogs - Interior Design Articles & Tips" />
        <meta property="og:description" content="Explore our collection of interior design blogs, tips, and inspiration." />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="blogs-hero">
        <img 
          className="blogs-hero-image" 
          src="/assets/images/01_HomePage/HeroSection_01.jpg" 
          alt="Interior design inspiration"
        />
        <div className="blogs-hero-content">
          <h1 className="blogs-hero-title">Interior Design Inspiration</h1>
          <p className="blogs-hero-description">Discover the latest trends and tips for transforming your living spaces.</p>
        </div>
      </section>

      <section>
        <h2 className="blogs-section-title">Blogs</h2>
        <div className="blogs-grid">
          {allBlogs.map((post) => (
            <article 
              key={post.id} 
              className="blog-card" 
              onClick={() => {
                // Only navigate for integrated blogs (blog-1, blog-2, etc.)
                if (typeof post.id === 'string' && post.id.startsWith('blog-')) {
                  navigate(`/blog/${post.id}`);
                }
              }}
            >
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-card-description">{post.description}</p>
              <img 
                className="blog-card-image" 
                src={post.image} 
                alt={post.title}
              />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
