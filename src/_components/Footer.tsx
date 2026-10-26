import { SITE } from '@/data/site-copy';
import { lockup } from '@/lib/studio';
import Link from 'next/link';

const LINKS = [
  { name: 'Services', href: '/#services' },
  { name: 'Work', href: '/works/' },
  { name: 'About', href: '/about/' },
  { name: 'Start a project', href: '/contact/' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 px-6 py-10 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className={`${lockup} text-lg`}>{SITE.name}</p>
            <p className="mt-2 max-w-md text-sm text-slate-600 dark:text-slate-300">
              {SITE.footerLine}
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
            {LINKS.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-1 text-sm text-slate-600 dark:text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={`mailto:${SITE.email}`}
            className="font-medium text-slate-950 underline-offset-4 hover:underline dark:text-white"
          >
            {SITE.email}
          </a>
          <p>{SITE.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
