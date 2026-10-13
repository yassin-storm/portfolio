'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { projectsData } from '@/data/content';
import { Project } from '@/data/types';
import { FolderGit2, ExternalLink, CheckCircle2, AlertCircle, X, Layers } from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';

export default function ProjectsSection() {
  const { lang, t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? '03 // SELECTED PORTFOLIO' : '03 // سابقة الأعمال والمشاريع'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'en' ? 'Featured Production Systems' : 'المشاريع والأنظمة المنفذة'}
          </h2>
          <p className="max-w-xl text-zinc-400 text-sm mt-3">
            {lang === 'en'
              ? 'Real-world software architectures, full-stack platforms, and backend services built with strict security and performance standards.'
              : 'مشاريع حقيقية مبنية بمعايير إنتاجية صارمة في الأمان والأداء وسلاسة تجربة الاستخدام.'}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#0d101a]/95 border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between hover:shadow-cyan-500/10"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative h-52 w-full bg-zinc-900 overflow-hidden border-b border-white/[0.06]">
                  <Image
                    src={project.image}
                    alt={t(project.title)}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d101a] via-transparent to-transparent opacity-80" />

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-black/60 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                      {project.status === 'completed'
                        ? (lang === 'en' ? 'Completed & Verified' : 'مكتمل ومُختبر')
                        : (lang === 'en' ? 'Under Active Dev' : 'قيد التطوير')}
                    </span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-zinc-300 bg-white/10 backdrop-blur-md border border-white/10">
                      {t(project.category)}
                    </span>
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                    {t(project.title)}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                    {t(project.shortDesc)}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 5).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-cyan-200 bg-cyan-950/40 border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-1 rounded-md text-[10px] font-mono text-zinc-400 bg-white/[0.04] border border-white/[0.06]">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-2 border-t border-white/[0.06] flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-2 text-xs font-semibold rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm shadow-cyan-400/20"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Case Study' : 'تفاصيل المشروع'}</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] text-zinc-300 hover:text-white border border-white/[0.08] transition-colors"
                      title={lang === 'en' ? 'View Source on GitHub' : 'الكود المصدري على GitHub'}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] text-zinc-300 hover:text-white border border-white/[0.08] transition-colors"
                      title={lang === 'en' ? 'Visit Live Preview' : 'المعاينة المباشرة'}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0c0f18] border border-white/[0.12] p-6 sm:p-8 shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 rtl:right-auto rtl:left-5 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                {t(selectedProject.category)}
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">
                {t(selectedProject.title)}
              </h3>
            </div>

            {/* Problem & Solution Breakdown */}
            <div className="space-y-6 text-sm">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <h4 className="text-xs font-mono uppercase text-zinc-400 mb-1 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  <span>{lang === 'en' ? 'Challenge / Problem Statement' : 'التحدي والمشكلة'}</span>
                </h4>
                <p className="text-zinc-300 leading-relaxed">
                  {t(selectedProject.problem)}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20">
                <h4 className="text-xs font-mono uppercase text-cyan-300 mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>{lang === 'en' ? 'Engineered Solution & Architecture' : 'الحل الهندسي والمعمارية'}</span>
                </h4>
                <p className="text-zinc-300 leading-relaxed">
                  {t(selectedProject.solution)}
                </p>
              </div>

              {/* Key Features List */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                  {lang === 'en' ? 'Key Technical Implementations' : 'أبرز الإنجازات التقنية'}
                </h4>
                <ul className="space-y-2">
                  {selectedProject.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-zinc-300 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{t(feat)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5">
                  {lang === 'en' ? 'Technology Stack' : 'التقنيات المستخدمة'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-xs font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 text-xs font-medium transition-colors"
              >
                {lang === 'en' ? 'Close Window' : 'إغلاق'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
