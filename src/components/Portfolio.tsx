import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Filter, Layers, Eye, X, CheckCircle2, Megaphone, FileText, Share2, Cpu } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { PortfolioCategory, PortfolioItem } from '../types';
import { GlowCard } from './GlowCard';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const categories: { id: PortfolioCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'digital-ads', label: 'Digital Ads' },
    { id: 'ai-creative', label: 'AI Creative' },
    { id: 'business-content', label: 'Business Content' },
    { id: 'social-media', label: 'Social Media' },
    { id: 'ai-projects', label: 'AI Projects' }
  ];

  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  const getVisualIndicator = (type: string, accent: string) => {
    switch (type) {
      case 'ad-banner':
        return (
          <div className="w-full h-40 rounded-sm bg-gradient-to-br from-blue-50 to-slate-100 border border-slate-200 p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.01] transition-transform">
            <div className="flex items-center justify-between text-[10px] font-mono font-bold text-blue-600">
              <span>PROMO CAMPAIGN</span>
              <Megaphone className="w-4 h-4" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">High-ROI Ad Creative</span>
              <div className="text-sm font-heading font-black text-slate-900">TAX SEASON DEADLINE AWARENESS</div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-500 border-t border-slate-200 pt-2">
              <span>Meta &amp; Google Ads</span>
              <span className="text-emerald-700 font-bold">+45% Inquiries</span>
            </div>
          </div>
        );
      case 'ai-art':
        return (
          <div className="w-full h-40 rounded-sm bg-gradient-to-br from-slate-900 to-slate-800 text-white border border-slate-700 p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.01] transition-transform">
            <div className="flex items-center justify-between text-[10px] font-mono font-bold text-blue-400">
              <span>GENERATIVE AI CONCEPT</span>
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Midjourney &amp; Photoshop</span>
              <div className="text-sm font-heading font-black text-white">AI + CLASSICAL FINANCE SYNTHESIS</div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-700 pt-2">
              <span>4K Brand Keynote</span>
              <span className="text-blue-300 font-bold">Ultra-Res Composition</span>
            </div>
          </div>
        );
      case 'dashboard':
        return (
          <div className="w-full h-40 rounded-sm bg-gradient-to-br from-emerald-50 to-slate-100 border border-slate-200 p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.01] transition-transform">
            <div className="flex items-center justify-between text-[10px] font-mono font-bold text-emerald-700">
              <span>EXECUTIVE REPORTING</span>
              <FileText className="w-4 h-4" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">P&amp;L Financial Deck</span>
              <div className="text-sm font-heading font-black text-slate-900">FINANCIAL HEALTH METRIC BRIEF</div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-500 border-t border-slate-200 pt-2">
              <span>C-Level Ready</span>
              <span className="text-emerald-700 font-bold">-60% Prep Time</span>
            </div>
          </div>
        );
      case 'social-post':
        return (
          <div className="w-full h-40 rounded-sm bg-gradient-to-br from-blue-100 to-indigo-50 border border-slate-200 p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.01] transition-transform">
            <div className="flex items-center justify-between text-[10px] font-mono font-bold text-indigo-700">
              <span>VIRAL CAROUSEL</span>
              <Share2 className="w-4 h-4" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">10-Slide Tax Explainer</span>
              <div className="text-sm font-heading font-black text-slate-900">NEW VS OLD TAX REGIME GUIDE</div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-500 border-t border-slate-200 pt-2">
              <span>1.2K+ Saves</span>
              <span className="text-indigo-700 font-bold">8.4% Engagement</span>
            </div>
          </div>
        );
      default:
        return (
          <div className="w-full h-40 rounded-sm bg-gradient-to-br from-slate-100 to-blue-50 border border-slate-200 p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.01] transition-transform">
            <div className="flex items-center justify-between text-[10px] font-mono font-bold text-slate-800">
              <span>AUTOMATION PIPELINE</span>
              <Cpu className="w-4 h-4" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Multimodal OCR Prompt</span>
              <div className="text-sm font-heading font-black text-slate-900">INVOICE EXTRACTION ENGINE</div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-500 border-t border-slate-200 pt-2">
              <span>Instant JSON</span>
              <span className="text-blue-700 font-bold">99.2% Accuracy</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Wireframe 09 */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-bold uppercase tracking-widest text-blue-700">
            <span>09</span> • <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-slate-900 tracking-tight uppercase">
            SAUMYA@DIGITAL
          </h2>
          <p className="text-xs sm:text-sm font-heading font-bold text-blue-600 uppercase tracking-wider">
            WHERE PROFESSIONAL KNOWLEDGE MEETS DIGITAL CREATIVITY
          </p>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            A curated showcase of commercial digital ads, generative AI concepts, business reporting decks, social media content, and accounting automation scripts.
          </p>
        </div>

        {/* Wireframe Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`portfolio-cat-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Portfolio Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <GlowCard
              key={item.id}
              id={`portfolio-card-${item.id}`}
              innerClassName="p-5 sm:p-6 flex flex-col justify-between shadow-xs"
            >
              <div>
                {/* Visual Preview Box */}
                <div className="mb-4 overflow-hidden rounded-sm">
                  {getVisualIndicator(item.visualType, item.accentColor)}
                </div>

                {/* Category & Badge */}
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-sm border border-blue-100">
                    {item.categoryLabel}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-heading font-bold text-slate-900 uppercase tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                  {item.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1 max-w-[70%]">
                  {item.toolsUsed.slice(0, 2).map((t, idx) => (
                    <span key={idx} className="text-[10px] text-slate-600 bg-slate-50 px-2 py-0.5 rounded-sm border border-slate-200 font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(item)}
                  className="p-2 rounded-sm bg-slate-50 border border-slate-200 group-hover:bg-slate-900 group-hover:text-white text-slate-700 transition-colors cursor-pointer shadow-xs"
                  aria-label="View portfolio details"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

            </GlowCard>
          ))}
        </div>

        {/* View Portfolio / Explore All Button matching wireframe */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setActiveCategory('all')}
            id="view-all-portfolio-btn"
            className="px-6 py-3 rounded-sm bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-widest border border-slate-900 shadow-xs transition-all cursor-pointer"
          >
            [ VIEW FULL PORTFOLIO ARCHIVE ]
          </button>
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-2xl space-y-6 text-left max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-bold">
                  SAUMYA@DIGITAL Showcase • {selectedProject.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-black text-slate-900 uppercase">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-md bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Visual Header */}
            <div>
              {getVisualIndicator(selectedProject.visualType, selectedProject.accentColor)}
            </div>

            {/* Context */}
            <div className="p-4 rounded-sm bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                Client / Project Context:
              </span>
              <p className="text-xs text-slate-800 font-semibold">
                {selectedProject.clientContext}
              </p>
            </div>

            {/* Full Story */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Project Overview &amp; Execution Strategy
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedProject.fullStory}
              </p>
            </div>

            {/* Key Metrics if available */}
            {selectedProject.stats && (
              <div className="grid grid-cols-2 gap-3">
                {selectedProject.stats.map((stat, idx) => (
                  <div key={idx} className="p-3 rounded-sm bg-slate-50 border border-slate-200 text-center">
                    <div className="text-lg font-heading font-black text-blue-600">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tools Used */}
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-900 tracking-wider block mb-2">
                Technologies &amp; Creative Tools:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedProject.toolsUsed.map((tool, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-sm bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(null)}
                className="text-xs font-bold text-slate-500 hover:text-slate-900 uppercase tracking-wider"
              >
                Close View
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-sm bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-xs"
              >
                Commission Similar Work
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
