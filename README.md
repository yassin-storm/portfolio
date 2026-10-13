# Yasseen Karem — Premium Bilingual Developer Portfolio

> **Production-Ready Full-Stack & MERN Engineering Portfolio built with Next.js 16 (App Router), TypeScript, Tailwind CSS, GSAP animations, and bilingual Arabic/English RTL/LTR support.**

---

## 🌟 Overview & Highlights

- **Aesthetic**: Deep charcoal/black cyber-developer theme, cyan/blue subtle accents, restrained glow effects, and interactive canvas constellation background.
- **Bilingual RTL/LTR**: Native Arabic (`dir="rtl"`) with Alexandria typography & English (`dir="ltr"`) with Inter, switchable on-the-fly with persistent user preferences.
- **Verified Facts**: 100% accurate data derived from official resume, university instructor experience at Minia National University, and SEF Academy Backend Diploma honors (97.8/100).
- **Interactive Case Studies**: Detailed modal architectural walkthroughs for featured projects (Problem, Solution, Key Features, Tech Stack).
- **Production Backend Endpoint**: Functional `/api/contact` route with spam protection, payload constraints, and optional Resend email dispatching.
- **SEO & Social Ready**: Dynamic `sitemap.ts`, `robots.txt`, and Open Graph metadata configured.

---

## 🛠️ Tech Stack & Dependencies

| Category | Technology | Purpose |
|---|---|---|
| **Framework** | Next.js 16 (App Router) | High-performance React server and client components |
| **Language** | TypeScript 5 | Strict types and compile-time correctness |
| **Styling** | Tailwind CSS v4 | Responsive utility classes with logical RTL/LTR spacing |
| **Motion** | GSAP 3 (GreenSock) | Timeline-based coordinated entrance animations |
| **Icons** | Lucide React + Custom SVGs | Clean minimalist UI iconography & brand logos |
| **FX & Polish** | Canvas Confetti | Interaction feedback upon contact submission |
| **Deployment** | Vercel Optimized | Turbopack, static page prerendering, and serverless functions |

---

## 📁 Project Architecture

```text
portpholio/
├── public/
│   ├── images/
│   │   ├── yassin-agency.png       # Real screenshot from YASSIN AGENCY platform
│   │   └── programming.png         # Project illustration
│   ├── Yassin_Farouk_CV.pdf        # Verified downloadable Resume
│   └── robots.txt                  # Search engine crawlers config
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/route.ts    # Secure contact message API handler
│   │   ├── globals.css             # Dark theme tokens, scrollbar & ambient glow
│   │   ├── layout.tsx              # Root HTML, bilingual fonts (Alexandria & Inter), SEO
│   │   ├── page.tsx                # Composition of all portfolio sections
│   │   └── sitemap.ts              # Dynamic search engine sitemap
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Sticky glass navbar with language toggle & mobile drawer
│   │   │   └── Footer.tsx          # Verified links and smooth back-to-top interaction
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx     # Animated entrance, CTAs, verified stat badges
│   │   │   ├── AboutSection.tsx    # Professional bio, engineering philosophy, university tutoring
│   │   │   ├── SkillsSection.tsx   # Verified capabilities (no fake progress bars)
│   │   │   ├── ProjectsSection.tsx # Featured cards + deep modal case studies
│   │   │   ├── ExperienceSection.tsx # Production timeline & freelance roles
│   │   │   ├── EducationCertificatesSection.tsx # University & SEF diploma credentials
│   │   │   ├── ServicesSection.tsx # Architecture & backend offerings
│   │   │   └── ContactSection.tsx  # Direct email copy, social links, working form
│   │   └── ui/
│   │       ├── BackgroundGrid.tsx  # Interactive canvas particle constellation
│   │       └── SocialIcons.tsx     # GitHub & LinkedIn vector components
│   ├── context/
│   │   └── LanguageContext.tsx     # Dynamic state & persistent RTL/LTR engine
│   ├── data/
│   │   ├── types.ts                # TypeScript interfaces for structured content
│   │   └── content.ts              # Centralized verified bilingual data repository
│   └── lib/
│       └── utils.ts                # Tailwind class merge utility
├── .env.example                    # Environment variable template
└── package.json
```

---

## 💻 Local Development

### 1. Clone & Install
```bash
git clone <your-repo-url>
cd portpholio
npm install
```

### 2. Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
*(Optional: Provide a free API key from [Resend](https://resend.com) in `RESEND_API_KEY` to forward form submissions to your inbox)*.

### 3. Run Dev Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build & Lint Validation
```bash
npm run lint    # Verifies zero ESLint warnings
npm run build   # Compiles static and serverless artifacts
```

---

## 🚀 Vercel Deployment Guide

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "feat: complete premium bilingual portfolio"
   git remote add origin https://github.com/yassinStrom/portpholio.git
   git branch -M main
   git push -u origin main
   ```
2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in with GitHub.
   - Click **Add New Project** and select `yassinStrom/portpholio`.
   - Next.js settings will be automatically detected (Framework: Next.js, Output: App Router).
3. **Configure Environment Variables** (in Vercel Project Settings > Environment Variables):
   - `CONTACT_EMAIL`: `yasseenkarem747@gmail.com`
   - `RESEND_API_KEY`: *(Optional, from resend.com)*
   - `NEXT_PUBLIC_SITE_URL`: `https://<your-project>.vercel.app`
4. **Deploy**:
   - Click **Deploy**. Vercel will build and assign your production domain.
