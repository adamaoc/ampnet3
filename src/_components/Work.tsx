import WorkCard from '@/_components/WorkCard';
import { isPortfolioLead } from '@/data/portfolio';
import { getFeaturedWorksForHomepage } from '@/data/works';
import { SITE } from '@/data/site-copy';
import { headline, secondaryButton } from '@/lib/studio';
import Link from 'next/link';

export default function Work() {
  const featuredWorks = getFeaturedWorksForHomepage();

  return (
    <section id="work" className="scroll-mt-24 px-6 py-14">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className={`${headline} text-3xl md:text-4xl`}>Work</h2>
            <p className="mt-3 max-w-xl text-slate-600 dark:text-slate-300">
              Selected websites, tools, and products.
            </p>
          </div>
          <Link href={SITE.secondaryHref} className={secondaryButton}>
            {SITE.secondaryCta}
          </Link>
        </div>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {featuredWorks.map(work => (
            <WorkCard
              key={work.id}
              work={work}
              emphasis={isPortfolioLead(work.id) ? 'lead' : 'standard'}
              className={work.id === 'gravity-rail' ? 'md:col-span-2' : ''}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
