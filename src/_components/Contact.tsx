import { SITE } from '@/data/site-copy';
import { headline, lede, primaryButton } from '@/lib/studio';
import Link from 'next/link';

export default function Contact({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? 'px-6 pb-10 pt-8' : 'px-6 pb-16 pt-8'}>
      <div className="mx-auto max-w-3xl">
        <h2 className={`${headline} text-3xl md:text-4xl`}>
          {SITE.contactHeading}
        </h2>
        <p className={`${lede} mt-4`}>{SITE.contactLede}</p>
        <p className={`${lede} mt-3`}>
          Or email us at{' '}
          <a
            href={`mailto:${SITE.email}`}
            className="font-semibold text-teal-800 underline underline-offset-4 dark:text-teal-300"
          >
            {SITE.email}
          </a>
          .
        </p>
        <Link
          href={SITE.primaryHref}
          className={`${primaryButton} ${compact ? 'mt-5' : 'mt-6'}`}
        >
          {SITE.primaryCta}
        </Link>
      </div>
    </section>
  );
}
