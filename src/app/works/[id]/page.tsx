import Contact from '@/_components/Contact';
import PlaceholderImage from '@/_components/PlaceholderImage';
import type { ApiResponse, Website } from '@/types';
import { ArrowLeft, Calendar, ExternalLink, RefreshCw } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getWebsite(id: string): Promise<Website | null> {
  try {
    const response = await fetch(
      `https://flexhub.ampnet.media/api/public/sites`
    );

    if (!response.ok) {
      console.error(`Failed to fetch sites: ${response.status}`);
      return null;
    }

    const data: ApiResponse = await response.json();
    const website = data.sites.find(site => site.id === id);

    return website || null;
  } catch (error) {
    console.error('Error fetching website:', error);
    return null;
  }
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export async function generateStaticParams() {
  try {
    const response = await fetch(
      'https://flexhub.ampnet.media/api/public/sites'
    );

    if (!response.ok) {
      console.error(`Failed to fetch sites: ${response.status}`);
      // Return a fallback entry for static export when API is not available
      return [{ id: 'example' }];
    }

    const data: ApiResponse = await response.json();

    if (data.sites && data.sites.length > 0) {
      return data.sites.map(site => ({
        id: site.id,
      }));
    }

    // Fallback when no sites are returned
    return [{ id: 'example' }];
  } catch (error) {
    console.error('Error in generateStaticParams:', error);
    // Return a fallback entry for static export when API is not available
    return [{ id: 'example' }];
  }
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const website = await getWebsite(id);

  if (!website) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="pt-28 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
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
            <div className="aspect-[21/9] overflow-hidden bg-gradient-to-br from-teal-100 to-orange-100 dark:from-teal-900/50 dark:to-orange-900/50 border-b border-white/30 dark:border-slate-700/30">
              {website.coverImage || website.logo ? (
                <Image
                  src={website.coverImage || website.logo || ''}
                  alt={website.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <PlaceholderImage width={400} height={200} />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-teal-100 to-orange-100 dark:from-teal-900/50 dark:to-orange-900/50 p-2">
                    {website.logo ? (
                      <Image
                        src={website.logo}
                        alt={website.name}
                        width={88}
                        height={88}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    ) : (
                      <PlaceholderImage width={88} height={88} />
                    )}
                  </div>
                </div>

                {/* Main Info */}
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                      {website.name}
                    </h1>
                    {website.domain && (
                      <a
                        href={`https://${website.domain}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/20 to-orange-500/20 dark:from-teal-400/20 dark:to-orange-400/20 rounded-full px-4 py-2 text-teal-700 dark:text-teal-300 hover:from-teal-500/30 hover:to-orange-500/30 transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {website.domain}
                      </a>
                    )}
                  </div>

                  {website.description && (
                    <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-6 max-w-3xl">
                      {website.description}
                    </p>
                  )}

                  {/* Date Information */}
                  <div className="flex flex-wrap items-center gap-6 text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Created {formatDate(website.createdAt)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <RefreshCw className="w-4 h-4" />
                      <span>Updated {formatDate(website.updatedAt)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      {website.features && website.features.length > 0 && (
        <div className="px-6 mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                  Features & Capabilities
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  Explore the powerful features that make this site unique
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {website.features.map(feature => (
                  <div
                    key={feature.id}
                    className="group bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/40 dark:border-slate-600/40 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-white/60 hover:to-teal-50/60 dark:hover:from-slate-800/60 dark:hover:to-teal-900/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-500 to-orange-500 mt-2 flex-shrink-0"></div>
                      <div className="min-w-0 flex-grow">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                          {feature.displayName}
                        </h3>
                        {feature.description && (
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            {feature.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Technical Details */}
      <div className="px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
              Project Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  Project Information
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">
                      Domain:
                    </span>
                    <span className="text-slate-900 dark:text-white font-medium">
                      {website.domain || 'No domain'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">
                      Features:
                    </span>
                    <span className="text-slate-900 dark:text-white font-medium">
                      {website.features.length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">
                      Status:
                    </span>
                    <span className="inline-flex items-center gap-1 text-green-600 dark:text-green-400 font-medium">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Active
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  Timeline
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">
                      Created:
                    </span>
                    <span className="text-slate-900 dark:text-white font-medium">
                      {formatDate(website.createdAt)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">
                      Last Updated:
                    </span>
                    <span className="text-slate-900 dark:text-white font-medium">
                      {formatDate(website.updatedAt)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
}
