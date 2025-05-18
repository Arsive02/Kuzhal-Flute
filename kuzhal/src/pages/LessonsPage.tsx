import { useState } from 'react';
import './LessonsPage.css';

const LessonsPage = () => {
  const [activeCategory, setActiveCategory] = useState('beginner');
  
  return (
    <div className="lessons-page">
      <div className="container">
        <h1 className="page-title">Kuzhal Lessons</h1>
        
        <div className="lessons-categories">
          <button 
            className={`category-btn ${activeCategory === 'beginner' ? 'active' : ''}`}
            onClick={() => setActiveCategory('beginner')}
          >
            Beginner
          </button>
          <button 
            className={`category-btn ${activeCategory === 'intermediate' ? 'active' : ''}`}
            onClick={() => setActiveCategory('intermediate')}
          >
            Intermediate
          </button>
          <button 
            className={`category-btn ${activeCategory === 'advanced' ? 'active' : ''}`}
            onClick={() => setActiveCategory('advanced')}
          >
            Advanced
          </button>
          <button 
            className={`category-btn ${activeCategory === 'alankarams' ? 'active' : ''}`}
            onClick={() => setActiveCategory('alankarams')}
          >
            Alankarams
          </button>
        </div>
        
        <div className="lessons-grid">
          {/* Placeholder for lessons content */}
          <div className="lesson-card">
            <div className="lesson-thumbnail">
              <div className="lesson-difficulty beginner">Beginner</div>
            </div>
            <div className="lesson-content">
              <h3 className="lesson-title">Introduction to Kuzhal</h3>
              <p className="lesson-description">
                Learn the basics of holding the flute and producing sound.
              </p>
              <div className="lesson-meta">
                <span className="lesson-duration">15 min</span>
                <button className="btn btn-outline btn-sm">Start</button>
              </div>
            </div>
          </div>
          
          {/* More lesson cards would be dynamically generated here */}
        </div>
      </div>
    </div>
  );
};

export default LessonsPage;