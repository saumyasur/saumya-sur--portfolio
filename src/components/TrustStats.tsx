import React from 'react';
import { Award, GraduationCap, Calculator, Sparkles } from 'lucide-react';
import { TRUST_STATS } from '../data/siteData';
import { GlowCard } from './GlowCard';

export const TrustStats: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Award':
        return <Award className="w-5 h-5 text-blue-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-slate-900" />;
      case 'Calculator':
        return <Calculator className="w-5 h-5 text-blue-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-slate-900" />;
      default:
        return <Award className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="stats" className="py-10 sm:py-14 bg-white border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Wireframe 03 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRUST_STATS.map((stat, idx) => (
            <GlowCard
              key={stat.id}
              id={`stat-card-${stat.id}`}
              innerClassName="p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-sm bg-slate-50 border border-slate-200 group-hover:border-blue-200 transition-colors">
                    {getIcon(stat.iconName)}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-3xl font-heading font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className="text-xs text-blue-600 font-bold">
                    {stat.sublabel}
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                {stat.description}
              </p>
            </GlowCard>
          ))}
        </div>

      </div>
    </section>
  );
};
