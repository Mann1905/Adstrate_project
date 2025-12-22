import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Blog.css';

const Blog: React.FC = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Blog Post - Interior Design Insights</title>
        <meta name="description" content="Read our latest interior design blog post with expert insights, tips, and inspiration for your home." />
        <meta name="keywords" content="interior design blog post, design tips, home inspiration, design insights" />
        <meta property="og:title" content="Blog Post - Interior Design Insights" />
        <meta property="og:description" content="Read our latest interior design blog post with expert insights and tips." />
        <meta property="og:type" content="article" />
      </Helmet>

      <img className="hero" src="/assets/images/01_HomePage/HeroSection_01.jpg" alt="Blog hero" />

      <div className="content">
        <div className="icons">
          <img src="/assets/images/01_HomePage/Instagram.png" alt="Instagram" />
          <img src="/assets/images/01_HomePage/LinkedIn.png" alt="LinkedIn" />
        </div>

        <div className="text">
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat rhoncus pretium. Praesent nec lorem tortor. Nulla ut imperdiet dui.</p>

          <h2>Lorem ipsum dolor</h2>
          <p>Integer sit amet placerat nisi. Ut vel libero sed metus cursus bibendum. Nunc ac convallis nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suscipit velit molestie scelerisque ultricies. Mauris eget consequat ex, rutrum accumsan nibh. Vivamus sapien est, facilisis sollicitudin lacus vel, dignissim porta ipsum. Cras lorem nisi, sollicitudin vitae tincidunt non, sagittis nec dolor. Nulla sollicitudin felis sed sodales viverra. Integer condimentum pretium elit, at suscipit urna venenatis dapibus. Vivamus at leo tempus, ornare tellus a, ornare mauris.</p>
          <p>Integer sit amet placerat nisi. Ut vel libero sed metus cursus bibendum. Nunc ac convallis nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suscipit velit molestie scelerisque ultricies. Mauris eget consequat ex, rutrum accumsan nibh. Vivamus sapien est, facilisis sollicitudin lacus vel, dignissim porta ipsum. Cras lorem nisi, sollicitudin vitae tincidunt non, sagittis nec dolor. Nulla sollicitudin felis sed sodales viverra. Integer condimentum pretium elit, at suscipit urna venenatis dapibus. Vivamus at leo tempus, ornare tellus a, ornare mauris.</p>
          <h2>Lorem ipsum dolor</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat rhoncus pretium. Praesent nec lorem tortor. Nulla ut imperdiet dui.</p>        


        </div>
      </div>

      <div className="navigation">
        <div className="nav-item">
          <h3>Blogs Title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Previous</button>
        </div>

        <div className="nav-item">
          <h3>Blogs Title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
