#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

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

// Run the fetch when this script is executed
fetchWebsiteData()
  .then(() => {
    console.log('🎉 Build data fetch complete!');
  })
  .catch(error => {
    console.error('💥 Build data fetch failed:', error);
    process.exit(1);
  });
