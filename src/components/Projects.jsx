import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: "EV Charging Station Booking System",
      date: "March 2026",
      stack: "MongoDB, Express.js, React.js, Node.js, JWT",
      description: "Developed full-stack MERN application for real-time EV charging slot booking with JWT authentication. Designed RESTful APIs using Express.js (MVC architecture) and integrated MongoDB for data management. Built dynamic React UI with real-time slot tracking and booking history for improved user experience.",
      githubLink: "https://github.com/SDSharmaG/Ev_Charger_Booking_System_Puducherry",
      liveLink: "https://ev-charger-booking-system-puducherr.vercel.app"
    },
    {
      title: "E-Commerce Web Application (SPA)",
      date: "October 2025",
      stack: "React.js, Vite, HTML5, CSS3, Bootstrap 5",
      description: "Built responsive single-page e-commerce app with product listing, filtering, and cart functionality. Designed reusable React components with responsive UI/UX for scalability across devices.",
      githubLink: "https://github.com/SDSharmaG/Ecommerce_Project",
      liveLink: "https://sdsharmag.github.io/Ecommerce_Project/"
    },
    {
      title: "UI Web Design Project",
      date: "August 2025",
      stack: "HTML5, CSS3",
      description: "Designed responsive web interfaces with HTML5 and CSS3 focusing on layout, styling, and user-friendly design.",
      githubLink: "https://github.com/SDSharmaG/UI_Design_Project",
      liveLink: "https://sdsharmag.github.io/UI_Design_React_Project/"
    }
  ];

  return (
    <section id="projects" className="py-5 bg-dark text-white">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold">My <span className="text-info">Projects</span></h2>
            <div className="mx-auto" style={{ height: '3px', width: '60px', backgroundColor: '#0dcaf0' }}></div>
          </div>
        </div>

        <div className="row g-4">
          {projectList.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card glass-card border-0 h-100 shadow-lg project-card transition-hover">
                <div className="card-body d-flex flex-column p-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title fw-bold text-info mb-0">{project.title}</h5>
                  </div>
                  <p className="text-white small mb-3 opacity-75">{project.date}</p>

                  <div className="mb-3">
                    <span className="badge bg-secondary rounded-pill fw-normal px-2">{project.stack}</span>
                  </div>

                  <p className="card-text text-white flex-grow-1" style={{ fontSize: '0.95rem' }}>
                    {project.description}
                  </p>

                  <div className="mt-4 pt-3 border-top border-secondary d-flex justify-content-between">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-info btn-sm px-3">GitHub</a>
                    {project.liveLink ? (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-info btn-sm px-3 text-dark fw-semibold">Live Demo</a>
                    ) : (
                      <button className="btn btn-info btn-sm px-3 text-dark fw-semibold" disabled style={{ cursor: 'not-allowed', opacity: 0.7 }}>Live Demo</button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
