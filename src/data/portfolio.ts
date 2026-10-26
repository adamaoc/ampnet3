import type { Website, WorkItem } from '@/types';
import { SITE } from './site-copy';
import { getAllWorks } from './api-works';
import { getAllWebsites } from './websites';

// Public portfolio allowlist, in works-page order.
// Homepage features are the first six. AutoInk and ampnet.media are omitted.

const IDS = {
  gravityRail: 'gravity-rail',
  emizel: 'c88dba6f-b3fa-46fb-8fce-5881dd308043',
  txgarage: 'a3258a5d-d450-4377-a878-7834701396ce',
  devision: '6e954991-5a93-40ba-81e4-2a813b85ab47',
  photopti: '80f46314-46f7-46ff-88c2-1094c1e50719',
  wink: '14b5a8cc-23d3-4b5c-8148-a162fabc42cc',
  scheduleClean: '326556ad-58e9-48e1-a13c-00de528d11a0',
  pirateBen: '36247f43-b687-49b1-a51f-6fad95bd5a94',
  deepfakeGoldfish: '937779d3-41af-47fa-9d99-c01f700d922e',
  realview: 'realview',
} as const;

const ORDER: string[] = [
  IDS.gravityRail,
  IDS.emizel,
  IDS.txgarage,
  IDS.devision,
  IDS.photopti,
  IDS.wink,
  IDS.scheduleClean,
  IDS.pirateBen,
  IDS.deepfakeGoldfish,
  IDS.realview,
];

const FEATURED = new Set<string>(ORDER.slice(0, 6));
const LEAD = new Set<string>([IDS.gravityRail, IDS.emizel, IDS.txgarage]);

const DROPPED_IDS = new Set([
  'f12af726-c2c4-48b5-8ff7-84d6c7fd6f12',
  '396fda62-3465-4da0-a934-b82272819e99',
]);

const DROPPED_DOMAINS = new Set([
  'autoink.us',
  'www.autoink.us',
  'ampnet.media',
  'www.ampnet.media',
]);

type PortfolioCopy = {
  title?: string;
  summary: string;
  description?: string;
  creditOnly?: boolean;
};

const COPY: Record<string, PortfolioCopy> = {
  [IDS.gravityRail]: {
    title: 'Gravity Rail',
    summary: SITE.gravityRailCredit,
    description: SITE.gravityRailCredit,
    creditOnly: true,
  },
  [IDS.emizel]: {
    summary: 'Bilingual call-center site and job board. Built by AmpNet.',
    description: 'Bilingual call-center site and job board. Built by AmpNet.',
    creditOnly: true,
  },
  [IDS.txgarage]: {
    summary: 'Texas auto magazine. Built by AmpNet.',
    description: 'Texas auto magazine. Built by AmpNet.',
    creditOnly: true,
  },
  [IDS.devision]: {
    summary: 'Portfolio and booking. Built by AmpNet.',
    description: 'Portfolio and booking. Built by AmpNet.',
    creditOnly: true,
  },
  [IDS.photopti]: {
    title: 'Photopti',
    summary: 'Open-source CLI tool. Built by AmpNet.',
  },
  [IDS.wink]: {
    title: 'W-Ink',
    summary: 'Open-source React editor. Built by AmpNet.',
  },
  [IDS.scheduleClean]: {
    summary: 'Built by AmpNet.',
    description: 'Built by AmpNet.',
    creditOnly: true,
  },
  [IDS.pirateBen]: {
    summary: 'Built by AmpNet.',
    description: 'Built by AmpNet.',
    creditOnly: true,
  },
  [IDS.deepfakeGoldfish]: {
    summary: 'Built by AmpNet.',
    description: 'Built by AmpNet.',
    creditOnly: true,
  },
  // One-liner reused from Adam's public projects list. Staging stays visible
  // so this is a credit, not a claim that the product has launched.
  [IDS.realview]: {
    title: 'RealView',
    summary:
      'Home-tour review product. Buyers review listings after in-person showings. Built by AmpNet. Staging site, not production.',
    description:
      'Home-tour review product. Buyers review listings after in-person showings. Built by AmpNet. Staging site, not production.',
    creditOnly: true,
  },
};

const emptyFeatures: Website['features'] = [];

function website(
  id: string,
  name: string,
  domain: string,
  description: string,
  logo: string | null,
  coverImage: string | null,
  createdAt: string,
  updatedAt: string
): Website {
  return {
    id,
    name,
    domain,
    logo,
    coverImage,
    description,
    createdAt,
    updatedAt,
    features: emptyFeatures,
  };
}

const FALLBACK_WEBSITES: Record<string, Website> = {
  [IDS.gravityRail]: website(
    IDS.gravityRail,
    'Gravity Rail',
    'gravity-rail.com',
    SITE.gravityRailCredit,
    '/images/projects/gravity-rail-logo.webp',
    '/images/projects/gravity-rail-cover.webp',
    '',
    ''
  ),
  [IDS.emizel]: website(
    IDS.emizel,
    'Emizel',
    'emizel.com',
    'Bilingual call-center site and job board. Built by AmpNet.',
    'https://flexhub-assets.nyc3.digitaloceanspaces.com/flexhub/sites/c88dba6f-b3fa-46fb-8fce-5881dd308043/logo-1751424293056-1751424293056.png',
    'https://flexhub-assets.nyc3.digitaloceanspaces.com/flexhub/sites/c88dba6f-b3fa-46fb-8fce-5881dd308043/coverImage-1751424258630-1751424258630.png',
    '2025-06-22T11:53:31.223Z',
    '2025-07-02T02:44:53.075Z'
  ),
  [IDS.txgarage]: website(
    IDS.txgarage,
    'TXGarage',
    'txgarage.com',
    'Texas auto magazine. Built by AmpNet.',
    'https://flexhub-assets.nyc3.digitaloceanspaces.com/flexhub/sites/a3258a5d-d450-4377-a878-7834701396ce/logo-1751171753353-1751171753353.png',
    'https://flexhub-assets.nyc3.digitaloceanspaces.com/flexhub/sites/a3258a5d-d450-4377-a878-7834701396ce/coverImage-1751424594033-1751424594033.png',
    '2025-06-22T11:44:14.231Z',
    '2025-07-02T02:50:46.769Z'
  ),
  [IDS.devision]: website(
    IDS.devision,
    'Devision Media',
    'devisionmedia.net',
    'Portfolio and booking. Built by AmpNet.',
    'https://flexhub-assets.nyc3.digitaloceanspaces.com/flexhub/sites/6e954991-5a93-40ba-81e4-2a813b85ab47/logo-1752896576598-1752896576598.png',
    'https://flexhub-assets.nyc3.digitaloceanspaces.com/flexhub/sites/6e954991-5a93-40ba-81e4-2a813b85ab47/coverImage-1752896551334-1752896551334.png',
    '2025-07-17T13:49:35.121Z',
    '2025-07-19T03:42:56.643Z'
  ),
  [IDS.scheduleClean]: website(
    IDS.scheduleClean,
    'Schedule Clean',
    'schedulecleandallas.com',
    'Built by AmpNet.',
    'https://flexhub-assets.nyc3.digitaloceanspaces.com/flexhub/sites/326556ad-58e9-48e1-a13c-00de528d11a0/logo-1752505716765-1752505716765.png',
    'https://flexhub-assets.nyc3.digitaloceanspaces.com/flexhub/sites/326556ad-58e9-48e1-a13c-00de528d11a0/coverImage-1752505722488-1752505722488.png',
    '2025-07-14T15:07:48.918Z',
    '2025-07-14T15:08:42.525Z'
  ),
  [IDS.pirateBen]: website(
    IDS.pirateBen,
    'Pirate Ben',
    'pirateben.com',
    'Built by AmpNet.',
    'https://flexhub-assets.nyc3.digitaloceanspaces.com/flexhub/sites/36247f43-b687-49b1-a51f-6fad95bd5a94/logo-1751728217448-1751728217448.png',
    'https://flexhub-assets.nyc3.digitaloceanspaces.com/flexhub/sites/36247f43-b687-49b1-a51f-6fad95bd5a94/coverImage-1751728224403-1751728224403.png',
    '2025-06-22T12:02:03.797Z',
    '2025-07-05T16:19:04.206Z'
  ),
  [IDS.deepfakeGoldfish]: website(
    IDS.deepfakeGoldfish,
    'Deepfake Goldfish',
    'deepfakegoldfish.com',
    'Built by AmpNet.',
    'https://flexhub-assets.nyc3.digitaloceanspaces.com/flexhub/sites/937779d3-41af-47fa-9d99-c01f700d922e/logo-1751171650067-1751171650067.png',
    'https://flexhub-assets.nyc3.digitaloceanspaces.com/flexhub/sites/937779d3-41af-47fa-9d99-c01f700d922e/coverImage-1751424477776-1751424477776.png',
    '2025-06-22T11:54:00.469Z',
    '2025-07-02T02:48:38.760Z'
  ),
  [IDS.realview]: website(
    IDS.realview,
    'RealView',
    'stage.realview.house',
    'Home-tour review product. Buyers review listings after in-person showings. Built by AmpNet. Staging site, not production.',
    null,
    null,
    '',
    ''
  ),
};

function baseWork(
  id: string,
  title: string,
  category: string,
  type: WorkItem['type'],
  image: string,
  description: string,
  url?: string
): WorkItem {
  return {
    id,
    title,
    category,
    image,
    description,
    summary: description,
    type,
    date: '',
    url: url ?? null,
    createdAt: '',
    updatedAt: '',
  };
}

const FALLBACK_WORKS: Record<string, WorkItem> = {
  [IDS.gravityRail]: baseWork(
    IDS.gravityRail,
    'Gravity Rail',
    'website',
    'website',
    '/images/projects/gravity-rail-cover.webp',
    SITE.gravityRailCredit,
    SITE.gravityRailUrl
  ),
  [IDS.emizel]: {
    ...baseWork(
      IDS.emizel,
      'Emizel',
      'website',
      'website',
      FALLBACK_WEBSITES[IDS.emizel].logo || '',
      FALLBACK_WEBSITES[IDS.emizel].description || '',
      'https://emizel.com'
    ),
    date: FALLBACK_WEBSITES[IDS.emizel].createdAt,
    createdAt: FALLBACK_WEBSITES[IDS.emizel].createdAt,
    updatedAt: FALLBACK_WEBSITES[IDS.emizel].updatedAt,
  },
  [IDS.txgarage]: {
    ...baseWork(
      IDS.txgarage,
      'TXGarage',
      'website',
      'website',
      FALLBACK_WEBSITES[IDS.txgarage].logo || '',
      FALLBACK_WEBSITES[IDS.txgarage].description || '',
      'https://txgarage.com'
    ),
    date: FALLBACK_WEBSITES[IDS.txgarage].createdAt,
    createdAt: FALLBACK_WEBSITES[IDS.txgarage].createdAt,
    updatedAt: FALLBACK_WEBSITES[IDS.txgarage].updatedAt,
  },
  [IDS.devision]: {
    ...baseWork(
      IDS.devision,
      'Devision Media',
      'website',
      'website',
      FALLBACK_WEBSITES[IDS.devision].logo || '',
      FALLBACK_WEBSITES[IDS.devision].description || '',
      'https://devisionmedia.net'
    ),
    date: FALLBACK_WEBSITES[IDS.devision].createdAt,
    createdAt: FALLBACK_WEBSITES[IDS.devision].createdAt,
    updatedAt: FALLBACK_WEBSITES[IDS.devision].updatedAt,
  },
  [IDS.photopti]: {
    ...baseWork(
      IDS.photopti,
      'Photopti',
      'cli-tool',
      'work',
      'https://flexhub-assets.nyc3.digitaloceanspaces.com/flexhub/media/ampnet-media/works/1756172569401-Logo-Work-2.jpg',
      'An open-source photo resizing, optimizing, and renaming tool built for the command line.',
      'https://github.com/ampnetmedia/photopti'
    ),
    excerpt:
      'An open-source photo resizing, optimizing, and renaming tool built for the command line.',
    client: 'Open Source',
    technologies: ['Typescript', 'Javascript'],
    githubUrl: 'https://github.com/ampnetmedia/photopti',
    date: '2025-08-04T00:00:00.000Z',
    createdAt: '2025-08-26T01:45:45.351Z',
    updatedAt: '2025-09-04T03:34:59.946Z',
  },
  [IDS.wink]: {
    ...baseWork(
      IDS.wink,
      'W-Ink',
      'cli-tool',
      'work',
      'https://flexhub-assets.nyc3.digitaloceanspaces.com/flexhub/media/ampnet-media/works/1758296946370-wink-cover.jpg',
      'A modern WYSIWYG editor with social smarts.',
      'https://www.npmjs.com/package/@ampnet/wink-wysiwyg'
    ),
    excerpt: 'A modern WYSIWYG editor with social smarts',
    client: 'Open Source',
    technologies: ['React', 'Typescript'],
    githubUrl: 'https://github.com/ampnetmedia/wink-wysiwyg',
    date: '2025-09-08T00:00:00.000Z',
    createdAt: '2025-09-09T18:53:12.962Z',
    updatedAt: '2025-09-19T15:49:09.879Z',
  },
  [IDS.scheduleClean]: {
    ...baseWork(
      IDS.scheduleClean,
      'Schedule Clean',
      'website',
      'website',
      FALLBACK_WEBSITES[IDS.scheduleClean].logo || '',
      FALLBACK_WEBSITES[IDS.scheduleClean].description || '',
      'https://schedulecleandallas.com'
    ),
    date: FALLBACK_WEBSITES[IDS.scheduleClean].createdAt,
    createdAt: FALLBACK_WEBSITES[IDS.scheduleClean].createdAt,
    updatedAt: FALLBACK_WEBSITES[IDS.scheduleClean].updatedAt,
  },
  [IDS.pirateBen]: {
    ...baseWork(
      IDS.pirateBen,
      'Pirate Ben',
      'website',
      'website',
      FALLBACK_WEBSITES[IDS.pirateBen].logo || '',
      FALLBACK_WEBSITES[IDS.pirateBen].description || '',
      'https://pirateben.com'
    ),
    date: FALLBACK_WEBSITES[IDS.pirateBen].createdAt,
    createdAt: FALLBACK_WEBSITES[IDS.pirateBen].createdAt,
    updatedAt: FALLBACK_WEBSITES[IDS.pirateBen].updatedAt,
  },
  [IDS.deepfakeGoldfish]: {
    ...baseWork(
      IDS.deepfakeGoldfish,
      'Deepfake Goldfish',
      'website',
      'website',
      FALLBACK_WEBSITES[IDS.deepfakeGoldfish].logo || '',
      'Built by AmpNet.',
      'https://deepfakegoldfish.com'
    ),
    creditOnly: true,
    date: FALLBACK_WEBSITES[IDS.deepfakeGoldfish].createdAt,
    createdAt: FALLBACK_WEBSITES[IDS.deepfakeGoldfish].createdAt,
    updatedAt: FALLBACK_WEBSITES[IDS.deepfakeGoldfish].updatedAt,
  },
  [IDS.realview]: baseWork(
    IDS.realview,
    'RealView',
    'website',
    'website',
    '',
    'Home-tour review product. Buyers review listings after in-person showings. Built by AmpNet. Staging site, not production.',
    'https://stage.realview.house'
  ),
};

function isDroppedWebsite(site: Pick<Website, 'id' | 'domain' | 'name'>): boolean {
  if (DROPPED_IDS.has(site.id)) return true;
  const domain = (site.domain || '').toLowerCase();
  if (DROPPED_DOMAINS.has(domain)) return true;
  const name = site.name.toLowerCase();
  return name.includes('autoink') || name === 'auto inc' || name === 'ampnet media';
}

function normalizeApiWork(work: WorkItem): WorkItem {
  const category = work.category.toLowerCase().replaceAll('_', '-');
  const rawType = String(work.type).toLowerCase();
  return {
    ...work,
    title: work.title.trim(),
    category,
    type: rawType === 'website' ? 'website' : 'work',
  };
}

function loadSources(): { works: WorkItem[]; sites: Website[] } {
  let works: WorkItem[] = [];
  let sites: Website[] = [];

  try {
    works = getAllWorks().map(normalizeApiWork);
  } catch {
    works = [];
  }

  try {
    sites = getAllWebsites().filter(site => !isDroppedWebsite(site));
  } catch {
    sites = [];
  }

  return { works, sites };
}

function curatePortfolio(apiWorks: WorkItem[], sites: Website[]): WorkItem[] {
  const worksById = new Map(apiWorks.map(work => [work.id, work]));
  const sitesById = new Map(sites.map(site => [site.id, site]));
  const projects: WorkItem[] = [];

  for (const id of ORDER) {
    const fallback = FALLBACK_WORKS[id];
    const apiWork = worksById.get(id);
    const site = sitesById.get(id);
    const copy = COPY[id];

    let work: WorkItem = fallback;

    if (apiWork) {
      work = {
        ...work,
        ...apiWork,
        image: apiWork.image || work.image,
        title: apiWork.title.trim() || work.title,
      };
    }

    if (site) {
      const cover = site.coverImage || null;
      work = {
        ...work,
        title: site.name || work.title,
        description: site.description || work.description,
        image: cover || site.logo || work.image,
        hasCover: Boolean(cover),
        url: site.domain ? `https://${site.domain}` : work.url,
        date: site.createdAt || work.date,
        createdAt: site.createdAt || work.createdAt,
        updatedAt: site.updatedAt || work.updatedAt,
        features: site.features?.length ? site.features : work.features,
        type: 'website',
        category: 'website',
      };
    } else if (work.image && work.type !== 'website') {
      work = { ...work, hasCover: true };
    }

    const creditOnly = copy?.creditOnly ?? work.type === 'website';
    const summary =
      copy?.summary ??
      (creditOnly ? 'Built by AmpNet.' : work.excerpt || work.description);

    work = {
      ...work,
      title: (copy?.title ?? work.title).trim(),
      summary,
      description: copy?.description ?? (creditOnly ? summary : work.description),
      creditOnly,
      featured: FEATURED.has(id),
      hasCover: work.hasCover || (!site && Boolean(work.image) && id === IDS.gravityRail),
    };

    // Usage lines from the works feed were cut. Do not republish them.
    if (id === IDS.photopti || id === IDS.wink) {
      work = { ...work, results: undefined };
    }

    projects.push(work);
  }

  return projects;
}

export function getPortfolioWorks(): WorkItem[] {
  const { works, sites } = loadSources();
  return curatePortfolio(works, sites);
}

export function getFeaturedPortfolio(): WorkItem[] {
  return getPortfolioWorks().filter(work => FEATURED.has(work.id));
}

export function isPortfolioLead(id: string): boolean {
  return LEAD.has(id);
}

export function getPortfolioWork(id: string): WorkItem | undefined {
  return getPortfolioWorks().find(work => work.id === id);
}

export function getPublicWebsite(id: string): Website | null {
  const work = getPortfolioWork(id);
  if (!work || work.type !== 'website') return null;

  const { sites } = loadSources();
  const site = sites.find(item => item.id === id) ?? FALLBACK_WEBSITES[id];
  if (!site) return null;

  return {
    ...site,
    name: work.title,
    description: work.creditOnly
      ? work.description
      : site.description || work.description,
  };
}

export function getWorkHref(work: Pick<WorkItem, 'id' | 'type' | 'category'>): string {
  if (work.type === 'website') return `/works/websites/${work.id}/`;
  return `/works/${work.category}/${work.id}/`;
}

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    website: 'Website',
    'cli-tool': 'Tool',
    video: 'Video',
    seo: 'SEO',
    'social-media': 'Social',
    advertising: 'Advertising',
    design: 'Design',
    consulting: 'Consulting',
  };
  return labels[category] || category;
}

export function getCategoryGroupLabel(category: string): string {
  if (category === 'website') return 'Websites';
  if (category === 'cli-tool') return 'Tools';
  return getCategoryLabel(category);
}

export function formatPortfolioDate(dateString?: string | null): string | null {
  if (!dateString) return null;
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
