import React from 'react';

const Achievements = () => {
  return (
    <section className="achievements">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Achievements</h2>
          <div className="title-underline"></div>
        </div>

        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-number">1</div>
            <div className="achievement-content">
              <h4>Intercollege Hackathon Winner</h4>
              <p>Secured 1st place in the Intercollege Hackathon 2025</p>
            </div>
          </div>

          <div className="achievement-card">
            <div className="achievement-number">2</div>
            <div className="achievement-content">
              <h4>Cynosure 2K25 Winner</h4>
              <p>Top performer and winner of Cynosure 2K25 technical symposium</p>
            </div>
          </div>

          <div className="achievement-card">
            <div className="achievement-number">3</div>
            <div className="achievement-content">
              <h4>Top 25% LeetCode</h4>
              <p>Global ranking demonstrating strong algorithmic problem-solving skills (Max Rating: 1527)</p>
            </div>
          </div>

          <div className="achievement-card">
            <div className="achievement-number">4</div>
            <div className="achievement-content">
              <h4>434+ Problems Solved</h4>
              <p>Strong focus on algorithmic optimization and data structures</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
