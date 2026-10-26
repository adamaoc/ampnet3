import { pageMeta } from '@/lib/seo';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = pageMeta({
  title: 'Magic',
  description: 'Notes and stories from AmpNet.',
  path: '/magic/',
});

export default function MagicLayout({ children }: { children: ReactNode }) {
  return children;
}
