'use client';

import PlaceholderImage from '@/_components/PlaceholderImage';
import { getFeaturedWorksForHomepage } from '@/data/works';
import type { WorkItem } from '@/types';
import { ArrowRight, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function WorkCard({ work }: { work: WorkItem }) {
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

  return (
    <Link
      href={
        work.type === 'website'
          ? `/works/websites/${work.id}`
          : `/works/${work.category}/${work.id}`
      }
      className="group flex items-center gap-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-full border border-white/20 dark:border-slate-700/20 hover:border-teal-200 dark:hover:border-teal-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 p-3 pr-6"
    >
      {/* Circular Logo */}
      <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-teal-100 to-orange-100 dark:from-teal-900/50 dark:to-orange-900/50 border border-white/30 dark:border-slate-600/30 flex-shrink-0">
        {work.image ? (
          <Image
            src={work.image}
            alt={work.title}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        ) : (
          <PlaceholderImage width={48} height={48} category={work.category} />
        )}
      </div>

      {/* Work Info */}
      <div className="flex-grow min-w-0">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white truncate mb-0.5 flex items-center gap-2">
          {work.title}
          {work.githubUrl && (
            <Github className="inline-block h-4 w-4 ml-2 text-slate-600 dark:text-slate-400" />
          )}
        </h3>
        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <span
            className={`inline-block bg-gradient-to-r ${getCategoryColor(
              work.category
            )} bg-clip-text text-transparent font-medium whitespace-nowrap`}
          >
            {getCategoryLabel(work.category)}
          </span>
        </div>
      </div>

      {/* Action Icons */}
      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ArrowRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
      </div>
    </Link>
  );
}

export default function Work() {
  // Use static data generated at build time
  const featuredWorks = getFeaturedWorksForHomepage();

  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
            Featured Work
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A glimpse into our creative universe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {featuredWorks.length > 0 ? (
            featuredWorks.map((work: WorkItem) => (
              <WorkCard key={work.id} work={work} />
            ))
          ) : (
            // Fallback if no works available
            <div className="col-span-2 text-center py-8 text-slate-600 dark:text-slate-400">
              No featured works available
            </div>
          )}
        </div>
        <div className="flex justify-end">
          <Link
            href="/works"
            className="flex items-center justify-center mt-8 mr-2 rounded-full bg-gradient-to-r from-teal-600 to-orange-600 dark:from-pink-600 dark:to-purple-600 hover:from-teal-700 hover:to-orange-700 dark:hover:from-pink-700 dark:hover:to-purple-700 text-white border-0 px-6 py-2 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            See More
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
