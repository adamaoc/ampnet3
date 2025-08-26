// Import API works data
import type { WorkItem } from '@/types';
import { getAllWorks, getFeaturedWorks } from './api-works';
import { getAllWebsites, getFeaturedWebsites } from './websites';

// Legacy static works data (keeping for backward compatibility)
export const works = [
  {
    title: 'Photopti',
    category: 'cli-tool',
    image:
      'https://private-user-images.githubusercontent.com/3495338/478528149-5184517a-572f-4580-905b-01f9b751f529.jpg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTUyODYzODAsIm5iZiI6MTc1NTI4NjA4MCwicGF0aCI6Ii8zNDk1MzM4LzQ3ODUyODE0OS01MTg0NTE3YS01NzJmLTQ1ODAtOTA1Yi0wMWY5Yjc1MWY1MjkuanBnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDgxNSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA4MTVUMTkyODAwWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9NTA5NWJjYTY5NzcxMDFjYWQxMGFhMjgzYTRlYjVhOTZjMWNmMTA0YzY1NDI1MGQ3NGJiYzlhYzk0MDU5OGMyNyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.kwqJRsdXVxn_QvUjJCSOQ_MoWOKIbq8l8t2S_9hpPRg',
    description:
      'This is an Open Source CLI tool for photo resizing, renaming, and optimization.',
    created_at: '2025-08-15',
    updated_at: '2025-08-15',
  },
  {
    title: 'Mustang Video Project',
    category: 'video',
    image:
      'https://flexhub-assets.nyc3.digitaloceanspaces.com/flexhub/sites/f12af726-c2c4-48b5-8ff7-84d6c7fd6f12/coverImage-1751424380283-1751424380283.png',
    description: 'Video shoot for automotive project',
    created_at: '2025-04-09',
    updated_at: '2025-04-09',
  },
  {
    title: 'Project Mustang',
    category: 'video',
    image: '/images/projects/project-mustang-cover.jpg',
    description:
      'Celebrating the Ford Mustang with a cinematic video production',
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
  },
  {
    title: 'TXGarage Ad Campaign',
    category: 'advertising',
    image: '/images/projects/TX-GARAGE-big-quare.png',
    description: 'Comprehensive ad campaign for TXGarage automotive magazine',
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
  },
  {
    title: 'TXGarage Social Launch',
    category: 'social-media',
    image: '/images/projects/TX-GARAGE-big-quare.png',
    description: 'Social media launch campaign for TXGarage',
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
  },
  {
    title: 'SEO Optimization Project',
    category: 'seo',
    image: '',
    description: 'Search engine optimization for existing websites',
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
  },
];

export const websites = [
  {
    id: 'e93fb31b-75fc-480d-9235-992c0db3f74b',
    name: 'Emizel',
    domain: 'emizel.com',
    image: '/images/projects/emizel-el.png',
    description: 'Your trusted partner for call center operations',
    createdAt: '2025-06-23T16:48:50.106Z',
    updatedAt: '2025-06-23T16:49:05.477Z',
    features: [
      {
        id: '2c2a26ea-59a4-48f4-95a8-7216eb0d6ce5',
        feature: 'EMAIL_MANAGEMENT',
        isEnabled: true,
        config: null,
        createdAt: '2025-06-23T16:49:20.106Z',
        updatedAt: '2025-06-23T16:49:20.106Z',
      },
      {
        id: 'ca9fff3a-89a1-4803-9559-7852aa25aae9',
        feature: 'SPONSORS',
        isEnabled: true,
        config: null,
        createdAt: '2025-06-23T16:49:26.702Z',
        updatedAt: '2025-06-23T16:49:26.702Z',
      },
      {
        id: '491c68e6-53d1-480a-9e42-73d9d76e182d',
        feature: 'CONTACT_MANAGEMENT',
        isEnabled: true,
        config: null,
        createdAt: '2025-06-24T21:51:07.514Z',
        updatedAt: '2025-06-24T21:51:07.514Z',
      },
    ],
  },
  {
    id: '56719637-2d0a-49fe-ad16-a3742a0b2777',
    name: 'TXGarage',
    domain: 'txgarage.com',
    image: '/images/projects/TX-GARAGE-big-quare.png',
    description: 'Blog for automotive enthusiasts',
    createdAt: '2025-06-22T11:02:05.437Z',
    updatedAt: '2025-06-22T11:02:05.477Z',
    features: [
      {
        id: 'caadffab-8a54-404f-bb10-bc24cb041335',
        feature: 'BLOG_POSTS',
        isEnabled: true,
        config: null,
        createdAt: '2025-06-22T20:53:33.616Z',
        updatedAt: '2025-06-22T20:53:33.616Z',
      },
      {
        id: '92e90e38-6e6d-48a2-8af3-bbc0df493163',
        feature: 'PAGES',
        isEnabled: true,
        config: null,
        createdAt: '2025-06-22T20:53:42.661Z',
        updatedAt: '2025-06-22T20:53:42.661Z',
      },
      {
        id: 'c206cb87-42ff-4501-aebc-65e673bc5636',
        feature: 'SPONSORS',
        isEnabled: true,
        config: null,
        createdAt: '2025-06-23T17:03:36.525Z',
        updatedAt: '2025-06-23T17:03:36.525Z',
      },
    ],
  },
  {
    id: '86aba2ad-ab19-456b-80ef-2b577f363cf9',
    name: 'Autoink.us',
    domain: 'autoink.us',
    image: '/images/projects/autoink-us.png',
    description: 'Helping automotive brands grow their business',
    createdAt: '2025-06-20T22:37:24.875Z',
    updatedAt: '2025-06-20T22:37:24.875Z',
    features: [
      {
        id: '9fe211eb-9b0e-4f5c-be0f-7a40801b42ee',
        feature: 'SPONSORS',
        isEnabled: true,
        config: null,
        createdAt: '2025-06-23T17:03:36.519Z',
        updatedAt: '2025-06-23T17:03:36.519Z',
      },
    ],
  },
  {
    id: 'afb3a10a-af52-47a3-9acf-f976db666d29',
    name: 'Pirate Ben',
    domain: 'pirateben.com',
    image: '/images/projects/pirateben.jpg',
    description: 'YouTube and Twitch content creator',
    createdAt: '2025-06-20T22:37:24.869Z',
    updatedAt: '2025-06-20T22:37:24.869Z',
    features: [
      {
        id: '7e7a1934-de01-403e-ba10-d9dfff70b67f',
        feature: 'SPONSORS',
        isEnabled: true,
        config: null,
        createdAt: '2025-06-23T17:03:36.513Z',
        updatedAt: '2025-06-23T17:03:36.513Z',
      },
    ],
  },
  {
    id: 'c18a53da-05fc-4fa7-840a-754381ad0b22',
    name: 'Deepfake Goldfish',
    domain: 'deepfakegoldfish.com',
    image: '/images/projects/dfg.png',
    description: 'Deepfake Goldfish is a blog about deepfakes',
    createdAt: '2025-06-20T22:37:24.853Z',
    updatedAt: '2025-06-20T22:37:24.853Z',
    features: [
      {
        id: 'e8bc735c-efb4-450a-985e-34900d8ddba6',
        feature: 'PAGES',
        isEnabled: true,
        config: null,
        createdAt: '2025-06-22T20:52:23.027Z',
        updatedAt: '2025-06-22T20:52:23.027Z',
      },
      {
        id: 'd16c1530-1d90-480b-8d79-cadb9cb83853',
        feature: 'NEWSLETTER',
        isEnabled: true,
        config: null,
        createdAt: '2025-06-22T20:52:33.022Z',
        updatedAt: '2025-06-22T20:52:33.022Z',
      },
      {
        id: '34f981a2-3328-4069-9710-7a8a52676f89',
        feature: 'CONTACT_MANAGEMENT',
        isEnabled: true,
        config: null,
        createdAt: '2025-06-22T20:52:43.338Z',
        updatedAt: '2025-06-22T20:52:43.338Z',
      },
      {
        id: 'ffa1fa49-19c2-458f-be4d-53f928b2bb97',
        feature: 'EMAIL_MANAGEMENT',
        isEnabled: true,
        config: null,
        createdAt: '2025-06-22T20:53:14.915Z',
        updatedAt: '2025-06-22T20:53:14.915Z',
      },
      {
        id: 'd29eb6f2-e095-4869-a59f-edc654bdaf07',
        feature: 'SPONSORS',
        isEnabled: true,
        config: null,
        createdAt: '2025-06-23T17:03:36.501Z',
        updatedAt: '2025-06-23T17:03:36.501Z',
      },
    ],
  },
];

// Combine all works and websites for the works page
export const allWorks = [
  ...works.map(work => ({
    ...work,
    type: 'work',
    updatedAt: work.updated_at,
  })),
  ...websites.map(site => ({
    ...site,
    type: 'website',
    title: site.name,
    category: 'Website',
    description: site.description,
  })),
].sort((a, b) => {
  return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
});

// Function to get combined works data (API works + websites)
export const getCombinedWorks = (): WorkItem[] => {
  try {
    // Get API works data
    const apiWorks = getAllWorks();

    // Get websites data
    const apiWebsites = getAllWebsites();

    // Convert websites to work format
    const websiteWorks = apiWebsites.map(site => ({
      id: site.id,
      title: site.name,
      category: 'website',
      image: site.logo || site.coverImage || '',
      description: site.description || '',
      type: 'website' as const,
      date: site.createdAt,
      url: site.domain ? `https://${site.domain}` : undefined,
      createdAt: site.createdAt,
      updatedAt: site.updatedAt,
      features: site.features,
    }));

    // Combine and sort by date
    return [...apiWorks, ...websiteWorks].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch {
    // Fallback to static data if generated files don't exist
    // Convert static data to WorkItem format
    const staticWorks: WorkItem[] = allWorks.map(work => ({
      id: work.title.toLowerCase().replace(/\s+/g, '-'),
      title: work.title,
      category: work.category,
      image: work.image,
      description: work.description,
      excerpt: work.description.substring(0, 150) + '...',
      type: work.type as 'work' | 'website',
      date: work.updatedAt,
      createdAt: work.updatedAt,
      updatedAt: work.updatedAt,
    }));
    return staticWorks;
  }
};

// Function to get featured works for homepage
export const getFeaturedWorksForHomepage = (): WorkItem[] => {
  try {
    // Get API works data
    const apiWorks = getFeaturedWorks();

    // Get featured websites
    const apiWebsites = getFeaturedWebsites();

    // Convert websites to work format
    const websiteWorks: WorkItem[] = apiWebsites.map(site => ({
      id: site.id,
      title: site.name,
      category: 'website',
      image: site.logo || site.coverImage || '',
      description: site.description || '',
      type: 'website' as const,
      date: site.createdAt,
      url: site.domain ? `https://${site.domain}` : undefined,
      createdAt: site.createdAt,
      updatedAt: site.updatedAt,
      features: site.features,
    }));

    // Combine and sort by date, take first 6
    return [...apiWorks, ...websiteWorks]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 6);
  } catch {
    // Fallback to static data if generated files don't exist
    // Convert static data to WorkItem format
    const staticWorks: WorkItem[] = allWorks.map(work => ({
      id: work.title.toLowerCase().replace(/\s+/g, '-'),
      title: work.title,
      category: work.category,
      image: work.image,
      description: work.description,
      excerpt: work.description.substring(0, 150) + '...',
      type: work.type as 'work' | 'website',
      date: work.updatedAt,
      createdAt: work.updatedAt,
      updatedAt: work.updatedAt,
    }));
    return staticWorks.slice(0, 6);
  }
};
