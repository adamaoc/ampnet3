import Contact from '@/_components/Contact';
import PlaceholderImage from '@/_components/PlaceholderImage';
import {
  formatPortfolioDate,
  getPortfolioWork,
  getPortfolioWorks,
  getPublicWebsite,
} from '@/data/portfolio';
import { pageMeta } from '@/lib/seo';
import { headline, lede, secondaryButton, surface } from '@/lib/studio';
import { ArrowLeft, ArrowUpRight, House } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return getPortfolioWorks()
    .filter(work => work.type === 'website')
    .map(work => ({ id: work.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const work = getPortfolioWork(id);
  if (!work) return { title: 'Work' };
  return pageMeta({
    title: work.title,
    description: work.summary?.trim() || 'Built by AmpNet.',
    path: `/works/websites/${id}/`,
  });
}

export default async function WebsiteCaseStudy({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const website = getPublicWebsite(id);
  const work = getPortfolioWork(id);

  if (!website || !work) {
    notFound();
  }

  const created = formatPortfolioDate(website.createdAt);
  const updated = formatPortfolioDate(website.updatedAt);
  const body = work.summary || work.description;
  const visitHref = website.domain ? `https://${website.domain}` : work.url;

  return (
    <article className="pb-2 pt-28">
      <div className="mx-auto max-w-4xl px-6">
        <Link
          href="/works/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to work
        </Link>

        {website.coverImage ? (
          <div className="relative mt-6 aspect-[16/8] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
            <Image
              src={website.coverImage}
              alt=""
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        ) : null}

        <div className={`${surface} mt-6 p-6 md:p-8`}>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
              {website.logo || work.image ? (
                <Image
                  src={website.logo || work.image}
                  alt=""
                  width={64}
                  height={64}
                  className="h-full w-full object-contain p-1.5"
                  unoptimized
                />
              ) : (
                <PlaceholderImage
                  width={64}
                  height={64}
                  category="website"
                  icon={id === 'realview' ? House : undefined}
                />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Website
              </p>
              <h1 className={`${headline} mt-1 text-4xl md:text-5xl`}>
                {work.title}
              </h1>
              {body ? <p className={`${lede} mt-3`}>{body}</p> : null}
              {(created || updated) && (
                <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                  {created ? `Created ${created}` : null}
                  {created && updated ? ' · ' : null}
                  {updated ? `Updated ${updated}` : null}
                </p>
              )}
              {visitHref ? (
                <a
                  href={visitHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${secondaryButton} mt-6`}
                >
                  {website.domain || 'Visit site'}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </div>

          {!work.creditOnly && website.features.length > 0 ? (
            <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
              <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                Included
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {website.features
                  .filter(feature => feature.displayName !== 'Works With')
                  .map(feature => (
                    <li
                      key={feature.id}
                      className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700 dark:border-slate-700 dark:text-slate-200"
                    >
                      {feature.displayName}
                    </li>
                  ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
      <Contact compact />
    </article>
  );
}
