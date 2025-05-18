import './FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <section className="section features-section">
      <div className="container">
        <h2 className="section-title">Why Choose Kuzhal?</h2>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎵</div>
            <h3 className="feature-title">Comprehensive Lessons</h3>
            <p className="feature-description">
              From beginner to advanced, our structured lessons cover both Carnatic and Hindustani flute techniques.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3 className="feature-title">Real-time Feedback</h3>
            <p className="feature-description">
              Get instant feedback on your playing with our advanced audio recognition technology.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3 className="feature-title">Interactive Metronome</h3>
            <p className="feature-description">
              Practice your rhythm with our adjustable metronome designed specifically for Indian classical music.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3 className="feature-title">Progress Tracking</h3>
            <p className="feature-description">
              Monitor your improvement over time with detailed progress reports and analytics.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🎼</div>
            <h3 className="feature-title">Customizable Practice</h3>
            <p className="feature-description">
              Tailor your practice sessions to focus on specific aspects of flute playing.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3 className="feature-title">Flute Modification Tool</h3>
            <p className="feature-description">
              Adjust and calibrate your app based on your flute's scale and specifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;