import React from 'react';
import { FileCheck, MonitorPlay, Layout, Mic2, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Journal Readiness & Language Polish",
    description: "Technical editing, APA formatting, and academic proofreading to ensure your manuscript meets high-impact journal standards.",
    icon: <FileCheck className="w-8 h-8 text-amber-600" />,
    link: "https://wa.me/60103319228?text=Hi%20ClariStat,%20I%20am%20interested%20in%20Journal%20Readiness%20services."
  },
  {
    title: "Professional Viva Slide Deck",
    description: "Structured, visually compelling presentation decks designed to guide your narrative and impress the panel during your defense.",
    icon: <MonitorPlay className="w-8 h-8 text-blue-600" />,
    link: "https://wa.me/60103319228?text=Hi%20ClariStat,%20I%20am%20interested%20in%20Professional%20Viva%20Slide%20Design."
  },
  {
    title: "Academic Poster Design",
    description: "Conference-ready A1/A0 posters that synthesize complex data into clear, visually striking research summaries.",
    icon: <Layout className="w-8 h-8 text-amber-600" />,
    link: "https://wa.me/60103319228?text=Hi%20ClariStat,%20I%20am%20interested%20in%20Academic%20Poster%20Design."
  },
  {
    title: "Mock Viva Coaching",
    description: "One-on-one Q&A simulation and defense strategy session to build confidence and prepare for critical questions.",
    icon: <Mic2 className="w-8 h-8 text-blue-600" />,
    link: "https://wa.me/60103319228?text=Hi%20ClariStat,%20I%20am%20interested%20in%20Mock%20Viva%20Coaching."
  }
];

const AdditionalServices: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">
            Beyond the Data
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight mb-6">
            Specialized Academic Support
          </h2>
          <p className="text-slate-500 text-sm font-medium leading-relaxed uppercase tracking-wider">
            Final-mile services to ensure your presentation is as precise as your analysis.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <a 
              key={index}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row items-start p-8 bg-white border border-slate-200 rounded-3xl hover:border-amber-400 hover:shadow-xl hover:shadow-amber-100/50 transition-all duration-300"
            >
              <div className="mb-6 md:mb-0 md:mr-8 p-4 bg-slate-50 rounded-2xl group-hover:bg-amber-50 transition-colors">
                {service.icon}
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-3 group-hover:text-amber-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-amber-600 transition-colors">
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AdditionalServices;
