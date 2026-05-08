// components/About.js
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container py-5">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h2 className="display-5 fw-bold mb-3">
              About <span className="text-info">Me</span>
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

        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <h3 className="h3 fw-bold mb-4">Who Am I?</h3>
            <p
              className="fs-5 mb-4"
              style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}
            >
              I'm a passionate{" "}
              <span className="text-info fw-semibold">
                MERN Stack Developer
              </span>{" "}
              with a BTech in Computer Science Engineering. I specialize in
              building end-to-end web applications that are scalable, secure,
              and user-friendly.
            </p>
            <p className="mb-4" style={{ color: "var(--text-muted)" }}>
              My journey in web development started during my college years, and
              since then I've been continuously learning and implementing modern
              web technologies. I thrive in collaborative environments and love
              solving real-world problems through code.
            </p>

            <div className="row g-3 mt-3">
              <div className="col-sm-6">
                <div className="glass-card p-3 rounded-3 text-center">
                  <i className="bi bi-code-slash fs-1 text-info mb-2"></i>
                  <h6 className="fw-bold mb-1">Clean Code</h6>
                  <small style={{ color: "var(--text-muted)" }}>
                    Write maintainable, scalable code
                  </small>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="glass-card p-3 rounded-3 text-center">
                  <i className="bi bi-megaphone fs-1 text-info mb-2"></i>
                  <h6 className="fw-bold mb-1">Team Player</h6>
                  <small style={{ color: "var(--text-muted)" }}>
                    Excellent communication & collaboration
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="glass-card p-4 rounded-4">
              <h4 className="fw-bold mb-4 text-info">Quick Facts</h4>
              <div className="d-flex flex-column gap-3">
                {[
                  { label: "📍 Location", value: "Puducherry, India" },
                  { label: "🎓 Education", value: "B.Tech CSE (8.3 CGPA)" },
                  { label: "💼 Experience", value: "Fresher + 4 Projects" },
                  { label: "🚀 Availability", value: "Immediate Joining" },
                  { label: "📧 Email", value: "sdsharma03.dev@gmail.com" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="d-flex justify-content-between align-items-center pb-2"
                    style={{ borderBottom: "1px solid var(--border-color)" }}
                  >
                    <span style={{ color: "var(--text-muted)" }}>
                      {item.label}
                    </span>
                    <span className="fw-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
