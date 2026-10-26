'use client';

import { SITE } from '@/data/site-copy';
import { lockup, primaryButton } from '@/lib/studio';
import { Menu, Moon, Sun, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV = [
  { name: 'Services', href: '/#services' },
  { name: 'Work', href: '/works/' },
  { name: 'About', href: '/about/' },
];

function isActive(pathname: string, href: string) {
  if (href.startsWith('/#')) return false;
  const path = href.replace(/\/$/, '') || '/';
  if (path === '/works') return pathname.startsWith('/works');
  if (path === '/about') return pathname.startsWith('/about');
  if (path === '/contact') return pathname.startsWith('/contact');
  return pathname === path || pathname === `${path}/`;
}

export default function Navigation() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setDarkMode(currentTheme === 'dark');
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      html.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode, mounted]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-slate-50/90 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/90">
      <nav
        className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 md:px-6"
        aria-label="Primary"
      >
        <Link href="/" className={`${lockup} mr-auto text-lg`}>
          {SITE.name}
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {NAV.map(item => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? 'text-slate-950 dark:text-white'
                    : 'text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <Link href={SITE.primaryHref} className={`${primaryButton} px-4`}>
          {SITE.primaryCta}
        </Link>

        <button
          type="button"
          onClick={() => setDarkMode(!darkMode)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-800 hover:border-slate-400 dark:border-slate-700 dark:text-slate-100"
          aria-label={
            mounted && darkMode ? 'Switch to light mode' : 'Switch to dark mode'
          }
        >
          {mounted ? (
            darkMode ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )
          ) : (
            <span className="h-4 w-4" />
          )}
        </button>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-800 md:hidden dark:border-slate-700 dark:text-slate-100"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(open => !open)}
        >
          {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {menuOpen ? (
        <div className="border-t border-slate-200 bg-slate-50 px-4 py-4 md:hidden dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {NAV.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
