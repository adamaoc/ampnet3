'use client';

import PlaceholderImage from '@/_components/PlaceholderImage';
import { getFeaturedWebsites } from '@/data/websites';
import type { SiteCardProps } from '@/types';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function SiteCard({ site }: SiteCardProps) {
  return (
    <Link
      href={`/works/${site.id}`}
      className="group flex items-center gap-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-full border border-white/20 dark:border-slate-700/20 hover:border-teal-200 dark:hover:border-teal-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 p-3 pr-6"
    >
      {/* Circular Logo */}
      <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-teal-100 to-orange-100 dark:from-teal-900/50 dark:to-orange-900/50 border border-white/30 dark:border-slate-600/30 flex-shrink-0">
        {site.logo ? (
          <Image
            src={site.logo}
            alt={site.name}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <PlaceholderImage width={48} height={48} />
          </div>
        )}
      </div>

      {/* Site Info */}
      <div className="flex-grow min-w-0">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white truncate mb-0.5">
          {site.name}
        </h3>
        <div className="flex items-center gap-1 text-sm text-teal-600 dark:text-teal-400">
          <span className="truncate">{site.domain || 'No domain'}</span>
        </div>
      </div>

      {/* Hover Arrow */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ArrowRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
      </div>
    </Link>
  );
}

export default function Work() {
  // Use static data generated at build time
  const websites = getFeaturedWebsites();

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
          {websites.length > 0 ? (
            websites.map(site => <SiteCard key={site.id} site={site} />)
          ) : (
            // Fallback if no websites available
            <div className="col-span-2 text-center py-8 text-slate-600 dark:text-slate-400">
              No featured websites available
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
