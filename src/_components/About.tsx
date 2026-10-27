import { SITE } from '@/data/site-copy';
import { headline, lede } from '@/lib/studio';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 pt-14 pb-6">
      <div className="mx-auto max-w-3xl">
        <h2 className={`${headline} text-3xl md:text-4xl`}>About</h2>
        <p className={`${lede} mt-4`}>{SITE.about}</p>
        <p className={`${lede} mt-4`}>{SITE.aboutClose}</p>
        <Link
          href="/about/"
          className="mt-5 inline-flex text-sm font-semibold text-teal-800 underline-offset-4 hover:underline dark:text-teal-300"
        >
          About AmpNet
        </Link>
      </div>
    </section>
  );
}
