import Contact from '@/_components/Contact';
import { SITE } from '@/data/site-copy';
import { pageMeta } from '@/lib/seo';
import { headline, lede } from '@/lib/studio';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMeta({
  title: 'About',
  description: SITE.about,
  path: '/about/',
});

export default function AboutPage() {
  return (
    <div className="pb-8 pt-28">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className={`${headline} text-4xl md:text-5xl`}>About</h1>
        <p className={`${lede} mt-6`}>{SITE.about}</p>
      </div>
      <Contact />
    </div>
  );
}
