import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'autoink.us',
        port: '',
        pathname: '/img/team/**',
      },
    ],
  },
  // Disable server-side features for static export
  experimental: {
    esmExternals: true,
  },
};

export default nextConfig;
