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
      
      // Update active section
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
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

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled py-2' : 'py-3'}`}>
      <div className="container">
        <a className="navbar-brand fw-bold fs-3" href="#hero">
          Shankar Dhayal <span className="text-info">Sharma G</span>
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
            {navLinks.map((link, idx) => (
              <li className="nav-item" key={idx}>
                <a 
                  className={`nav-link fw-medium px-3 ${activeSection === link.href.substring(1) ? 'text-info' : ''}`}
                  href={link.href} 
                  onClick={closeNav}
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
    </nav>
  );
};

export default Navbar;