import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Magic',
  description: 'Notes and stories from AmpNet.',
};

export default function MagicLayout({ children }: { children: ReactNode }) {
  return children;
}
