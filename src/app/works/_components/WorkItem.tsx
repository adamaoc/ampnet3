'use client';

import PlaceholderImage from '@/_components/PlaceholderImage';
import type { WorkItem } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface WorkItemProps {
  work: WorkItem;
}

const WorkItem = ({ work }: WorkItemProps) => {
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

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      website: 'from-blue-500 to-cyan-500',
      video: 'from-purple-500 to-pink-500',
      'cli-tool': 'from-green-500 to-emerald-500',
      seo: 'from-orange-500 to-red-500',
      'social-media': 'from-pink-500 to-rose-500',
      advertising: 'from-yellow-500 to-orange-500',
      design: 'from-indigo-500 to-purple-500',
      consulting: 'from-teal-500 to-blue-500',
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <Link
      key={work.id}
      href={`/works/${work.category}/${work.id}`}
      className="group relative bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl border border-white/30 dark:border-slate-600/30 rounded-2xl p-6 mb-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:bg-gradient-to-br hover:from-white/60 hover:to-teal-50/60 dark:hover:from-slate-800/60 dark:hover:to-teal-900/20 block"
    >
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
        <div className="relative flex-shrink-0 self-start">
          <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-teal-100 to-orange-100 dark:from-teal-900/50 dark:to-orange-900/50 p-1">
            {work.image ? (
              <Image
                src={work.image}
                alt={work.title}
                width={60}
                height={60}
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <PlaceholderImage
                width={60}
                height={60}
                category={work.category}
              />
            )}
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full shadow-md"></div>
        </div>

        <div className="flex-grow min-w-0">
          {/* Title Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
              {work.title}
            </h3>
            <div className="px-3 py-1 bg-gradient-to-r from-teal-500/20 to-orange-500/20 dark:from-teal-400/20 dark:to-orange-400/20 rounded-full self-start">
              <span
                className={`text-xs font-medium bg-gradient-to-r ${getCategoryColor(
                  work.category
                )} bg-clip-text text-transparent`}
              >
                {getCategoryLabel(work.category)}
              </span>
            </div>
          </div>

          {/* Excerpt */}
          {work.excerpt && (
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3 text-sm sm:text-base">
              {work.excerpt}
            </p>
          )}

          {/* Meta Information */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-slate-500 dark:text-slate-400">
            {work.client && (
              <div className="flex items-center gap-1">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
                <span>{work.client}</span>
              </div>
            )}
            {work.date && (
              <div className="flex items-center gap-1">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{formatDate(work.date)}</span>
              </div>
            )}
            {work.duration && (
              <div className="flex items-center gap-1">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{work.duration}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Technologies */}
      {work.technologies && work.technologies.length > 0 && (
        <div className="space-y-3 mt-6">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-teal-600 dark:text-teal-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Technologies & Tools
            </h4>
          </div>

          <div className="flex flex-wrap gap-2">
            {work.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm border border-white/40 dark:border-slate-600/40 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      {work.results && (
        <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <svg
              className="w-4 h-4 text-green-600 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <h4 className="text-sm font-semibold text-green-700 dark:text-green-300">
              Results
            </h4>
          </div>
          <p className="text-sm text-green-700 dark:text-green-300">
            {work.results}
          </p>
        </div>
      )}

      {/* Hover Effect Gradient Overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </Link>
  );
};

export default WorkItem;
