import { headline, surface } from '@/lib/studio';
import type { WorkScreenshot } from '@/types';
import Image from 'next/image';

type ScreenshotsSectionProps = {
  screenshots: WorkScreenshot[];
};

const ScreenshotsSection = ({ screenshots }: ScreenshotsSectionProps) => {
  return (
    <section className="px-6 pt-6">
      <div className={`${surface} mx-auto max-w-4xl p-6 md:p-8`}>
        <h2 className={`${headline} text-2xl`}>Screenshots</h2>
        <div className="mt-6 space-y-8">
          {screenshots.map(shot => (
            <figure key={shot.src}>
              {/* Opens the full-size file in a new tab. */}
              <a
                href={shot.src}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  className="h-auto w-full"
                  unoptimized
                />
              </a>
              <figcaption className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
