import { headline, primaryButton, secondaryButton, surface } from '@/lib/studio';
import type { WorkTryIt } from '@/types';
import { Github, MessageSquare } from 'lucide-react';

type TryItSectionProps = {
  tryIt: WorkTryIt;
};

const TryItSection = ({ tryIt }: TryItSectionProps) => {
  return (
    <section className="px-6 pt-6">
      <div className={`${surface} mx-auto max-w-4xl p-6 md:p-8`}>
        <h2 className={`${headline} text-2xl`}>Try it</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-slate-600 dark:text-slate-300">
          {tryIt.intro}
        </p>
        <pre className="mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-800 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200">
          <code>{tryIt.commands.join('\n')}</code>
        </pre>
        {tryIt.note ? (
          <p className="mt-5 max-w-2xl leading-relaxed text-slate-600 dark:text-slate-300">
            {tryIt.note}
          </p>
        ) : null}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={tryIt.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={primaryButton}
          >
            <Github className="h-4 w-4" />
            Get the code on GitHub
          </a>
          {tryIt.issuesUrl ? (
            <a
              href={tryIt.issuesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryButton}
            >
              <MessageSquare className="h-4 w-4" />
              Report a bug or idea
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default TryItSection;
