import React from 'react';
import resumeFile from '../assets/files/Shankar_Dhayal_Sharma_MERNstack_Developer.docx';

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-dark text-white border-top border-secondary border-opacity-25">
      <div className="container mt-5">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 fw-bold">Get In <span className="text-info">Touch</span></h2>
            <div className="mx-auto mt-2" style={{ height: '3px', width: '60px', backgroundColor: '#0dcaf0' }}></div>
            <p className="text-secondary mt-3 max-w-lg mx-auto lead">
              I am currently open to new opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>
        </div>

        <div className="row g-5 justify-content-between align-items-stretch">
          {/* Contact Information & HR Connect */}
          <div className="col-lg-5 d-flex flex-column justify-content-center">
            <div className="mb-4">
              <h3 className="h4 fw-bold mb-3">Let's work together</h3>
              <p className="text-secondary">
                I'm actively looking for Full Stack / MERN Stack roles. I bring strong problem-solving skills, adaptability, and a passion for building scalable applications.
              </p>
              <a href={resumeFile} download className="btn btn-info fw-bold px-4 py-2 mt-2 shadow-sm d-inline-flex align-items-center">
                <i className="bi bi-download me-2"></i> Download Resume
              </a>
            </div>

            <div className="d-flex flex-column gap-4 mt-4">
              <div className="d-flex align-items-center">
                <div className="text-info rounded d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px', backgroundColor: 'rgba(102, 252, 241, 0.1)' }}>
                  <i className="bi bi-envelope fs-3"></i>
                </div>
                <div>
                  <h6 className="mb-1 fw-bold text-light">Email</h6>
                  <a href="mailto:sdsharma03.dev@gmail.com" className="text-secondary text-decoration-none">sdsharma03.dev@gmail.com</a>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <div className="text-info rounded d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px', backgroundColor: 'rgba(102, 252, 241, 0.1)' }}>
                  <i className="bi bi-telephone fs-3"></i>
                </div>
                <div>
                  <h6 className="mb-1 fw-bold text-light">Phone</h6>
                  <a href="tel:+916383276944" className="text-secondary text-decoration-none">+91 6383276944</a>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <div className="text-info rounded d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px', backgroundColor: 'rgba(102, 252, 241, 0.1)' }}>
                  <i className="bi bi-geo-alt fs-3"></i>
                </div>
                <div>
                  <h6 className="mb-1 fw-bold text-light">Location</h6>
                  <span className="text-secondary">Puducherry, India</span>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h6 className="text-uppercase fw-bold text-secondary mb-3" style={{ letterSpacing: '2px' }}>Professional Profiles</h6>
              <div className="d-flex gap-3">
                <a href="https://github.com/SDSharmaG" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center transition-hover" style={{ width: '45px', height: '45px' }}>
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/shankar-dhayal-sharma-5b1146290/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info rounded-circle d-flex align-items-center justify-content-center transition-hover" style={{ width: '45px', height: '45px' }}>
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form for HR / Recruiters */}
          <div className="col-lg-6">
            <div className="card glass-card border-0 shadow-lg h-100">
              <div className="card-body p-4 p-md-5">
                <h4 className="fw-bold mb-4">Send me a message</h4>
                <form action="https://formsubmit.co/sdsharma03.dev@gmail.com" method="POST">
                  {/* Honeypot to prevent spam */}
                  <input type="text" name="_honey" style={{ display: 'none' }} />
                  {/* Disable Captcha for better UX */}
                  <input type="hidden" name="_captcha" value="false" />
                  
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label text-secondary small fw-bold">Your Name / Company</label>
                    <input type="text" name="name" className="form-control bg-transparent border-secondary text-white shadow-none" id="name" placeholder="John Doe" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-secondary small fw-bold">Email Address</label>
                    <input type="email" name="email" className="form-control bg-transparent border-secondary text-white shadow-none" id="email" placeholder="john@company.com" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label text-secondary small fw-bold">Message</label>
                    <textarea name="message" className="form-control bg-transparent border-secondary text-white shadow-none" id="message" rows="5" placeholder="We have an opportunity for you..." required></textarea>
                  </div>
                  <button type="submit" className="btn btn-info w-100 fw-bold py-2 text-dark shadow-sm">
                    Send Message <i className="bi bi-send-fill ms-2"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5 pt-4 text-secondary small border-top border-secondary border-opacity-25">
        <p>&copy; {new Date().getFullYear()} Shankar Dhayal Sharma. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
