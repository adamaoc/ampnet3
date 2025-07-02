'use client';

import { Button } from '@/components/ui/button';
import { Menu, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

function HomeNavItems() {
  return (
    <div className="bg-white/20 dark:bg-slate-900/20 backdrop-blur-2xl border border-white/30 dark:border-slate-700/30 rounded-full px-8 py-2 shadow-2xl hidden sm:block">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-6">
          <a
            href="#services"
            className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium"
            suppressHydrationWarning
          >
            Services
          </a>
          <a
            href="#work"
            className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium"
            suppressHydrationWarning
          >
            Work
          </a>
          <a
            href="#about"
            className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium"
            suppressHydrationWarning
          >
            About
          </a>
        </div>
      </div>
    </div>
  );
}

function AboutNavItems() {
  return (
    <div className="bg-white/20 dark:bg-slate-900/20 backdrop-blur-2xl border border-white/30 dark:border-slate-700/30 rounded-full px-8 py-2 shadow-2xl hidden sm:block">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-6">
          <a
            href="#our-story"
            className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium"
            suppressHydrationWarning
          >
            Our Story
          </a>
          <a
            href="#our-values"
            className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium"
            suppressHydrationWarning
          >
            Our Values
          </a>
          <a
            href="#our-team"
            className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium"
            suppressHydrationWarning
          >
            Our Team
          </a>
        </div>
      </div>
    </div>
  );
}

function MenuDropdown({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const nav = [
    {
      id: 1001,
      name: 'Contact',
      url: '/contact',
    },
    {
      id: 1002,
      name: 'Works',
      url: '/works',
    },
    {
      id: 1003,
      name: 'About',
      url: '/about',
    },
    // {
    //   id: 1004,
    //   name: 'Magic',
    //   url: '/magic',
    // },
  ];
  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sliding menu panel */}
      <div
        className={`fixed top-[70px] right-4 h-auto w-[220px] rounded-md bg-white md:bg-white/60 dark:bg-slate-900 md:dark:bg-slate-900/60 shadow-2xl z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-[400px]'
        }`}
      >
        <div className="">
          <div className="flex flex-col gap-6 py-4">
            {nav.map(item => {
              return (
                <Link
                  key={item.id}
                  href={item.url}
                  onClick={onClose}
                  className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium text-xl px-4 py-3 hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default function Navigation() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isAboutPage = pathname === '/about/';

  useEffect(() => {
    setMounted(true);
    // Sync with the theme that was already set by the inline script
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setDarkMode(currentTheme === 'dark');
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Update the theme when user toggles
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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center w-full px-8 gap-8"
      suppressHydrationWarning
    >
      <Link
        href="/"
        className="text-xl font-bold bg-gradient-to-r from-teal-600 to-orange-600 dark:from-pink-600 dark:to-purple-600 bg-clip-text text-transparent mr-auto hover:opacity-80 transition-opacity"
        suppressHydrationWarning
      >
        ampnet (media)
      </Link>
      {isHomePage && <HomeNavItems />}
      {isAboutPage && <AboutNavItems />}
      <div className="bg-white/20 dark:bg-slate-900/20 backdrop-blur-2xl border border-white/30 dark:border-slate-700/30 rounded-full px-4 py-1 shadow-2xl min-w-[106px]">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setDarkMode(!darkMode)}
          className="rounded-full hover:bg-white/20 dark:hover:bg-slate-800/20 cursor-pointer"
        >
          {mounted ? (
            darkMode ? (
              <Sun className="h-5 w-5 text-white" />
            ) : (
              <Moon className="h-5 w-5" />
            )
          ) : (
            <div className="h-5 w-5" />
          )}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={e => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
          className="rounded-full hover:bg-white/20 dark:hover:bg-slate-800/20 cursor-pointer"
        >
          <Menu className="h-5 w-5 dark:text-white" />
        </Button>
      </div>
      <MenuDropdown isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </nav>
  );
}
