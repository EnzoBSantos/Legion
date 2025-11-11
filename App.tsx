import React, { useState, useMemo } from 'react';
import { QUIZ_DATA } from './constants/quizData';
import { ScreenType } from './types';
import type { Answers } from './types';
import QuizScreen from './components/QuizScreen';
import LoadingScreen from './components/LoadingScreen';
import ResultsScreen from './components/ResultsScreen';
import OfferScreen from './components/OfferScreen';
import ProgressBar from './components/ProgressBar';
import Logo from './components/Logo';

const App: React.FC = () => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const totalScreens = QUIZ_DATA.length;
  const currentScreenData = QUIZ_DATA[currentScreenIndex];

  const handleNext = (answer?: Record<string, any>) => {
    if (answer) {
      setAnswers(prev => ({ ...prev, ...answer }));
    }
    if (currentScreenIndex < totalScreens - 1) {
      setCurrentScreenIndex(currentScreenIndex + 1);
    }
  };

  const progress = useMemo(() => {
    if (currentScreenData.type === ScreenType.LOADING || currentScreenData.type === ScreenType.RESULTS || currentScreenData.type === ScreenType.OFFER_PAGE) {
      return 100;
    }
    return Math.round(((currentScreenIndex + 1) / totalScreens) * 100);
  }, [currentScreenIndex, totalScreens, currentScreenData.type]);

  const renderScreen = () => {
    switch (currentScreenData.type) {
      case ScreenType.LOADING:
        return <LoadingScreen onLoadingComplete={() => handleNext()} />;
      case ScreenType.RESULTS:
        return <ResultsScreen onNext={() => handleNext()} />;
      case ScreenType.OFFER_PAGE:
        return <OfferScreen />;
      default:
        return <QuizScreen screenData={currentScreenData} onNext={handleNext} />;
    }
  };

  return (
    <div className="bg-[#101827] text-white min-h-screen flex flex-col items-center justify-start p-4 font-sans">
      <header className="w-full max-w-2xl mx-auto text-center py-8">
        <Logo />
      </header>
      <main className="w-full max-w-2xl mx-auto flex-grow flex flex-col items-center">
        { currentScreenData.type !== ScreenType.OFFER_PAGE && (
            <div className="w-full mb-12">
            <ProgressBar progress={progress} />
            </div>
        )}
        <div className="w-full text-center">
            {renderScreen()}
        </div>
      </main>
      <footer className="w-full max-w-2xl mx-auto text-center py-4 text-xs text-gray-500">
        {currentScreenIndex === 0 && (
           <p>
           Al hacer clic en una de las opciones, aceptas los <a href="#" className="underline">Términos de uso del servicio</a>, <a href="#" className="underline">Política de privacidad</a>, <a href="#" className="underline">Política de suscripción</a> y <a href="#" className="underline">Política de cookies</a>.
         </p>
        )}
      </footer>
    </div>
  );
};

export default App;