import { ArrowLeft, Github } from 'lucide-react';
import Link from 'next/link';

const OpenSourceSection = () => {
  return (
    <div className="px-6 mb-12">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-teal-500 to-orange-500 dark:from-pink-500 dark:to-purple-500 rounded-2xl mb-6 shadow-lg">
              <Github className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
              Open Source Commitment
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Open source projects are fundamental to ampnet media&apos;s
              mission. Our team continuously builds and contributes to open
              source initiatives, believing in the power of collaborative
              development to drive innovation and create lasting impact in the
              tech community.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Philosophy Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-orange-500 dark:from-pink-500 dark:to-purple-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                  Our Open Source Philosophy
                </h3>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-4 p-4 bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm border border-white/30 dark:border-slate-600/30 rounded-2xl hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all duration-300">
                  <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-orange-500 dark:from-pink-500 dark:to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                      Transparency First
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      We believe in transparency and community-driven
                      development
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm border border-white/30 dark:border-slate-600/30 rounded-2xl hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all duration-300">
                  <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-orange-500 dark:from-pink-500 dark:to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                      Active Contribution
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      Our team actively contributes to existing open source
                      projects
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm border border-white/30 dark:border-slate-600/30 rounded-2xl hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all duration-300">
                  <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-orange-500 dark:from-pink-500 dark:to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                      Open Our Tools
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      We open-source our own tools and libraries when possible
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-orange-500 dark:from-pink-500 dark:to-purple-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                  Let&apos;s Build Together
                </h3>
              </div>

              <div className="p-6 bg-gradient-to-br from-teal-50 to-orange-50 dark:from-teal-900/20 dark:to-orange-900/20 border border-teal-200 dark:border-teal-800 rounded-2xl">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  If you&apos;re interested in building an open source project,
                  we&apos;d love to help! Whether it&apos;s creating new tools,
                  contributing to existing projects, or establishing best
                  practices for open source development, our team has the
                  expertise to guide you through the process.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-orange-600 dark:from-pink-600 dark:to-purple-600 text-white rounded-full font-medium hover:from-teal-700 hover:to-orange-700 dark:hover:from-pink-700 dark:hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Contact Us
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Link>

                  <a
                    href="https://github.com/adamaoc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    Explore
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSourceSection;
