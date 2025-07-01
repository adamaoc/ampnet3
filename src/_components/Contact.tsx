import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-teal-600 to-orange-600 dark:from-pink-600 dark:to-purple-600 rounded-3xl p-12 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to create something amazing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s bring your vision to life with our signature blend of
            creativity and innovation
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-teal-600 dark:text-purple-900 hover:bg-slate-100 rounded-full px-6 py-2 text-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
