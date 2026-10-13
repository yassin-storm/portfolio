'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { educationData, certificatesData } from '@/data/content';
import { CertificateItem } from '@/data/types';
import { GraduationCap, Award, Calendar, CheckCircle2, X, ExternalLink, ShieldCheck } from 'lucide-react';

export default function EducationCertificatesSection() {
  const { lang, t } = useLanguage();
  const [activeCert, setActiveCert] = useState<CertificateItem | null>(null);

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? '05 // CREDENTIALS & ACADEMICS' : '05 // التعليم والشهادات'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'en' ? 'Education & Certified Qualifications' : 'المؤهلات الأكاديمية والشهادات'}
          </h2>
          <p className="max-w-xl text-zinc-400 text-sm mt-3">
            {lang === 'en'
              ? 'Accredited university degrees, backend engineering diplomas, and specialized training.'
              : 'مؤهلات جامعية معتمدة ودبلومات تخصصية في هندسة النظم الخلفية.'}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-4" />
        </div>

        {/* Two Columns: Education & Certificates */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Column 1: Academic Degrees */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5 pb-2 border-b border-white/[0.08]">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <span>{lang === 'en' ? 'Academic Education' : 'التعليم الجامعي والدبلومات'}</span>
            </h3>

            {educationData.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-[#0d101a]/90 border border-white/[0.08] hover:border-cyan-500/30 transition-all shadow-md relative"
              >
                {item.grade && (
                  <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                      {lang === 'en' ? `Grade: ${item.grade}` : `المعدل: ${item.grade}`}
                    </span>
                  </div>
                )}

                <h4 className="text-base font-bold text-white mb-1 pr-24 rtl:pr-0 rtl:pl-24">
                  {t(item.degree)}
                </h4>
                <p className="text-xs font-semibold text-cyan-400 font-mono mb-2">
                  {t(item.institution)} • {t(item.location)}
                </p>

                <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 font-mono mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{t(item.period)}</span>
                </div>

                <ul className="space-y-2 pt-2 border-t border-white/[0.05]">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{t(detail)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 2: Certificates & Credentials Gallery */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5 pb-2 border-b border-white/[0.08]">
              <Award className="w-5 h-5 text-cyan-400" />
              <span>{lang === 'en' ? 'Certified Qualifications' : 'الشهادات المعتمدة'}</span>
            </h3>

            <div className="space-y-4">
              {certificatesData.map((cert) => (
                <div
                  key={cert.id}
                  className="p-5 rounded-2xl bg-[#0d101a]/90 border border-white/[0.08] hover:border-cyan-500/40 transition-all shadow-md group cursor-pointer"
                  onClick={() => setActiveCert(cert)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 group-hover:scale-105 transition-transform">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {t(cert.title)}
                        </h4>
                        <p className="text-xs text-zinc-400 font-mono mt-0.5">
                          {t(cert.issuer)} • {cert.date}
                        </p>
                      </div>
                    </div>

                    <button
                      className="text-xs text-cyan-400 hover:text-cyan-300 font-mono flex items-center gap-1 shrink-0 pt-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCert(cert);
                      }}
                    >
                      <span>{lang === 'en' ? 'View' : 'معاينة'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {cert.skills && (
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/[0.05]">
                      {cert.skills.map((s, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono text-zinc-400 bg-white/[0.03]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Preview Modal */}
      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#0c0f18] border border-white/[0.12] p-6 shadow-2xl">
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-4 right-4 rtl:right-auto rtl:left-4 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                  {lang === 'en' ? 'Verified Credential' : 'شهادة موثقة'}
                </span>
                <h3 className="text-base font-bold text-white">
                  {t(activeCert.title)}
                </h3>
              </div>
            </div>

            <div className="space-y-3 text-xs border-y border-white/[0.08] py-4 my-4">
              <div className="flex justify-between">
                <span className="text-zinc-500">{lang === 'en' ? 'Issuing Body' : 'الجهة المصدرة'}:</span>
                <span className="text-zinc-200 font-medium">{t(activeCert.issuer)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">{lang === 'en' ? 'Completion Date' : 'تاريخ الإصدار'}:</span>
                <span className="text-zinc-200 font-mono">{activeCert.date}</span>
              </div>
              {activeCert.credentialId && (
                <div className="flex justify-between">
                  <span className="text-zinc-500">{lang === 'en' ? 'Credential ID' : 'معرف الشهادة'}:</span>
                  <span className="text-cyan-400 font-mono">{activeCert.credentialId}</span>
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setActiveCert(null)}
                className="px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-zinc-300 text-xs"
              >
                {lang === 'en' ? 'Close' : 'إغلاق'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
