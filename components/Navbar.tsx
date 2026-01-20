import React from 'react';
import Logo from './Logo';
import GoogleTranslate from './GoogleTranslate';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
        <a href="#home" className="hover:opacity-80 transition-opacity">
          <Logo />
        </a>
        
        <div className="hidden lg:flex items-center space-x-10 text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
          <a href="#pricing" className="hover:text-slate-900 transition-all duration-300 relative group">
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#referral" className="hover:text-slate-900 transition-all duration-300 relative group">
            Referral
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#faq" className="hover:text-slate-900 transition-all duration-300 relative group">
            FAQ
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#disclaimer" className="hover:text-slate-900 transition-all duration-300 relative group">
            Terms
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <div className="border-l border-slate-200 pl-6">
            <GoogleTranslate />
          </div>
        </div>

        {/* 👇 UPDATED: Now links directly to WhatsApp 👇 */}
        <a 
          href="https://wa.me/60103319228?text=Hi%20ClariStat,%20I%20would%20like%20to%20request%20a%20quotation."
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-slate-900 text-white rounded-lg text-[10px] font-black uppercase tracking-[0.2em] hover:bg-amber-600 transition-all shadow-lg shadow-slate-200"
        >
          Request Quotation
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
