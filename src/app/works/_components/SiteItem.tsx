import PlaceholderImage from '@/_components/PlaceholderImage';
import Image from 'next/image';
import Link from 'next/link';

interface Website {
  id: string;
  name: string;
  domain: string | null;
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

interface SiteItemProps {
  site: Website;
}

const SiteItem = ({ site }: SiteItemProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <Link href={`/works/websites/${site.id}`} className="block">
      <div className="group relative bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl border border-white/30 dark:border-slate-600/30 rounded-2xl p-6 mb-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:bg-gradient-to-br hover:from-white/60 hover:to-teal-50/60 dark:hover:from-slate-800/60 dark:hover:to-teal-900/20 cursor-pointer">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
          <div className="relative flex-shrink-0 self-start">
            <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-teal-100 to-orange-100 dark:from-teal-900/50 dark:to-orange-900/50 p-1">
              {site.logo || site.coverImage ? (
                <Image
                  src={site.logo || site.coverImage || ''}
                  alt={site.name}
                  width={60}
                  height={60}
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <PlaceholderImage width={60} height={60} />
              )}
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full shadow-md"></div>
          </div>

          <div className="flex-grow min-w-0">
            {/* Title Row */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                {site.name}
              </h3>
              {site.domain && (
                <div className="px-3 py-1 bg-gradient-to-r from-teal-500/20 to-orange-500/20 dark:from-teal-400/20 dark:to-orange-400/20 rounded-full self-start">
                  <span className="text-xs font-medium text-teal-700 dark:text-teal-300">
                    {site.domain}
                  </span>
                </div>
              )}
            </div>

            {/* Description */}
            {site.description && (
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3 text-sm sm:text-base">
                {site.description}
              </p>
            )}

            {/* Date Information */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-slate-500 dark:text-slate-400">
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
                <span>Created {formatDate(site.createdAt)}</span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Updated {formatDate(site.updatedAt)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        {site.features && site.features.length > 0 && (
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
                Features & Capabilities
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {site.features.map(feat => (
                <div
                  key={feat.id}
                  className="group/feature relative bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm border border-white/40 dark:border-slate-600/40 rounded-xl p-3 hover:bg-gradient-to-r hover:from-teal-50 hover:to-orange-50 dark:hover:from-teal-900/30 dark:hover:to-orange-900/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-orange-500 mt-2 flex-shrink-0"></div>
                    <div className="min-w-0 flex-grow">
                      <h5 className="text-sm font-medium text-slate-900 dark:text-white mb-1">
                        {feat.displayName}
                      </h5>
                      {feat.description && (
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {feat.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hover Effect Gradient Overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </Link>
  );
};

export default SiteItem;
