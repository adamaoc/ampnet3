import PlaceholderImage from '@/_components/PlaceholderImage';
import {
  getCategoryLabel,
  getWorkHref,
} from '@/data/portfolio';
import type { WorkItem } from '@/types';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function WorkCard({ work }: { work: WorkItem }) {
  const summary = work.summary || work.excerpt || work.description;

  return (
    <Link
      href={getWorkHref(work)}
      className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-colors hover:border-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-600"
    >
      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
        {work.image ? (
          <Image
            src={work.image}
            alt=""
            width={56}
            height={56}
            className={`h-full w-full ${
              work.type === 'website' ? 'object-contain p-1.5' : 'object-cover'
            }`}
          />
        ) : (
          <PlaceholderImage
            width={56}
            height={56}
            category={work.category}
            className="h-full w-full"
          />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-base font-semibold text-slate-950 dark:text-white">
            {work.title}
          </h3>
          <span className="shrink-0 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
            {getCategoryLabel(work.category)}
          </span>
        </div>
        {summary ? (
          <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {summary}
          </p>
        ) : null}
      </div>
      <ArrowUpRight
        className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-teal-800 dark:text-slate-500 dark:group-hover:text-teal-300"
        aria-hidden
      />
    </Link>
  );
}
