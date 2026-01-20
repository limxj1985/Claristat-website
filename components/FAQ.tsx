
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How many years of experience do you have in data analysis?",
    answer: "Our lead consultants bring over 7+ years of specialized experience in high-level quantitative research and academic methodology."
  },
  {
    question: "Which tools do you utilize for data analysis?",
    answer: "We employ industry-leading software including SPSS, R Studio, and Jamovi to ensure robust, reproducible results."
  },
  {
    question: "Can you ensure total confidentiality of my dataset?",
    answer: "Yes. Data privacy is our highest priority. We utilize end-to-end encrypted storage and ensure all proprietary information is purged post-delivery."
  },
  {
    question: "What if my supervisor requests revisions?",
    answer: "We provide a 30-day Technical Revision window with every analysis package to ensure alignment with your specific research objectives."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // FAQ Schema for Search Engines
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-32 px-4 bg-slate-50" itemScope itemType="https://schema.org/FAQPage">
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-100 text-blue-700 text-[9px] font-bold uppercase tracking-[0.4em] mb-6">
            <HelpCircle className="w-3 h-3" aria-hidden="true" />
            <span>Support Center</span>
          </div>
          <h2 className="text-4xl font-black text-slate-900 uppercase italic tracking-tighter">
            Common <span className="text-amber-600">Inquiries.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 shadow-sm" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={openIndex === idx}
              >
                <span className="text-sm font-bold text-slate-800 uppercase tracking-wide" itemProp="name">
                  {faq.question}
                </span>
                <div className={`p-1 rounded-md bg-slate-100 text-slate-500 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}>
                  {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              <div 
                className={`transition-all duration-300 overflow-hidden ${openIndex === idx ? 'max-h-60' : 'max-h-0'}`}
                itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
              >
                <div className="p-6 pt-0 text-slate-600 text-sm leading-relaxed font-light border-t border-slate-50" itemProp="text">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
