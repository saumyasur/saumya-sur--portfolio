import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, Sparkles, Calculator, Cpu, ShieldCheck, CheckCircle2, Award, Zap, FileSpreadsheet, TrendingUp, Camera, Check, MapPin, Upload, Trash2, Clipboard } from 'lucide-react';
import { PERSONAL_INFO } from '../data/siteData';

interface HeroProps {
  onOpenTaxEstimator?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTaxEstimator }) => {
  const [activeTab, setActiveTab] = useState<'synergy' | 'finance' | 'ai'>('synergy');
  const [customPhoto, setCustomPhoto] = useState<string | null>(() => {
    return localStorage.getItem('saumya_custom_profile_photo') || null;
  });
  const [isDragging, setIsDragging] = useState(false);
  const [justUploaded, setJustUploaded] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Default executive portrait matching Saumya Sur's professional look (suit, glasses, tie)
  const defaultPortraitUrl = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";

  const savePhoto = (dataUrl: string) => {
    setCustomPhoto(dataUrl);
    localStorage.setItem('saumya_custom_profile_photo', dataUrl);
    window.dispatchEvent(new Event('profile_photo_updated'));
    setJustUploaded(true);
    setTimeout(() => setJustUploaded(false), 3500);
  };

  const removePhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomPhoto(null);
    localStorage.removeItem('saumya_custom_profile_photo');
    window.dispatchEvent(new Event('profile_photo_updated'));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        savePhoto(result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Drag & drop support
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        savePhoto(result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Clipboard paste support (Ctrl+V / Cmd+V)
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.startsWith('image/')) {
          const file = items[i].getAsFile();
          if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
              const result = event.target?.result as string;
              savePhoto(result);
            };
            reader.readAsDataURL(file);
            break;
          }
        }
      }
    };

    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-24 sm:pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Heading, Pillars & Action */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              {/* Professional Practice Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold tracking-[0.2em] rounded-full mb-4 border border-blue-200 uppercase">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                PROFESSIONAL PRACTICE
              </div>

              {/* Main Name & Title matching User's Screenshot */}
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-heading font-black leading-[0.95] tracking-tight text-slate-900 uppercase mb-2">
                SAUMYA SUR
              </h1>

              <div className="space-y-1 mb-5">
                <h2 className="text-xl sm:text-2xl font-black text-blue-600 uppercase tracking-tight">
                  ACCOUNTANT &amp; TAX CONSULTANT WITH AI
                </h2>
                <h3 className="text-lg sm:text-xl font-bold text-slate-700 uppercase tracking-wider">
                  DIGITAL AD CREATOR
                </h3>
              </div>

              {/* Wireframe 3 Pillars */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 mb-5">
                <span className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-800 rounded-sm shadow-xs">
                  Accounting Expertise
                </span>
                <span className="text-slate-300">•</span>
                <span className="px-2.5 py-1 bg-blue-50 border border-blue-100 text-blue-700 rounded-sm shadow-xs">
                  Tax Intelligence
                </span>
                <span className="text-slate-300">•</span>
                <span className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-800 rounded-sm shadow-xs">
                  AI-Powered Creativity
                </span>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-6">
                Leveraging two decades of deep financial expertise with the power of artificial intelligence to deliver high-precision tax solutions, robust statutory compliance, and high-impact digital advertising strategies.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-8">
                <button
                  onClick={() => scrollTo('services')}
                  id="hero-explore-btn"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-7 sm:px-8 py-3.5 rounded-sm font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>EXPLORE MY EXPERTISE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => scrollTo('portfolio')}
                  id="hero-portfolio-btn"
                  className="border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 px-7 sm:px-8 py-3.5 rounded-sm font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>PORTFOLIO</span>
                  <Sparkles className="w-4 h-4 text-blue-600" />
                </button>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 px-5 py-3.5 rounded-sm font-bold text-xs uppercase tracking-wider shadow-xs transition-all flex items-center gap-2"
                >
                  <span>CALL DIRECT</span>
                </a>
              </div>
            </div>

            {/* Professional Philosophy Card */}
            <div className="bg-white p-6 sm:p-7 border border-slate-200 shadow-sm relative rounded-sm">
              <div className="absolute -top-3 left-6 bg-blue-600 text-white px-3 py-0.5 text-[9px] font-bold tracking-widest uppercase rounded-sm">
                Professional Philosophy
              </div>
              <p className="text-lg sm:text-xl italic font-serif text-slate-700 leading-snug">
                “Experience gives me the foundation. Technology gives me new possibilities. AI gives me the opportunity to build the future.”
              </p>
              <div className="mt-3 text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center justify-between">
                <span>— Saumya Sur</span>
                <span className="text-[11px] text-slate-500 font-sans font-normal">Kolkata &amp; Dankuni, West Bengal</span>
              </div>
            </div>

          </div>

          {/* Right Column: Professional Portrait & Core Expertise Hub */}
          <div className="lg:col-span-5 flex flex-col space-y-5">
            
            {/* Saumya Sur Executive Full Portrait Card on the Right Side */}
            <div className="bg-white border border-slate-200 rounded-sm p-3 sm:p-4 shadow-sm space-y-3">
              
              {/* Image Frame Container - Full Aspect & Height with Drag & Drop */}
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`relative rounded-sm overflow-hidden bg-slate-900 border transition-all duration-300 group w-full cursor-pointer ${
                  isDragging ? 'border-amber-400 ring-4 ring-amber-400/30 scale-[1.01]' : 'border-slate-200 hover:border-blue-400'
                }`}
              >
                <img
                  src={customPhoto || defaultPortraitUrl}
                  alt="Saumya Sur - Accountant & Tax Consultant with AI"
                  referrerPolicy="no-referrer"
                  className="w-full h-[450px] sm:h-[520px] lg:h-[560px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  id="hero-saumya-portrait"
                />

                {/* Dragging Active Overlay */}
                {isDragging && (
                  <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs flex flex-col items-center justify-center text-white z-30 p-6 text-center">
                    <Upload className="w-12 h-12 text-amber-400 mb-3 animate-bounce" />
                    <div className="text-base font-bold uppercase tracking-wider">Drop Your Photo Here</div>
                    <p className="text-xs text-slate-300 mt-1">Release to set as Saumya Sur portrait</p>
                  </div>
                )}

                {/* Just Uploaded Success Badge */}
                {justUploaded && (
                  <div className="absolute top-14 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2 z-20 animate-fade-in">
                    <Check className="w-4 h-4" />
                    <span>Photo Updated Successfully!</span>
                  </div>
                )}

                {/* Top Status Overlay Badge */}
                <div className="absolute top-3.5 left-3.5 bg-slate-900/85 backdrop-blur-xs text-white px-3 py-1.5 rounded-sm text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 border border-white/10 shadow-xs z-10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Verified Tax Practice</span>
                </div>

                {/* Top Right Controls */}
                <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 z-10" onClick={(e) => e.stopPropagation()}>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handlePhotoUpload}
                    accept="image/*"
                    className="hidden"
                    id="photo-upload-input"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    title="Upload / Change Photo"
                    className="px-2.5 py-1.5 rounded-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md text-xs flex items-center gap-1.5 cursor-pointer transition-all border border-blue-400"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      {customPhoto ? 'Change Photo' : 'Upload Photo'}
                    </span>
                  </button>

                  {customPhoto && (
                    <button
                      onClick={removePhoto}
                      title="Reset to default"
                      className="p-1.5 rounded-sm bg-slate-900/80 hover:bg-rose-600 text-slate-200 hover:text-white backdrop-blur-xs text-xs cursor-pointer transition-all border border-white/10"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Prompt hint banner if no custom photo uploaded yet */}
                {!customPhoto && (
                  <div className="absolute top-14 inset-x-3.5 bg-slate-950/85 backdrop-blur-xs border border-amber-400/40 rounded-sm p-3 text-white z-10 shadow-md">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 text-xs">
                        <Upload className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        <span className="font-semibold text-[11px] text-amber-200">
                          আপনার ছবি সেট করুন (Select Screenshot file or Drag & Drop)
                        </span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          fileInputRef.current?.click();
                        }}
                        className="px-2.5 py-1 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-[10px] uppercase tracking-wider rounded-xs flex-shrink-0 shadow-xs cursor-pointer"
                      >
                        Choose File
                      </button>
                    </div>
                  </div>
                )}

                {/* Bottom Overlay Gradient & Full Caption */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-5 text-white z-10">
                  <div className="flex items-end justify-between gap-2">
                    <div>
                      <div className="text-xl font-bold font-heading uppercase tracking-tight text-white flex items-center gap-2">
                        <span>Saumya Sur</span>
                        <CheckCircle2 className="w-4 h-4 text-blue-400 inline" />
                      </div>
                      <div className="text-xs text-blue-300 font-semibold tracking-wide">
                        Accountant &amp; Tax Consultant | Digital Ad Creator
                      </div>
                    </div>
                    <div className="text-xs text-slate-300 font-mono flex items-center gap-1 bg-slate-900/60 px-2 py-1 rounded-sm border border-white/10 flex-shrink-0">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      <span>WB, India</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Pair Attached Below Full Image */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="bg-slate-900 text-white p-3.5 rounded-sm shadow-xs flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-black tracking-tight leading-none">20+</div>
                    <div className="text-[9px] uppercase tracking-widest opacity-70 font-semibold mt-1">Years Experience</div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-blue-400">
                    <Award className="w-4 h-4" />
                  </div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-sm shadow-xs flex items-center justify-between">
                  <div>
                    <div className="text-xl font-black text-blue-600 tracking-tight leading-none">B.COM (H)</div>
                    <div className="text-[9px] uppercase tracking-widest text-slate-600 font-bold mt-1">Calcutta University</div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
              </div>

            </div>

            {/* Core Expertise & AI Fusion Hub Card */}
            <div className="bg-white border border-slate-200 p-5 rounded-sm shadow-sm space-y-4">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-sm bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest">
                      CORE EXPERTISE &amp; AI
                    </h3>
                    <div className="text-[10px] text-blue-600 font-bold">
                      Saumya Sur Practice Hub
                    </div>
                  </div>
                </div>

                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Active
                </span>
              </div>

              {/* Tab Selector */}
              <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 rounded-sm border border-slate-200">
                <button
                  onClick={() => setActiveTab('synergy')}
                  className={`py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                    activeTab === 'synergy'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Synergy
                </button>
                <button
                  onClick={() => setActiveTab('finance')}
                  className={`py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                    activeTab === 'finance'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Tax &amp; A/C
                </button>
                <button
                  onClick={() => setActiveTab('ai')}
                  className={`py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                    activeTab === 'ai'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  AI &amp; Ads
                </button>
              </div>

              {/* Dynamic Content Area */}
              {activeTab === 'synergy' && (
                <div className="space-y-3">
                  <div className="space-y-1.5">
                    <h4 className="text-[11px] font-bold text-blue-600 uppercase">Accounting &amp; Taxation</h4>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-800 text-[10px] font-medium rounded-sm">Financial Accounts</span>
                      <span className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-800 text-[10px] font-medium rounded-sm">GST Compliance</span>
                      <span className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-800 text-[10px] font-medium rounded-sm">Audit Support</span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-[11px] font-bold text-blue-600 uppercase">AI &amp; Digital Workflow</h4>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 bg-blue-50 border border-blue-100 text-blue-800 text-[10px] font-medium rounded-sm">AI Document Ingestion</span>
                      <span className="px-2.5 py-1 bg-blue-50 border border-blue-100 text-blue-800 text-[10px] font-medium rounded-sm">Digital Ad Creation</span>
                      <span className="px-2.5 py-1 bg-blue-50 border border-blue-100 text-blue-800 text-[10px] font-medium rounded-sm">AI Visuals</span>
                    </div>
                  </div>

                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-sm text-center">
                    <p className="text-xs text-slate-700 font-medium">
                      “Classical financial discipline meets modern machine intelligence.”
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'finance' && (
                <div className="space-y-2.5">
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-sm space-y-1">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                      <span>GST &amp; Direct Tax Filings</span>
                      <span className="text-blue-600 font-mono">GSTR 1/3B/9</span>
                    </div>
                    <p className="text-[11px] text-slate-600">
                      Flawless ITC 2B reconciliations, vendor ledger audit, and timely quarterly TDS/ITR filings.
                    </p>
                  </div>

                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-sm space-y-1">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                      <span>Tally Prime &amp; ERP Accounting</span>
                      <span className="text-emerald-700 font-mono font-bold">Expert Master</span>
                    </div>
                    <p className="text-[11px] text-slate-600">
                      Trial balance, computerized ledger maintenance, P&amp;L finalization, and balance sheets.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'ai' && (
                <div className="space-y-2.5">
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-sm space-y-1">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                      <span>SAUMYA@DIGITAL Ad Creatives</span>
                      <span className="text-blue-600 font-mono">High ROI</span>
                    </div>
                    <p className="text-[11px] text-slate-600">
                      Midjourney, DALL-E, and Canva-driven social media ads &amp; high-converting sales copies.
                    </p>
                  </div>

                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-sm space-y-1">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                      <span>AI Document OCR &amp; Prompts</span>
                      <span className="text-emerald-700 font-mono font-bold">Automated</span>
                    </div>
                    <p className="text-[11px] text-slate-600">
                      Extract invoice data in seconds and automate variance detection using custom prompt engines.
                    </p>
                  </div>
                </div>
              )}

              {/* Footer row inside card */}
              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-semibold text-slate-700">Kolkata &amp; Dankuni, WB</span>
                <button
                  onClick={() => scrollTo('contact')}
                  className="text-blue-600 hover:text-blue-800 font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                >
                  <span>Connect Directly</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

