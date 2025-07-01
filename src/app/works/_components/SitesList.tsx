'use client';

import { useState, useEffect } from 'react';
import WebsiteSkeleton from './WebsiteSkeleton';
import SiteItem from './SiteItem';

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

const SitesList = () => {
  const [websites, setWebsites] = useState<Website[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWebsites = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3005/api/public/sites');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ApiResponse = await response.json();
        // Sort websites by most recent updated date
        const sortedSites = data.sites.sort(
          (a, b) =>
            new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        );
        setWebsites(sortedSites);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to fetch websites'
        );
        console.error('Error fetching websites:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWebsites();
  }, []);

  return (
    <>
      <div className="max-w-6xl mx-auto flex justify-end mt-6 mb-6 pr-4">
        <div className="bg-white dark:bg-slate-900 backdrop-blur-2xl border border-white/30 dark:border-slate-700/30 rounded-full px-4 py-1 shadow-2xl min-w-[106px] text-slate-400 dark:text-teal-200">
          {loading ? (
            <div className="bg-slate-300 dark:bg-slate-700 h-4 w-16 rounded animate-pulse"></div>
          ) : error ? (
            'Error'
          ) : (
            `${websites.length} Websites`
          )}
        </div>
      </div>
      <div className="max-w-6xl mx-auto bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl">
        {loading ? (
          // Show skeleton loaders while loading
          Array.from({ length: 2 }).map((_, index) => (
            <WebsiteSkeleton key={index} />
          ))
        ) : error ? (
          // Show error state
          <div className="text-center py-8">
            <p className="text-red-600 dark:text-red-400 mb-4">
              Error loading websites: {error}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-teal-600 to-orange-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Retry
            </button>
          </div>
        ) : (
          // Show actual data
          websites.map(site => <SiteItem key={site.id} site={site} />)
        )}
      </div>
    </>
  );
};

export default SitesList;
