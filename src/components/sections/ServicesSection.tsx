'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { servicesData } from '@/data/content';
import { Wrench, Server, Layout, CreditCard, Database, Check } from 'lucide-react';

export default function ServicesSection() {
  const { lang, t } = useLanguage();

  const getServiceIcon = (icon: string) => {
    switch (icon) {
      case 'Server':
        return <Server className="w-5 h-5 text-cyan-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-blue-400" />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5 text-purple-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      default:
        return <Wrench className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? '06 // CORE SERVICES' : '06 // الخدمات والحلول البرمجية'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'en' ? 'Specialized Engineering Services' : 'خدمات التطوير والهندسة البرمجية'}
          </h2>
          <p className="max-w-xl text-zinc-400 text-sm mt-3">
            {lang === 'en'
              ? 'Capabilities backed by real codebase experience—ready for production deployment.'
              : 'حلول عملية مستندة إلى خبرة حقيقية في بناء ونشر المنتجات البرمجية.'}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              className="p-7 rounded-2xl bg-[#0d101a]/90 border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 shadow-lg relative group"
            >
              <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-white/[0.06]">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] group-hover:scale-105 transition-transform">
                  {getServiceIcon(svc.icon)}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {t(svc.title)}
                </h3>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed mb-6">
                {t(svc.description)}
              </p>

              <div className="space-y-2 pt-2 border-t border-white/[0.04]">
                {svc.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-zinc-400">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{t(feat)}</span>
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
