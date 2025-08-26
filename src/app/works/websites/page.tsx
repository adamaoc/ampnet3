import Contact from '@/_components/Contact';
import { getCombinedWorks } from '@/data/works';
import WorksList from '../_components/WorksList';

export default function WebsiteWorksPage() {
  const allWorks = getCombinedWorks();

  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
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
            Explore our diverse portfolio of creative projects, websites, and
            digital solutions
          </p>
        </div>

        {/* Works List with Filtering */}
        <WorksList allWorks={allWorks} />
      </div>
      <Contact />
    </div>
  );
}
