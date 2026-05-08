// components/Hero.js
import React from "react";
import profileImg from "../assets/images/sd.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="d-flex align-items-center position-relative hero-bg-glow"
      style={{
        minHeight: "calc(100vh - 80px)",
        paddingTop: "80px",
        marginTop: 0,
        paddingBottom: "60px",
      }}
    >
      <div className="container py-3 py-md-5">
        <div className="row align-items-center g-4 g-lg-5">
          {/* Text Content - Left Side */}
          <div className="col-lg-6 order-lg-1 order-2">
            {/* Available Badge */}
            <div
              className="d-inline-flex align-items-center border border-info rounded-pill px-3 py-2 mb-4"
              style={{ background: "var(--bg-card)", marginTop: "20px" }}
            >
              <span className="status-dot-pulse me-2"></span>
              <span
                className="text-info fw-semibold small text-uppercase"
                style={{ letterSpacing: "0.5px" }}
              >
                Open to Opportunities
              </span>
            </div>

            <h1 className="display-4 display-md-3 fw-bold mb-3">
              Hi, I'm <span className="text-info">Shankar</span>
            </h1>
            <h2
              className="h4 h-md-3 mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              Full Stack <span className="text-info">MERN Developer</span>
            </h2>

            <p
              className="lead mb-4"
              style={{ color: "var(--text-muted)", fontSize: "1rem" }}
            >
              Building production-ready web applications with modern
              technologies.
              <span className="d-block mt-2">
                3+ projects delivered | Available for immediate joining
              </span>
            </p>

            {/* Stats Row */}
            <div className="row g-2 g-md-3 mb-4">
              <div className="col-4">
                <div className="text-center p-2 p-md-3 glass-card rounded-3">
                  <div className="display-6 fw-bold text-info">3+</div>
                  <div
                    className="small"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Projects
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="text-center p-2 p-md-3 glass-card rounded-3">
                  <div className="display-6 fw-bold text-info">Fresher</div>
                  <div
                    className="small"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Years Exp.
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="text-center p-2 p-md-3 glass-card rounded-3">
                  <div className="display-6 fw-bold text-info">24/7</div>
                  <div
                    className="small"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Support
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="d-flex gap-3 flex-wrap justify-content-center justify-content-lg-start">
              <a
                href="#projects"
                className="btn btn-info rounded-pill px-3 px-md-4 py-2 py-md-3 fw-semibold"
              >
                <i className="bi bi-grid-3x3-gap-fill me-2"></i>View Portfolio
              </a>
              <a
                href="#contact"
                className="btn btn-outline-info rounded-pill px-3 px-md-4 py-2 py-md-3 fw-semibold"
              >
                <i className="bi bi-chat-dots-fill me-2"></i>Hire Me
              </a>
            </div>
          </div>

          {/* Image Content - Right Side */}
          <div
            className="col-lg-6 order-lg-2 order-1 text-center "
            style={{ marginTop: "80px" }}
          >
            <div className="position-relative d-inline-block mx-auto">
              {/* Glow Effect */}
              <div
                className="position-absolute rounded-circle"
                style={{
                  width: "100%",
                  height: "100%",
                  filter: "blur(60px)",
                  background: "var(--accent)",
                  opacity: 0.15,
                  top: 0,
                  left: 0,
                }}
              ></div>

              {/* Image Container with Gradient Border */}
              <div
                className="position-relative rounded-4 p-1 p-md-2"
                style={{
                  background: `linear-gradient(135deg, var(--accent), var(--bg-secondary))`,
                }}
              >
                <img
                  src={profileImg}
                  alt="Shankar Dhayal Sharma"
                  className="rounded-4"
                  style={{
                    width: "min(280px, 70vw)",
                    height: "min(280px, 70vw)",
                    objectFit: "cover",
                    objectPosition: "center 15%",
                    display: "block",
                  }}
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/400x400/1A1A2E/4DF8FF?text=Shankar";
                  }}
                />
              </div>

              {/* Floating Badge - Available Now (Bottom Right) */}
              <div
                className="position-absolute rounded-pill px-3 px-sm-4 py-1 py-sm-2 shadow-lg d-flex align-items-center gap-1 gap-sm-2"
                style={{
                  bottom: "-5px",
                  right: "-5px",
                  background: "var(--bg-card)",
                  border: `1.5px solid var(--accent)`,
                  backdropFilter: "blur(8px)",
                  zIndex: 10,
                }}
              >
                <i
                  className="bi bi-check-circle-fill text-info"
                  style={{ fontSize: "clamp(0.8rem, 4vw, 1.2rem)" }}
                ></i>
                <span
                  className="fw-semibold"
                  style={{ fontSize: "clamp(0.65rem, 3vw, 0.8rem)" }}
                >
                  Available Now
                </span>
              </div>

              {/* Floating Badge - Top Talent (Top Left) */}
              <div
                className="position-absolute rounded-pill px-3 px-sm-4 py-1 py-sm-2 shadow-lg d-flex align-items-center gap-1 gap-sm-2"
                style={{
                  top: "-5px",
                  left: "-5px",
                  background: "var(--bg-card)",
                  border: `1.5px solid var(--accent)`,
                  backdropFilter: "blur(8px)",
                  zIndex: 10,
                }}
              >
                <i
                  className="bi bi-star-fill text-info"
                  style={{ fontSize: "clamp(0.8rem, 4vw, 1.2rem)" }}
                ></i>
                <span
                  className="fw-semibold"
                  style={{ fontSize: "clamp(0.65rem, 3vw, 0.8rem)" }}
                >
                  Top Talent
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .display-4 {
            font-size: 2rem !important;
          }
          .h4 {
            font-size: 1.2rem !important;
          }
          .lead {
            font-size: 0.9rem !important;
          }
          .display-6 {
            font-size: 1.3rem !important;
          }
        }

        @media (max-width: 576px) {
          .display-4 {
            font-size: 1.8rem !important;
          }
          .btn {
            font-size: 0.85rem !important;
            padding: 8px 16px !important;
          }
          .stats-card {
            padding: 8px !important;
          }
        }

        @media (min-width: 992px) {
          .display-4 {
            font-size: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
