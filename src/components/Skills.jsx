// components/Skills.js
import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "bi-code-square",
      skills: [
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "C Programming", level: 80 },
        { name: "C++", level: 75 }
      ]
    },
    {
      title: "Frontend Development",
      icon: "bi-window",
      skills: [
        { name: "React.js", level: 85 },
        { name: "HTML5/CSS3", level: 90 },
        { name: "Bootstrap/Tailwind", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      icon: "bi-server",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "RESTful APIs", level: 85 },
        { name: "JWT/Auth", level: 80 }
      ]
    },
    {
      title: "Database & Tools",
      icon: "bi-database",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MSSQL", level: 75 },
        { name: "Git/GitHub", level: 85 },
        { name: "Postman", level: 80 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-5" ref={sectionRef}>
      <div className="container py-5">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h2 className="display-5 fw-bold mb-3">Technical <span className="text-info">Skills</span></h2>
            <div className="mx-auto" style={{ height: '3px', width: '60px', background: `linear-gradient(90deg, var(--accent), #2BC4D4)` }}></div>
            <p className="mt-4 fs-5" style={{ color: 'var(--text-secondary)' }}>Technologies I work with to build amazing web experiences</p>
          </div>
        </div>
        
        <div className="row g-4">
          {skillCategories.map((category, idx) => (
            <div className="col-md-6 col-lg-3" key={idx}>
              <div className="glass-card p-4 rounded-4 h-100">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <i className={`${category.icon} fs-1 text-info`}></i>
                  <h4 className="fw-bold mb-0 fs-5">{category.title}</h4>
                </div>
                {category.skills.map((skill, skillIdx) => (
                  <div className="mb-3" key={skillIdx}>
                    <div className="d-flex justify-content-between mb-1">
                      <span className="fw-medium small">{skill.name}</span>
                      <span className="text-info small">{skill.level}%</span>
                    </div>
                    <div className="skill-progress">
                      <div 
                        className="skill-progress-fill" 
                        style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="row mt-5 pt-4">
          <div className="col-12">
            <div className="glass-card p-4 rounded-4 text-center">
              <h4 className="fw-bold mb-4">Core Strengths</h4>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                {['Problem Solving', 'Quick Learner', 'Team Collaboration', 'Time Management', 'Attention to Detail', 'Adaptability', 'Continuous Learning'].map((strength, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-pill fw-medium" style={{ background: 'var(--accent-glow)', color: 'var(--accent)' }}>
                    {strength}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;