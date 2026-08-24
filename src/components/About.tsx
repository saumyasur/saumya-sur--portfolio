import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, User, Award, BookOpen, Sparkles, MapPin, Mail, X, FileText, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_DETAILS } from '../data/siteData';
import { GlowCard } from './GlowCard';
import { MonogramBadge } from './MonogramBadge';

export const About: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#f8fafc] border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Wireframe Card: SAUMYA SUR ACCOUNTANT & TAX CONSULTANT WITH AI */}
          <div className="lg:col-span-5">
            <GlowCard innerClassName="p-7 sm:p-8 space-y-6 shadow-sm">
              
              {/* Visual Profile Avatar / Photo Header with Stylish Typography */}
              <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
                <div className="relative w-16 h-16 rounded-sm overflow-hidden bg-slate-900 border-2 border-blue-600 shadow-sm flex-shrink-0">
                  <img
                    src={localStorage.getItem('saumya_custom_profile_photo') || "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"}
                    alt="Saumya Sur"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-black text-slate-900 uppercase tracking-tight">
                    SAUMYA SUR
                  </h3>
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                    ACCOUNTANT &amp; TAX CONSULTANT
                  </p>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                    WITH AI &bull; SAUMYA@DIGITAL
                  </p>
                </div>
              </div>

              {/* Quick Profile Credential Badges */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <div className="p-1.5 rounded-sm bg-slate-100 text-blue-600">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Experience:</span> 20+ Years in Accounting &amp; Taxation
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <div className="p-1.5 rounded-sm bg-slate-100 text-slate-900">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Academic:</span> B.Com (Honours) in Accountancy
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <div className="p-1.5 rounded-sm bg-slate-100 text-blue-600">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Location:</span> Kolkata &amp; Dankuni, West Bengal
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <div className="p-1.5 rounded-sm bg-slate-100 text-slate-900">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Digital Brand:</span> SAUMYA@DIGITAL
                  </div>
                </div>
              </div>

              {/* Mission Badge */}
              <div className="p-4 rounded-sm bg-slate-50 border border-slate-200">
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold block mb-1">
                  Specialized Competencies
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  Tally Prime, GST Returns, TDS Compliance, Income Tax Filings, AI Document Ingestion &amp; High-Converting Digital Ads.
                </p>
              </div>

            </GlowCard>
          </div>

          {/* Right Column: Wireframe Headline & Short Introduction */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-widest">
              <span>Section 04</span> • <span>About Saumya Sur</span>
            </div>

            {/* Wireframe Headline */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight uppercase leading-tight">
                EXPERIENCE BUILT ON ACCOUNTING.{' '}
                <span className="text-blue-600 block">
                  EVOLVING WITH AI.
                </span>
              </h2>
            </div>

            {/* Short Professional Introduction */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              With over two decades of dedicated practice across Indian corporate bookkeeping, commercial tax filings, and statutory compliance, Saumya Sur has guided hundreds of proprietary firms, MSMEs, and professionals through evolving tax landscapes.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Today, this deep-seated accounting wisdom converges with cutting-edge artificial intelligence and creative digital marketing. By integrating AI into traditional financial workflows and crafting standout digital ads under <strong className="text-blue-600 font-bold">SAUMYA@DIGITAL</strong>, Saumya delivers precision, speed, and business growth under one roof.
            </p>

            {/* Key Value Points with Active Multi-Color Cursor Surrounding Effect */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {ABOUT_DETAILS.keyHighlights.slice(0, 4).map((item, idx) => (
                <GlowCard
                  key={idx}
                  id={`about-highlight-${idx}`}
                  innerClassName="p-4 shadow-xs"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <h4 className="text-xs font-heading font-black text-slate-900 uppercase tracking-wide">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed pl-6.5">
                    {item.desc}
                  </p>
                </GlowCard>
              ))}
            </div>

            {/* Wireframe Action: [ READ MORE ] */}
            <div className="pt-2">
              <button
                onClick={() => setModalOpen(true)}
                id="about-read-more-btn"
                className="px-6 py-3.5 rounded-sm bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <span>READ MORE ABOUT MY PRACTICE</span>
                <ChevronRight className="w-4 h-4 text-blue-400" />
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Extended Profile Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-2xl text-left space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-mono text-blue-600 font-bold uppercase tracking-widest">
                  Professional Dossier
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-black text-slate-900 uppercase">
                  Saumya Sur — In-Depth Profile
                </h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-md bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">Academic Pedigree:</strong> Holding a prestigious <strong className="text-slate-900">B.Com (Honours) degree in Accountancy from the University of Calcutta</strong>, Saumya Sur built his core discipline on the bedrock of Indian corporate auditing, standard commercial accounting rules, and strict statutory compliance frameworks.
              </p>

              <div className="p-4 rounded-sm bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  The 20-Year Evolution
                </h4>
                <p className="text-xs text-slate-700">
                  Starting with traditional double-entry physical ledgers, Saumya led computerized transformations for local enterprises using early Tally systems, subsequently mastering modern GST, e-filings, TRACES TDS portals, and corporate financial statements.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  AI Integration &amp; SAUMYA@DIGITAL
                </h4>
                <p className="text-xs text-slate-700">
                  Rather than viewing artificial intelligence as a replacement, Saumya harnesses LLMs and multimodal AI for automated invoice parsing, rapid variance calculations, and intelligent tax research. Simultaneously, through SAUMYA@DIGITAL, he crafts high-conversion digital advertising and visual storytelling for businesses seeking strong market presence.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Guiding Principles
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {ABOUT_DETAILS.coreValues.map((val, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{val}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Kolkata &amp; Dankuni, West Bengal</span>
              <button
                onClick={() => setModalOpen(false)}
                className="px-5 py-2.5 rounded-sm bg-blue-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-blue-700 shadow-xs"
              >
                Close Dossier
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
