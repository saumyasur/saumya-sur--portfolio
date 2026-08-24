import React, { useState } from 'react';
import { Laptop, FileSpreadsheet, Cpu, ShieldCheck, Megaphone, Sparkles, ArrowRight, CheckCircle2, X } from 'lucide-react';
import { SERVICES_LIST } from '../data/servicesData';
import { ServiceItem } from '../types';
import { GlowCard } from './GlowCard';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-blue-600" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5 text-slate-900" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-slate-900" />;
      case 'Megaphone':
        return <Megaphone className="w-5 h-5 text-blue-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-slate-900" />;
      default:
        return <Laptop className="w-5 h-5 text-blue-600" />;
    }
  };

  const handleInquire = (serviceTitle: string) => {
    setSelectedService(null);
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const yOffset = -80;
      const y = contactEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Wireframe 05: WHAT I DO */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-bold uppercase tracking-widest text-blue-700">
            <span>05</span> • <span>Core Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight uppercase">
            WHAT I DO
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            From bedrock computerized accounting and statutory tax filings to AI-automated workflows and high-converting digital ads.
          </p>
        </div>

        {/* 6 Services Grid (2 rows of 3 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service) => (
            <GlowCard
              key={service.id}
              id={`service-card-${service.id}`}
              innerClassName="p-6 sm:p-7 flex flex-col justify-between shadow-xs"
            >
              <div>
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-sm bg-slate-50 border border-slate-200 flex items-center justify-center">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[10px] font-bold text-slate-700 uppercase tracking-wider border border-slate-200">
                      {service.tag}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {service.number}
                    </span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-heading font-bold text-slate-900 uppercase tracking-tight mb-2.5 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {service.shortDesc}
                </p>

                {/* Mini Deliverables Checklist */}
                <div className="space-y-2 mb-5 border-t border-slate-100 pt-4">
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-bold text-slate-700 hover:text-blue-600 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Detailed Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleInquire(service.title)}
                  className="px-3.5 py-1.5 rounded-sm bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xs"
                >
                  Inquire
                </button>
              </div>

            </GlowCard>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-2xl space-y-6 text-left">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-blue-50 border border-blue-100 flex items-center justify-center">
                  {getServiceIcon(selectedService.iconName)}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-blue-600 font-bold uppercase tracking-widest">
                    Service {selectedService.number} • {selectedService.tag}
                  </span>
                  <h3 className="text-xl font-heading font-black text-slate-900 uppercase">
                    {selectedService.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-2 rounded-md bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Full Description */}
            <p className="text-sm text-slate-600 leading-relaxed">
              {selectedService.fullDesc}
            </p>

            {/* Full Deliverables List */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Key Deliverables &amp; Outcomes
              </h4>
              <div className="space-y-2">
                {selectedService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-sm bg-slate-50 border border-slate-200 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Stack */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Platforms &amp; Tools Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.tools.map((tool, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-sm bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Action */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setSelectedService(null)}
                className="text-xs font-bold text-slate-500 hover:text-slate-900 uppercase tracking-wider"
              >
                Close
              </button>
              <button
                onClick={() => handleInquire(selectedService.title)}
                className="px-5 py-2.5 rounded-sm bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-xs"
              >
                Book This Service
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
