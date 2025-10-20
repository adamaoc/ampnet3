import type {
  AddOnService,
  EngagementModel,
  ExampleScenario,
  PricingTier,
} from '@/types/data';

export const engagementModels: EngagementModel[] = [
  {
    name: 'Client-Owned Infrastructure',
    description:
      'The client owns and manages their hosting, domain, and infrastructure (e.g., AWS, DigitalOcean, GoDaddy, etc.).',
    summary: 'You maintain full control of your infrastructure and systems.',
    billingModel: 'Flat fee for development work',
    includes: [
      "Building and deploying to the client's infrastructure",
      'Support for configuration or CI/CD setup as part of project scope',
    ],
    considerations: [
      "Requires access and coordination with the client's systems",
      'Integration complexity may increase time and cost',
      "Ongoing maintenance is the client's responsibility unless otherwise agreed upon",
    ],
  },
  {
    name: 'Developer-Owned Infrastructure',
    description: 'I own and maintain the hosting, domain, and infrastructure.',
    summary: 'I handle all technical aspects while you focus on your business.',
    billingModel:
      'Monthly retainer that covers hosting, maintenance, and updates',
    includes: [
      'Hosting and infrastructure costs',
      'Ongoing maintenance, updates, and support',
      'Incremental feature or content updates as agreed upon',
    ],
    considerations: [
      'The site or app remains hosted under my infrastructure and management',
      'Ownership transfer or migration can be quoted separately if needed',
    ],
    benefits: [
      'No technical overhead or system management',
      'Streamlined updates and faster turnarounds',
    ],
  },
];

export const projectTypes: PricingTier[] = [
  {
    name: 'Static Marketing Page',
    description:
      'Single-page or small multi-page site with no backend or database. Ideal for product launches, portfolios, or event sites.',
    complexity: 1,
    costRange: { min: 500, max: 1500 },
    features: [
      'Responsive design',
      'Contact form integration',
      'SEO optimization',
      'Fast loading performance',
      'Mobile-first approach',
    ],
  },
  {
    name: 'Corporate / Brochure Site',
    description:
      'Multi-page site with reusable templates, light integrations (contact form, email service), possibly leveraging an existing platform (e.g., FlexHub).',
    complexity: 2,
    costRange: { min: 1500, max: 3500 },
    features: [
      'Multi-page architecture',
      'Content management integration',
      'Email service integration',
      'Analytics setup',
      'Professional design system',
    ],
  },
  {
    name: 'Dynamic Site with Backend',
    description:
      'Custom backend with CRUD functionality, authentication, and dashboards. Hosted database and deployment pipeline required.',
    complexity: 3,
    costRange: { min: 3500, max: 8000 },
    features: [
      'Custom backend development',
      'Database design and implementation',
      'User authentication system',
      'Admin dashboard',
      'API development',
    ],
  },
  {
    name: 'Full SaaS / Web App',
    description:
      'Multi-service architecture, multiple databases or servers, API integrations, or multi-tenant setup.',
    complexity: 5,
    costRange: { min: 8000, max: 25000 },
    features: [
      'Complex architecture design',
      'Multi-tenant system',
      'Advanced security implementation',
      'Scalable infrastructure',
      'Ongoing maintenance included',
    ],
  },
];

export const addOnServices: AddOnService[] = [
  {
    name: 'Domain Management',
    description: 'Setup and management of your domain name',
    price: '+$15/year',
    category: 'Infrastructure',
  },
  {
    name: 'Email Setup',
    description: 'Professional email setup (Resend, Google Workspace)',
    price: '+$50–$150',
    category: 'Communication',
  },
  {
    name: 'Design System',
    description: 'Custom branding and design system creation',
    price: '+$300–$1,000',
    category: 'Design',
  },
  {
    name: 'Admin Panel',
    description: 'Content management system or admin panel integration',
    price: '+$500+',
    category: 'Functionality',
  },
  {
    name: 'Analytics & SEO',
    description: 'Advanced analytics setup and SEO optimization',
    price: '+$150+',
    category: 'Marketing',
  },
];

export const exampleScenarios: ExampleScenario[] = [
  {
    title: 'Startup Landing Page',
    type: 'Static Marketing Page',
    infrastructure: 'Developer-owned',
    stack: 'Next.js + Tailwind, hosted on DigitalOcean',
    cost: '$800 + $25/month hosting',
  },
  {
    title: 'Company Website',
    type: 'Corporate Site',
    infrastructure: 'Client-owned (GoDaddy or similar)',
    stack: 'Next.js + Resend (contact form), FlexHub base',
    cost: '$2,500 flat fee',
  },
  {
    title: 'Full Product Platform',
    type: 'Web App with Backend',
    infrastructure: 'Developer-owned (DigitalOcean App Platform + Managed DB)',
    stack: 'Next.js, Prisma, PostgreSQL, Resend',
    cost: '$7,500 setup + $100–$300/month (hosting + maintenance)',
  },
];

export const getComplexityStars = (complexity: number): string => {
  return '★'.repeat(complexity) + '☆'.repeat(5 - complexity);
};

export const formatPriceRange = (min: number, max: number): string => {
  if (min === max) {
    return `$${min.toLocaleString()}`;
  }
  return `$${min.toLocaleString()}–$${max.toLocaleString()}`;
};

// FlexHub CMS Features
export const flexHubFeatures = [
  {
    category: 'Authentication & User Management',
    features: [
      'OAuth Integration (GitHub & Google)',
      'Role-Based Access Control (USER, ADMIN, SUPER_USER)',
      'User Registration & Profile Management',
      'Multi-Site User Assignment',
    ],
  },
  {
    category: 'Multi-Site Management',
    features: [
      'Create and manage multiple websites',
      'Custom domain configuration',
      'Site-specific user assignments',
      'Centralized site selector',
    ],
  },
  {
    category: 'Content Management',
    features: [
      'Page creation and management',
      'Blog system with posts and content',
      'Media file upload and management',
      'Site-specific content organization',
    ],
  },
  {
    category: 'User Invitation System',
    features: [
      'Email invitations with role assignment',
      'Site-specific user invitations',
      'Invitation tracking and management',
      'Secure invitation-only access',
    ],
  },
  {
    category: 'Security & Infrastructure',
    features: [
      'PostgreSQL database with Prisma ORM',
      'JWT-based session management',
      'Role-based permissions',
      'Database migrations and seeding',
    ],
  },
  {
    category: 'Modern Development',
    features: [
      'Next.js 15 with React 19',
      'TypeScript for full type safety',
      'Responsive Tailwind CSS design',
      'RESTful API with comprehensive error handling',
    ],
  },
];
