#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Get site ID and API URL from environment variables or use defaults for local development
const SITE_ID =
  process.env.NEXT_PUBLIC_SITE_ID || 'c679a9bd-e6f3-4148-90d3-b5793f22b1c1';
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3005/api';

async function fetchWebsiteData() {
  console.log('🔄 Fetching website data for build...');

  try {
    const response = await fetch(
      'https://flexhub.ampnet.media/api/public/sites'
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Ensure data directory exists
    const dataDir = path.join(process.cwd(), 'src/data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Sort and get featured websites (for homepage)
    const sortedSites = data.sites.sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
    const featuredSites = sortedSites.slice(0, 4);

    // Generate TypeScript file with the data
    const tsContent = `// Auto-generated file - DO NOT EDIT MANUALLY
// Generated at build time from FlexHub API
// Last updated: ${new Date().toISOString()}

import type { Website, ApiResponse } from '@/types';

export const websitesApiData: ApiResponse = ${JSON.stringify(data, null, 2)};

export const featuredWebsitesData: Website[] = ${JSON.stringify(
      featuredSites,
      null,
      2
    )};

export const getWebsitesData = (): ApiResponse => websitesApiData;

export const getFeaturedWebsites = (): Website[] => featuredWebsitesData;

export const getAllWebsites = (): Website[] => websitesApiData.sites;

export const getWebsiteById = (id: string): Website | undefined => {
  return websitesApiData.sites.find(site => site.id === id);
};
`;

    const tsFilePath = path.join(dataDir, 'websites-generated.ts');
    fs.writeFileSync(tsFilePath, tsContent);

    console.log(`✅ Successfully fetched ${data.sites.length} websites`);
    console.log(`📁 Data saved to: ${tsFilePath}`);

    return data;
  } catch (error) {
    console.error('❌ Error fetching website data:', error.message);

    // Create fallback TypeScript file if fetch fails
    const dataDir = path.join(process.cwd(), 'src/data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const fallbackContent = `// Auto-generated fallback file - DO NOT EDIT MANUALLY
// Generated at build time (API fetch failed)
// Last updated: ${new Date().toISOString()}

import type { Website, ApiResponse } from '@/types';

export const websitesApiData: ApiResponse = {
  sites: [],
  count: 0,
  lastUpdated: "${new Date().toISOString()}"
};

export const featuredWebsitesData: Website[] = [];

export const getWebsitesData = (): ApiResponse => websitesApiData;

export const getFeaturedWebsites = (): Website[] => featuredWebsitesData;

export const getAllWebsites = (): Website[] => websitesApiData.sites;

export const getWebsiteById = (id: string): Website | undefined => {
  return websitesApiData.sites.find(site => site.id === id);
};
`;

    const tsFilePath = path.join(dataDir, 'websites-generated.ts');
    fs.writeFileSync(tsFilePath, fallbackContent);

    console.log('📝 Created fallback data file');
    return { sites: [], count: 0, lastUpdated: new Date().toISOString() };
  }
}

async function fetchWorksData() {
  console.log('🔄 Fetching works data for build...');

  try {
    const response = await fetch(`${API_URL}/public/sites/${SITE_ID}/works`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Map API response to our expected WorkItem format
    const mappedWorks = (data.works || []).map(work => ({
      id: work.id,
      title: work.title,
      category: work.category.toLowerCase().replace('_', '-'), // CLI_TOOL -> cli-tool
      image: work.image || '',
      description: work.description || '',
      excerpt: work.excerpt,
      type: work.type.toLowerCase() === 'work' ? 'work' : 'website', // WORK -> work
      date: work.date || work.createdAt,
      client: work.client,
      featured: work.featured,
      technologies: work.technologies || [],
      duration: work.duration,
      results: work.results,
      githubUrl: work.githubUrl,
      videoUrl: work.videoUrl,
      url: work.url,
      createdAt: work.createdAt,
      updatedAt: work.updatedAt,
    }));

    const mappedData = {
      ...data,
      works: mappedWorks,
    };

    // Ensure data directory exists
    const dataDir = path.join(process.cwd(), 'src/data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Generate TypeScript file with the works data
    const tsContent = `// Auto-generated file - DO NOT EDIT MANUALLY
// Generated at build time from FlexHub API
// Last updated: ${new Date().toISOString()}

import type { WorkItem } from '@/types';

export const worksApiData = ${JSON.stringify(mappedData, null, 2)};

export const getAllWorks = (): WorkItem[] => (worksApiData.works || []) as WorkItem[];

export const getFeaturedWorks = (): WorkItem[] => {
  const works = (worksApiData.works || []) as WorkItem[];
  return works.filter(work => work.featured).slice(0, 6);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getWorksByCategory = (_category: string): WorkItem[] => {
  const works = (worksApiData.works || []) as WorkItem[];
  return works.filter(work => work.category === _category);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getWorkById = (_id: string): WorkItem | undefined => {
  const works = (worksApiData.works || []) as WorkItem[];
  return works.find(work => work.id === _id);
};
`;

    const tsFilePath = path.join(dataDir, 'api-works.ts');
    fs.writeFileSync(tsFilePath, tsContent);

    console.log(`✅ Successfully fetched ${data.works?.length || 0} works`);
    console.log(`📁 Data saved to: ${tsFilePath}`);

    return data;
  } catch (error) {
    console.error('❌ Error fetching works data:', error.message);

    // Create fallback TypeScript file if fetch fails
    const dataDir = path.join(process.cwd(), 'src/data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const fallbackContent = `// Auto-generated fallback file - DO NOT EDIT MANUALLY
// Generated at build time (API fetch failed)
// Last updated: ${new Date().toISOString()}

import type { WorkItem } from '@/types';

export const worksApiData = {
  works: [],
  count: 0,
  lastUpdated: "${new Date().toISOString()}"
};

export const getAllWorks = (): WorkItem[] => [];

export const getFeaturedWorks = (): WorkItem[] => [];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getWorksByCategory = (_category: string): WorkItem[] => {
  return [];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getWorkById = (_id: string): WorkItem | undefined => {
  return undefined;
};
`;

    const tsFilePath = path.join(dataDir, 'api-works.ts');
    fs.writeFileSync(tsFilePath, fallbackContent);

    console.log('📝 Created fallback works data file');
    return { works: [], count: 0, lastUpdated: new Date().toISOString() };
  }
}

// Run both fetches when this script is executed
Promise.all([fetchWebsiteData(), fetchWorksData()])
  .then(() => {
    console.log('🎉 Build data fetch complete!');
  })
  .catch(error => {
    console.error('💥 Build data fetch failed:', error);
    process.exit(1);
  });
