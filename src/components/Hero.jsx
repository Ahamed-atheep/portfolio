import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="stars"></div>
      <div className="section-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="greeting-emoji">👋</span>
              <span>Hey, I'm</span>
            </div>
            <h1 className="hero-title">Ahamed Atheep K</h1>
            <p className="hero-subtitle">AI & Data Scientist × Problem Solver</p>
            <p className="hero-description">
               Focused on scalable web applications, AI-powered solutions, optimization systems, and cloud technologies.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href="https://github.com/Ahamed-atheep" target="_blank" rel="noreferrer" className="btn btn-secondary">View GitHub</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card card-1">
              <span className="card-icon">💻</span>
            </div>
            <div className="floating-card card-2">
              <span className="card-icon">🚀</span>
            </div>
            <div className="floating-card card-3">
              <span className="card-icon">⚡</span>
            </div>
            <div className="hero-avatar">
              <div className="avatar-glow"></div>
              <img src="Screenshot 2026-06-04 141854.png" alt="Ahamed Atheep K" className="avatar-photo" />
            </div>
          </div>
        </div>
        <div className="scroll-indicator" id="scrollIndicator">
          <span>Scroll to explore</span>
          <div className="scroll-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
