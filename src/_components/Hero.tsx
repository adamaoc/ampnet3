import { SITE } from '@/data/site-copy';
import { headline, lede, primaryButton, secondaryButton } from '@/lib/studio';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="px-6 pb-12 pt-28 md:pb-16 md:pt-32">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-800 dark:text-teal-300">
          Dallas
        </p>
        <h1
          className={`${headline} mt-3 text-4xl leading-[1.1] sm:text-5xl md:text-6xl`}
        >
          {SITE.heroTitle}
        </h1>
        <p className={`${lede} mt-5 max-w-2xl`}>{SITE.heroSubhead}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href={SITE.primaryHref} className={primaryButton}>
            {SITE.primaryCta}
          </Link>
          <Link href={SITE.secondaryHref} className={secondaryButton}>
            {SITE.secondaryCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
