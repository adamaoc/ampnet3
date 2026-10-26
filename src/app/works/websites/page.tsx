import Contact from '@/_components/Contact';
import { getCombinedWorks } from '@/data/works';
import { pageMeta } from '@/lib/seo';
import { headline, lede } from '@/lib/studio';
import type { Metadata } from 'next';
import WorksList from '../_components/WorksList';

export const metadata: Metadata = pageMeta({
  title: 'Websites',
  description: 'Websites designed and built by AmpNet.',
  path: '/works/websites/',
});

export default function WebsiteWorksPage() {
  const websites = getCombinedWorks().filter(work => work.type === 'website');

  return (
    <div className="pb-8 pt-28">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className={`${headline} text-4xl md:text-5xl`}>Websites</h1>
        <p className={`${lede} mt-4`}>Sites designed, built, and shipped by AmpNet.</p>
        <div className="mt-10">
          <WorksList allWorks={websites} />
        </div>
      </div>
      <Contact />
    </div>
  );
}
