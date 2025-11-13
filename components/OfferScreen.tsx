import React, { useState, useEffect } from 'react';

const OfferScreen: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.hotmart.com/checkout/widget.min.js';
    script.async = true;
    document.head.appendChild(script);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://static.hotmart.com/css/hotmart-fb.min.css';
    document.head.appendChild(link);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;


  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center animate-fade-in text-center px-4">
      {/* Yellow separator line */}
      <div className="w-48 h-1 bg-yellow-500 rounded-full my-8"></div>

      {/* Protocolo Liberado */}
      <div className="bg-slate-800 border border-slate-600 rounded-lg p-3 px-6 mb-6 inline-flex items-center space-x-2 text-lg">
        <span role="img" aria-label="caja">📦</span>
        <span>
            Protocolo liberado: {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        ¡Tu <span className="text-yellow-400">Protocolo Monje</span> está listo y personalizado!
      </h1>

      {/* Scarcity */}
      <div className="bg-[#fce9e8] text-[#9b2c2c] rounded-lg p-4 mb-8 w-full max-w-sm shadow-lg">
        <p className="font-bold text-lg">88/100 protocolos ya reclamados</p>
        <p className="font-semibold">12 disponibles</p>
      </div>

      {/* Offer */}
      <div className="text-slate-300 text-lg space-y-4 max-w-2xl mx-auto mb-12 text-left md:text-center">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Aviso: Oferta de Septiembre terminando</h2>
        <p>
          Por ser Septiembre, el mes oficial de la guerra a favor del NoFap, liberamos nuevamente como lo hicimos el año pasado, <span className="font-bold text-yellow-400">100 Protocolos Monje personalizados</span> con un valor único.
        </p>
        <p>
          Para intentar una vez más cambiar la situación de vida de diversos hombres, perdidos en un pozo sin fondo donde la propia sociedad los arrojó.
        </p>
        <p className="font-bold text-white mt-4 text-xl">
          Entonces, solo mientras duren los protocolos, también te llevas:
        </p>
      </div>

      {/* Bonuses */}
      <div className="w-full grid md:grid-cols-2 gap-6 mb-12 max-w-xl mx-auto">
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 flex flex-col items-center justify-center">
            <p className="font-bold text-xl mb-2">Bono 1</p>
            <p className="text-slate-300 mb-4 flex-grow">¡La mejor aplicación para bloquear sitios no deseados!</p>
            <p className="text-2xl font-bold text-green-400">¡GRATIS!</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 flex flex-col items-center justify-center">
            <p className="font-bold text-xl mb-2">Bono 2</p>
            <p className="text-slate-300 mb-4 flex-grow">¡Premios exclusivos por completar días sin perder el desafío!</p>
            <p className="text-2xl font-bold text-green-400">¡GRATIS!</p>
        </div>
      </div>
      
      {/* Pricing */}
      <div className="mb-6">
        <p className="text-2xl text-slate-400">De: <span className="line-through">R$99,00</span></p>
        <p className="text-3xl font-bold text-white mt-1">Por solo:</p>
      </div>

      {/* Price Box */}
      <div className="bg-slate-800 border-2 border-yellow-500 rounded-lg p-6 mb-8 w-full max-w-sm relative text-center shadow-2xl">
        <div className="absolute top-0 right-4 bg-yellow-500 text-slate-900 text-sm font-bold px-3 py-1 rounded-b-lg">
          73% off
        </div>
        <p className="text-slate-300 bg-yellow-600/20 rounded-md py-1 px-3 text-sm inline-block mb-4">Pago Único y Acceso Vitalicio</p>
        <p className="text-xl font-semibold text-white">Legión NOFap:</p>
        <p className="text-3xl font-bold text-yellow-400 mb-2">Protocolo Monje</p>
        <div className="flex items-end justify-center space-x-2 mt-4">
             <span className="text-5xl font-bold text-white">$9,90</span>
             <span className="text-slate-300 pb-1">al contado</span>
        </div>
      </div>

      {/* CTA Button */}
       <a 
          href="https://pay.hotmart.com/P101766250X" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-md bg-yellow-500 text-slate-900 font-bold py-4 px-6 rounded-lg text-2xl hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          ¡Quiero asegurarlo ahora!
        </a>

        <div className="mt-4">
            <a 
                onClick={(e) => e.preventDefault()} 
                href="https://pay.hotmart.com/S102474434N?checkoutMode=2" 
                className="hotmart-fb hotmart__button-checkout"
            >
                <img src='https://static.hotmart.com/img/btn-buy-green.png' alt="Comprar agora" />
            </a>
        </div>

      {/* Guarantee */}
      <div className="mt-12 max-w-xl mx-auto border-t border-slate-700 pt-8">
        <h3 className="text-3xl font-bold text-yellow-400 mb-4">Garantía Incondicional de 7 días</h3>
        <p className="text-slate-300 text-lg">
          Sigue el protocolo libremente por 7 días, si sientes que no te está ayudando en algo, es tu deber y derecho contactarnos para recibir el 100% de tu dinero de vuelta.
        </p>
      </div>

    </div>
  );
};

export default OfferScreen;