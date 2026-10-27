import PlaceholderImage from '@/_components/PlaceholderImage';
import { getCategoryLabel, getWorkHref } from '@/data/portfolio';
import type { WorkItem } from '@/types';
import { ArrowUpRight, House } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type WorkCardProps = {
  work: WorkItem;
  emphasis?: 'lead' | 'standard';
  className?: string;
};

export default function WorkCard({
  work,
  emphasis = 'standard',
  className = '',
}: WorkCardProps) {
  const summary = work.summary || work.excerpt || work.description;
  const cover = Boolean(work.hasCover && work.image);
  const lead = emphasis === 'lead' && cover;
  const banner = cover && !lead;

  return (
    <Link
      href={getWorkHref(work)}
      className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors hover:border-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-600 ${
        lead || banner ? 'block w-full' : 'flex gap-4 p-4'
      } ${className}`}
    >
      <Thumb work={work} lead={lead} />
      <div
        className={`min-w-0 flex-1 ${
          lead ? 'p-4 md:p-5' : banner ? 'px-4 py-3' : ''
        }`}
      >
        <div className="flex items-baseline justify-between gap-3">
          <h3
            className={`font-semibold text-slate-950 dark:text-white ${
              lead ? 'text-lg md:text-xl' : 'text-base'
            }`}
          >
            {work.title}
          </h3>
          <span className="shrink-0 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
            {getCategoryLabel(work.category)}
          </span>
        </div>
        {work.featured ? (
          <p className="mt-0.5 text-xs font-semibold text-teal-800 dark:text-teal-300">
            Featured
          </p>
        ) : null}
        {summary ? (
          <p
            className={`mt-1 text-sm text-slate-600 dark:text-slate-300 ${
              banner ? 'leading-snug' : 'leading-relaxed'
            }`}
          >
            {summary}
          </p>
        ) : null}
      </div>
      {lead || banner ? null : (
        <ArrowUpRight
          className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-teal-800 dark:text-slate-500 dark:group-hover:text-teal-300"
          aria-hidden
        />
      )}
    </Link>
  );
}

function Thumb({ work, lead }: { work: WorkItem; lead: boolean }) {
  const banner = Boolean(work.hasCover && work.image) && !lead;
  if (lead || banner) {
    return (
      <div
        className={`relative bg-slate-100 dark:bg-slate-800 ${
          lead ? 'aspect-[16/9]' : 'aspect-[3/1] md:aspect-[5/2]'
        }`}
      >
        <Image
          src={work.image}
          alt=""
          fill
          className={`object-cover ${banner ? 'object-top' : ''}`}
          unoptimized
          {...(lead ? { priority: true } : { loading: 'eager' as const })}
        />
      </div>
    );
  }

  return (
    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
      {work.image ? (
        <Image
          src={work.image}
          alt=""
          width={56}
          height={56}
          className="h-full w-full object-contain p-1.5"
          unoptimized
          loading="eager"
        />
      ) : (
        <PlaceholderImage
          width={56}
          height={56}
          category={work.category}
          icon={work.id === 'realview' ? House : undefined}
          className="h-full w-full"
        />
      )}
    </div>
  );
}
