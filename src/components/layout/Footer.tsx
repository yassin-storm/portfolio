'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { personalInfo } from '@/data/content';
import { ArrowUp, Terminal } from 'lucide-react';

export default function Footer() {
  const { lang, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#07080c] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Rights */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center">
            <Terminal className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <p className="text-xs font-mono font-bold text-white">
              {t(personalInfo.name)}
            </p>
            <p className="text-[10px] text-zinc-500 font-mono">
              © 2026 — {lang === 'en' ? 'Crafted with Next.js, TypeScript & GSAP' : 'صُمم وطُوّر باستخدام Next.js و TypeScript و GSAP'}
            </p>
          </div>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-zinc-400">
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            {lang === 'en' ? 'About' : 'عني'}
          </a>
          <span>•</span>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">
            {lang === 'en' ? 'Skills' : 'المهارات'}
          </a>
          <span>•</span>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">
            {lang === 'en' ? 'Projects' : 'المشاريع'}
          </a>
          <span>•</span>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">
            {lang === 'en' ? 'Experience' : 'الخبرات'}
          </a>
          <span>•</span>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            {lang === 'en' ? 'Contact' : 'تواصل'}
          </a>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-zinc-400 hover:text-cyan-400 text-xs font-mono transition-all cursor-pointer"
          aria-label="Scroll back to top"
        >
          <span>{lang === 'en' ? 'Back to top' : 'للأعلى'}</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
