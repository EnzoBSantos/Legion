
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-yellow-500 w-14 h-14 md:w-20 md:h-20"
      >
        <path d="M12 2L3.5 6V12C3.5 17.5 7.2 21.6 12 22.8C16.8 21.6 20.5 17.5 20.5 12V6L12 2Z" fill="currentColor"/>
        <path d="M12 6.5C10.3 6.5 9 7.8 9 9.5V11H8V13H9V15L12 17.5L15 15V13H16V11H15V9.5C15 7.8 13.7 6.5 12 6.5ZM10.5 9.5C10.5 8.7 11.2 8 12 8C12.8 8 13.5 8.7 13.5 9.5V11H10.5V9.5Z" fill="#101827"/>
      </svg>
      <h1 className="font-serif text-2xl md:text-3xl tracking-wider mt-4">LEGIÓN NOFAP</h1>
      <p className="font-serif text-xs md:text-sm text-slate-400 tracking-[0.2em] mt-1">DISCIPLINA DEL MONJE</p>
    </div>
  );
};

export default Logo;