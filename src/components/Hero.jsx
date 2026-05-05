// components/Hero.js
import React from 'react';
import profileImg from '../assets/images/SdSharma.png';

const Hero = () => {
  return (
    <section id="hero" className="d-flex align-items-center min-vh-100 position-relative hero-bg-glow" style={{ paddingTop: '80px' }}>
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="d-inline-flex align-items-center border border-info rounded-pill px-3 py-2 mb-4" style={{ background: 'var(--bg-card)' }}>
              <span className="status-dot-pulse me-2"></span>
              <span className="text-info fw-semibold small text-uppercase tracking-wide">Open to Opportunities</span>
            </div>

            <h1 className="display-3 fw-bold mb-3">
              Hi, I'm <span className="text-info">Shankar</span>
            </h1>
            <h2 className="h3 mb-4" style={{ color: 'var(--text-secondary)' }}>
              Full Stack <span className="text-info">MERN Developer</span>
            </h2>
            
            <p className="lead mb-4" style={{ color: 'var(--text-muted)' }}>
              Building production-ready web applications with modern technologies. 
              <span className="d-block mt-2">4+ projects delivered | Available for immediate joining</span>
            </p>
            
            <div className="row g-3 mb-4">
              <div className="col-4">
                <div className="text-center">
                  <div className="display-6 fw-bold text-info">4+</div>
                  <div className="small" style={{ color: 'var(--text-secondary)' }}>Projects</div>
                </div>
              </div>
              <div className="col-4">
                <div className="text-center">
                  <div className="display-6 fw-bold text-info">Fresher</div>
                  <div className="small" style={{ color: 'var(--text-secondary)' }}>Years Exp.</div>
                </div>
              </div>
              <div className="col-4">
                <div className="text-center">
                  <div className="display-6 fw-bold text-info">24/7</div>
                  <div className="small" style={{ color: 'var(--text-secondary)' }}>Support</div>
                </div>
              </div>
            </div>
            
            <div className="d-flex gap-3 flex-wrap">
              <a href="#projects" className="btn btn-info btn-lg px-4 py-3 rounded-pill fw-semibold">
                <i className="bi bi-grid-3x3-gap-fill me-2"></i>View Portfolio
              </a>
              <a href="#contact" className="btn btn-outline-info btn-lg px-4 py-3 rounded-pill fw-semibold">
                <i className="bi bi-chat-dots-fill me-2"></i>Hire Me
              </a>
            </div>
          </div>
          
          <div className="col-lg-6 order-lg-2 order-1 text-center">
            <div className="position-relative d-inline-block">
              <div className="position-absolute rounded-circle" style={{ 
                width: '100%', 
                height: '100%', 
                filter: 'blur(60px)', 
                background: 'var(--accent)',
                opacity: 0.15
              }}></div>
              
              <div className="position-relative rounded-4 p-2" style={{ 
                background: `linear-gradient(135deg, var(--accent), var(--bg-secondary))`
              }}>
                <img 
                  src={profileImg} 
                  alt="Shankar Dhayal Sharma" 
                  className="rounded-4" 
                  style={{ 
                    width: 'min(340px, 80vw)', 
                    height: 'min(340px, 80vw)', 
                    objectFit: 'cover', 
                    objectPosition: 'center 15%'
                  }}
                  onError={(e) => { e.target.src = 'https://placehold.co/400x400/1A1A2E/4DF8FF?text=Shankar'; }}
                />
              </div>
              
              <div className="position-absolute rounded-pill px-4 py-2 shadow-lg d-flex align-items-center gap-2" style={{ 
                bottom: '20px', 
                right: '-10px', 
                background: 'var(--bg-card)',
                border: `1px solid var(--accent)`,
                backdropFilter: 'blur(8px)'
              }}>
                <i className="bi bi-check-circle-fill text-info fs-5"></i>
                <span className="fw-semibold small">Available Now</span>
              </div>
              
              <div className="position-absolute rounded-pill px-4 py-2 shadow-lg d-flex align-items-center gap-2" style={{ 
                top: '20px', 
                left: '-10px', 
                background: 'var(--bg-card)',
                border: `1px solid var(--accent)`,
                backdropFilter: 'blur(8px)'
              }}>
                <i className="bi bi-star-fill text-info fs-5"></i>
                <span className="fw-semibold small">Top Talent</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;