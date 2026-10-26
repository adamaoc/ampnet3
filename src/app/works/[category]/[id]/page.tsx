import Contact from '@/_components/Contact';
import PlaceholderImage from '@/_components/PlaceholderImage';
import {
  formatPortfolioDate,
  getCategoryLabel,
  getPortfolioWork,
  getPortfolioWorks,
} from '@/data/portfolio';
import { headline, lede, primaryButton, secondaryButton, surface } from '@/lib/studio';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import OpenSourceSection from '../_components/OpenSourceSection';
import SafeHtml from '../_components/SafeHtml';
import VideoSection from '../_components/VideoSection';

export function generateStaticParams() {
  return getPortfolioWorks()
    .filter(work => work.type !== 'website')
    .map(work => ({
      category: work.category,
      id: work.id,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const work = getPortfolioWork(id);
  if (!work) return { title: 'Work' };
  return {
    title: work.title,
    description: work.summary || work.excerpt || work.description,
  };
}

export default async function WorkCaseStudy({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) {
  const { id, category } = await params;
  const work = getPortfolioWork(id);

  if (!work || work.type === 'website' || work.category !== category) {
    notFound();
  }

  const date = formatPortfolioDate(work.date);
  const plainDescription = work.description?.replace(/<[^>]+>/g, '').trim();
  const showDescription =
    Boolean(work.description) &&
    plainDescription !== work.summary &&
    !work.creditOnly;

  return (
    <article className="pb-8 pt-28">
      <div className="mx-auto max-w-4xl px-6">
        <Link
          href="/works/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to work
        </Link>

        {work.image ? (
          <div className="relative mt-6 aspect-[16/8] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
            <Image
              src={work.image}
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
              {work.image ? (
                <Image
                  src={work.image}
                  alt=""
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                  unoptimized
                />
              ) : (
                <PlaceholderImage
                  width={64}
                  height={64}
                  category={work.category}
                />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {getCategoryLabel(work.category)}
              </p>
              <h1 className={`${headline} mt-1 text-3xl md:text-4xl`}>
                {work.title}
              </h1>
              {work.summary ? <p className={`${lede} mt-4`}>{work.summary}</p> : null}
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                {[work.client, date, work.duration].filter(Boolean).join(' · ')}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {work.githubUrl ? (
                  <a
                    href={work.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={secondaryButton}
                  >
                    <Github className="h-4 w-4" />
                    View code
                  </a>
                ) : null}
                {work.url ? (
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={primaryButton}
                  >
                    Visit project
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </div>
          </div>

          {work.technologies && work.technologies.length > 0 ? (
            <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Technologies
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {work.technologies.map(tech => (
                  <li
                    key={tech}
                    className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700 dark:border-slate-700 dark:text-slate-200"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {work.results ? (
            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
              <h2 className="text-sm font-semibold text-slate-950 dark:text-white">
                Notes
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {work.results.trim()}
              </p>
            </div>
          ) : null}

          {showDescription ? (
            <div className="mt-8 text-slate-700 dark:text-slate-300">
              <SafeHtml html={work.description} />
            </div>
          ) : null}
        </div>
      </div>

      {work.client === 'Open Source' ? <OpenSourceSection /> : null}
      {work.videoUrl ? <VideoSection videoUrl={work.videoUrl} /> : null}

      <Contact />
    </article>
  );
}
