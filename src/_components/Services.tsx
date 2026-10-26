import { SITE } from '@/data/site-copy';
import { headline, lede, surface } from '@/lib/studio';
import { Boxes, Globe } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Websites',
    description:
      'Marketing sites, magazines, and product sites built for the people who use them.',
  },
  {
    icon: Boxes,
    title: 'Tools and products',
    description:
      'Interfaces and software that do a job, including open-source tools we maintain.',
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 px-6 py-14">
      <div className="mx-auto max-w-3xl">
        <h2 className={`${headline} text-3xl md:text-4xl`}>What we build</h2>
        <p className={`${lede} mt-3`}>
          Websites first, then tools and products.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {services.map(service => (
            <div key={service.title} className={`${surface} p-6`}>
              <service.icon
                className="h-5 w-5 text-teal-800 dark:text-teal-300"
                strokeWidth={1.75}
                aria-hidden
              />
              <h3 className="mt-4 text-lg font-semibold text-slate-950 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-600 dark:text-slate-300">
          {SITE.alsoAvailable}
        </p>
      </div>
    </section>
  );
}
