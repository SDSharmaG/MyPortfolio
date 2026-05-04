import React, { useState } from 'react';
import resumeFile from '../assets/files/Shankar_Dhayal_Sharma_MERNstack_Developer.docx';

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const closeNav = () => setIsNavCollapsed(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow border-bottom border-info border-opacity-25">
      <div className="container">
        <a className="navbar-brand fw-bold text-white" href="#">Shankar <span className="text-info">Dhayal Sharma</span></a>
        <button className="navbar-toggler shadow-none border-0" type="button" onClick={handleNavCollapse} aria-expanded={!isNavCollapsed} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={closeNav}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={closeNav}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education" onClick={closeNav}>Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={closeNav}>Contact</a>
            </li>
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0 mb-3 mb-lg-0">
              <a href={resumeFile} download className="btn btn-outline-info btn-sm fw-bold px-3 py-2 rounded-pill w-100" onClick={closeNav}>
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
