import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Project pricing for AmpNet web development work.',
};

export default function PricingLayout({ children }: { children: ReactNode }) {
  return children;
}