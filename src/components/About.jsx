import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5 bg-dark text-white">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold">About <span className="text-info">Me</span></h2>
            <div className="mx-auto" style={{ height: '3px', width: '60px', backgroundColor: '#0dcaf0' }}></div>
          </div>
        </div>
        
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <h3 className="h4 mb-3">MERN Stack Developer</h3>
            <p className="text-secondary" style={{ lineHeight: '1.8' }}>
              I am a MERN Stack Developer with hands-on experience building scalable full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Proficient in RESTful API development, JWT authentication, MVC architecture, and responsive UI design.
            </p>
            <p className="text-secondary" style={{ lineHeight: '1.8' }}>
              I am passionate about building modern, real-world solutions that provide excellent user experiences while maintaining clean code and scalable architecture.
            </p>
            
            <div className="mt-4">
              <h4 className="h5 mb-3">Strengths</h4>
              <div className="d-flex flex-wrap gap-2">
                {['Problem Solving', 'Team Collaboration', 'Time Management', 'Adaptability', 'Continuous Learning'].map((strength, index) => (
                  <span key={index} className="badge bg-secondary px-3 py-2 fs-6 fw-normal rounded-pill text-white">{strength}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="card glass-card border-0 p-4 shadow-lg h-100">
              <h4 className="h5 mb-4 border-bottom border-secondary pb-2 text-info">Technical Skills</h4>
              
              <div className="mb-3">
                <h6 className="fw-bold mb-2 text-info">Languages</h6>
                <p className="text-light">JavaScript (ES6+), C, C++</p>
              </div>
              
              <div className="mb-3">
                <h6 className="fw-bold mb-2 text-info">Frontend</h6>
                <p className="text-light">React.js, HTML5, CSS3, Bootstrap 5</p>
              </div>
              
              <div className="mb-3">
                <h6 className="fw-bold mb-2 text-info">Backend & Auth</h6>
                <p className="text-light">Node.js, Express.js, REST APIs, MVC Architecture, JWT</p>
              </div>
              
              <div className="mb-3">
                <h6 className="fw-bold mb-2 text-info">Database</h6>
                <p className="text-light">MongoDB, MSSQL, Mongoose</p>
              </div>
              
              <div>
                <h6 className="fw-bold mb-2 text-info">Tools</h6>
                <p className="text-light mb-0">Git, GitHub, Postman, VS Code, MongoDB Compass, Vite</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
