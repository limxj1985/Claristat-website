
import React from 'react';
import { ShieldCheck, BookOpen, Lock, Binary, Scale } from 'lucide-react';

const Disclaimer: React.FC = () => {
  const sections = [
    {
      id: "01",
      title: "Academic Integrity",
      icon: <BookOpen className="w-5 h-5" />,
      content: "Services provided are strictly for analysis and technical guidance. ClariStat does not engage in ghostwriting for academic thesis chapters. The final interpretation and defense of results remain the exclusive responsibility of the client."
    },
    {
      id: "02",
      title: "Data Privacy & Ethics",
      icon: <Lock className="w-5 h-5" />,
      content: "The client warrants that all data provided is anonymized in accordance with ethical standards (GDPR/PDPA). ClariStat employs high-tier encryption and strict confidentiality for all proprietary datasets."
    },
    {
      id: "03",
      title: "Methodological Scope",
      icon: <Binary className="w-5 h-5" />,
      content: "The choice of package dictates the depth of methodology. ClariStat is not liable for non-significant results (p > 0.05) when such outcomes are derived accurately from the provided data."
    }
  ];

  return (
    <section id="disclaimer" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-100 text-blue-700 text-[9px] font-bold uppercase tracking-[0.4em] mb-6">
              <Scale className="w-3 h-3" />
              <span>Institutional Protocol</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase italic mb-4">
              Terms of <span className="text-amber-600">Service.</span>
            </h2>
            <p className="text-slate-500 text-sm font-medium tracking-wide leading-relaxed">
              Establishing ethical and technical boundaries for our research partnership. 
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
          {sections.map((section, idx) => (
            <div key={idx} className="bg-white p-10 md:p-12 hover:bg-slate-50 transition-all duration-500 group relative">
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-black text-amber-700 bg-amber-50 px-2 py-1 rounded border border-amber-100">
                  {section.id}
                </span>
                <div className="p-3 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                  {section.icon}
                </div>
              </div>
              <h3 className="text-slate-900 font-black text-lg uppercase tracking-tight mb-6">
                {section.title}
              </h3>
              <p className="text-slate-500 text-sm leading-[1.8] font-light tracking-wide">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white border border-slate-200 rounded-2xl p-8 flex items-center justify-center shadow-lg">
          <div className="flex items-center space-x-4 max-w-3xl">
            <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0" />
            <p className="text-[10px] md:text-xs text-slate-500 font-medium uppercase tracking-[0.15em] leading-relaxed italic text-center md:text-left">
              Engagement with <span className="text-slate-900 font-bold">ClariStat Research Consultancy</span> confirms full adherence to these governing protocols.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;