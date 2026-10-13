export type Language = 'en' | 'ar';

export interface LocalizedString {
  en: string;
  ar: string;
}

export interface Project {
  id: string;
  title: LocalizedString;
  category: LocalizedString;
  shortDesc: LocalizedString;
  fullDesc: LocalizedString;
  problem: LocalizedString;
  solution: LocalizedString;
  keyFeatures: LocalizedString[];
  technologies: string[];
  metrics?: LocalizedString[];
  status: 'completed' | 'in_development' | 'prototype';
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  isConfidential?: boolean;
}

export interface SkillCategory {
  id: string;
  title: LocalizedString;
  skills: {
    name: string;
    level: LocalizedString; // e.g. "Production / Expert", "Experienced" (no fake % numbers)
    iconName?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: LocalizedString;
  company: LocalizedString;
  location: LocalizedString;
  period: LocalizedString;
  type: LocalizedString; // Freelance / Full-time / Volunteer
  achievements: LocalizedString[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: LocalizedString;
  institution: LocalizedString;
  period: LocalizedString;
  location: LocalizedString;
  details: LocalizedString[];
  grade?: string;
}

export interface CertificateItem {
  id: string;
  title: LocalizedString;
  issuer: LocalizedString;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  image?: string;
  skills: string[];
}

export interface ServiceItem {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  features: LocalizedString[];
  icon: string;
}
