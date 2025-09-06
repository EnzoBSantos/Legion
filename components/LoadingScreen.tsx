
import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className="text-3xl font-bold mb-4">Cargando...</h2>
      <div className="w-full max-w-md">
        <ProgressBar progress={percentage} />
        <p className="text-center mt-2 text-lg">{percentage}%</p>
      </div>
      <p className="text-slate-300 text-lg mt-4">Estamos analizando tus respuestas y montando tu diagnóstico...</p>
    </div>
  );
};

export default LoadingScreen;
