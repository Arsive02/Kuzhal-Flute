import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MicrophoneConsent.css';

interface MicrophoneConsentProps {
  onClose: () => void;
}

const MicrophoneConsent = ({ onClose }: MicrophoneConsentProps) => {
  const [microphoneAccess, setMicrophoneAccess] = useState<boolean | null>(null);
  const navigate = useNavigate();
  
  const requestMicrophoneAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      // Stop all tracks to release the microphone
      stream.getTracks().forEach(track => track.stop());
      setMicrophoneAccess(true);
      // Proceed to next step or navigate to lessons
      setTimeout(() => {
        navigate('/lessons');
      }, 1500);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      setMicrophoneAccess(false);
    }
  };
  
  const handleSkip = () => {
    onClose();
    navigate('/lessons');
  };
  
  return (
    <div className="microphone-consent-overlay">
      <div className="microphone-consent-modal">
        <button className="microphone-consent-close" onClick={onClose}>×</button>
        
        <h2>Microphone Access</h2>
        
        <p>
          Kuzhal needs access to your microphone to provide real-time feedback 
          on your flute playing. We'll only listen when you're actively practicing.
        </p>
        
        {microphoneAccess === null ? (
          <div className="microphone-consent-buttons">
            <button 
              className="btn btn-primary"
              onClick={requestMicrophoneAccess}
            >
              Allow Microphone Access
            </button>
            <button 
              className="btn btn-outline"
              onClick={handleSkip}
            >
              Skip for Now
            </button>
          </div>
        ) : microphoneAccess ? (
          <div className="microphone-consent-success">
            <div className="microphone-icon success">🎤</div>
            <p>Microphone access granted! Redirecting to lessons...</p>
          </div>
        ) : (
          <div className="microphone-consent-error">
            <div className="microphone-icon error">🎤</div>
            <p>
              Microphone access denied. You can still use the app, but real-time 
              feedback won't be available. You can enable microphone access in your 
              browser settings later.
            </p>
            <button 
              className="btn btn-outline"
              onClick={handleSkip}
            >
              Continue Anyway
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MicrophoneConsent;