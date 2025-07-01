import type { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of Web Development: Beyond the Horizon',
    excerpt:
      'Exploring the cutting-edge technologies that are reshaping how we build digital experiences, from AI-powered development to immersive web interfaces.',
    content: 'Full article content would go here...',
    author: 'Adam Mitchell',
    publishedAt: '2024-01-15',
    readTime: '8 min read',
    category: 'Technology',
    image: '/api/placeholder/800/400',
    featured: true,
  },
  {
    id: 2,
    title: 'Crafting Digital Stories That Resonate',
    excerpt:
      'How to create compelling narratives in the digital age that connect with audiences on both emotional and intellectual levels.',
    content: 'Full article content would go here...',
    author: 'Sarah Chen',
    publishedAt: '2024-01-12',
    readTime: '6 min read',
    category: 'Design',
    image: '/api/placeholder/800/400',
    featured: false,
  },
  {
    id: 3,
    title: 'The Art of Minimalist Web Design',
    excerpt:
      'Discovering the power of simplicity in web design and how less can truly be more when creating user experiences.',
    content: 'Full article content would go here...',
    author: 'Michael Torres',
    publishedAt: '2024-01-10',
    readTime: '5 min read',
    category: 'Design',
    image: '/api/placeholder/800/400',
    featured: false,
  },
  {
    id: 4,
    title: 'Building Scalable Applications with Modern Frameworks',
    excerpt:
      'A deep dive into architectural patterns and frameworks that enable developers to build applications that grow with business needs.',
    content: 'Full article content would go here...',
    author: 'Emma Rodriguez',
    publishedAt: '2024-01-08',
    readTime: '10 min read',
    category: 'Development',
    image: '/api/placeholder/800/400',
    featured: false,
  },
  {
    id: 5,
    title: 'The Psychology of Color in Digital Media',
    excerpt:
      'Understanding how color choices impact user behavior and emotional responses in digital interfaces and marketing materials.',
    content: 'Full article content would go here...',
    author: 'David Kim',
    publishedAt: '2024-01-05',
    readTime: '7 min read',
    category: 'Design',
    image: '/api/placeholder/800/400',
    featured: false,
  },
  {
    id: 6,
    title: 'Embracing the Creator Economy',
    excerpt:
      'How content creators are reshaping digital marketing and what businesses can learn from their authentic engagement strategies.',
    content: 'Full article content would go here...',
    author: 'Lisa Park',
    publishedAt: '2024-01-03',
    readTime: '9 min read',
    category: 'Marketing',
    image: '/api/placeholder/800/400',
    featured: false,
  },
];

export const categories = [
  'All',
  'Technology',
  'Design',
  'Development',
  'Marketing',
];

export const getFeaturedPost = (): BlogPost | undefined => {
  return blogPosts.find(post => post.featured);
};

export const getRegularPosts = (): BlogPost[] => {
  return blogPosts.filter(post => !post.featured);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  if (category === 'All') {
    return blogPosts;
  }
  return blogPosts.filter(post => post.category === category);
};
