'use client';

import WorkCard from '@/_components/WorkCard';
import { getCategoryGroupLabel } from '@/data/portfolio';
import type { WorkItem } from '@/types';
import { useState } from 'react';

type WorksListProps = {
  allWorks: WorkItem[];
};

const WorksList = ({ allWorks }: WorksListProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const workCategories = Array.from(
    new Set(allWorks.map(work => work.category))
  );

  const filteredItems =
    selectedCategory === 'all'
      ? allWorks
      : allWorks.filter(work => work.category === selectedCategory);

  return (
    <>
      <div
        className="mb-8 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter work"
      >
        <FilterButton
          active={selectedCategory === 'all'}
          onClick={() => setSelectedCategory('all')}
          label={`All (${allWorks.length})`}
        />
        {workCategories.map(category => {
          const count = allWorks.filter(
            work => work.category === category
          ).length;
          return (
            <FilterButton
              key={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
              label={`${getCategoryGroupLabel(category)} (${count})`}
            />
          );
        })}
      </div>

      {filteredItems.length > 0 ? (
        <div className="flex flex-col gap-3">
          {filteredItems.map(item => (
            <WorkCard key={item.id} work={item} />
          ))}
        </div>
      ) : (
        <p className="rounded-2xl border border-slate-200 bg-white px-6 py-10 text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
          Nothing in this category.
        </p>
      )}
    </>
  );
};

function FilterButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800 ${
        active
          ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
          : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200'
      }`}
    >
      {label}
    </button>
  );
}

export default WorksList;
