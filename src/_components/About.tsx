import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
          About ampnet
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
          We&apos;re a collective of digital dreamers, code poets, and visual
          storytellers. Born from the intersection of creativity and technology,
          we believe in crafting experiences that don&apos;t just function—they
          flow, inspire, and leave lasting impressions.
        </p>
        <p className="text-lg text-slate-500 dark:text-slate-300 leading-relaxed">
          Every project is a canvas, every line of code a brushstroke, every
          frame a moment of magic waiting to unfold.
        </p>

        <Link
          href="/about"
          className="inline-block mt-8 px-6 py-3 text-lg font-semibold bg-gradient-to-r from-teal-600 to-orange-600 dark:from-pink-600 dark:to-purple-600 bg-clip-text text-transparent hover:from-teal-700 hover:to-orange-700 dark:hover:from-pink-700 dark:hover:to-purple-700 transition-all duration-200"
        >
          Learn more about us and our team →
        </Link>
      </div>
    </section>
  );
}
