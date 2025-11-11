import React from 'react';
import { ScreenType } from '../types';
import type { ScreenData } from '../types';

const HighlightYellow = ({ children }: { children: React.ReactNode }) => <span className="text-yellow-400">{children}</span>;
const HighlightRed = ({ children }: { children: React.ReactNode }) => <span className="text-red-500">{children}</span>;


export const QUIZ_DATA: ScreenData[] = [
  {
    id: 'gender',
    type: ScreenType.GENDER_SELECTION,
    title: <>¿Quieres finalmente liberarte de los vicios y aprovechar todos los beneficios que <HighlightYellow>1 mes en NoFap</HighlightYellow> puede traer?</>,
    subtitle: 'Responde y recibe un protocolo personalizado para hacerte vencer:',
    buttonText: 'Sí, soy Hombre',
    options: [{ text: 'Soy Mujer', value: 'woman' }],
    notes: ["*Test de menos de 3 minutos", "*Todas tus respuestas son anónimas, después de ser utilizadas para la evaluación serán eliminadas de nuestra base para garantizar mayor confidencialidad y seguridad."]
  },
  {
    id: 'experience',
    type: ScreenType.SINGLE_CHOICE,
    title: <>¿Ya conocías o participaste en el <HighlightYellow>NoFap September</HighlightYellow> antes?</>,
    options: [
      { text: 'Sí, lo intenté una vez', value: 'tried_once' },
      { text: 'Sí, conocía pero nunca lo intenté', value: 'knew_never_tried' },
      { text: 'Apenas oí hablar sobre eso', value: 'heard_of_it' },
      { text: 'No sé qué es eso', value: 'dont_know' }
    ]
  },
  {
    id: 'time_spent',
    type: ScreenType.SINGLE_CHOICE,
    title: <>En promedio, ¿cuánto tiempo de tu día consumes o piensas en <HighlightRed>contenidos po**gráficos</HighlightRed>?</>,
    options: [
      { text: 'Prácticamente todo el día pensando', value: 'all_day' },
      { text: 'Siempre pienso al ver una mujer atractiva', value: 'attractive_woman' },
      { text: 'Apenas en momentos a solas como en el baño', value: 'alone_moments' }
    ]
  },
  {
    id: 'failed_attempts',
    type: ScreenType.SINGLE_CHOICE,
    title: '¿Ya has intentado parar y no lo has conseguido?',
    options: [
      { text: 'Sí, siempre me esfuerzo pero acabo haciéndolo de nuevo', value: 'always_fail' },
      { text: 'A veces intento parar un tiempo, pero no consigo mantenerme', value: 'sometimes_fail' },
      { text: 'Apenas intenté en NoFap', value: 'only_on_nofap' },
      { text: 'Nunca lo he intentado', value: 'never_tried' }
    ]
  },
  {
    id: 'hardest_part',
    type: ScreenType.SINGLE_CHOICE,
    title: '¿Cuál es la parte más difícil para ti?',
    options: [
      { text: 'Resistir los estímulos de la vida real', value: 'real_life' },
      { text: 'Resistir los estímulos en las redes sociales', value: 'social_media' },
      { text: 'No conseguir controlar los impulsos por ya ser automáticos', value: 'automatic_impulses' },
      { text: 'Sentirme extremadamente estresado y ansioso', value: 'stress_anxiety' }
    ]
  },
  {
    id: 'after_feeling',
    type: ScreenType.SINGLE_CHOICE,
    title: <>¿Cómo te sientes después de <HighlightRed>Hacerse una paja</HighlightRed> 🤡?</>,
    options: [
      { text: 'Pésimo, siento como si fuera un fracaso', value: 'failure' },
      { text: 'Muy arrepentido, sin verle sentido a aquello', value: 'regretful' },
      { text: 'Me quedo con menos energía', value: 'less_energy' },
      { text: 'No siento que nada cambie', value: 'no_change' }
    ]
  },
  {
    id: 'nofap_info',
    type: ScreenType.INFO_WITH_IMAGE,
    title: '¿Qué es el NoFap de verdad?',
    infoContent: (
      <div className="text-center">
        <div className="text-slate-300 text-lg space-y-4 text-center max-w-xl mx-auto">
          <p>El movimiento <HighlightYellow>NoFap</HighlightYellow> no es solo sobre "dejar de masturbarse".</p>
          <p>Nació cuando miles de hombres comenzaron a percibir que estaban <HighlightYellow>presos en un ciclo de vicio en pornografía</HighlightYellow> que estaba destruyendo sus vidas.</p>
          <p>O <HighlightYellow>NoFap</HighlightYellow> es la decisión de <HighlightYellow>retomar el control</HighlightYellow>, de liberarse de la esclavitud de la pantalla y no sufrir más con cosas como: <HighlightRed>compulsión, ansiedad, depresión y hasta disfunción eréctil</HighlightRed>.</p>
          <p>Por eso septiembre se convirtió en el mes oficial del desafío: 30 días sin pornografía.</p>
          <p className="font-bold text-white text-xl">No es sobre represión, es sobre <HighlightYellow>libertad real</HighlightYellow>.</p>
        </div>
      </div>
    ),
    buttonText: 'Sí, Continuar'
  },
  {
    id: 'symptoms',
    type: ScreenType.MULTIPLE_CHOICE,
    title: '¿Cuál de estos síntomas sientes más en tu día a día?',
    subtitle: '(marca cuantos quieras)',
    options: [
      { text: 'Cansancio y sueño en momentos aleatorios', value: 'fatigue', emoji: '😴' },
      { text: 'Mucha dificultad para interactuar con mujeres', value: 'difficulty_women', emoji: '💑' },
      { text: 'Baja autoestima', value: 'low_self_esteem', emoji: '😞' },
      { text: 'Ansiedad y nerviosismo constante', value: 'anxiety', emoji: '😩' },
      { text: 'Indisposición para hacer cualquier cosa', value: 'unwillingness', emoji: '😫' }
    ],
    buttonText: 'Continuar'
  },
   {
    id: 'misinformation',
    type: ScreenType.SINGLE_CHOICE,
    title: <>¿Has oído en algún lugar que este tipo de cosas no hace mal? <br/> O hasta alguien diciendo que es bueno para el cuerpo?</>,
    options: [
      { text: 'Sí, ya oí bastante eso', value: 'yes_heard' },
      { text: 'Nunca oí eso', value: 'never_heard' }
    ]
  },
  {
    id: 'industry_info',
    type: ScreenType.INFO_WITH_IMAGE,
    title: <>Independientemente de si lo has visto o no, ¡eso <HighlightYellow>sucede</HighlightYellow>! Gente diciendo que la <HighlightRed>po**grafía</HighlightRed> no hace mal... que hasta puede ser "saludable".</>,
    infoContent: (
         <div className="text-slate-300 text-lg space-y-4 text-center max-w-xl mx-auto">
            <p>Pero la verdad es que existe un motivo para que oigas eso: <HighlightYellow>dinero</HighlightYellow>.</p>
            <p>La <HighlightRed>industria po**gráfica</HighlightRed> es una de las que más dinero mueve en el mundo — <HighlightYellow>billones de dólares todos los años</HighlightYellow>.</p>
            <div className='my-6'>
                <p className="font-bold text-white text-xl">¿Y quién lucra con eso?</p>
                <ul className="list-disc list-inside text-left mx-auto max-w-md mt-2">
                    <li>Plataformas gigantes que viven de clics y anuncios</li>
                    <li>Sitios que necesitan que continúes adicto para generar más visualizaciones</li>
                    <li>Empresas que saben exactamente cómo manipular tu cerebro para mantenerte cada vez más</li>
                </ul>
            </div>
            <p>Ellos <HighlightYellow>quieren que creas que no tienes problemas</HighlightYellow>, porque así continúas preso en el ciclo... y ellos continúan lucrando.</p>
            <div className="bg-white text-black p-4 rounded-lg max-w-md mx-auto my-6 shadow-lg text-left">
                <div className="flex items-center justify-between space-x-2 border-b pb-2 mb-2">
                    <div className='flex items-center space-x-2'>
                      <span className="bg-yellow-500 text-black font-bold text-lg px-2 py-1">JBr</span>
                      <span className="font-semibold text-gray-700">NOTÍCIAS</span>
                    </div>
                    <span className="text-gray-500">🔍</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold my-2 text-gray-900">La industria del entretenimiento para adultos crece en la Pandemia y supera a sitios como CNN, Netflix y Amazon</h2>
            </div>
      </div>
    ),
    buttonText: '¡Quiero Continuar!'
  },
  {
    id: 'relationship_status',
    type: ScreenType.SINGLE_CHOICE,
    title: '¿Estás en una relación o noviazgo?',
    options: [
      { text: 'Sí, estoy casado', value: 'married' },
      { text: 'Sí, estoy de novio/comprometido', value: 'dating' },
      { text: 'No, pero me gusta mucho alguien', value: 'crushing' },
      { text: 'Por el momento no', value: 'single' }
    ]
  },
   {
    id: 'divorce_info',
    type: ScreenType.SINGLE_CHOICE,
    title: '¿Sabías que:',
    infoContent: (
        <div className="bg-white text-black p-6 rounded-lg max-w-sm mx-auto my-4 shadow-lg">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-bold text-yellow-500">Comunhão</h3>
                <div className="flex space-x-4 items-center">
                    <p>🔍</p>
                    <p>☰</p>
                </div>
            </div>
            <p className="text-blue-700 font-bold">Parejas</p>
            <h2 className="text-4xl font-extrabold my-2">60% de los divorcios en EUA involucran pornografía</h2>
            <p className="text-gray-500 text-sm">12 de abril de 2019</p>
        </div>
    ),
    subtitle: 'Piensa en tu relación, ¿quieres salvarla de esto?',
    options: [
      { text: 'Sí, ¡quiero!', value: 'yes_save' },
      { text: 'No me importa', value: 'dont_care' }
    ]
  },
  {
    id: 'future_projection',
    type: ScreenType.SINGLE_CHOICE,
    title: 'Si continúas como estás hoy por 1 año más, ¿qué crees que va a pasar?',
    options: [
      { text: 'Será más difícil de superar, y cada vez peor para todas las áreas de mi vida', value: 'worse' },
      { text: 'Nada, voy a vencer esto de la nada mágicamente', value: 'magically_win' }
    ]
  },
  {
    id: 'understanding',
    type: ScreenType.SINGLE_CHOICE,
    title: <>¿Entiendes cómo todo esto puede estar <HighlightRed>destruyendo</HighlightRed> tu energía, motivación y hasta tu salud mental y física?</>,
    options: [
      { text: 'Sí, ahora entiendo', value: 'yes_understand' },
      { text: 'No, todavía no creo', value: 'no_believe' }
    ]
  },
  {
    id: 'value_comparison',
    type: ScreenType.COMPARISON_CHOICE,
    title: '¿Qué sería más valioso para ti hoy por 19 reales?',
    comparisonOptions: [
        { title: 'Una suscripción de OnlyFans', subtitle: '(¿en serio? ¿pagarías por eso?...)' , image: 'https://i.imgur.com/2c1Q1gM.png', value: 'onlyfans' },
        { title: 'Conseguir vencer el NoFap September y recuperar todo lo que está siendo destruido', subtitle: '', image: 'https://i.imgur.com/N2a2C2g.jpeg', value: 'nofap' }
    ]
  },
  {
    id: 'loading',
    type: ScreenType.LOADING,
    title: 'Loading...'
  },
  {
    id: 'results',
    type: ScreenType.RESULTS,
    title: 'Results'
  },
   {
    id: 'motivation_check',
    type: ScreenType.SINGLE_CHOICE_RADIO,
    title: <>Si el secreto para conseguir vencer el NoFap, te hiciera percibir los resultados y mejoras en el día a día ya en los primeros 7 días <br /> (<HighlightRed>que son los más difíciles</HighlightRed>)</>,
    subtitle: '¿Eso te dejaría más motivado para intentar este cambio en tu vida?',
    options: [
      { text: 'Sí, ¡me motivaría!', value: 'yes' },
      { text: 'No', value: 'no' }
    ]
  },
  {
    id: 'protocol_check',
    type: ScreenType.SINGLE_CHOICE_RADIO,
    title: 'Si ese secreto fuese un protocolo práctico como un paso a paso, que accedes directamente desde tu celular por la mañana y durante el día',
    subtitle: '¿Crees que sería más fácil mantenerte firme?',
    options: [
      { text: '¡Sí, con certeza!', value: 'yes' },
      { text: 'No', value: 'no' }
    ]
  },
  {
    id: 'offer',
    type: ScreenType.OFFER_PAGE,
    title: 'Oferta Especial'
  }
];