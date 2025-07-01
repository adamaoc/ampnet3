import type React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/_components/Navigation';
import Footer from '@/_components/Footer';

const inter = Inter({ subsets: ['latin'] });

// Move metadata to a separate file since client components can't export metadata
// export const metadata: Metadata = {
//   title: "ampnet (media) - Digital Creative Studio",
//   description: "We craft digital magic through web video, development, advertising, and social media",
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>ampnet (media) - Digital Creative Studio</title>
        <meta
          name="description"
          content="We craft digital magic through web video, development, advertising, and social media"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="min-h-screen transition-all duration-500">
          <div className="bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900/50 dark:to-pink-900/50 min-h-screen">
            <Navigation />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
