import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import HeroSection from '../components/Home/HeroSection';
import DemoSection from '../components/Home/DemoSection';
import FeaturesSection from '../components/Home/FeaturesSection';
import MicrophoneConsent from '../components/Home/MicrophoneConsent';
import './HomePage.css';

const HomePage = () => {
  const { user, login } = useAuth();
  const [showMicrophoneConsent, setShowMicrophoneConsent] = useState(false);
  
  const handleGetStarted = () => {
    if (!user) {
      login();
    } else {
      setShowMicrophoneConsent(true);
    }
  };
  
  return (
    <div className="home-page">
      <HeroSection onGetStarted={handleGetStarted} />
      
      <DemoSection />
      
      <FeaturesSection />
      
      <section className="section get-started-section">
        <div className="container">
          <div className="card get-started-card">
            <h2>Ready to begin your musical journey?</h2>
            <p>Start learning Indian classical kuzhal today with our interactive lessons.</p>
            <div className="get-started-buttons">
              <button 
                className="btn btn-primary" 
                onClick={handleGetStarted}
              >
                Get Started
              </button>
              <Link to="/lessons" className="btn btn-outline">
                Explore Lessons
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {showMicrophoneConsent && (
        <MicrophoneConsent 
          onClose={() => setShowMicrophoneConsent(false)} 
        />
      )}
    </div>
  );
};

export default HomePage;