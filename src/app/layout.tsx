import Footer from '@/_components/Footer';
import Navigation from '@/_components/Navigation';
import { SITE } from '@/data/site-copy';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type React from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'AMPNET — We build digital experiences that perform',
    template: '%s — AMPNET',
  },
  description: SITE.heroSubhead,
};

// Inlined at build time. Both must be set or the tag is omitted, so dev and
// preview builds do not send page views.
const ampGaugeSrc = process.env.NEXT_PUBLIC_AMPGAUGE_SRC;
const ampGaugeSite = process.env.NEXT_PUBLIC_AMPGAUGE_SITE;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme Color for Mobile Browsers */}
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />

        {/* Prevent dark mode flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getThemePreference() {
                  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
                    return localStorage.getItem('theme');
                  }
                  return 'dark';
                }
                
                const theme = getThemePreference();
                const html = document.documentElement;
                
                if (theme === 'dark') {
                  html.classList.add('dark');
                  html.setAttribute('data-theme', 'dark');
                } else {
                  html.classList.remove('dark');
                  html.setAttribute('data-theme', 'light');
                }
                
                // Store the theme preference
                if (typeof localStorage !== 'undefined') {
                  localStorage.setItem('theme', theme);
                }
              })();
            `,
          }}
        />

        {ampGaugeSrc && ampGaugeSite ? (
          <script defer src={ampGaugeSrc} data-site={ampGaugeSite} />
        ) : null}
      </head>
      <body
        className={`${inter.className} min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100`}
        suppressHydrationWarning={true}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
