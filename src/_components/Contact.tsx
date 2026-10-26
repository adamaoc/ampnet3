import { SITE } from '@/data/site-copy';
import Link from 'next/link';

export default function Contact() {
  return (
    <section className="px-6 py-14">
      <div className="mx-auto max-w-3xl rounded-2xl bg-slate-950 px-6 py-10 text-white md:px-10">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {SITE.contactHeading}
        </h2>
        <p className="mt-4 text-slate-300">
          Or email us at{' '}
          <a
            href={`mailto:${SITE.email}`}
            className="font-medium text-white underline underline-offset-4"
          >
            {SITE.email}
          </a>
          .
        </p>
        <Link
          href={SITE.primaryHref}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {SITE.primaryCta}
        </Link>
      </div>
    </section>
  );
}
