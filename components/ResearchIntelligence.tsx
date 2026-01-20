
import React, { useState, useRef } from 'react';
import { getMarketInsights } from '../services/gemini';
import { ResearchInsight } from '../types';
import { Search, Loader2, Globe, ExternalLink, ArrowRight } from 'lucide-react';

const ResearchIntelligence: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [insight, setInsight] = useState<ResearchInsight | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const data = await getMarketInsights(query);
      setInsight(data);
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-200 rounded-2xl blur opacity-20 group-focus-within:opacity-40 transition duration-1000"></div>
        <div className="relative flex items-center glass rounded-2xl p-2 border-amber-500/20">
          <div className="flex-1 flex items-center px-4">
            <Search className="w-5 h-5 text-amber-500/50 mr-3" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask for high-level industry synthesis or competitive positioning..."
              className="w-full bg-transparent border-none focus:ring-0 text-white placeholder:text-stone-600 py-4 font-light"
            />
          </div>
          <button
            disabled={loading || !query.trim()}
            className="px-8 py-3 bg-amber-600 text-white rounded-xl font-bold uppercase tracking-widest text-xs disabled:opacity-50 hover:bg-amber-500 transition-all flex items-center space-x-2"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <span>Synthesize</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>

      {insight && (
        <div ref={resultRef} className="mt-12 glass rounded-3xl overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500 border-amber-500/10">
          <div className="p-8 md:p-12">
            <div className="flex items-center space-x-2 text-amber-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <Globe className="w-4 h-4" />
              <span>Verified Market Intel</span>
            </div>
            <h4 className="text-2xl font-bold mb-6 text-white border-b border-white/5 pb-6">
              Research Directive: "{insight.query}"
            </h4>
            
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-6 font-light">
              {insight.answer.split('\n').filter(l => l.trim()).map((line, i) => (
                <p key={i} className="border-l-2 border-amber-500/30 pl-4">{line}</p>
              ))}
            </div>

            {insight.sources.length > 0 && (
              <div className="mt-12 pt-8 border-t border-white/5">
                <p className="text-[10px] font-bold text-stone-500 mb-4 uppercase tracking-[0.3em]">Referential Grounding</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {insight.sources.map((source, idx) => (
                    <a
                      key={idx}
                      href={source.uri}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-amber-500/5 hover:border-amber-500/30 transition-all group"
                    >
                      <span className="text-xs font-medium text-slate-400 truncate max-w-[200px]">
                        {source.title}
                      </span>
                      <ExternalLink className="w-3 h-3 text-stone-600 group-hover:text-amber-500" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResearchIntelligence;
