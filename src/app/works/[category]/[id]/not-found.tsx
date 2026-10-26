import { headline, primaryButton, secondaryButton, surface } from '@/lib/studio';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="px-6 pb-20 pt-28">
      <div className={`${surface} mx-auto max-w-xl p-8 text-center`}>
        <h1 className={`${headline} text-3xl`}>Work not found</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          That project is not on the public list.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/works/" className={primaryButton}>
            Back to work
          </Link>
          <Link href="/" className={secondaryButton}>
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
