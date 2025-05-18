import { useAuth } from '../../hooks/useAuth';
import './HeroSection.css';

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  const { user } = useAuth();
  
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Master the Art of <span className="highlight">Indian Classical Flute</span>
          </h1>
          <p className="hero-subtitle">
            Learn Carnatic and Hindustani flute music with interactive lessons, 
            rhythm training, and real-time feedback
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary hero-btn"
              onClick={onGetStarted}
            >
              {user ? 'Start Learning' : 'Sign In with Google'}
            </button>
            {user && (
              <button className="btn btn-outline hero-btn">
                Resume Learning
              </button>
            )}
          </div>
        </div>
        <div className="hero-image">
          {/* Placeholder for hero image */}
          <div className="hero-image-placeholder">
            <img 
              src="/flute-illustration.svg" 
              alt="Indian Classical Flute" 
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.style.display = 'none';
              }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;