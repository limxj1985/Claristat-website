import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import ReferralProgram from './components/ReferralProgram';
import Disclaimer from './components/Disclaimer';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Contact from './components/Contact'; 
import AdditionalServices from './components/AdditionalServices';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-amber-500/20">
      {/* Background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-[#f8fafc]">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-amber-100/30 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-100/30 blur-[150px]" />
        <div className="absolute top-[30%] left-[40%] w-[30%] h-[30%] rounded-full bg-slate-200/20 blur-[100px]" />
      </div>

      <Navbar />
      
      <main id="main-content">
        <section id="home" className="scroll-mt-24">
          <Hero />
        </section>
        
        <section id="pricing" className="scroll-mt-24">
          <Pricing />
        </section>

        <section id="services">
          <AdditionalServices />
        </section>

        <section id="referral" className="scroll-mt-24">
          <ReferralProgram />
        </section>

        <section id="faq" className="scroll-mt-24">
          <FAQ />
        </section>
        
        {/* 👇 THIS IS THE MISSING PART! 👇 */}
        <section id="contact" className="scroll-mt-24 bg-white">
          <Contact />
        </section>
        {/* 👆 ADD THIS BLOCK 👆 */}
        
        <section id="disclaimer" className="scroll-mt-24">
          <Disclaimer />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
