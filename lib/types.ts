export interface Spec {
  label: string;
  labelHi?: string;
  value: string;
  valueHi?: string;
}

export interface QA {
  question: string;
  questionHi?: string;
  answer: string;
  answerHi?: string;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  taglineHi?: string;
  shortDescription: string;
  shortDescriptionHi?: string;
  description: string;
  descriptionHi?: string;
  image: string;
  fragrance?: string;
  fragranceHi?: string;
  featured?: boolean;
  benefits: string[];
  benefitsHi?: string[];
  features: string[];
  featuresHi?: string[];
  specifications: Spec[];
  usage: string[];
  usageHi?: string[];
  packingSizes: string[];
  safety: string[];
  safetyHi?: string[];
  faqs: QA[];
  keywords: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  titleHi?: string;
  excerpt: string;
  excerptHi?: string;
  category: string;
  categoryHi?: string;
  author: string;
  date: string; // ISO
  readTime: string;
  readTimeHi?: string;
  image: string;
  keywords: string[];
  content: BlogBlock[];
}

export type BlogBlock =
  | { type: "p"; text: string; textHi?: string }
  | { type: "h2"; text: string; textHi?: string }
  | { type: "h3"; text: string; textHi?: string }
  | { type: "ul"; items: string[]; itemsHi?: string[] }
  | { type: "ol"; items: string[]; itemsHi?: string[] }
  | { type: "quote"; text: string; textHi?: string };

export interface Testimonial {
  name: string;
  role: string;
  roleHi?: string;
  location: string;
  locationHi?: string;
  rating: number;
  quote: string;
  quoteHi?: string;
}

export interface Industry {
  slug: string;
  name: string;
  nameHi: string;
  icon: string; // lucide icon name
  description: string;
  descriptionHi: string;
  points: string[];
  pointsHi?: string[];
  image: string;
}

export interface ProcessStep {
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  icon: string;
}

export interface Category {
  name: string;
  nameHi: string;
  slug: string;
  description: string;
  descriptionHi: string;
  icon: string;
}
