import { SITE } from '@/data/site-copy';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Start a project',
  description: `${SITE.contactHeading} ${SITE.contactSecondary}`,
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
