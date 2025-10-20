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

// Pricing-related types
export type PricingTier = {
  name: string;
  description: string;
  complexity: number; // 1-5 stars
  costRange: {
    min: number;
    max: number;
  };
  features: string[];
};

export type EngagementModel = {
  name: string;
  description: string;
  summary: string;
  billingModel: string;
  includes: string[];
  considerations: string[];
  benefits?: string[];
};

export type AddOnService = {
  name: string;
  description: string;
  price: string;
  category: string;
};

export type ExampleScenario = {
  title: string;
  type: string;
  infrastructure: string;
  stack: string;
  cost: string;
  monthly?: string;
};
