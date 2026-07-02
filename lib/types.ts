export interface Spec {
  label: string;
  value: string;
}

export interface QA {
  question: string;
  answer: string;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  shortDescription: string;
  description: string;
  image: string;
  fragrance?: string;
  featured?: boolean;
  benefits: string[];
  features: string[];
  specifications: Spec[];
  usage: string[];
  packingSizes: string[];
  safety: string[];
  faqs: QA[];
  keywords: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string; // ISO
  readTime: string;
  image: string;
  keywords: string[];
  content: BlogBlock[];
}

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string };

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  rating: number;
  quote: string;
}

export interface Industry {
  slug: string;
  name: string;
  icon: string; // lucide icon name
  description: string;
  points: string[];
  image: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  icon: string;
}
