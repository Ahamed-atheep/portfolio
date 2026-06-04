import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a <strong>AI & Data Science Enthusiast</strong> with a passion for building scalable web applications and intelligent solutions. I focus on bridging the gap between innovative technology and real-world problems.
            </p>
            <p>
              With a <strong>CGPA of 8.13</strong> at Sri Eshwar College of Engineering, I've developed expertise in the Python, AI Agents and machine learning architectures, enabling me to architect systems and optimize performance.
            </p>
            <p>
              When I'm not coding, you'll find me competing on LeetCode, contributing to optimization systems, or exploring cloud technologies to deliver production-ready solutions.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">434+</div>
              <div className="stat-label">Problems Solved</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">Top 25%</div>
              <div className="stat-label">LeetCode Rank</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1527</div>
              <div className="stat-label">Max Rating</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">8.13</div>
              <div className="stat-label">CGPA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
