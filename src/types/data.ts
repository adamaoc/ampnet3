// Data structure types for static content

export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
};

export type WorkItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  type: 'work' | 'website';
  date?: string;
  url?: string;
  features?: string[];
};
