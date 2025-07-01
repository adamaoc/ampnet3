'use client';

import PlaceholderImage from '@/_components/PlaceholderImage';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Website {
  id: string;
  name: string;
  domain: string;
  logo: string | null;
  coverImage: string | null;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  features: Array<{
    id: string;
    type: string;
    displayName: string;
    description: string;
    config: unknown;
  }>;
}

interface ApiResponse {
  sites: Website[];
  count: number;
  lastUpdated: string;
}

interface SiteCardProps {
  site: Website;
}

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
          <span className="truncate">{site.domain}</span>
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
  const [websites, setWebsites] = useState<Website[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWebsites = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://flexhub.ampnet.media/api/public/sites'
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ApiResponse = await response.json();
        // Sort by most recent updated and take top 2
        const sortedSites = data.sites.sort(
          (a, b) =>
            new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        );
        setWebsites(sortedSites.slice(0, 4));
      } catch (err) {
        console.error('Error fetching websites:', err);
        setWebsites([]);
      } finally {
        setLoading(false);
      }
    };

    fetchWebsites();
  }, []);

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
          {loading
            ? // Loading skeletons
              Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-full border border-white/20 dark:border-slate-700/20 p-3 pr-6 animate-pulse"
                >
                  <div className="w-12 h-12 bg-slate-300 dark:bg-slate-700 rounded-full flex-shrink-0"></div>
                  <div className="flex-grow min-w-0">
                    <div className="h-5 w-3/4 bg-slate-300 dark:bg-slate-700 rounded mb-1"></div>
                    <div className="h-4 w-1/2 bg-slate-300 dark:bg-slate-700 rounded"></div>
                  </div>
                </div>
              ))
            : websites.map(site => <SiteCard key={site.id} site={site} />)}
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
