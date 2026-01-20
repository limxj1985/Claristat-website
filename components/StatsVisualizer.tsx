
import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { name: 'Q1', val: 400 },
  { name: 'Q2', val: 550 },
  { name: 'Q3', val: 480 },
  { name: 'Q4', val: 820 },
  { name: 'Q1-25', val: 750 },
  { name: 'PROJ', val: 950 },
];

const StatsVisualizer: React.FC = () => {
  return (
    <div className="glass p-10 rounded-3xl h-[450px] shadow-2xl shadow-black/40 border-amber-500/10">
      <div className="flex items-center justify-between mb-10">
        <div className="flex flex-col">
            <h5 className="font-bold text-white uppercase tracking-wider text-sm">Strategic Alpha Index</h5>
            <span className="text-[10px] text-stone-500 uppercase tracking-[0.2em] mt-1">Global Market Aggregation</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
            <span className="text-[10px] text-slate-400 uppercase font-bold">Gold Standard</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-[#00a651]"></div>
            <span className="text-[10px] text-slate-400 uppercase font-bold">Growth Delta</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="75%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorGold" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#d97706" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#d97706" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#292524" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{fill: '#78716c', fontSize: 10, fontWeight: 'bold'}} 
            dy={15}
          />
          <YAxis hide />
          <Tooltip 
            contentStyle={{backgroundColor: '#1c1917', border: '1px solid #44403c', borderRadius: '8px'}}
            itemStyle={{color: '#fbbf24', fontSize: '12px'}}
            labelStyle={{color: '#a8a29e', fontSize: '10px', marginBottom: '4px'}}
          />
          <Area 
            type="monotone" 
            dataKey="val" 
            stroke="#fbbf24" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorGold)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatsVisualizer;
