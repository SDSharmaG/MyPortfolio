// components/Contact.js
import React from "react";
import resumeFile from "../assets/files/Shankar_Dhayal_Sharma_MERNStack_Developer.docx";

const Contact = () => {
  const contactInfo = [
    {
      icon: "bi-envelope-fill",
      label: "Email",
      value: "sdsharma03.dev@gmail.com",
      link: "mailto:sdsharma03.dev@gmail.com",
    },
    {
      icon: "bi-telephone-fill",
      label: "Phone",
      value: "+91 6383276944",
      link: "tel:+916383276944",
    },
    {
      icon: "bi-geo-alt-fill",
      label: "Location",
      value: "Puducherry, India",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-5">
      <div className="container py-5">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h2 className="display-5 fw-bold mb-3">
              Get In <span className="text-info">Touch</span>
            </h2>
            <div
              className="mx-auto"
              style={{
                height: "3px",
                width: "60px",
                background: `linear-gradient(90deg, var(--accent), #2BC4D4)`,
              }}
            ></div>
            <p className="mt-4 fs-5" style={{ color: "var(--text-secondary)" }}>
              I'm actively looking for Full Stack / MERN Stack roles. Let's
              connect and discuss how I can contribute to your team!
            </p>
          </div>
        </div>

        <div className="row g-5">
          <div className="col-lg-5">
            <div className="glass-card p-4 rounded-4 h-100">
              <h3 className="fw-bold mb-4 text-info">Contact Info</h3>

              {contactInfo.map((info, idx) => (
                <div
                  className="d-flex align-items-start gap-3 mb-4 pb-3"
                  style={{ borderBottom: "1px solid var(--border-color)" }}
                  key={idx}
                >
                  <div
                    className="rounded-circle p-3"
                    style={{ background: "var(--accent-glow)" }}
                  >
                    <i className={`${info.icon} text-info fs-4`}></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">{info.label}</h6>
                    <p
                      className="mb-1"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {info.value}
                    </p>
                    {info.link && (
                      <a
                        href={info.link}
                        className="small text-info text-decoration-none"
                      >
                        Contact now <i className="bi bi-arrow-right ms-1"></i>
                      </a>
                    )}
                  </div>
                </div>
              ))}

              <div className="mt-4 pt-2">
                <h6 className="fw-bold mb-3">Professional Profiles</h6>
                <div className="d-flex gap-3">
                  <a
                    href="https://github.com/SDSharmaG"
                    target="_blank"
                    className="btn btn-outline-info rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <i className="bi bi-github fs-5"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shankar-dhayal-sharma-5b1146290/"
                    target="_blank"
                    className="btn btn-outline-info rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <i className="bi bi-linkedin fs-5"></i>
                  </a>
                </div>
              </div>

              <div className="mt-4 pt-3">
                <a
                  href={resumeFile}
                  download
                  className="btn btn-info w-100 fw-semibold py-3 rounded-pill"
                >
                  <i className="bi bi-download me-2"></i>Download Resume
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="glass-card p-4 rounded-4 h-100">
              <h3 className="fw-bold mb-4 text-info">Send a Message</h3>
              <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
                Have a project in mind or want to discuss an opportunity? I'll
                respond within 24 hours.
              </p>

              <form
                action="https://formsubmit.co/sdsharma03.dev@gmail.com"
                method="POST"
              >
                <input type="text" name="_honey" style={{ display: "none" }} />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Portfolio Message from Recruiter"
                />
                <input type="hidden" name="_template" value="table" />

                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="youremail@company.com"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Company / Organization</label>
                    <input
                      type="text"
                      name="company"
                      className="form-control"
                      placeholder="Company name"
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Message *</label>
                    <textarea
                      name="message"
                      className="form-control"
                      rows="5"
                      placeholder="We have an opportunity for a MERN Stack Developer..."
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-info w-100 fw-semibold py-3 rounded-pill"
                    >
                      Send Message <i className="bi bi-send-fill ms-2"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 pt-4">
        <div
          className="text-center pt-4"
          style={{
            borderTop: "1px solid var(--border-color)",
            color: "var(--text-muted)",
          }}
        >
          <p>
            &copy; {new Date().getFullYear()} Shankar Dhayal Sharma. All rights
            reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
