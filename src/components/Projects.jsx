import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-underline"></div>
        </div>

        <div className="projects-grid">
          {/* Project 1: Safe-Net */}
          <div className="project-card">
            <div className="project-header">
              <div className="project-icon">🛡️</div>
              <div className="project-meta">
                <span className="project-status">Live</span>
              </div>
            </div>
            <h3 className="project-title">Safe-Net</h3>
            <p className="project-subtitle">Kernel-Level Interceptor</p>
            <p className="project-description">
              Kernel-level packet interception and ML-powered website blocker for robust security.
            </p>
            <div className="project-tech">
              <span className="tech-badge">PyDivert</span>
              <span className="tech-badge">Scikit-Learn</span>
              <span className="tech-badge">Pandas</span>
              <span className="tech-badge">NumPy</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/Ahamed-atheep/Safe-AI-web-Blocker" target="_blank" rel="noreferrer" className="project-link">
                <span>View Code</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 17L17 7M17 7H7M17 7V17"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Project 2: KMRL Train Scheduler */}
          <div className="project-card">
            <div className="project-header">
              <div className="project-icon">🚂</div>
              <div className="project-meta">
                <span className="project-status">Complete</span>
              </div>
            </div>
            <h3 className="project-title">KMRL Train Scheduler</h3>
            <p className="project-subtitle">Intelligent Scheduling & Optimization</p>
            <p className="project-description">
              Intelligent train scheduling and depot optimization system.
            </p>
            <div className="project-tech">
              <span className="tech-badge">Flask</span>
              <span className="tech-badge">React</span>
              <span className="tech-badge">MongoDB</span>
              <span className="tech-badge">OR-Tools</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/Anish-S-tech/kmrl_train_scheduler/tree/development" target="_blank" rel="noreferrer" className="project-link">
                <span>View Code</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 17L17 7M17 7H7M17 7V17"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Project 3: E-Waste Manager */}
          <div className="project-card">
            <div className="project-header">
              <div className="project-icon">♻️</div>
              <div className="project-meta">
                <span className="project-status">Complete</span>
              </div>
            </div>
            <h3 className="project-title">E-Waste Manager</h3>
            <p className="project-subtitle">AI-Powered Recycling</p>
            <p className="project-description">
              AI-powered e-waste classification and recycling recommendation system.
            </p>
            <div className="project-tech">
              <span className="tech-badge">Flutter</span>
              <span className="tech-badge">Firebase</span>
              <span className="tech-badge">TensorFlow</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/Bharani-a123/Team-Strikers-E-WASTE-SYSTEM-" target="_blank" rel="noreferrer" className="project-link">
                <span>View Code</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 17L17 7M17 7H7M17 7V17"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
