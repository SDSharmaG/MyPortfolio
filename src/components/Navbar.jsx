// components/Navbar.js
import React, { useState, useEffect } from 'react';
import resumeFile from '../assets/files/Shankar_Dhayal_Sharma_MERNStack_Developer.docx';

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section with offset for navbar
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];
      const navbarHeight = 80;
      const scrollPosition = window.scrollY + navbarHeight + 20;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const closeNav = () => setIsNavCollapsed(true);

  // Smooth scroll with offset for fixed navbar
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navbarHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    setIsNavCollapsed(true);
  };

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled py-2' : 'py-3'}`}>
      <div className="container">
        <a 
          className="navbar-brand fw-bold" 
          href="#hero"
          onClick={(e) => handleNavClick(e, 'hero')}
        >
          Shankar <span className="text-info">Sharma</span>
          <span className="brand-small d-none d-sm-inline"> G</span>
        </a>
        
        <button 
          className="navbar-toggler shadow-none border-0" 
          type="button" 
          onClick={handleNavCollapse}
          aria-expanded={!isNavCollapsed}
        >
          <i className="bi bi-list fs-1 text-info"></i>
        </button>
        
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-2 gap-lg-3">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.id}>
                <a 
                  className={`nav-link fw-medium px-3 ${activeSection === link.id ? 'text-info active' : ''}`}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-2 mt-3 mt-lg-0">
              <a href={resumeFile} download className="btn btn-info rounded-pill px-4 py-2 fw-semibold w-100 w-lg-auto">
                <i className="bi bi-file-earmark-person me-2"></i>Resume
              </a>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          transition: all 0.3s ease;
          background: transparent;
          z-index: 1030;
        }
        
        .navbar.scrolled {
          background: var(--bg-card) !important;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        .navbar-brand {
          cursor: pointer;
          transition: opacity 0.3s ease;
          font-size: 1.5rem;
          white-space: nowrap;
        }
        
        /* Responsive brand name */
        @media (max-width: 768px) {
          .navbar-brand {
            font-size: 1.1rem;
            white-space: normal;
            line-height: 1.2;
            max-width: 60%;
          }
          
          .brand-small {
            display: inline !important;
          }
        }
        
        @media (max-width: 480px) {
          .navbar-brand {
            font-size: 0.95rem;
            max-width: 55%;
          }
        }
        
        .navbar-brand:hover {
          opacity: 0.9;
        }
        
        .nav-link {
          color: var(--text-primary) !important;
          transition: all 0.3s ease;
          font-weight: 500;
          position: relative;
          cursor: pointer;
        }
        
        .nav-link:hover {
          color: var(--accent) !important;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: var(--accent);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 80%;
        }
        
        .nav-link.active {
          color: var(--accent) !important;
        }
        
        /* Mobile menu styling */
        @media (max-width: 992px) {
          .navbar-collapse {
            background: var(--bg-card);
            backdrop-filter: blur(12px);
            border-radius: 20px;
            padding: 20px;
            margin-top: 15px;
            border: 1px solid var(--card-border);
            max-height: 80vh;
            overflow-y: auto;
          }
          
          .nav-link::after {
            display: none;
          }
          
          .navbar-nav {
            gap: 10px !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;