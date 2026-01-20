
import React from 'react';
import Logo from './Logo';
import { Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-16">
          <div className="col-span-2">
            <Logo className="h-12 mb-8" />
            <p className="text-slate-500 max-w-sm leading-relaxed mb-10 font-light text-sm italic">
              "Precision research is the bedrock of visionary leadership. We provide the clarity that separates the relevant from the noise."
            </p>
          </div>
          
          <div className="col-span-2">
            <h6 className="text-slate-900 text-xs font-bold mb-8 uppercase tracking-[0.2em]">Contact Channels</h6>
            <div className="space-y-6">
              <a 
                href="tel:+60123456789" 
                className="group flex items-center space-x-4 text-slate-500 hover:text-amber-700 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 group-hover:border-amber-200 transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Phone Number</span>
                  <span className="text-sm font-medium tracking-wider text-slate-700 group-hover:text-slate-900">+60 12-345 6789</span>
                </div>
              </a>

              <a 
                href="mailto:contact@claristat.com" 
                className="group flex items-center space-x-4 text-slate-500 hover:text-blue-600 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 group-hover:border-blue-200 transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Digital Correspondence</span>
                  <span className="text-sm font-medium tracking-wider text-slate-700 group-hover:text-slate-900">contact@claristat.com</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
          <p>© 2024 ClariStat Research Consultancy. Precision Redefined.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;