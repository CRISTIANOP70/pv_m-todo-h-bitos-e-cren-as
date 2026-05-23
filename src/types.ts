export interface Lesson {
  title: string;
  duration?: string;
  format: string; // e.g. "PDF + Áudio"
  benefit: string;
}

export interface Module {
  id: number;
  number: string;
  title: string;
  lessons: Lesson[];
}

export interface Bonus {
  id: number;
  title: string;
  badge: string;
  resolvedObjection: string;
  targetAudience: string;
  value: number;
  icon: string;
  benefit: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  age?: number;
  role: string;
  avatar: string;
  before: string;
  after: string;
  story: string;
  date: string;
}
