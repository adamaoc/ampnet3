const WebsiteSkeleton = () => {
  return (
    <div className="relative bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl border border-white/30 dark:border-slate-600/30 rounded-2xl p-6 mb-6 shadow-xl animate-pulse">
      {/* Header Section */}
      <div className="flex items-start gap-4 mb-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-slate-300 dark:bg-slate-700"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-slate-400 dark:bg-slate-600 rounded-full"></div>
        </div>

        <div className="flex-grow">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-8 w-48 bg-slate-300 dark:bg-slate-700 rounded"></div>
            <div className="h-6 w-24 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
          </div>

          <div className="h-4 w-full bg-slate-300 dark:bg-slate-700 rounded mb-1"></div>
          <div className="h-4 w-3/4 bg-slate-300 dark:bg-slate-700 rounded mb-3"></div>

          {/* Date Information */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-slate-300 dark:bg-slate-700 rounded"></div>
              <div className="h-3 w-20 bg-slate-300 dark:bg-slate-700 rounded"></div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-slate-300 dark:bg-slate-700 rounded"></div>
              <div className="h-3 w-20 bg-slate-300 dark:bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-slate-300 dark:bg-slate-700 rounded"></div>
          <div className="h-4 w-32 bg-slate-300 dark:bg-slate-700 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm border border-white/40 dark:border-slate-600/40 rounded-xl p-3"
            >
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-slate-400 dark:bg-slate-600 rounded-full mt-2 flex-shrink-0"></div>
                <div className="min-w-0 flex-grow">
                  <div className="h-4 w-20 bg-slate-300 dark:bg-slate-700 rounded mb-1"></div>
                  <div className="h-3 w-full bg-slate-300 dark:bg-slate-700 rounded mb-1"></div>
                  <div className="h-3 w-3/4 bg-slate-300 dark:bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebsiteSkeleton;
