import { SITE } from '@/data/site-copy';
import { pageMeta } from '@/lib/seo';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = pageMeta({
  title: 'Start a project',
  description: `${SITE.contactHeading} ${SITE.contactLede}`,
  path: '/contact/',
});

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
