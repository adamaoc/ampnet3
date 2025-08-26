import type { FC } from 'react';

export type TagPillProps = {
  label: string;
  gradientFromTo?: string;
  className?: string;
};

const TagPill: FC<TagPillProps> = ({ label, gradientFromTo, className }) => {
  const gradientClasses = gradientFromTo
    ? `bg-gradient-to-r ${gradientFromTo}`
    : 'bg-gradient-to-r from-teal-500/20 to-orange-500/20 dark:from-teal-400/20 dark:to-orange-400/20';

  return (
    <div
      className={`px-4 py-[2px] ${gradientClasses} rounded-full self-start ${
        className ?? ''
      }`}
    >
      <span
        className={`text-sm font-medium bg-gradient-to-r ${
          gradientFromTo
            ? gradientFromTo
            : 'from-slate-900 to-slate-700 dark:from-white dark:to-slate-200'
        } bg-clip-text text-transparent`}
      >
        {label}
      </span>
    </div>
  );
};

export default TagPill;
