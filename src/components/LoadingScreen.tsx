import { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';
import sandyLoadingAnimation from '../../logos/Sandy Loading.json';
import '../styles/loading.css';

interface LoadingScreenProps {
  isLoading: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.001);
    }
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setProgress(100);
      return;
    }

    setProgress(0);
    
    // Simulate loading progress over 5 seconds (10 updates at 500ms intervals)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev; // Don't go past 90% until actual load completes
        const increment = Math.random() * 10 + 5; // 5-15% per update for smoother distribution
        return Math.min(prev + increment, 90);
      });
    }, 500); // 500ms updates over 5 seconds

    return () => clearInterval(interval);
  }, [isLoading]);

  // When loading finishes, jump to 100%
  useEffect(() => {
    if (!isLoading && progress < 100) {
      setProgress(100);
    }
  }, [isLoading, progress]);

  return (
    <div className={`loading-screen ${!isLoading ? 'loading-screen--hidden' : ''}`}>
      <div className="loading-container">
        <div className="loading-animation">
          <Lottie
            lottieRef={lottieRef}
            animationData={sandyLoadingAnimation}
            loop={true}
            autoplay={true}
          />
        </div>

        <div className="loading-progress">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-text">{Math.round(progress)}%</div>
        </div>

        <div className="loading-text">
          Portfolio wird geladen...
        </div>
      </div>
    </div>
  );
};
