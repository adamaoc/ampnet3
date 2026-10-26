import { pageMeta } from '@/lib/seo';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = pageMeta({
  title: 'Pricing',
  description: 'Project pricing for AmpNet web development work.',
  path: '/pricing/',
});

export default function PricingLayout({ children }: { children: ReactNode }) {
  return children;
}