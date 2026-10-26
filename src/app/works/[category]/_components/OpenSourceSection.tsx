import { SITE } from '@/data/site-copy';
import { headline, primaryButton, secondaryButton, surface } from '@/lib/studio';
import { Github } from 'lucide-react';
import Link from 'next/link';

const OpenSourceSection = () => {
  return (
    <section className="px-6 pt-6">
      <div className={`${surface} mx-auto max-w-4xl p-6 md:p-8`}>
        <h2 className={`${headline} text-2xl`}>Open source</h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          AmpNet publishes tools with the code in public. Photopti and W-Ink
          are two of them.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href={SITE.primaryHref} className={primaryButton}>
            {SITE.primaryCta}
          </Link>
          <a
            href="https://github.com/ampnetmedia"
            target="_blank"
            rel="noopener noreferrer"
            className={secondaryButton}
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
