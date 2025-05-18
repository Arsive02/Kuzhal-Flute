import { useState } from 'react';
import './DemoSection.css';

const DemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handlePlayDemo = () => {
    setIsPlaying(!isPlaying);
    // Here you would implement actual audio playback
    console.log('Play demo clicked');
  };
  
  return (
    <section className="section demo-section">
      <div className="container">
        <h2 className="section-title">See How It Works</h2>
        
        <div className="demo-container">
          <div className="demo-video">
            {/* Placeholder for demo video/animation */}
            <div className="demo-video-placeholder">
              <div className="demo-player">
                <button 
                  className={`demo-play-btn ${isPlaying ? 'playing' : ''}`}
                  onClick={handlePlayDemo}
                  aria-label={isPlaying ? 'Pause demo' : 'Play demo'}
                >
                  {isPlaying ? '■' : '▶'}
                </button>
              </div>
            </div>
          </div>
          
          <div className="demo-steps">
            <div className="demo-step">
              <div className="demo-step-number">1</div>
              <div className="demo-step-content">
                <h3>Select a Lesson or Song</h3>
                <p>Choose from our curated collection of Carnatic and Hindustani flute lessons.</p>
              </div>
            </div>
            
            <div className="demo-step">
              <div className="demo-step-number">2</div>
              <div className="demo-step-content">
                <h3>Follow the Notation</h3>
                <p>Read and play along with highlighted Sa-Re-Ga-Ma notations.</p>
              </div>
            </div>
            
            <div className="demo-step">
              <div className="demo-step-number">3</div>
              <div className="demo-step-content">
                <h3>Get Real-time Feedback</h3>
                <p>Our app listens to your playing and provides instant feedback on accuracy.</p>
              </div>
            </div>
            
            <div className="demo-step">
              <div className="demo-step-number">4</div>
              <div className="demo-step-content">
                <h3>Track Your Progress</h3>
                <p>Monitor your improvement over time and unlock new lessons as you advance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;