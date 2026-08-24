import React, { useState } from 'react';
import { Cpu, TrendingUp, Zap, Sparkles, Quote, ArrowRight, CheckCircle2, Bot, Layers } from 'lucide-react';
import { AI_FUTURE_PILLARS } from '../data/aiFutureData';
import { PERSONAL_INFO } from '../data/siteData';
import { GlowCard } from './GlowCard';

export const AiFuture: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('ai-accounting');

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-slate-900" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-blue-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-slate-900" />;
      default:
        return <Bot className="w-5 h-5 text-blue-600" />;
    }
  };

  const currentPillar = AI_FUTURE_PILLARS.find(p => p.id === selectedPillarId) || AI_FUTURE_PILLARS[0];

  return (
    <section id="ai-future" className="py-16 sm:py-24 bg-[#f8fafc] border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Wireframe 08: MY NEXT CHAPTER: MASTERING AI */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-bold uppercase tracking-widest text-blue-700">
            <span>08</span> • <span>Next Generation Innovation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight uppercase">
            MY NEXT CHAPTER: MASTERING AI
          </h2>

          {/* Wireframe Quote with GlowCard */}
          <div className="max-w-2xl mx-auto">
            <GlowCard innerClassName="p-6 text-center shadow-xs">
              <Quote className="w-5 h-5 text-blue-600 mx-auto mb-2 opacity-70" />
              <p className="text-base sm:text-lg font-serif italic text-slate-700 tracking-tight">
                {PERSONAL_INFO.aiFutureQuote}
              </p>
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block mt-2">
                — Saumya Sur
              </span>
            </GlowCard>
          </div>
        </div>

        {/* 4 Pillars Grid matching wireframe */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {AI_FUTURE_PILLARS.map((pillar) => {
            const isSelected = selectedPillarId === pillar.id;
            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedPillarId(pillar.id)}
                className="cursor-pointer"
              >
                <GlowCard
                  id={`ai-pillar-btn-${pillar.id}`}
                  innerClassName={`p-5 sm:p-6 text-left transition-all flex flex-col justify-between h-full shadow-xs ${
                    isSelected
                      ? 'bg-blue-50/70 border border-blue-600/50'
                      : 'bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 rounded-sm bg-slate-50 border border-slate-200">
                        {getPillarIcon(pillar.iconName)}
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                        {pillar.category}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-heading font-bold text-slate-900 uppercase tracking-tight mb-1.5">
                      {pillar.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {pillar.headline}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold">
                    <span className={isSelected ? 'text-blue-600' : 'text-slate-500'}>
                      {isSelected ? 'Active Blueprint' : 'View Workflow'}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-blue-600' : 'text-slate-400'}`} />
                  </div>
                </GlowCard>
              </div>
            );
          })}
        </div>

        {/* Interactive Deep-Dive Card for the Selected AI Pillar */}
        <GlowCard innerClassName="p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider">
                  {currentPillar.category}
                </span>
                <span className="text-xs text-slate-500 font-mono font-bold">
                  {currentPillar.efficiencyGain}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-black text-slate-900 uppercase">
                {currentPillar.title}: {currentPillar.headline}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentPillar.description}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                  Practical Implementations:
                </span>
                {currentPillar.useCases.map((useCase, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-sm border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{useCase}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-5 sm:p-6 rounded-sm bg-slate-900 text-white space-y-4 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Live Workflow Blueprint
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">
                    ACTIVE PIPELINE
                  </span>
                </div>

                <div className="p-3.5 rounded-sm bg-slate-950 font-mono text-xs text-slate-300 leading-relaxed border border-slate-800">
                  {currentPillar.workflowExample}
                </div>

                <div className="p-3 rounded-sm bg-slate-800/80 border border-slate-700 text-xs text-slate-200 flex items-center justify-between">
                  <span className="text-slate-400">Measured Efficiency:</span>
                  <strong className="font-bold text-blue-400">{currentPillar.efficiencyGain}</strong>
                </div>
              </div>
            </div>

          </div>
        </GlowCard>

      </div>
    </section>
  );
};
