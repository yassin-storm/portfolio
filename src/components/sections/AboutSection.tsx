'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { personalInfo } from '@/data/content';
import { Terminal, CheckCircle2, User, HeartHandshake, Compass } from 'lucide-react';

export default function AboutSection() {
  const { lang, t } = useLanguage();

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? '01 // BACKGROUND & IDENTITY' : '01 // نبذة وهوية'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'en' ? 'Engineering Philosophy & Story' : 'فلسفة التطوير والمسيرة التقنية'}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-4" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-[#0e111a]/90 border border-white/[0.08] backdrop-blur-xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span>{lang === 'en' ? 'Who I Am' : 'من أنا'}</span>
              </h3>

              <p className="text-zinc-300 leading-relaxed mb-6 font-normal">
                {t(personalInfo.bio)}
              </p>

              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 my-6">
                <span className="text-xs font-mono text-cyan-300 block mb-1.5 uppercase tracking-wider">
                  {lang === 'en' ? 'Core Philosophy' : 'فلسفة العمل'}
                </span>
                <p className="text-sm italic text-zinc-300 leading-relaxed">
                  &ldquo;{t(personalInfo.philosophy)}&rdquo;
                </p>
              </div>

              {/* Verified Pillars */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-400">
                  {lang === 'en' ? 'Verified Pillars' : 'ركائز العمل الأساسية'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{lang === 'en' ? 'Decoupled Layered Architecture' : 'بنية برمجية طبقية مفصولة'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{lang === 'en' ? 'Zero-Trust Role-Based Auth' : 'توثيق أمني صارم للأدوار'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{lang === 'en' ? 'Transactional Consistency' : 'اتساق المعاملات وحماية الدفع'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{lang === 'en' ? 'Strict Automated Testing' : 'اختبارات برمجية دقيقة'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Metrics & Facts */}
          <div className="lg:col-span-5 space-y-4">
            {/* Fact Card 1: AFAQ Mentorship */}
            <div className="p-6 rounded-2xl bg-[#0e111a]/80 border border-white/[0.08] backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white mb-1">
                    {lang === 'en' ? 'Academic Instructor & Mentor' : 'محاضر وموجه أكاديمي'}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {lang === 'en'
                      ? 'Academic instructor and mentor at AFAQ Training Center, teaching backend engineering, databases, software architectures, and code reviews.'
                      : 'محاضر وموجه أكاديمي بمركز آفاق لتدريب وشرح مواد هندسة الخوادم وهياكل البيانات وتوجيه مشاريع الطلاب والتطوير المهني.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Fact Card 2: Academic & Professional Status */}
            <div className="p-6 rounded-2xl bg-[#0e111a]/80 border border-white/[0.08] backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <Compass className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white mb-1">
                    {lang === 'en' ? 'Computers & AI (Senior Year)' : 'حاسبات ومعلومات (سنة التخرج)'}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {lang === 'en'
                      ? 'Senior year student in Faculty of Computers & Artificial Intelligence (AI Major), paired with an intensive Backend Diploma honors (97.8/100) from SEF Academy.'
                      : 'طالب بالسنة النهائية بكلية الحاسبات والمعلومات قسم ذكاء اصطناعي، مع إتمام دبلومة هندسة النظم الخلفية بمرتبة الشرف بمعدل (97.8/100).'}
                  </p>
                </div>
              </div>
            </div>

            {/* Fact Card 3: Location & Timezone */}
            <div className="p-6 rounded-2xl bg-[#0e111a]/80 border border-white/[0.08] backdrop-blur-xl font-mono text-xs">
              <div className="flex justify-between items-center py-1.5 border-b border-white/[0.06]">
                <span className="text-zinc-500">{lang === 'en' ? 'Location' : 'المقر'}</span>
                <span className="text-zinc-200 font-medium">{t(personalInfo.location)}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-white/[0.06]">
                <span className="text-zinc-500">{lang === 'en' ? 'Timezone' : 'المنطقة الزمنية'}</span>
                <span className="text-cyan-400 font-medium">UTC+2 / UTC+3 (Egypt)</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-white/[0.06]">
                <span className="text-zinc-500">{lang === 'en' ? 'Languages' : 'اللغات'}</span>
                <span className="text-zinc-200 font-medium">
                  {lang === 'en' ? 'Arabic (Native) / English (Professional)' : 'العربية (الأم) / الإنجليزية (متقدم)'}
                </span>
              </div>
              <div className="flex justify-between items-center pt-1.5">
                <span className="text-zinc-500">{lang === 'en' ? 'Availability' : 'التفرغ'}</span>
                <span className="text-emerald-400 font-medium">
                  {lang === 'en' ? 'Freelance & Roles' : 'مشاريع حرة ووظائف'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
