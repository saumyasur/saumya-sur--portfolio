import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/siteData';
import { MonogramBadge } from './MonogramBadge';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active section detection
      const sections = ['home', 'about', 'services', 'skills', 'timeline', 'ai-future', 'portfolio', 'philosophy', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'timeline', label: 'Experience', href: '#timeline' },
    { id: 'ai-future', label: 'AI Future', href: '#ai-future' },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 focus:outline-none"
            id="nav-brand-link"
          >
            <MonogramBadge size="sm" styleVariant="interlocking-luxury" />
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
              <span className="font-heading font-black text-lg sm:text-xl tracking-tighter uppercase text-slate-900 group-hover:text-blue-600 transition-colors">
                SAUMYA SUR
              </span>
              <span className="text-[10px] bg-slate-100 px-2 py-0.5 border border-slate-200 rounded-full font-bold text-slate-600 uppercase tracking-widest hidden sm:inline-block">
                SAUMYA@DIGITAL
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-[11px] font-bold uppercase tracking-wider text-slate-600" id="desktop-nav-menu">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  id={`nav-link-${link.id}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-colors pb-0.5 ${
                    isActive
                      ? 'text-blue-600 border-b-2 border-blue-600 font-extrabold'
                      : 'hover:text-blue-600'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              id="nav-connect-btn"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-sm bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider uppercase shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>LET'S CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              aria-label="Toggle navigation menu"
              className="p-2 rounded-md bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className="lg:hidden mt-3 pt-3 pb-5 border border-slate-200 bg-white rounded-xl p-4 shadow-xl space-y-2 animate-fadeIn"
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black">
                Navigation
              </span>
              <span className="text-[11px] text-blue-600 font-bold flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Kolkata &amp; Dankuni, WB
              </span>
            </div>

            <div className="grid grid-cols-2 gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    id={`mobile-nav-link-${link.id}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-2.5 rounded-lg text-xs uppercase tracking-wider font-bold transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 border border-blue-100 font-extrabold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                  </a>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 mt-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full py-3 rounded-sm bg-blue-600 hover:bg-blue-700 text-white font-bold text-center text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
                id="mobile-nav-connect-action"
              >
                <span>LET'S CONNECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
