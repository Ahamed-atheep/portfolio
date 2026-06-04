import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Experience & Education</h2>
          <div className="title-underline"></div>
        </div>

        <div className="timeline">
          {/* Experience */}
          <div className="timeline-item experience-item">
            <div className="timeline-marker">
              <span className="marker-icon">💼</span>
            </div>
            <div className="timeline-content">
              <div className="content-header">
                <h3 className="timeline-title">MERN Stack Development Intern</h3>
                <span className="timeline-date">2025</span>
              </div>
              <p className="timeline-subtitle">AlgoTutor</p>
              <p className="timeline-description">
                Built AI-assisted Trip Intelligent System using MERN Stack, Flowise, MongoDB, React, Express, Node.js.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="timeline-item education-item">
            <div className="timeline-marker">
              <span className="marker-icon">🎓</span>
            </div>
            <div className="timeline-content">
              <div className="content-header">
                <h3 className="timeline-title">B.Tech., Artificial Intelligence and Data Science (AI&DS)</h3>
                <span className="timeline-date">2024-2028</span>
              </div>
              <p className="timeline-subtitle">Sri Eshwar College of Engineering</p>
              <p className="timeline-description">
                <strong>CGPA: 8.13</strong> | Focusing on software engineering, AI/DS, and AI AGENTS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
