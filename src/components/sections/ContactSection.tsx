'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { personalInfo } from '@/data/content';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const { lang, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Trigger celebratory confetti effect
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.8 },
          });
        } catch {
          // ignore if canvas-confetti is not loaded
        }
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage(
        lang === 'en'
          ? 'Network error. Please try sending via direct email instead.'
          : 'خطأ في الاتصال. يرجى التواصل عبر البريد الإلكتروني المباشر.'
      );
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? '07 // GET IN TOUCH' : '07 // تواصل والتعاون'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'en' ? 'Initiate a Conversation' : 'ابدأ المحادثة والتعاون'}
          </h2>
          <p className="max-w-xl text-zinc-400 text-sm mt-3">
            {lang === 'en'
              ? 'Have an upcoming project, backend architecture need, or technical engineering role? Let’s connect.'
              : 'هل لديك مشروع قادم، أو استشارة معمارية برمجية، أو فرصة عمل تقنية؟ يسعدني التواصل معك.'}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-4" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-[#0d101a]/90 border border-white/[0.08] shadow-xl">
              <h3 className="text-lg font-bold text-white mb-6">
                {lang === 'en' ? 'Direct Information' : 'بيانات التواصل المباشرة'}
              </h3>

              <div className="space-y-4">
                {/* Email with copy button */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                    <div className="truncate">
                      <span className="text-[10px] uppercase font-mono text-zinc-500 block">
                        {lang === 'en' ? 'Primary Email' : 'البريد الإلكتروني'}
                      </span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs text-zinc-200 hover:text-cyan-400 font-mono transition-colors truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 hover:text-white transition-colors shrink-0"
                    title={lang === 'en' ? 'Copy email' : 'نسخ البريد'}
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase font-mono text-zinc-500 block">
                      {lang === 'en' ? 'Mobile / WhatsApp' : 'الهاتف / واتساب'}
                    </span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-xs text-zinc-200 hover:text-emerald-400 font-mono transition-colors"
                      dir="ltr"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-purple-400 shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase font-mono text-zinc-500 block">
                      {lang === 'en' ? 'Location' : 'الموقع'}
                    </span>
                    <span className="text-xs text-zinc-200">
                      {t(personalInfo.location)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Profiles */}
              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <span className="text-[11px] uppercase font-mono text-zinc-400 block mb-3">
                  {lang === 'en' ? 'Verified Profiles' : 'الحسابات المهنية'}
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-zinc-300 hover:text-white text-xs font-mono transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-zinc-300 hover:text-white text-xs font-mono transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-zinc-200" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Functional Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-[#0d101a]/95 border border-white/[0.08] shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2">
                {lang === 'en' ? 'Send a Direct Message' : 'إرسال رسالة مباشرة'}
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                {lang === 'en'
                  ? 'All inquiries are validated and delivered straight to my primary inbox.'
                  : 'تتم معالجة الرسائل والتحقق من صحتها وتصل مباشرة إلى بريدي الإلكتروني.'}
              </p>

              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs flex items-start gap-2.5 mb-6 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-emerald-200">
                      {lang === 'en' ? 'Message received successfully!' : 'تم استلام رسالتك بنجاح!'}
                    </p>
                    <p className="text-[11px] mt-0.5 text-emerald-400">
                      {lang === 'en'
                        ? 'Thank you for reaching out. I will review your inquiry and get back to you promptly.'
                        : 'شكراً لتواصلك. سأقوم بالرد عليك في أقرب وقت ممكن.'}
                    </p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs flex items-center gap-2.5 mb-6 animate-in fade-in">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      {lang === 'en' ? 'Full Name *' : 'الاسم الكامل *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={lang === 'en' ? 'e.g. Alex Morgan' : 'مثال: أحمد علي'}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-cyan-500/60 focus:outline-none text-white text-xs transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      {lang === 'en' ? 'Email Address *' : 'البريد الإلكتروني *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@domain.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-cyan-500/60 focus:outline-none text-white text-xs transition-colors"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    {lang === 'en' ? 'Subject' : 'الموضوع'}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={lang === 'en' ? 'Project Architecture / Job Opportunity' : 'مشروع جديد / فرصة عمل'}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-cyan-500/60 focus:outline-none text-white text-xs transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    {lang === 'en' ? 'Your Message *' : 'رسالتك *'}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={lang === 'en' ? 'Describe your project or inquiry...' : 'اكتب تفاصيل طلبك أو مشروعك هنا...'}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-cyan-500/60 focus:outline-none text-white text-xs transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3 px-6 rounded-xl bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 text-black font-semibold text-xs transition-all shadow-md shadow-cyan-400/20 flex items-center justify-center gap-2 cursor-pointer font-sans"
                >
                  {status === 'loading' ? (
                    <span>{lang === 'en' ? 'Processing...' : 'جاري الإرسال...'}</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 rtl:rotate-180" />
                      <span>{lang === 'en' ? 'Send Message' : 'إرسال الرسالة'}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
