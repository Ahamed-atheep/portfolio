import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="title-underline"></div>
        </div>

        <div className="skills-grid">
          {/* Programming Languages */}
          <div className="skill-category">
            <div className="category-header">
              <span className="category-icon">🔤</span>
              <h3>Languages</h3>
            </div>
            <div className="skills-list">
              <span className="skill-tag">C</span>
              <span className="skill-tag">C++</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">JavaScript</span>
            </div>
          </div>

          {/* Frontend */}
          <div className="skill-category">
            <div className="category-header">
              <span className="category-icon">🎨</span>
              <h3>Frontend</h3>
            </div>
            <div className="skills-list">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
            </div>
          </div>

          {/* Backend */}
          <div className="skill-category">
            <div className="category-header">
              <span className="category-icon">⚙️</span>
              <h3>Backend</h3>
            </div>
            <div className="skills-list">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">Flask</span>
              <span className="skill-tag">Fast Api</span>
            </div>
          </div>

          {/* Databases */}
          <div className="skill-category">
            <div className="category-header">
              <span className="category-icon">🗄️</span>
              <h3>Databases</h3>
            </div>
            <div className="skills-list">
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">Postgre SQL</span>
              <span className="skill-tag">Supabase</span>
            </div>
          </div>

          {/* AI/ML */}
          <div className="skill-category">
            <div className="category-header">
              <span className="category-icon">🤖</span>
              <h3>AI & ML</h3>
            </div>
            <div className="skills-list">
              <span className="skill-tag">Scikit-Learn</span>
              <span className="skill-tag">Pandas</span>
              <span className="skill-tag">Matplotlib</span>
              <span className="skill-tag">LangChain</span>
              <span className="skill-tag">LangGraph</span>
              <span className="skill-tag">RAG</span>
            </div>
          </div>

          {/* Tools */}
          <div className="skill-category">
            <div className="category-header">
              <span className="category-icon">🛠️</span>
              <h3>Tools</h3>
            </div>
            <div className="skills-list">
              <span className="skill-tag">Git & GitHub</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Postman</span>
              <span className="skill-tag">GitHub Actions</span>
              <span className="skill-tag">Vercel</span>
              <span className="skill-tag">AWS EC2</span>
              <span className="skill-tag">Flowise</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
