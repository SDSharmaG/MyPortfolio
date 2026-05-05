// components/Projects.js
import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: "EV Charging Station Booking System",
      date: "March 2026",
      category: "Full Stack",
      stack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
      description: "Full-stack MERN application for real-time EV charging slot booking with secure authentication, RESTful APIs, and dynamic React UI.",
      features: ["JWT Authentication", "Real-time Slot Tracking", "Booking History", "Responsive Design"],
      githubLink: "https://github.com/SDSharmaG/Ev_Charger_Booking_System_Puducherry",
      liveLink: "https://ev-charger-booking-system-puducherr.vercel.app"
    },
    {
      title: "E-Commerce Web Application",
      date: "October 2025",
      category: "Frontend",
      stack: ["React.js", "Vite", "Bootstrap 5", "CSS3"],
      description: "Responsive single-page e-commerce app with product listing, filtering, cart functionality, and reusable components.",
      features: ["Product Filtering", "Cart Management", "Responsive UI", "Component-based Architecture"],
      githubLink: "https://github.com/SDSharmaG/Ecommerce_Project",
      liveLink: "https://sdsharmag.github.io/Ecommerce_Project/"
    },
    {
      title: "UI Web Design Project",
      date: "August 2025",
      category: "Frontend",
      stack: ["HTML5", "CSS3", "Responsive Design"],
      description: "Modern responsive web interfaces focusing on layout design, styling, and cross-device compatibility.",
      features: ["Modern Layout", "Responsive Design", "Cross-browser Compatible", "Clean UI"],
      githubLink: "https://github.com/SDSharmaG/UI_Design_Project",
      liveLink: "https://sdsharmag.github.io/UI_Design_React_Project/"
    }
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container py-5">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h2 className="display-5 fw-bold mb-3">Featured <span className="text-info">Projects</span></h2>
            <div className="mx-auto" style={{ height: '3px', width: '60px', background: `linear-gradient(90deg, var(--accent), #2BC4D4)` }}></div>
            <p className="mt-4 fs-5" style={{ color: 'var(--text-secondary)' }}>Real-world applications I've built to solve actual problems</p>
          </div>
        </div>

        <div className="row g-4">
          {projectList.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card glass-card border-0 h-100 project-card">
                <div className="card-body d-flex flex-column p-4">
                  <div className="mb-3">
                    <span className="tech-badge">{project.category}</span>
                    <span className="float-end small" style={{ color: 'var(--text-muted)' }}>{project.date}</span>
                  </div>
                  
                  <h5 className="card-title fw-bold text-info mb-3" style={{ fontSize: '1.25rem' }}>
                    {project.title}
                  </h5>

                  <p className="card-text mb-3" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    {project.description}
                  </p>

                  <div className="mb-3">
                    <div className="d-flex flex-wrap gap-2">
                      {project.stack.map((tech, techIdx) => (
                        <span key={techIdx} className="tech-badge small">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-2 mb-4">
                    <ul className="list-unstyled small" style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                      {project.features.slice(0, 3).map((feature, fIdx) => (
                        <li key={fIdx} className="mb-1">
                          <i className="bi bi-check-circle-fill text-info me-2" style={{ fontSize: '0.7rem' }}></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-3 d-flex gap-3">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-info rounded-pill px-3 py-2 flex-grow-1" style={{ fontSize: '0.85rem' }}>
                      <i className="bi bi-github me-1"></i> Code
                    </a>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-info rounded-pill px-3 py-2 flex-grow-1" style={{ fontSize: '0.85rem' }}>
                      <i className="bi bi-box-arrow-up-right me-1"></i> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <a href="https://github.com/SDSharmaG" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info rounded-pill px-5 py-3 fw-semibold">
            <i className="bi bi-github me-2"></i>View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;