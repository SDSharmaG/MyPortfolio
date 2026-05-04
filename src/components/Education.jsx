import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-5 bg-dark text-white border-top border-secondary border-opacity-25">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold">Education & <span className="text-info">Certifications</span></h2>
            <div className="mx-auto" style={{ height: '3px', width: '80px', backgroundColor: '#0dcaf0' }}></div>
          </div>
        </div>

        <div className="row g-5">
          <div className="col-lg-6">
            <h3 className="h4 mb-4 text-info d-flex align-items-center">
              <i className="bi bi-mortarboard-fill me-2"></i> Education
            </h3>
            
            <div className="position-relative border-start border-info ms-3 ps-4 pb-4">
              <span className="position-absolute top-0 start-0 translate-middle p-2 bg-info border border-light rounded-circle"></span>
              <h5 className="fw-bold mb-1">B.Tech – Computer Science & Engineering</h5>
              <h6 className="text-light opacity-75 mb-2">Christ College of Engineering & Technology, Puducherry</h6>
              <div className="d-flex justify-content-between text-light small">
                <span>2021 – 2025</span>
                <span className="fw-semibold text-light">CGPA: 8.3 / 10</span>
              </div>
            </div>

            <div className="position-relative border-start border-info ms-3 ps-4 pb-4">
              <span className="position-absolute top-0 start-0 translate-middle p-2 bg-info border border-light rounded-circle"></span>
              <h5 className="fw-bold mb-1">Higher Secondary (Computer Science)</h5>
              <h6 className="text-light opacity-75 mb-2">The Roy International School, Puducherry</h6>
              <div className="d-flex justify-content-between text-light small">
                <span>2019 – 2021</span>
                <span className="fw-semibold text-light">87.5%</span>
              </div>
            </div>

            <div className="position-relative border-start border-info border-bottom-0 ms-3 ps-4 pb-0">
              <span className="position-absolute top-0 start-0 translate-middle p-2 bg-info border border-light rounded-circle"></span>
              <h5 className="fw-bold mb-1">Secondary School Leaving Certificate</h5>
              <h6 className="text-light opacity-75 mb-2">Sri Rahavendirar High School, Puducherry</h6>
              <div className="d-flex justify-content-between text-light small">
                <span>2018 – 2019</span>
                <span className="fw-semibold text-light">89%</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <h3 className="h4 mb-4 text-info d-flex align-items-center">
              <i className="bi bi-award-fill me-2"></i> Certifications
            </h3>
            
            <ul className="list-group list-group-flush rounded shadow-sm">
              <li className="list-group-item bg-dark text-light border-secondary p-3">
                <div className="fw-bold">MERN Stack Development</div>
                <div className="text-light opacity-75 small mt-1">Image Creative Education (2026)</div>
              </li>
              <li className="list-group-item bg-dark text-light border-secondary p-3">
                <div className="fw-bold">Java Programming</div>
                <div className="text-light opacity-75 small mt-1">Sarath Life Academy (2024)</div>
              </li>
              <li className="list-group-item bg-dark text-light border-secondary p-3 border-bottom-0">
                <div className="fw-bold">Python Programming</div>
                <div className="text-light opacity-75 small mt-1">Edan Academy (2023)</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
