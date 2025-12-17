import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Service from './pages/Service/Service';
import Process from './pages/Process/Process';
import Blogs from './pages/Blogs/Blogs';
import Quote from './pages/Quote/Quote';
import Project from './pages/Project/Project';
import Project2 from './pages/Project/Project2';
import Project3 from './pages/Project/Project3';
import Project4 from './pages/Project/Project4';
import Projects from './pages/Projects/Projects';
import ErrorPage from './pages/Error/ErrorPage';
import './assets/styles/global.css';
import './assets/styles/variables.css';
import './assets/styles/style.css';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh' 
        }}>
          <Navbar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Service />} />
              <Route path="/process" element={<Process />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/quote" element={<Quote />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project" element={<Project />} />
              <Route path="/project2" element={<Project2 />} />
              <Route path="/project3" element={<Project3 />} />
              <Route path="/project4" element={<Project4 />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;

