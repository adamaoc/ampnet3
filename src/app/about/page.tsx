import Contact from '@/_components/Contact';
import { serviceFacts } from '@/_components/Services';
import { SITE } from '@/data/site-copy';
import { pageMeta } from '@/lib/seo';
import { headline, lede, surface } from '@/lib/studio';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMeta({
  title: 'About',
  description: SITE.about,
  path: '/about/',
});

export default function AboutPage() {
  return (
    <div className="pb-2 pt-28">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className={`${headline} text-4xl md:text-5xl`}>About</h1>
        <p className={`${lede} mt-3`}>{SITE.about}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {serviceFacts.map(service => (
            <div key={service.title} className={`${surface} p-5`}>
              <service.icon
                className="h-5 w-5 text-teal-800 dark:text-teal-300"
                strokeWidth={1.75}
                aria-hidden
              />
              <h2 className="mt-3 text-lg font-semibold text-slate-950 dark:text-white">
                {service.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Contact compact />
    </div>
  );
}
