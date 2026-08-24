import React from 'react';
import { ArrowUp, Heart, Shield, Sparkles, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/siteData';
import { MonogramBadge } from './MonogramBadge';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Services', target: 'services' },
    { label: 'Skills', target: 'skills' },
    { label: 'AI Future', target: 'ai-future' },
    { label: 'Portfolio', target: 'portfolio' },
    { label: 'Philosophy', target: 'philosophy' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <footer id="main-footer" className="bg-slate-900 border-t border-slate-800 py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand block matching wireframe */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <MonogramBadge size="md" styleVariant="interlocking-luxury" />
            <div className="space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="font-heading font-black text-xl tracking-tight text-white">
                  SAUMYA SUR
                </span>
                <span className="text-slate-600 font-light">/</span>
                <span className="text-sm font-bold tracking-wider text-blue-400">
                  SAUMYA@DIGITAL
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">
                Accountant &amp; Tax Consultant (with AI) | Digital Ad Creator
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-[11px] text-slate-400 pt-1">
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-blue-400 font-mono transition-colors">
                  📞 {PERSONAL_INFO.phone}
                </a>
                <span>•</span>
                <a href={`mailto:${PERSONAL_INFO.primaryEmail}`} className="hover:text-blue-400 font-mono transition-colors">
                  ✉️ {PERSONAL_INFO.primaryEmail}
                </a>
              </div>
              <p className="text-[11px] text-slate-500">
                Kolkata &amp; Dankuni, West Bengal, India
              </p>
            </div>
          </div>

          {/* Quick Nav Links matching wireframe */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            {footerLinks.map((link, idx) => (
              <React.Fragment key={link.target}>
                <button
                  onClick={() => scrollTo(link.target)}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
                {idx < footerLinks.length - 1 && (
                  <span className="text-slate-700 hidden sm:inline">•</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Back to top button */}
          <div>
            <button
              onClick={scrollToTop}
              id="back-to-top-btn"
              className="p-3 rounded-sm bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all cursor-pointer shadow-xs"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright & Tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-slate-500">
          <p>
            © 2026 Saumya Sur. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px] font-medium text-slate-400">
            <span>Tax Intelligence</span>
            <span>•</span>
            <span>Computerized Accounting</span>
            <span>•</span>
            <span>AI-Driven Creativity</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
