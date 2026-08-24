/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { AiFuture } from './components/AiFuture';
import { Portfolio } from './components/Portfolio';
import { Philosophy } from './components/Philosophy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TaxCalculatorModal } from './components/TaxCalculatorModal';
import { GoldenCursorTrail } from './components/GoldenCursorTrail';
import { Calculator, Sparkles, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from './data/siteData';

export default function App() {
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('Computerized Accounting');
  const [isTaxModalOpen, setIsTaxModalOpen] = useState<boolean>(false);

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForContact(serviceTitle);
  };

  const handleConsultFromTaxTool = (details: string) => {
    setSelectedServiceForContact(details);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const yOffset = -80;
      const y = contactEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] selection:bg-blue-100 selection:text-blue-900 relative font-sans">
      
      {/* Golden Pen Interactive Trail */}
      <GoldenCursorTrail />

      {/* 01 — NAVBAR */}
      <Navbar onOpenConsultation={() => setIsTaxModalOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content">
        
        {/* 02 — HERO */}
        <Hero onOpenTaxEstimator={() => setIsTaxModalOpen(true)} />

        {/* 03 — TRUST / STATS */}
        <TrustStats />

        {/* 04 — ABOUT */}
        <About />

        {/* 05 — SERVICES */}
        <Services onSelectService={handleSelectService} />

        {/* 06 — SKILLS */}
        <Skills />

        {/* 07 — EXPERIENCE TIMELINE */}
        <ExperienceTimeline />

        {/* 08 — AI FUTURE */}
        <AiFuture />

        {/* 09 — PORTFOLIO (SAUMYA@DIGITAL) */}
        <Portfolio />

        {/* 10 — PROFESSIONAL PHILOSOPHY */}
        <Philosophy />

        {/* 11 — CONTACT */}
        <Contact initialService={selectedServiceForContact} />

      </main>

      {/* 12 — FOOTER */}
      <Footer />

      {/* Floating Action Button: Quick Tax / GST Estimator */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <button
          onClick={() => setIsTaxModalOpen(true)}
          id="floating-tax-calc-btn"
          className="group flex items-center gap-3 px-4 py-3 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer"
          title="Open Tax & GST Quick Estimator"
        >
          <div className="w-9 h-9 rounded-md bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Calculator className="w-4 h-4" />
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
              Advisory Tool
            </div>
            <div className="text-xs font-black uppercase tracking-wider text-slate-900">
              Tax &amp; GST Calculator
            </div>
          </div>
        </button>
      </div>

      {/* Interactive Tax / GST Estimator Modal */}
      <TaxCalculatorModal
        isOpen={isTaxModalOpen}
        onClose={() => setIsTaxModalOpen(false)}
        onConsult={handleConsultFromTaxTool}
      />

    </div>
  );
}
