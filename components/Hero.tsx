
import React, { useEffect, useState } from 'react';
import { generateHeroVisual } from '../services/images';
import { Loader2, ArrowRight, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      const url = await generateHeroVisual();
      setImageUrl(url);
      setLoading(false);
    };
    fetchImage();
  }, []);

  return (
    <header className="relative pt-48 pb-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
            <Shield className="w-3 h-3" aria-hidden="true" />
            <span>Academic Rigor & Business Intelligence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tighter text-slate-900">
            Precision Research. <br />
            <span className="gradient-text">Absolute Clarity.</span>
          </h1>
          
          <p className="text-lg text-slate-600 leading-relaxed max-w-lg font-light">
            ClariStat provides elite technical architecture for both high-stakes academic research and strategic business analytics. From academic researchers requiring statistical precision to corporate teams demanding market-leading insights, we transform complex data into your greatest strategic advantage.
          </p>

          <div className="mt-12">
             <button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center space-x-4 px-10 py-5 bg-slate-900 text-white rounded-xl text-[11px] font-black uppercase tracking-[0.25em] hover:bg-amber-600 transition-all shadow-2xl shadow-slate-400/20"
              aria-label="View Analysis and Pricing Packages"
            >
              <span>Explore Research Packages</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full aspect-square max-w-[550px] bg-white rounded-[3rem] p-4 border border-slate-200 overflow-hidden float-animation shadow-2xl shadow-slate-200">
            {loading ? (
              <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
                <Loader2 className="w-10 h-10 text-amber-500 animate-spin" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Rendering Data Visual</span>
              </div>
            ) : imageUrl ? (
              <img 
                src={imageUrl} 
                alt="Professional statistical data visualization reflecting clarity in academic and business research" 
                className="w-full h-full object-cover rounded-[2.5rem] opacity-95 transition-opacity"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-slate-100 to-amber-50 rounded-[2.5rem]" />
            )}
          </div>
          <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
