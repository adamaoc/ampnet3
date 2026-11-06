import { SITE } from '@/data/site-copy';
import { headline, lede, surface } from '@/lib/studio';

export default function ContactPage() {
  return (
    <div className="px-6 pb-20 pt-28">
      <div className="mx-auto max-w-2xl">
        <h1 className={`${headline} text-4xl md:text-5xl`}>
          {SITE.contactHeading}
        </h1>
        <p className={`${lede} mt-4`}>{SITE.contactLede}</p>
        <div className={`${surface} mt-10 p-6 md:p-8`}>
          <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
            Email
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className={`${headline} mt-2 block text-lg underline decoration-teal-800/30 underline-offset-4 dark:decoration-teal-300/30 md:text-3xl`}
          >
            {SITE.email}
          </a>
        </div>
      </div>
    </div>
  );
}
