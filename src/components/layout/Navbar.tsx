'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { personalInfo } from '@/data/content';
import { Menu, X, Globe, Terminal, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: { en: 'About', ar: 'عني' } },
    { href: '#skills', label: { en: 'Skills', ar: 'المهارات' } },
    { href: '#projects', label: { en: 'Projects', ar: 'المشاريع' } },
    { href: '#experience', label: { en: 'Experience', ar: 'الخبرات' } },
    { href: '#education', label: { en: 'Education & Certs', ar: 'الشهادات والتعليم' } },
    { href: '#services', label: { en: 'Services', ar: 'الخدمات' } },
    { href: '#contact', label: { en: 'Contact', ar: 'تواصل معي' } },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-[#08090d]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/50'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            className="group flex items-center gap-2.5 font-bold tracking-tight text-white hover:text-cyan-400 transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1px] flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0c0e17] rounded-[7px] flex items-center justify-center">
                <Terminal className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-semibold tracking-wider">
                {t(personalInfo.name)}
              </span>
              <span className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase">
                MERN & Backend Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/[0.03] border border-white/[0.07] px-3 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all duration-200"
              >
                {t(link.label)}
              </a>
            ))}
          </nav>

          {/* Right Action buttons: Language switcher & CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-zinc-300 bg-white/[0.04] border border-white/[0.08] hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-pointer"
              title={lang === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'العربية' : 'EN'}</span>
            </button>

            {/* Direct CV Button */}
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-4 py-1.5 text-xs font-medium text-black bg-cyan-400 hover:bg-cyan-300 rounded-full transition-all shadow-md shadow-cyan-400/20 font-sans font-semibold group"
            >
              <span>{lang === 'en' ? 'Resume' : 'السيرة الذاتية'}</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono text-zinc-300 bg-white/[0.05] border border-white/[0.1]"
            >
              <Globe className="w-3 h-3" />
              <span>{lang === 'en' ? 'عربي' : 'EN'}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0c0e17]/95 backdrop-blur-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-cyan-400 py-1.5 transition-colors"
              >
                {t(link.label)}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 px-4 text-xs font-semibold text-black bg-cyan-400 rounded-lg hover:bg-cyan-300"
            >
              {lang === 'en' ? 'Download Full CV (PDF)' : 'تحميل السيرة الذاتية (PDF)'}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
