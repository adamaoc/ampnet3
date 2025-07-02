export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/20 dark:border-slate-700/20">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-orange-600 dark:from-pink-600 dark:to-purple-600 bg-clip-text text-transparent mb-4">
          ampnet (media)
        </div>
        <p className="text-slate-500 dark:text-slate-200">
          © {new Date().getFullYear()} ampnet media. Crafting digital
          experiences with love.
        </p>
      </div>
    </footer>
  );
}
