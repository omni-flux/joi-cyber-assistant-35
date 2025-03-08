
import { useState, useEffect } from 'react';

interface VoiceVisualizerProps {
  isActive: boolean;
}

const VoiceVisualizer = ({ isActive }: VoiceVisualizerProps) => {
  const [bars, setBars] = useState<number[]>([]);
  
  useEffect(() => {
    if (isActive) {
      setBars([...Array(15)].map(() => Math.random() * 40 + 5));
      
      const interval = setInterval(() => {
        setBars(prev => prev.map(() => Math.random() * 40 + 5));
      }, 100);
      
      return () => clearInterval(interval);
    } else {
      setBars([...Array(15)].map(() => 5));
    }
  }, [isActive]);
  
  return (
    <div className="voice-wave-container w-full max-w-sm mx-auto my-4">
      {bars.map((height, index) => (
        <div 
          key={index}
          className="voice-wave-bar"
          style={{ 
            height: isActive ? `${height}px` : '5px',
            animationDelay: `${index * 0.1}s`,
            opacity: isActive ? 1 : 0.3
          }}
        />
      ))}
    </div>
  );
};

export default VoiceVisualizer;
