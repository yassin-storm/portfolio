import type { Metadata } from 'next';
import { Inter, Alexandria } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const alexandria = Alexandria({
  subsets: ['arabic', 'latin'],
  variable: '--font-alexandria',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Yassin Karem | Full-Stack & MERN Developer | Portfolio',
  description:
    'Official portfolio of Yassin Karem, MERN Stack Developer & Software Engineer (Faculty of Computers & AI). Specializing in resilient Node.js architectures, scalable REST APIs, payment integrations, and responsive bilingual web platforms.',
  keywords: [
    'Yassin Karem',
    'ياسين كارم',
    'Yassin Farouk',
    'MERN Stack Developer',
    'Backend Engineer',
    'Faculty of Computers and AI',
    'AFAQ Training Center',
    'Node.js Developer Egypt',
    'Express MongoDB',
    'Full-Stack Developer',
    'Next.js Portfolio',
    'Bilingual Arabic English Portfolio',
  ],
  authors: [{ name: 'Yassin Karem' }],
  creator: 'Yassin Karem',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_EG',
    url: 'https://yasseenkarem.vercel.app',
    title: 'Yassin Karem | Full-Stack & MERN Developer',
    description:
      'Explore verified projects, backend systems, and technical capabilities by Yassin Karem.',
    siteName: 'Yassin Karem Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yassin Karem | Full-Stack & MERN Developer',
    description: 'Scalable backends, RESTful APIs, and modern MERN applications.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${alexandria.variable}`}>
      <body className="bg-[#08090d] text-zinc-100 antialiased font-sans selection:bg-cyan-500/30 selection:text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
