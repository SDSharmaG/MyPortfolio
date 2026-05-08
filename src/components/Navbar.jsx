// components/Navbar.js
import React, { useState, useEffect } from "react";
import resumeFile from "../assets/files/Shankar_Dhayal_Sharma_MERNStack_Developer.docx";
import "../assets/css/Navbar.css";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section with offset for navbar
      const sections = [
        "hero",
        "about",
        "skills",
        "projects",
        "education",
        "contact",
      ];
      const navbarHeight = 80;
      const scrollPosition = window.scrollY + navbarHeight + 20;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
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
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${scrolled ? "scrolled py-2" : "py-3"}`}
    >
      <div className="container">
        <a
          className="navbar-brand fw-bold"
          href="#hero"
          onClick={(e) => handleNavClick(e, "hero")}
        >
          Shankar Dhayal <span className="text-info">Sharma</span>
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

        <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-2 gap-lg-3">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.id}>
                <a
                  className={`nav-link fw-medium px-3 ${activeSection === link.id ? "text-info active" : ""}`}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-2 mt-3 mt-lg-0">
              <a
                href={resumeFile}
                download
                className="btn btn-info rounded-pill px-4 py-2 fw-semibold w-100 w-lg-auto"
              >
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
