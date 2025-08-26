import Contact from '@/_components/Contact';
import PlaceholderImage from '@/_components/PlaceholderImage';
import TagPill from '@/components/ui/tag-pill';
import { getCombinedWorks } from '@/data/works';
import type { WorkItem } from '@/types';
import { ArrowLeft, Calendar, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import OpenSourceSection from '../_components/OpenSourceSection';
import SafeHtml from '../_components/SafeHtml';
import VideoSection from '../_components/VideoSection';

function getWorkItem(id: string): WorkItem | null {
  try {
    const allWorks = getCombinedWorks();
    const workItem = allWorks.find(work => work.id === id);
    return workItem || null;
  } catch (error) {
    console.error('Error getting work item:', error);
    return null;
  }
}

const getCategoryLabel = (category: string) => {
  const labels: Record<string, string> = {
    website: 'Website',
    video: 'Video Production',
    'cli-tool': 'CLI Tool',
    seo: 'SEO',
    'social-media': 'Social Media',
    advertising: 'Advertising',
    design: 'Design',
    consulting: 'Consulting',
  };
  return labels[category] || category;
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export async function generateStaticParams() {
  try {
    const allWorks = getCombinedWorks();

    return allWorks.map(work => ({
      category: work.category,
      id: work.id,
    }));
  } catch (error) {
    console.error('Error in generateStaticParams:', error);
    return [];
  }
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) {
  const { id } = await params;
  const workItem = getWorkItem(id);

  if (!workItem) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="pt-28 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/works"
            className="hidden md:inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Works
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="px-6 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 rounded-3xl overflow-hidden shadow-2xl">
            {/* Cover Image */}
            {workItem.image && (
              <div className="relative aspect-[21/9] overflow-hidden bg-gradient-to-br from-teal-100 to-orange-100 dark:from-teal-900/50 dark:to-orange-900/50 border-b border-white/30 dark:border-slate-700/30">
                <Image
                  src={workItem.image}
                  alt={workItem.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            )}

            {/* Content */}
            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-8">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-teal-100 to-orange-100 dark:from-teal-900/50 dark:to-orange-900/50 p-2">
                    {workItem.image ? (
                      <Image
                        src={workItem.image}
                        alt={workItem.title}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover rounded-xl"
                        unoptimized
                      />
                    ) : (
                      <PlaceholderImage
                        width={96}
                        height={96}
                        category={workItem.category}
                      />
                    )}
                  </div>
                </div>

                {/* Title and Meta */}
                <div className="flex-grow min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                      {workItem.title}
                    </h1>
                    <TagPill label={getCategoryLabel(workItem.category)} />
                  </div>
                  {/* Meta Information */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    {workItem.client && (
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                        </svg>
                        <span>{workItem.client}</span>
                      </div>
                    )}
                    {workItem.date && (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(workItem.date)}</span>
                      </div>
                    )}
                    {workItem.duration && (
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{workItem.duration}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                  {workItem.githubUrl && (
                    <a
                      href={workItem.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                  {workItem.url && workItem.type !== 'website' && (
                    <a
                      href={workItem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-orange-600 dark:from-pink-600 dark:to-purple-600 text-white rounded-full font-medium hover:from-teal-700 hover:to-orange-700 dark:hover:from-pink-700 dark:hover:to-purple-700 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Project
                    </a>
                  )}
                </div>
              </div>

              {/* Technologies */}
              {workItem.technologies && workItem.technologies.length > 0 && (
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-teal-600 dark:text-teal-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Technologies & Tools
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {workItem.technologies.map((tech, index) => (
                      <TagPill key={index} label={tech} />
                    ))}
                  </div>
                </div>
              )}

              {/* Results */}
              {workItem.results && (
                <div className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl">
                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      className="w-5 h-5 text-green-600 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">
                      Results & Impact
                    </h3>
                  </div>
                  <p className="text-green-700 dark:text-green-300 leading-relaxed">
                    {workItem.results}
                  </p>
                </div>
              )}

              {/* Description */}
              {workItem.description && (
                <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl mt-12">
                  <SafeHtml
                    html={workItem.description}
                    className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed prose prose-slate dark:prose-invert max-w-none"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Open Source Section */}
      {workItem.client === 'Open Source' && <OpenSourceSection />}

      {/* Video Section */}
      {workItem.videoUrl && <VideoSection videoUrl={workItem.videoUrl} />}

      <Contact />
    </div>
  );
}
