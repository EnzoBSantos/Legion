
import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

interface ResultsScreenProps {
  onNext: () => void;
}

const pieData1 = [
    { name: 'Chance', value: 12 },
    { name: 'Remaining', value: 88 }
];
const pieData2 = [
    { name: 'Chance', value: 97 },
    { name: 'Remaining', value: 3 }
];
const COLORS1 = ['#ef4444', '#4b5563'];
const COLORS2 = ['#22c55e', '#4b5563'];

const areaData = [
  { name: 'Hoy', "Con po**grafía": 30, "Libre del vicio": 30 },
  { name: 'Futuramente', "Con po**grafía": 20, "Libre del vicio": 90 },
];

const CustomPieLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value }: any) => {
  return (
    <text x={cx} y={cy} fill="white" textAnchor="middle" dominantBaseline="central" className="text-3xl font-bold">
      {`${value}%`}
    </text>
  );
};

const ResultsScreen: React.FC<ResultsScreenProps> = ({ onNext }) => {
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center animate-fade-in">
      <h1 className="text-4xl font-bold mb-8">Tu diagnóstico está aquí:</h1>
      
      <div className="w-full grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-slate-800 p-6 rounded-lg flex flex-col items-center">
            <h2 className="text-xl text-slate-300 mb-4 text-center">Tus chances de vencer el NoFap September:</h2>
            <div className="w-48 h-48">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={pieData1} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} startAngle={90} endAngle={450} paddingAngle={0}>
                           {pieData1.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS1[index % COLORS1.length]} stroke={COLORS1[index % COLORS1.length]} />)}
                        </Pie>
                        <CustomPieLabel cx="50%" cy="50%" value={pieData1[0].value} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <p className="mt-4 text-lg">Sin ningún acompañamiento</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-lg flex flex-col items-center">
             <h2 className="text-xl text-slate-300 mb-4 text-center">Tus chances de vencer el NoFap September:</h2>
            <div className="w-48 h-48">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={pieData2} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} startAngle={90} endAngle={450} paddingAngle={0}>
                           {pieData2.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS2.length]} stroke={COLORS2[index % COLORS2.length]} />)}
                        </Pie>
                         <CustomPieLabel cx="50%" cy="50%" value={pieData2[0].value} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <p className="mt-4 text-lg">Con una guía diaria de cómo vencer</p>
        </div>
      </div>

      <div className="w-full bg-slate-800 p-6 rounded-lg flex flex-col items-center mb-12">
        <h2 className="text-2xl font-bold mb-6">Tu expectativa de vivir una vida buena:</h2>
        <div className="w-full h-64">
           <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={areaData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }} />
              <Legend />
              <Area type="monotone" dataKey="Con po**grafía" stroke="#ef4444" fillOpacity={1} fill="url(#colorPv)" />
              <Area type="monotone" dataKey="Libre del vicio" stroke="#22c55e" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <h3 className="text-3xl font-bold mb-6">¿Quieres resolver esto?</h3>

      <button
        onClick={onNext}
        className="w-full max-w-md bg-yellow-500 text-slate-900 font-bold py-4 px-6 rounded-lg text-xl hover:bg-yellow-400 transition-colors duration-300"
      >
        ¡Sí!
      </button>
    </div>
  );
};

export default ResultsScreen;
