'use client';

import type { WorkItem } from '@/types';
import type { Website } from '@/types/api';
import { Filter } from 'lucide-react';
import { useState } from 'react';
import SiteItem from './SiteItem';
import WorkItemComponent from './WorkItem';

interface WorksListProps {
  allWorks: WorkItem[];
}

const WorksList = ({ allWorks }: WorksListProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Get unique categories from all works
  const workCategories = Array.from(
    new Set(allWorks.map(work => work.category))
  );

  // Filter all works by category
  const filteredItems =
    selectedCategory === 'all'
      ? allWorks
      : allWorks.filter(work => work.category === selectedCategory);

  // Helper function to convert WorkItem to Website format for SiteItem component
  const convertWorkItemToWebsite = (workItem: WorkItem): Website => {
    return {
      id: workItem.id,
      name: workItem.title,
      domain: workItem.url ? new URL(workItem.url).hostname : null,
      logo: workItem.image || null,
      coverImage: workItem.image || null,
      description: workItem.description || null,
      createdAt: workItem.createdAt,
      updatedAt: workItem.updatedAt,
      features: workItem.features || [], // Preserve features data
    };
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      website: 'Websites',
      video: 'Videos',
      'cli-tool': 'CLI Tools',
      seo: 'SEO',
      'social-media': 'Social Media',
      advertising: 'Advertising',
      design: 'Design',
      consulting: 'Consulting',
    };
    return labels[category] || category;
  };

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${
            selectedCategory === 'all'
              ? 'bg-gradient-to-r from-teal-600 to-orange-600 dark:from-pink-600 dark:to-purple-600 text-white shadow-lg'
              : 'bg-white/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-800/80 border border-white/20 dark:border-slate-700/20'
          }`}
        >
          All Works ({filteredItems.length})
        </button>
        {workCategories.map(category => {
          const count = allWorks.filter(
            work => work.category === category
          ).length;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-teal-600 to-orange-600 dark:from-pink-600 dark:to-purple-600 text-white shadow-lg'
                  : 'bg-white/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-800/80 border border-white/20 dark:border-slate-700/20'
              }`}
            >
              {getCategoryLabel(category)} ({count})
            </button>
          );
        })}
      </div>

      {/* Works List */}
      {filteredItems.length > 0 ? (
        <div className="max-w-6xl mx-auto bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl">
          {filteredItems.map((item: WorkItem) =>
            item.type === 'website' ? (
              <SiteItem key={item.id} site={convertWorkItemToWebsite(item)} />
            ) : (
              <WorkItemComponent key={item.id} work={item} />
            )
          )}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-slate-700/20 p-12">
            <Filter className="w-16 h-16 text-slate-400 dark:text-slate-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              No works found
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Try selecting a different category or check back later for new
              projects.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WorksList;
