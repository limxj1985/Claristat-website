import React from 'react';
import { Check, Clock, Users, Zap, MessageSquare } from 'lucide-react';

interface Feature {
  label: string;
  included: boolean;
  detail?: string;
}

interface PackageProps {
  name: string;
  price: string;
  description: string;
  subtitle?: string;
  metrics?: { label: string; value: string; icon: React.ReactNode }[];
  features: Feature[];
  footerNote?: string;
  isPremium?: boolean;
  buttonText?: string;
  priceDetail?: string;
  urgentText?: string;
  whatsappLink: string; // Added this prop for the link
}

const PricingCard: React.FC<PackageProps> = ({ 
  name, price, description, subtitle, metrics, features, footerNote, isPremium, buttonText = "Select Package", priceDetail, urgentText, whatsappLink
}) => (
  <div className={`relative flex flex-col p-8 rounded-3xl transition-all duration-500 border h-full ${isPremium ? 'bg-white border-amber-500/40 shadow-2xl shadow-slate-200 scale-[1.05] z-10' : 'bg-white/50 border-slate-200 hover:border-slate-300'}`}>
    {isPremium && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-[10px] font-bold uppercase tracking-[0.25em] px-6 py-2 rounded-full shadow-xl whitespace-nowrap">
        Most Recommended
      </div>
    )}
    
    <div className="mb-8">
      <h4 className="text-xl font-bold text-slate-900 mb-1 uppercase tracking-tighter">{name}</h4>
      {subtitle && <p className="text-amber-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">{subtitle}</p>}
      <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-6 leading-tight">{description}</p>
      <div className="flex flex-col">
        <span className="text-4xl font-bold text-slate-900 tracking-tight">{price}</span>
        {priceDetail && (
          <div className="mt-3 p-2 rounded-lg bg-slate-50 border border-slate-100">
            <span className="text-[10px] text-slate-500 font-bold uppercase block tracking-widest leading-relaxed">
              {priceDetail}
            </span>
          </div>
        )}
      </div>
    </div>

    <div className="space-y-6 flex-1">
      {metrics && metrics.length > 0 && (
        <div className="grid grid-cols-1 gap-3 pb-6 border-b border-slate-100">
          {metrics.map((m, i) => (
            <div key={i} className="flex items-center space-x-2">
              <span className="text-blue-600 shrink-0">{m.icon}</span>
              <span className="text-[11px] text-slate-700 font-bold uppercase tracking-wider">{m.value} {m.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className="space-y-3">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start space-x-3 text-sm">
            {feature.included ? (
              <Check className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
            ) : (
              <div className="w-3.5 h-3.5 mt-0.5 shrink-0 opacity-10" />
            )}
            <div className="flex flex-col">
              <span className={`${feature.included ? 'text-slate-700' : 'text-slate-300'} text-[10px] font-bold leading-tight uppercase tracking-wide`}>
                {feature.label}
              </span>
              {feature.detail && (
                <span className="text-[9px] text-blue-600/70 font-medium italic mt-0.5">{feature.detail}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>

    {urgentText && (
      <div className="mt-6 pt-4 border-t border-slate-100">
        <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest">
          ⚡ URGENT: {urgentText}
        </p>
      </div>
    )}

    {footerNote && (
      <p className="mt-4 text-[9px] text-slate-400 italic leading-relaxed">
        {footerNote}
      </p>
    )}

    {/* 👇 UPDATED: Uses an Anchor tag now instead of button */}
    <a 
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`mt-8 w-full block text-center py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] transition-all ${isPremium ? 'bg-amber-600 text-white hover:bg-amber-700 shadow-lg shadow-amber-200/50' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
    >
      {buttonText}
    </a>
  </div>
);

const SectionHeader: React.FC<{ phase: string; title: string; subtitle: string }> = ({ phase, title, subtitle }) => (
  <div className="text-center mb-16 relative">
    <span className="inline-block px-4 py-1 mb-6 text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-100 rounded-full tracking-[0.4em] uppercase">
      {phase}
    </span>
    <h3 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter text-slate-900 uppercase italic">
      {title}
    </h3>
    <p className="text-slate-500 text-lg font-bold tracking-[0.2em] uppercase">
      {subtitle}
    </p>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto space-y-48">
        
        {/* SECTION 1: DESIGN & PROTOCOL */}
        <div>
          <SectionHeader 
            phase="Phase 01" 
            title="Design & Protocol" 
            subtitle="Academic & Business Foundation" 
          />
          
          <div className="grid lg:grid-cols-3 gap-8 items-stretch mt-12">
            <PricingCard 
              name="Discovery"
              subtitle="Initial Scoping"
              description="Research Strategy"
              price="RM100.00"
              whatsappLink="https://wa.me/60103319228?text=Hi%20ClariStat,%20I%20am%20interested%20in%20the%20Discovery%20(Phase%2001)%20package."
              metrics={[
                { label: "Live Session", value: "60 Min", icon: <MessageSquare className="w-4 h-4" /> }
              ]}
              features={[
                { label: "Consultation Call", included: true },
                { label: "Academic Thesis Scoping", included: true },
                { label: "Market Entry Overview", included: true },
                { label: "Technical Roadmap", included: true },
                { label: "Full Protocol Document", included: false }
              ]}
              priceDetail="Extra: RM50 per 30 min block"
            />
            <PricingCard 
              name="Standard"
              subtitle="The Blueprint"
              description="Methodological Architecture"
              price="RM400.00"
              whatsappLink="https://wa.me/60103319228?text=Hi%20ClariStat,%20I%20am%20interested%20in%20the%20Standard%20(Phase%2001)%20package."
              isPremium={true}
              metrics={[
                { label: "Live Session", value: "60 Min", icon: <MessageSquare className="w-4 h-4" /> }
              ]}
              features={[
                { label: "Methodology Outline Document", included: true, detail: "Ready for Academic Review" },
                { label: "Sample Size Power Analysis", included: true, detail: "Using G*Power Protocol" },
                { label: "Instrument / Questionnaire Validation", included: true, detail: "Expert Construct Review" },
                { label: "Full Statistical Analysis Plan", included: false }
              ]}
              priceDetail="Extra: RM50 per 30 min block"
            />
            <PricingCard 
              name="Premium"
              subtitle="The Protocol"
              description="Full Execution Strategy"
              price="RM800.00"
              whatsappLink="https://wa.me/60103319228?text=Hi%20ClariStat,%20I%20am%20interested%20in%20the%20Premium%20(Phase%2001)%20package."
              metrics={[
                { label: "Live Session", value: "60 Min", icon: <MessageSquare className="w-4 h-4" /> }
              ]}
              features={[
                { label: "Full SAP Document", included: true, detail: "Institutional / Boardroom Standard" },
                { label: "Review Board Prep", included: true },
                { label: "Corporate Strategy Integration", included: true }
              ]}
              priceDetail="Extra: RM50 per 30 min block"
            />
          </div>
        </div>

        {/* SECTION 2: SYNTHESIS & ANALYSIS */}
        <div>
          <SectionHeader 
            phase="Phase 02" 
            title="Data analysis packages" 
            subtitle="Analysis Synthesis" 
          />

          <div className="grid lg:grid-cols-3 gap-10 items-stretch mt-12">
            {/* BASIC PACKAGE */}
            <PricingCard 
              name="BASIC"
              subtitle="Descriptive analysis"
              description="Fundamental Statistical Processing"
              price="RM300"
              whatsappLink="https://wa.me/60103319228?text=Hi%20ClariStat,%20I%20am%20interested%20in%20the%20BASIC%20(Phase%2002)%20package."
              metrics={[
                { label: "Statistical Models / Tests", value: "1", icon: <Zap className="w-4 h-4" /> },
                { label: "Respondents (MAX)", value: "300", icon: <Users className="w-4 h-4" /> },
                { label: "Delivery Time", value: "3 Days", icon: <Clock className="w-4 h-4" /> }
              ]}
              features={[
                { label: "Data Cleaning & Processing", included: true },
                { label: "Handling Missing Data", included: true, detail: "Listwise deletion" },
                { label: "Descriptive Statistics", included: true },
                { label: "Raw Results Table (Excel/SPSS Output)", included: true },
                { label: "T Test / Chi-Square / Reliability", included: false },
                { label: "Regression / ANOVA", included: false },
                { label: "Technical Interpretation Summary", included: false },
                { label: "Revision ( 30-day window)", included: true, detail: "1 Revision" }
              ]}
              urgentText="RM150 (1 Day Delivery)"
              footerNote="Additional Respondents: RM100 per 100 respondents."
            />
            
            {/* STANDARD PACKAGE */}
            <PricingCard 
              name="STANDARD"
              subtitle="Basic Inferential Statistics"
              description="Comprehensive Hypothesis Testing"
              price="RM800"
              whatsappLink="https://wa.me/60103319228?text=Hi%20ClariStat,%20I%20am%20interested%20in%20the%20STANDARD%20(Phase%2002)%20package."
              isPremium={true}
              metrics={[
                { label: "Statistical Models / Tests", value: "5", icon: <Zap className="w-4 h-4" /> },
                { label: "Respondents (MAX)", value: "400", icon: <Users className="w-4 h-4" /> },
                { label: "Delivery Time", value: "5 Days", icon: <Clock className="w-4 h-4" /> }
              ]}
              features={[
                { label: "Data Cleaning & Processing", included: true },
                { label: "Handling Missing Data", included: true, detail: "LOCF/BOCF" },
                { label: "Full Inferential Suite", included: true, detail: "T Test, Chi-Square, Reliability, Regression, ANOVA" },
                { label: "APA Formatted Tables (Word)", included: true },
                { label: "Technical Interpretation Summary", included: true },
                { label: "Zoom Meeting (Walkthrough)", included: true, detail: "1 Session" },
                { label: "Survival Analysis / GLMM", included: false },
                { label: "Revision ( 30-day window)", included: true, detail: "1 Revision" }
              ]}
              urgentText="RM400 (3 Days Delivery)"
              footerNote="Additional Respondents: RM100 per 100 respondents."
            />

            {/* PREMIUM PACKAGE */}
            <PricingCard 
              name="PREMIUM"
              subtitle="Advanced analysis"
              description="Elite Research Engine"
              price="RM1,300"
              whatsappLink="https://wa.me/60103319228?text=Hi%20ClariStat,%20I%20am%20interested%20in%20the%20PREMIUM%20(Phase%2002)%20package."
              metrics={[
                { label: "Statistical Models / Tests", value: "*8", icon: <Zap className="w-4 h-4" /> },
                { label: "Respondents (MAX)", value: "600", icon: <Users className="w-4 h-4" /> },
                { label: "Delivery Time", value: "7 Days", icon: <Clock className="w-4 h-4" /> }
              ]}
              features={[
                { label: "Data Cleaning & Processing", included: true },
                { label: "Handling Missing Data", included: true, detail: "Multiple imputation" },
                { label: "Full Inferential Suite", included: true, detail: "T Test, Chi-Square, Reliability, Regression, ANOVA" },
                { label: "Advanced Models", included: true, detail: "Survival Analysis, GLM/ GEE/ GLMM" },
                { label: "Technical Interpretation Summary", included: true },
                { label: "Plots / Graphs / Charts", included: true },
                { label: "Full Analysis Report", included: true },
                { label: "Zoom Meeting (Walkthrough)", included: true, detail: "1 Session" },
                { label: "Revision ( 30-day window)", included: true, detail: "1 Revision" }
              ]}
              urgentText="RM600 (5 Days Delivery)"
              footerNote="Additional Respondents: RM100 per 100 respondents."
            />
          </div>
        </div>

        {/* CUSTOM CTA */}
        <div className="mt-24 p-12 bg-white border border-slate-200 rounded-3xl text-center shadow-xl shadow-slate-100">
          <div className="max-w-3xl mx-auto">
            <h4 className="text-slate-900 text-2xl font-black uppercase tracking-widest mb-6 italic">Custom Research Architecture</h4>
            <p className="text-slate-500 text-sm font-medium mb-10 leading-relaxed uppercase tracking-[0.15em]">
              For complex datasets, multi-national survey projects, or high-impact corporate research, we offer custom-engineered statistical frameworks.
            </p>
            <a 
              href="https://wa.me/60103319228?text=Hi%20ClariStat,%20I%20am%20interested%20in%20initiating%20a%20Custom%20Protocol."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center py-4 bg-slate-900 text-white rounded-xl font-bold uppercase tracking-widest hover:bg-amber-600 transition-colors shadow-lg shadow-slate-900/20"
            >
              INITIATE CUSTOM PROTOCOL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
