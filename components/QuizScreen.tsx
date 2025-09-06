
import React, { useState } from 'react';
import { ScreenType } from '../types';
import type { ScreenData } from '../types';

interface QuizScreenProps {
  screenData: ScreenData;
  onNext: (answer: Record<string, any>) => void;
}

const ChevronRightIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);


const QuizScreen: React.FC<QuizScreenProps> = ({ screenData, onNext }) => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const handleMultiChoiceToggle = (value: string) => {
        setSelectedOptions(prev => 
            prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
        );
    };

    const handleMultiChoiceSubmit = () => {
        onNext({ [screenData.id]: selectedOptions });
    };

    const renderOptions = () => {
        const optionContainerClasses = screenData.layout === 'grid'
            ? "mt-8 w-full max-w-md mx-auto grid grid-cols-2 gap-4"
            : "mt-8 w-full max-w-md mx-auto flex flex-col items-center space-y-4";

        switch(screenData.type) {
            case ScreenType.GENDER_SELECTION:
                return (
                    <div className="mt-8 w-full max-w-md mx-auto flex flex-col items-center space-y-4">
                        <p className="text-lg text-slate-300 mb-2">{screenData.subtitle}</p>
                        <button
                            onClick={() => onNext({ [screenData.id]: 'man' })}
                            className="w-full bg-yellow-500 text-slate-900 font-bold py-4 px-6 rounded-lg text-xl hover:bg-yellow-400 transition-colors duration-300"
                        >
                            {screenData.buttonText}
                        </button>
                        <button
                            onClick={() => onNext({ [screenData.id]: screenData.options![0].value })}
                            className="w-full text-white font-bold py-4 px-6 rounded-lg text-xl hover:bg-slate-700 transition-colors duration-300"
                        >
                            {screenData.options![0].text}
                        </button>
                         {screenData.notes && (
                            <div className="text-left text-xs text-gray-500 mt-6 space-y-2">
                                {screenData.notes.map((note, index) => <p key={index}>{note}</p>)}
                            </div>
                        )}
                    </div>
                );

            case ScreenType.SINGLE_CHOICE:
                return (
                    <div className={optionContainerClasses}>
                        {screenData.infoContent}
                        {screenData.subtitle && <p className="text-2xl font-bold mt-8 mb-4">{screenData.subtitle}</p>}
                        {screenData.options?.map(option => (
                             <button key={option.value} onClick={() => onNext({ [screenData.id]: option.value })} className="w-full bg-slate-800 border border-yellow-500 rounded-lg p-4 text-left text-lg flex justify-between items-center hover:bg-slate-700 transition-colors">
                                <span>{option.text}</span>
                                <ChevronRightIcon />
                            </button>
                        ))}
                    </div>
                );
            
            case ScreenType.SINGLE_CHOICE_RADIO:
                 return (
                    <div className="mt-8 w-full max-w-md mx-auto flex flex-col items-center space-y-4">
                        {screenData.subtitle && <p className="text-lg text-slate-300 mb-2">{screenData.subtitle}</p>}
                        {screenData.options?.map(option => (
                            <button key={option.value} onClick={() => onNext({ [screenData.id]: option.value })} className="w-full bg-slate-800 border border-yellow-500 rounded-lg p-4 text-left text-lg flex items-center hover:bg-slate-700 transition-colors">
                                <span className="w-6 h-6 rounded-full border-2 border-yellow-500 mr-4 flex-shrink-0"></span>
                                <span>{option.text}</span>
                            </button>
                        ))}
                    </div>
                );


            case ScreenType.MULTIPLE_CHOICE:
                return (
                    <div className="mt-8 w-full max-w-md mx-auto flex flex-col items-center space-y-4">
                        {screenData.options?.map(option => (
                            <button key={option.value} onClick={() => handleMultiChoiceToggle(option.value)} className={`w-full bg-slate-800 border rounded-lg p-4 text-left text-lg flex items-center transition-colors ${selectedOptions.includes(option.value) ? 'border-yellow-500 ring-2 ring-yellow-500' : 'border-yellow-500'}`}>
                               <div className={`w-6 h-6 rounded border-2 border-yellow-500 mr-4 flex-shrink-0 flex items-center justify-center ${selectedOptions.includes(option.value) ? 'bg-yellow-500' : ''}`}>
                                  {selectedOptions.includes(option.value) && '✓'}
                               </div>
                               <span>{option.emoji} {option.text}</span>
                            </button>
                        ))}
                        <button onClick={handleMultiChoiceSubmit} className="w-full mt-4 bg-yellow-500 text-slate-900 font-bold py-4 px-6 rounded-lg text-xl hover:bg-yellow-400 transition-colors duration-300">
                           {screenData.buttonText}
                        </button>
                    </div>
                );
            
            case ScreenType.INFO_WITH_IMAGE:
                 return (
                    <div className="mt-8 w-full max-w-xl mx-auto flex flex-col items-center space-y-6">
                        {screenData.infoContent}
                        {screenData.imageUrl && (
                            <div className="my-6">
                                <img src={screenData.imageUrl} alt="info" className="rounded-lg max-h-96 mx-auto block" />
                                {screenData.source && <p className="text-xs text-gray-500 mt-2">Fonte: <a href="#" className="underline">{screenData.source}</a></p>}
                            </div>
                        )}
                         {screenData.subtitle && <p className="text-lg text-slate-300 mb-2">{screenData.subtitle}</p>}
                        <button onClick={() => onNext({ [screenData.id]: 'continue' })} className="w-full max-w-md bg-yellow-500 text-slate-900 font-bold py-4 px-6 rounded-lg text-xl hover:bg-yellow-400 transition-colors duration-300">
                           {screenData.buttonText}
                        </button>
                    </div>
                );

            case ScreenType.COMPARISON_CHOICE:
                return (
                    <div className="mt-8 w-full max-w-xl mx-auto grid md:grid-cols-2 gap-6">
                        {screenData.comparisonOptions?.map(option => (
                            <button key={option.value} onClick={() => onNext({ [screenData.id]: option.value })} className="bg-slate-800 border-2 border-yellow-500 rounded-lg p-4 flex flex-col items-center justify-center hover:bg-slate-700 transition-colors h-full">
                                <div className="flex-grow flex flex-col justify-center text-center">
                                    <p className="font-bold text-lg text-yellow-400">{option.title}</p>
                                    <p className="text-sm text-slate-400">{option.subtitle}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                )

            default:
                return null;
        }
    }

    return (
        <div className="w-full flex flex-col items-center animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight max-w-2xl">{screenData.title}</h1>
             {screenData.subtitle && screenData.type !== ScreenType.GENDER_SELECTION && (
                <p className="mt-4 text-xl text-slate-300 whitespace-pre-line">{screenData.subtitle}</p>
            )}
            {renderOptions()}
        </div>
    );
};

export default QuizScreen;