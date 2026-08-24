import React from 'react';
import { Calculator, FileCheck, Sparkles, Layers } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/skillsData';
import { GlowCard } from './GlowCard';

export const Skills: React.FC = () => {
  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Calculator':
        return <Calculator className="w-5 h-5 text-blue-600" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-slate-900" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-blue-600" />;
      default:
        return <Layers className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 bg-[#f8fafc] border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Wireframe 06: MY EXPERTISE */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-bold uppercase tracking-widest text-blue-700">
            <span>06</span> • <span>Skills &amp; Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight uppercase">
            MY EXPERTISE
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Structured across three core pillars: classic accounting discipline, statutory tax intelligence, and modern AI digital workflows.
          </p>
        </div>

        {/* 3 Pillars Grid matching wireframe */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <GlowCard
              key={category.id}
              id={`skill-pillar-${category.id}`}
              innerClassName="p-6 sm:p-8 flex flex-col justify-between shadow-xs"
            >
              <div>
                {/* Pillar Header */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-sm bg-slate-50 border border-slate-200">
                      {getPillarIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-heading font-black text-slate-900 uppercase tracking-wider">
                        {category.title}
                      </h3>
                      <p className="text-[11px] text-blue-600 font-bold">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Wireframe Bullet Points / Skill List */}
                <div className="space-y-4 mb-8">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-800 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                          {skill.name}
                        </span>
                        <span className="text-[11px] text-blue-600 font-mono font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Visual Progress Meter */}
                      <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden border border-slate-200/60">
                        <div
                          className="h-full bg-blue-600 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      {skill.highlight && (
                        <div className="text-[10px] text-slate-500 pl-3.5">
                          {skill.highlight}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Badges for each pillar */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block mb-2">
                  Key Software &amp; Frameworks
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {category.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-sm bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </GlowCard>
          ))}
        </div>

      </div>
    </section>
  );
};
