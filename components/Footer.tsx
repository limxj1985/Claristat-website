import React from 'react';
import Logo from './Logo';
import { ArrowUp, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 border-t border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 lg:gap-24">
          
          {/* Column 1: Branding */}
          <div className="col-span-2">
            <Logo className="h-10 mb-6" />
            <p className="text-slate-500 max-w-sm leading-relaxed mb-8 font-light text-sm">
              "Precision research is the bedrock of visionary leadership. We provide the clarity that separates the relevant from the noise."
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 bg-white border border-slate-200 rounded-full text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 bg-white border border-slate-200 rounded-full text-slate-400 hover:text-black hover:border-black transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Explore (Navigation) */}
          <div>
            <h6 className="text-slate-900 text-xs font-bold mb-6 uppercase tracking-[0.2em]">Explore</h6>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-amber-600 transition-colors text-left">Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="hover:text-amber-600 transition-colors text-left">Services & Pricing</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('referral')} className="hover:text-amber-600 transition-colors text-left">Referral Program</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="hover:text-amber-600 transition-colors text-left">FAQ</button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal (Fixed) */}
          <div>
            <h6 className="text-slate-900 text-xs font-bold mb-6 uppercase tracking-[0.2em]">Legal</h6>
            <ul className="space-y-4 text-sm font-medium text-slate-500 mb-8">
              {/* Privacy Policy removed as requested */}
              <li>
                <button onClick={() => scrollToSection('disclaimer')} className="hover:text-amber-600 transition-colors text-left">
                  Terms of Service
                </button>
              </li>
            </ul>
            
            <button 
              onClick={scrollToTop}
              className="group flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-amber-600 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>
        
        {/* Copyright */}
        <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-slate-400 text-[10px] font-bold uppercase tracking-[0.1em]">
          <p>© {new Date().getFullYear()} ClariStat Research Consultancy.</p>
          <p className="mt-2 md:mt-0">Precision. Clarity. Strategy.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
