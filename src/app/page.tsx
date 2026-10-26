import Hero from '@/_components/Hero';
import Services from '@/_components/Services';
import Work from '@/_components/Work';
import About from '@/_components/About';
import Contact from '@/_components/Contact';
import { SITE } from '@/data/site-copy';
import { pageMeta } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMeta({
  absoluteTitle: 'AMPNET — We build digital experiences that perform',
  description: SITE.heroSubhead,
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Work />
      <About />
      <Contact />
    </>
  );
}
