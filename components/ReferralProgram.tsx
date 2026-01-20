
import React from 'react';
import { Gift, Users, MessageCircle } from 'lucide-react';

const ReferralProgram: React.FC = () => {
  const handleInvite = () => {
    const message = encodeURIComponent(
      "Hi! I'm using ClariStat Research Consultancy for professional data analysis. If you sign up through my referral, BOTH of us get RM 50 OFF our final invoice! Check them out here: " + window.location.href
    );
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <section id="referral" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden bg-white border border-slate-200 rounded-[2.5rem] p-12 md:p-20 text-center shadow-2xl shadow-slate-200">
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-50 border border-amber-100 mb-8 text-amber-600">
              <Gift className="w-10 h-10" />
            </div>
            
            <h2 className="text-sm font-bold tracking-[0.4em] text-amber-700 uppercase mb-4">Referral Incentive</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic">
              Share the <span className="gradient-text">Clarity.</span>
            </h3>
            
            <div className="max-w-2xl mx-auto mb-12">
              <p className="text-2xl md:text-3xl font-bold text-slate-700 leading-tight uppercase tracking-tight">
                Refer a colleague, and <span className="text-amber-600 underline underline-offset-8 decoration-amber-200">BOTH</span> of you receive <span className="text-slate-900 text-5xl md:text-6xl font-black block mt-4">RM 50 OFF</span>
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
              <div className="flex items-center space-x-3 px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Applied to final invoice</span>
              </div>
              <button 
                onClick={handleInvite}
                className="flex items-center space-x-3 px-12 py-5 bg-slate-900 hover:bg-blue-700 text-white rounded-xl font-black text-xs uppercase tracking-[0.25em] transition-all shadow-xl shadow-slate-200 group/btn"
              >
                <MessageCircle className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                <span>Invite via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralProgram;