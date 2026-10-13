'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { skillsData } from '@/data/content';
import { Cpu, Server, Layout, Database, CheckCircle, Shield } from 'lucide-react';

export default function SkillsSection() {
  const { lang, t } = useLanguage();

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'backend':
        return <Server className="w-5 h-5 text-cyan-400" />;
      case 'frontend':
        return <Layout className="w-5 h-5 text-blue-400" />;
      case 'databases':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'devops':
        return <Shield className="w-5 h-5 text-purple-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? '02 // TECHNICAL CAPABILITIES' : '02 // المهارات والتقنيات'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'en' ? 'Verified Skill Stack' : 'الترسانة التقنية المعتمدة'}
          </h2>
          <p className="max-w-xl text-zinc-400 text-sm mt-3">
            {lang === 'en'
              ? 'Categorized by real hands-on production usage, without fabricated percentages or decorative progress bars.'
              : 'مصنفة وفقاً للاستخدام الفعلي والمشاريع الحقيقية، بعيداً عن النسب المئوية الوهمية أو المؤشرات المزيفة.'}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-4" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category) => (
            <div
              key={category.id}
              className="p-7 rounded-2xl bg-[#0d101a]/90 border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 shadow-lg relative group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  {getCategoryIcon(category.id)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {t(category.title)}
                  </h3>
                  <span className="text-[11px] text-zinc-500 font-mono">
                    {category.skills.length} {lang === 'en' ? 'verified competencies' : 'مهارات معتمدة'}
                  </span>
                </div>
              </div>

              {/* Individual Skill Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex flex-col p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="text-xs font-semibold text-zinc-200">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-[10px] text-zinc-400 font-mono mt-1 px-1">
                      {t(skill.level)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
