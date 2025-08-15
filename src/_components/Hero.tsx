import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-100 to-orange-100 dark:from-teal-900/30 dark:to-orange-900/30 rounded-full px-6 py-2 mb-8 backdrop-blur-sm border border-white/20 dark:border-slate-700/20">
          <Sparkles className="h-4 w-4 text-teal-600 dark:text-teal-400" />
          <span className="text-sm font-medium text-teal-700 dark:text-teal-300">
            Creative Media Studio
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-slate-900 via-purple-900 to-pink-900 dark:from-white dark:via-purple-200 dark:to-pink-200 bg-clip-text text-transparent">
            We craft
          </span>
          <br />
          <span className="bg-gradient-to-r from-teal-600 via-orange-600 to-red-500 dark:from-pink-600 dark:via-purple-600 dark:to-red-600 bg-clip-text text-transparent">
            digital magic
          </span>
        </h1>

        <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Blending creativity with technology to build experiences that flow,
          inspire, and connect in the digital realm
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/works"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-600 to-orange-600 dark:from-pink-600 dark:to-purple-600 hover:from-teal-700 hover:to-orange-700 dark:hover:from-pink-700 dark:hover:to-purple-700 text-white border-0 px-6 py-2 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View Our Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-teal-200 dark:border-teal-200 hover:bg-teal-50 dark:hover:bg-teal-900/20 px-6 py-2 text-lg font-medium dark:text-teal-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </section>
  );
}
