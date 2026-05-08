// components/Education.js
import React from "react";

const Education = () => {
  const educationList = [
    {
      degree: "B.Tech – Computer Science & Engineering",
      institution: "Christ College of Engineering & Technology, Puducherry",
      period: "2021 – 2025",
      score: "CGPA: 8.3/10",
    },
    {
      degree: "Higher Secondary (Computer Science)",
      institution: "The Roy International School, Puducherry",
      period: "2019 – 2021",
      score: "87.5%",
    },
    {
      degree: "Secondary School Leaving Certificate",
      institution: "Sri Rahavendirar High School, Puducherry",
      period: "2018 – 2019",
      score: "89%",
    },
  ];

  const certifications = [
    {
      name: "MERN Stack Development",
      issuer: "Image Creative Education",
      year: "2026",
    },
    { name: "Java Programming", issuer: "Sarath Life Academy", year: "2024" },
    { name: "Python Programming", issuer: "Edan Academy", year: "2023" },
  ];

  return (
    <section id="education" className="py-5">
      <div className="container py-5">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h2 className="display-5 fw-bold mb-3">
              Education & <span className="text-info">Certifications</span>
            </h2>
            <div
              className="mx-auto"
              style={{
                height: "3px",
                width: "60px",
                background: `linear-gradient(90deg, var(--accent), #2BC4D4)`,
              }}
            ></div>
          </div>
        </div>

        <div className="row g-5">
          <div className="col-lg-6">
            <h3 className="h4 fw-bold mb-4 d-flex align-items-center gap-2">
              <i className="bi bi-mortarboard-fill text-info"></i>
              Academic Background
            </h3>
            <div className="position-relative">
              {educationList.map((edu, idx) => (
                <div
                  key={idx}
                  className="position-relative ps-4 pb-4"
                  style={{ borderLeft: `2px solid var(--accent)` }}
                >
                  <div className="timeline-dot"></div>
                  <div className="glass-card p-4 rounded-3 ms-3">
                    <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
                      <h5 className="fw-bold mb-0 text-info">{edu.degree}</h5>
                      <span className="tech-badge">{edu.score}</span>
                    </div>
                    <p
                      className="mb-1"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {edu.institution}
                    </p>
                    <small style={{ color: "var(--text-muted)" }}>
                      {edu.period}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <h3 className="h4 fw-bold mb-4 d-flex align-items-center gap-2">
              <i className="bi bi-award-fill text-info"></i>
              Certifications
            </h3>
            <div className="row g-3">
              {certifications.map((cert, idx) => (
                <div className="col-12" key={idx}>
                  <div className="glass-card p-4 rounded-3 d-flex justify-content-between align-items-center flex-wrap gap-2">
                    <div>
                      <i className="bi bi-patch-check-fill text-info me-2"></i>
                      <span className="fw-semibold">{cert.name}</span>
                      <div
                        className="small mt-1"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {cert.issuer}
                      </div>
                    </div>
                    <span className="tech-badge">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
