'use client';

import { getAllWebsites } from '@/data/websites';
import SiteItem from './SiteItem';

const SitesList = () => {
  // Use static data generated at build time
  const websites = getAllWebsites();

  return (
    <>
      <div className="max-w-6xl mx-auto flex justify-end mt-6 mb-6 pr-4">
        <div className="bg-white dark:bg-slate-900 backdrop-blur-2xl border border-white/30 dark:border-slate-700/30 rounded-full px-4 py-1 shadow-2xl min-w-[106px] text-slate-400 dark:text-teal-200">
          {`${websites.length} Websites`}
        </div>
      </div>
      <div className="max-w-6xl mx-auto bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl">
        {websites.length > 0 ? (
          websites.map(site => <SiteItem key={site.id} site={site} />)
        ) : (
          <div className="text-center py-8 text-slate-600 dark:text-slate-400">
            No websites available
          </div>
        )}
      </div>
    </>
  );
};

export default SitesList;
