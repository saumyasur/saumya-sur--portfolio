import React, { useState } from 'react';
import { ChevronDown, CheckCircle2, Award, ArrowDown, Calendar, Sparkles } from 'lucide-react';
import { TIMELINE_MILESTONES } from '../data/timelineData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="timeline" className="py-16 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Wireframe 07 */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-bold uppercase tracking-widest text-blue-700">
            <span>07</span> • <span>Career Evolution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight uppercase">
            20+ YEARS OF EXPERIENCE
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Tracing the five-stage progression from traditional double-entry ledgers to computerized ERPs, tax mastery, digital ads, and AI-powered practice.
          </p>
        </div>

        {/* Vertical Stepper Timeline matching wireframe flow */}
        <div className="space-y-5 relative">
          {TIMELINE_MILESTONES.map((milestone, idx) => {
            const isLast = idx === TIMELINE_MILESTONES.length - 1;
            const isCurrent = milestone.id === 'stage-5';

            return (
              <div key={milestone.id} className="relative">
                
                {/* Timeline Card */}
                <div
                  id={`timeline-stage-${milestone.stageNumber}`}
                  className={`rounded-sm p-6 sm:p-7 transition-all border ${
                    isCurrent
                      ? 'bg-white border-blue-600 shadow-sm ring-1 ring-blue-600/30'
                      : 'bg-[#f8fafc] border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-sm flex items-center justify-center font-heading font-black text-sm ${
                          isCurrent
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-slate-900 text-white'
                        }`}
                      >
                        {milestone.stageNumber}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900 uppercase tracking-tight">
                          {milestone.title}
                        </h3>
                        <p className="text-xs font-bold text-blue-600">
                          {milestone.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-700 font-semibold">
                        {milestone.era}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider">
                        {milestone.impactBadge}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {milestone.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="space-y-2 mb-4">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                      Milestones &amp; Outcomes:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {milestone.keyAchievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-sm border border-slate-200 shadow-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="leading-normal">{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 mr-1.5">
                      Core Systems:
                    </span>
                    {milestone.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-sm bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Wireframe Flow Arrow (if not last) */}
                {!isLast && (
                  <div className="flex justify-center my-2.5">
                    <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-blue-600">
                      <ArrowDown className="w-3 h-3" />
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
