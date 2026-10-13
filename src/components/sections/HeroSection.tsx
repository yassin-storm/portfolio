'use client';

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { personalInfo } from '@/data/content';
import { ArrowDown, Code2, ShieldCheck, Database, FileText, ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';

export default function HeroSection() {
  const { lang, t } = useLanguage();
  const heroRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.4'
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, scale: 0.95, y: 15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.7 },
          '-=0.4'
        )
        .fromTo(
          statsRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.4'
        );
    }, heroRef);

    return () => ctx.revert();
  }, [lang]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Status Pill Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wide mb-6 shadow-inner"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="font-medium">
            {lang === 'en'
              ? 'Available for Full-Stack & Backend Engineering Roles'
              : 'متاح للعمل في مشاريع هندسة وتطوير النظم والواجهات'}
          </span>
        </div>

        {/* Main Headline */}
        <h1
          ref={headlineRef}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]"
        >
          {lang === 'en' ? (
            <>
              Architecting <span className="text-gradient-cyan">Scalable Backends</span> <br className="hidden sm:inline" />
              & Modern Full-Stack Platforms
            </>
          ) : (
            <>
              تصميم وتطوير <span className="text-gradient-cyan">الأنظمة الخلفية السحابية</span> <br className="hidden sm:inline" />
              والمنصات الرقمية المتكاملة
            </>
          )}
        </h1>

        {/* Subtitle / Bio */}
        <p
          ref={descRef}
          className="max-w-2xl text-base sm:text-lg text-zinc-400 mb-10 leading-relaxed font-normal"
        >
          {lang === 'en' ? (
            <>
              I am <strong className="text-zinc-100 font-semibold">{t(personalInfo.name)}</strong>, a MERN stack developer and software engineer specializing in resilient Node.js backends, high-throughput REST APIs, secure authentication, and production web applications.
            </>
          ) : (
            <>
              أنا <strong className="text-zinc-100 font-semibold">{t(personalInfo.name)}</strong>، مهندس ومطور MERN متخصص في بناء النظم الخلفية المتماسكة باستخدام Node.js، وواجهات RESTful عالية الأداء، وهياكل قواعد البيانات، وتطبيقات الويب الحديثة.
            </>
          )}
        </p>

        {/* Action CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="px-7 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-400/25 flex items-center gap-2 group cursor-pointer"
          >
            <span>{lang === 'en' ? 'Explore Featured Work' : 'استعراض المشاريع المنجزة'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </a>

          <a
            href="#contact"
            className="px-7 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] text-white border border-white/[0.1] hover:border-cyan-500/40 font-medium text-sm transition-all duration-200 backdrop-blur-sm cursor-pointer"
          >
            {lang === 'en' ? 'Get In Touch' : 'تواصل معي'}
          </a>

          <a
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 border border-zinc-700/50 hover:text-white font-mono text-xs flex items-center gap-1.5 transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>{lang === 'en' ? 'CV (PDF)' : 'السيرة الذاتية'}</span>
          </a>
        </div>

        {/* Key Real Tech Highlights (Verified Data) */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl pt-6 border-t border-white/[0.07]"
        >
          <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <Code2 className="w-5 h-5 text-cyan-400 mb-1.5" />
            <span className="text-xl font-bold font-mono text-white">Node / Express</span>
            <span className="text-[11px] text-zinc-400 font-sans mt-0.5">
              {lang === 'en' ? 'Production Architecture' : 'معمارية إنتاجية قوية'}
            </span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <Database className="w-5 h-5 text-emerald-400 mb-1.5" />
            <span className="text-xl font-bold font-mono text-white">MongoDB & NoSQL</span>
            <span className="text-[11px] text-zinc-400 font-sans mt-0.5">
              {lang === 'en' ? 'Optimized Schemas' : 'فهارس ونماذج محسنة'}
            </span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <ShieldCheck className="w-5 h-5 text-purple-400 mb-1.5" />
            <span className="text-xl font-bold font-mono text-white">JWT & Zero-Trust</span>
            <span className="text-[11px] text-zinc-400 font-sans mt-0.5">
              {lang === 'en' ? 'Strict RBAC Security' : 'صلاحيات وأمان متقدم'}
            </span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <Sparkles className="w-5 h-5 text-amber-400 mb-1.5" />
            <span className="text-xl font-bold font-mono text-white">97.8 / 100</span>
            <span className="text-[11px] text-zinc-400 font-sans mt-0.5">
              {lang === 'en' ? 'SEF Backend Honors' : 'مرتبة الشرف بالدبلومة'}
            </span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-500 hover:text-cyan-400 transition-colors cursor-pointer group"
        aria-label="Scroll to about section"
      >
        <span className="text-[10px] uppercase font-mono tracking-widest group-hover:text-cyan-400">
          {lang === 'en' ? 'Scroll' : 'تمرير'}
        </span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-cyan-400/80" />
      </a>
    </section>
  );
}
