import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, Copy, Check, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/siteData';
import { ContactFormData } from '../types';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: initialService || 'Computerized Accounting',
    message: ''
  });

  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicesList = [
    'Computerized Accounting',
    'Accounts & Taxation (GST / TDS / ITR)',
    'AI-Assisted Accounting & OCR Automation',
    'Tax & Financial Advisory',
    'Digital Ad Creation (SAUMYA@DIGITAL)',
    'AI Digital Visual Creation & Marketing',
    'General Professional Consultation'
  ];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // safe fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Create prefilled mailto as direct bridge
      const mailtoSubject = encodeURIComponent(`Consultation Inquiry: ${formData.subject || formData.service} - ${formData.name}`);
      const mailtoBody = encodeURIComponent(
        `Hello Saumya,\n\nI am contacting you regarding your services.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService of Interest: ${formData.service}\n\nMessage:\n${formData.message}\n\nThank you!`
      );
      
      const mailtoUrl = `mailto:${PERSONAL_INFO.primaryEmail}?cc=${PERSONAL_INFO.altEmail}&subject=${mailtoSubject}&body=${mailtoBody}`;
      window.open(mailtoUrl, '_blank');
    }, 600);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Wireframe 11: LET'S CONNECT */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-bold uppercase tracking-widest text-blue-700">
            <span>11</span> • <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight uppercase">
            LET'S CONNECT
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Ready to streamline your accounting, optimize tax filings, or launch standout AI-driven digital ad campaigns? Let's discuss your requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column matching Wireframe 11 Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-sm bg-[#f8fafc] border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
              
              <div>
                <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest block mb-1 font-bold">
                  Professional Practice
                </span>
                <h3 className="text-2xl font-heading font-black text-slate-900 uppercase tracking-tight">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mt-1">
                  {PERSONAL_INFO.tagline}
                </p>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-0.5">
                  {PERSONAL_INFO.subTagline}
                </p>
              </div>

              {/* Location & Practice Area */}
              <div className="p-4 rounded-sm bg-white border border-slate-200 space-y-3 shadow-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-sm bg-blue-50 border border-blue-100 text-blue-600 flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                      Location &amp; Serving Region
                    </span>
                    <p className="text-xs text-slate-700 font-semibold mt-0.5">
                      Kolkata &amp; Dankuni, West Bengal, India
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Available for on-premise consultation across Greater Kolkata &amp; remote online advisory pan-India.
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Direct Contacts */}
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                  Direct Phone &amp; Email Contacts:
                </span>

                {/* Direct Phone / WhatsApp Contact */}
                <div className="flex items-center justify-between p-3 rounded-sm bg-white border border-slate-200 hover:border-blue-300 transition-colors shadow-xs">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <div className="p-1 rounded-sm bg-emerald-50 text-emerald-600 flex-shrink-0">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col">
                      <a
                        href={`tel:${PERSONAL_INFO.phone}`}
                        className="text-xs sm:text-sm font-mono text-slate-900 hover:text-blue-600 truncate font-bold"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                      <span className="text-[10px] text-slate-400 font-medium">Direct Call &amp; WhatsApp</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <a
                      href={`https://wa.me/918918329765?text=${encodeURIComponent('Hello Saumya, I am contacting you regarding your accounting and tax consultation services.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 rounded-sm bg-emerald-500 hover:bg-emerald-600 text-white text-[11px] font-bold flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
                      title="Chat on WhatsApp"
                    >
                      WhatsApp
                    </a>
                    <button
                      onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                      className="p-1.5 rounded-sm bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs flex items-center gap-1 cursor-pointer flex-shrink-0"
                      title="Copy Phone Number"
                    >
                      {copiedItem === 'phone' ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Primary Email */}
                <div className="flex items-center justify-between p-3 rounded-sm bg-white border border-slate-200 hover:border-blue-300 transition-colors shadow-xs">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <a
                      href={`mailto:${PERSONAL_INFO.primaryEmail}`}
                      className="text-xs sm:text-sm font-mono text-slate-800 hover:text-blue-600 truncate font-semibold"
                    >
                      {PERSONAL_INFO.primaryEmail}
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.primaryEmail, 'primary-email')}
                    className="p-1.5 rounded-sm bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs flex items-center gap-1 cursor-pointer flex-shrink-0"
                    title="Copy Email"
                  >
                    {copiedItem === 'primary-email' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>


              </div>

              {/* Fast Response Promise */}
              <div className="p-3.5 rounded-sm bg-blue-50 border border-blue-100 text-xs text-blue-800 flex items-center gap-2.5 font-medium">
                <Sparkles className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Responses typically within 24 hours on all tax &amp; commercial inquiries.</span>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form matching Wireframe 11 */}
          <div className="lg:col-span-7">
            <div className="rounded-sm bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-heading font-black text-slate-900 uppercase">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fill out the form below to receive a personalized consultation proposal.
                  </p>
                </div>
                <span className="text-xs font-mono text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-sm border border-blue-100">
                  24h Response
                </span>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-heading font-black text-slate-900 uppercase">
                    Thank You, {formData.name}!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Your inquiry has been compiled and the email client has been prepared. Saumya Sur will review your details shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        service: 'Computerized Accounting',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-sm bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Ghosh"
                        className="w-full px-3.5 py-2.5 rounded-sm bg-[#f8fafc] border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-slate-900 text-sm placeholder:text-slate-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-sm bg-[#f8fafc] border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-slate-900 text-sm placeholder:text-slate-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone & Service Selector */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-phone" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98300 XXXXX"
                        className="w-full px-3.5 py-2.5 rounded-sm bg-[#f8fafc] border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-slate-900 text-sm placeholder:text-slate-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-service" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Area of Interest *
                      </label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-sm bg-[#f8fafc] border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-slate-900 text-sm transition-colors cursor-pointer"
                      >
                        {servicesList.map((srv, idx) => (
                          <option key={idx} value={srv} className="bg-white text-slate-900">
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. GST Return Filing & Ledger Audit for FY 2025-26"
                      className="w-full px-3.5 py-2.5 rounded-sm bg-[#f8fafc] border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-slate-900 text-sm placeholder:text-slate-400 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Message / Project Details *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your business, bookkeeping needs, tax questions, or digital ad requirements..."
                      className="w-full px-3.5 py-2.5 rounded-sm bg-[#f8fafc] border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-slate-900 text-sm placeholder:text-slate-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Wireframe Button: [ SEND MESSAGE ] */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      id="contact-submit-btn"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-sm bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>PROCESSING...</span>
                      ) : (
                        <>
                          <span>SEND MESSAGE</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
