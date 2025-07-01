import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 rounded-3xl p-12 shadow-2xl">
          <div className="mb-8">
            <Search className="w-16 h-16 mx-auto text-slate-400 dark:text-slate-500 mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
              Work Not Found
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              The work you&apos;re looking for doesn&apos;t exist or may have
              been removed.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/works"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-orange-600 dark:from-pink-600 dark:to-purple-600 hover:from-teal-700 hover:to-orange-700 dark:hover:from-pink-700 dark:hover:to-purple-700 text-white border-0 px-6 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Works
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/40 dark:border-slate-600/40 text-slate-900 dark:text-white px-6 py-3 text-lg font-medium hover:bg-white/70 dark:hover:bg-slate-800/70 transition-all duration-300"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
