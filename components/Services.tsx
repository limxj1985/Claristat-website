
import React from 'react';
import { BarChart3, Microscope, Target, Compass } from 'lucide-react';

const services = [
  {
    title: "Statistical Synthesis",
    description: "Multi-layered quantitative research extracting actionable correlations from enterprise datasets.",
    icon: <BarChart3 className="w-6 h-6" />
  },
  {
    title: "Market Perception",
    description: "Deep qualitative insights into stakeholder psychology and brand sentiment trajectories.",
    icon: <Microscope className="w-6 h-6" />
  },
  {
    title: "Alpha Strategies",
    description: "Strategic frameworks designed for first-mover advantage and market dominance.",
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "Predictive Intelligence",
    description: "Forward-looking models identifying tomorrow's market inflection points today.",
    icon: <Compass className="w-6 h-6" />
  }
];

const Services: React.FC = () => {
  return (
    <div className="py-32 px-4 bg-[#010413]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="glass p-10 rounded-[2.5rem] hover:bg-emerald-500/[0.03] transition-all duration-500 group border-white/5 hover:border-emerald-500/20">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-8 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-inner border border-emerald-500/20">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-white uppercase tracking-tight group-hover:text-emerald-400 transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-400 leading-relaxed text-sm font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;