import Contact from '@/_components/Contact';
import PlaceholderImage from '@/_components/PlaceholderImage';
import SitesList from '@/app/works/_components/SitesList';
import { works } from '@/data/works';

const WorkImage = ({ image, title }: { image: string; title: string }) => {
  return (
    <div className="flex-basis-[80px] flex-shrink-0 flex-grow-0">
      <div className="rounded-full overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-[50px] h-[50px]" />
        ) : (
          <PlaceholderImage width={50} height={50} />
        )}
      </div>
    </div>
  );
};

export default function WorksPage() {
  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-600 to-orange-600 dark:from-pink-600 dark:to-purple-600 bg-clip-text text-transparent">
              Our Works
            </span>
            <br />
            Creative Media
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A glimpse into our creative universe
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex justify-end mb-6 pr-4">
        <div className="bg-white dark:bg-slate-900 backdrop-blur-2xl border border-white/30 dark:border-slate-700/30 rounded-full px-4 py-1 shadow-2xl min-w-[106px] text-slate-400 dark:text-teal-200">
          {works.length} Projects
        </div>
      </div>
      <div className="max-w-6xl mx-auto bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl">
        {works.map(work => {
          return (
            <div
              key={work.title}
              className="flex items-center gap-4 border border-slate-400/20 p-4 hover:bg-gradient-to-r hover:from-teal-100 hover:to-orange-100 dark:hover:from-teal-900/30 dark:hover:to-orange-900/30 transition-all duration-300"
            >
              <WorkImage image={work.image} title={work.title} />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {work.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {work.description}
              </p>
              <div className="inline-block bg-gradient-to-r from-teal-100 to-orange-100 dark:from-teal-900/30 dark:to-orange-900/30 rounded-full px-4 py-1 text-sm font-medium text-teal-700 dark:text-teal-300">
                {work.category}
              </div>
            </div>
          );
        })}
      </div>
      <SitesList />
      <Contact />
    </div>
  );
}
