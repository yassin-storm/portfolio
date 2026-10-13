'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { experienceData } from '@/data/content';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function ExperienceSection() {
  const { lang, t } = useLanguage();

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-white/[0.01]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? '04 // CAREER TRACK' : '04 // المسار المهني والخبرات'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'en' ? 'Hands-on Experience & Milestones' : 'الخبرات العملية والإنجازات'}
          </h2>
          <p className="max-w-xl text-zinc-400 text-sm mt-3">
            {lang === 'en'
              ? 'Documented production roles, freelance deliverables, and academic mentoring.'
              : 'أدوار عملية موثقة ومشاريع إنتاجية وتدريب أكاديمي معتمد.'}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-4" />
        </div>

        {/* Timeline Items */}
        <div className="relative border-l border-white/[0.1] rtl:border-l-0 rtl:border-r space-y-10 pl-6 rtl:pl-0 rtl:pr-6 ml-4 rtl:ml-0 rtl:mr-4">
          {experienceData.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] rtl:-left-auto rtl:-right-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#08090d] border-2 border-cyan-400 group-hover:scale-125 transition-transform shadow-md shadow-cyan-400/50" />

              {/* Card Container */}
              <div className="p-6 rounded-2xl bg-[#0d101a]/90 border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 shadow-lg">
                {/* Header Info */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {t(item.role)}
                    </h3>
                    <p className="text-sm font-medium text-cyan-400/90 font-mono">
                      {t(item.company)}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-zinc-400 font-mono">
                    <span className="flex items-center gap-1 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.06]">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                      {t(item.period)}
                    </span>
                    <span className="flex items-center gap-1 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.06]">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                      {t(item.location)}
                    </span>
                  </div>
                </div>

                {/* Achievements */}
                <ul className="space-y-2 mb-4 pt-2">
                  {item.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{t(ach)}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                  {item.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md text-[10px] font-mono text-zinc-400 bg-white/[0.03] border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
