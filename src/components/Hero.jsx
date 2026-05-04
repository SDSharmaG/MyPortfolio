import React from 'react';
import profileImg from '../assets/images/SdSharma.png';

const Hero = () => {
  return (
    <section id="hero" className="d-flex align-items-center bg-dark text-white min-vh-100 position-relative hero-bg-glow" style={{ paddingTop: '80px', marginTop: '-80px' }}>
      <div className="container text-center text-md-start">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            {/* Available for Work Badge */}
            <div className="d-inline-flex align-items-center border border-info rounded-pill px-3 py-2 mb-4 shadow-sm" style={{ backgroundColor: 'rgba(11, 12, 16, 0.8)' }}>
              <span className="status-dot-pulse me-2"></span>
              <span className="text-info fw-semibold" style={{ fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Available for Work</span>
            </div>

            <h1 className="display-3 fw-bold mb-3">Hi, I'm <span className="text-info">Shankar</span></h1>
            <h2 className="h3 mb-4 text-light">Full Stack Developer | MERN Stack</h2>
            <p className="lead mb-4 text-secondary">
              Passionate about delivering production-ready, real-world applications with responsive UI and scalable architectures.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start hero-btn-group">
              <a href="#projects" className="btn btn-info btn-lg px-4 fw-semibold text-dark shadow">View My Work</a>
              <a href="#contact" className="btn btn-outline-light btn-lg px-4 glass-card">Contact Me</a>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center mt-5 mt-lg-0">
            <div className="position-relative" style={{ width: 'max-content' }}>
              {/* Ambient Glow Background */}
              <div className="position-absolute rounded-circle bg-info" style={{ width: '100%', height: '100%', top: '0', left: '0', filter: 'blur(50px)', opacity: '0.15', zIndex: 0 }}></div>
              
              {/* Image Container with Premium Border */}
              <div className="position-relative rounded-circle p-2 shadow-lg" style={{ zIndex: 1, background: 'linear-gradient(135deg, rgba(102, 252, 241, 0.4) 0%, rgba(11, 12, 16, 0.8) 100%)' }}>
                <img 
                  src={profileImg} 
                  alt="Shankar Dhayal Sharma" 
                  className="rounded-circle" 
                  style={{ width: '320px', height: '320px', objectFit: 'cover', objectPosition: 'center 15%', backgroundColor: '#1f2833' }} 
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/320x320/0B0C10/66FCF1?text=Shankar'; }} 
                />
              </div>
              
              {/* Professional Floating Badge */}
              <div className="position-absolute bg-dark border border-info rounded-pill px-4 py-2 shadow-lg d-flex align-items-center" style={{ bottom: '20px', right: '-15px', zIndex: 2 }}>
                <i className="bi bi-patch-check-fill text-info fs-5 me-2"></i>
                <span className="text-white fw-bold small text-uppercase" style={{ letterSpacing: '1px' }}>Ready to Hire</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
