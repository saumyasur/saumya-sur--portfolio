import React from 'react';
import { Quote, Sparkles, Shield, Cpu, Lightbulb } from 'lucide-react';
import { PERSONAL_INFO } from '../data/siteData';
import { GlowCard } from './GlowCard';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-16 sm:py-24 bg-[#f8fafc] border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center space-y-5">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-bold uppercase tracking-widest text-blue-700">
            <span>10</span> • <span>Core Ethos</span>
          </div>

          <h2 className="text-xs sm:text-sm font-bold tracking-widest uppercase text-slate-500">
            PROFESSIONAL PHILOSOPHY
          </h2>

          {/* Wireframe Quote Centerpiece with GlowCard */}
          <GlowCard innerClassName="p-8 sm:p-12 space-y-6 shadow-xs my-6 text-center">
            <Quote className="w-10 h-10 text-blue-600/30 mx-auto" />
            
            <div className="space-y-3 max-w-3xl mx-auto font-serif italic">
              <p className="text-xl sm:text-3xl font-heading font-black text-slate-900 tracking-tight leading-snug not-italic">
                “Experience gives me the foundation.
              </p>
              <p className="text-xl sm:text-3xl font-heading font-black text-blue-600 tracking-tight leading-snug not-italic">
                Technology gives me new possibilities.
              </p>
              <p className="text-xl sm:text-3xl font-heading font-black text-slate-800 tracking-tight leading-snug not-italic">
                AI gives me the opportunity to build the future.”
              </p>
            </div>

            {/* Author Attribution */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
              <span className="text-sm sm:text-base font-heading font-black text-slate-900 tracking-widest uppercase">
                — SAUMYA SUR
              </span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="text-xs sm:text-sm text-slate-600 font-medium">
                Accountant &amp; Tax Consultant with AI | SAUMYA@DIGITAL
              </span>
            </div>
          </GlowCard>

          {/* Supporting 3 Principles with GlowCard */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left pt-2">
            <GlowCard innerClassName="p-4 space-y-1 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
                <Shield className="w-4 h-4 text-blue-600" /> Uncompromising Precision
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                20+ years of zero-tolerance for bookkeeping inaccuracies or statutory tax delinquency.
              </p>
            </GlowCard>

            <GlowCard innerClassName="p-4 space-y-1 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
                <Cpu className="w-4 h-4 text-blue-600" /> Continuous Adaptation
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Seamlessly evolving across manual ledgers, computerized Tally ERPs, and neural AI tools.
              </p>
            </GlowCard>

            <GlowCard innerClassName="p-4 space-y-1 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
                <Lightbulb className="w-4 h-4 text-blue-600" /> Client Prosperity
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Blending proactive tax planning with impactful commercial marketing for all-round growth.
              </p>
            </GlowCard>
          </div>

        </div>

      </div>
    </section>
  );
};
