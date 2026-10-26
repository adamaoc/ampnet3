import Contact from '@/_components/Contact';
import { getCombinedWorks } from '@/data/works';
import { pageMeta } from '@/lib/seo';
import { headline, lede } from '@/lib/studio';
import type { Metadata } from 'next';
import WorksList from './_components/WorksList';

export const metadata: Metadata = pageMeta({
  title: 'Work',
  description:
    'Websites, tools, and digital products built by AmpNet in Dallas.',
  path: '/works/',
});

export default function WorksPage() {
  const allWorks = getCombinedWorks();

  return (
    <div className="pb-8 pt-28">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className={`${headline} text-4xl md:text-5xl`}>Work</h1>
        <p className={`${lede} mt-4`}>
          Websites, tools, and products. Built by AmpNet.
        </p>
        <div className="mt-10">
          <WorksList allWorks={allWorks} />
        </div>
      </div>
      <Contact />
    </div>
  );
}
