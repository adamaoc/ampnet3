import type { Website, WorkItem } from '@/types';
import { SITE } from './site-copy';

// Public portfolio allowlist. AutoInk and ampnet.media are omitted.
// Homepage features are the first six listed here. Both pages show work
// newest first by updatedAt (see sortByUpdated).

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

// Same screenshots already in the portfolio, saved locally so the cards
// do not depend on a remote image load. Not new artwork.
const LOCAL_COVER: Record<string, string> = {
  [IDS.gravityRail]: '/images/projects/gravity-rail-cover.webp',
  [IDS.emizel]: '/images/projects/emizel-cover.webp',
  [IDS.txgarage]: '/images/projects/txgarage-cover.webp',
  [IDS.devision]: '/images/projects/devision-cover.webp',
  [IDS.wink]: '/images/projects/wink-cover.webp',
  [IDS.photopti]: '/images/projects/photopti-gallery.webp',
  [IDS.scheduleClean]: '/images/projects/schedule-clean-cover.png',
  [IDS.pirateBen]: '/images/projects/pirate-ben-cover.png',
  [IDS.deepfakeGoldfish]: '/images/projects/deepfake-goldfish-cover.png',
  // AmpFrames board of the live site (four widths), not a hand mockup.
  [IDS.realview]: '/images/projects/realview-cover.webp',
};

function isLogoArt(src: string | null | undefined): boolean {
  if (!src) return false;
  return src.split('?')[0].toLowerCase().includes('logo');
}

const PHOTOPTI_REPO = 'https://github.com/adamaoc/photopti-app';

const PHOTOPTI_SUMMARY =
  'Open-source desktop app that resizes and compresses batches of photos on your own computer. Built by AmpNet.';

const PHOTOPTI_DESCRIPTION = `<p>Drop in a folder of photos, pick a size and quality, and Photopti writes smaller copies to an <code>Opti</code> folder next to them. Your originals are never changed, and nothing is uploaded.</p>
<ul>
<li>Resize by width or by percentage, with a quality slider.</li>
<li>Save as JPEG, WebP, or AVIF. Reads PNG, JPEG, WebP, GIF, TIFF, BMP, AVIF, HEIC, and HEIF.</li>
<li>Rename a batch with numbered file names.</li>
<li>Crop one photo as a cover image at a set size.</li>
<li>Keep or strip photo metadata. Cancel a batch while it runs.</li>
</ul>
<p>Built with Electron and Sharp. The code is MIT licensed.</p>`;

const REALVIEW_SUMMARY =
  'Home-tour review site. Buyers review listings after in-person showings. Built by AmpNet.';

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
    summary:
      'Bilingual marketing site and job board for a San Salvador call center. Built by AmpNet.',
    description:
      'Bilingual marketing site and job board for a San Salvador call center. Built by AmpNet.',
    creditOnly: true,
  },
  [IDS.txgarage]: {
    summary: 'Texas auto magazine site and publishing stack. Built by AmpNet.',
    description:
      'Texas auto magazine site and publishing stack. Built by AmpNet.',
    creditOnly: true,
  },
  [IDS.devision]: {
    summary: 'Portfolio and booking site for a media brand. Built by AmpNet.',
    description: 'Portfolio and booking site for a media brand. Built by AmpNet.',
    creditOnly: true,
  },
  [IDS.photopti]: {
    title: 'Photopti',
    summary: PHOTOPTI_SUMMARY,
    description: PHOTOPTI_DESCRIPTION,
  },
  [IDS.wink]: {
    title: 'W-Ink',
    summary: 'Open-source React WYSIWYG editor. Built by AmpNet.',
    description: 'Open-source React WYSIWYG editor. Built by AmpNet.',
  },
  [IDS.scheduleClean]: {
    summary: 'Scheduling site for a Dallas cleaning business. Built by AmpNet.',
    description:
      'Scheduling site for a Dallas cleaning business. Built by AmpNet.',
    creditOnly: true,
  },
  [IDS.pirateBen]: {
    summary: 'Personal site. Built by AmpNet.',
    description: 'Personal site. Built by AmpNet.',
    creditOnly: true,
  },
  [IDS.deepfakeGoldfish]: {
    summary: 'Satirical AI news site. Built by AmpNet.',
    description: 'Satirical AI news site. Built by AmpNet.',
    creditOnly: true,
  },
  [IDS.realview]: {
    title: 'RealView',
    summary: REALVIEW_SUMMARY,
    description: REALVIEW_SUMMARY,
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
    // Last change to the site's code. The old CMS had no date for it.
    '2026-10-17T12:00:00.000Z'
  ),
  [IDS.emizel]: website(
    IDS.emizel,
    'Emizel',
    'emizel.com',
    'Bilingual marketing site and job board for a San Salvador call center. Built by AmpNet.',
    '/images/projects/emizel-logo.png',
    '/images/projects/emizel-cover.webp',
    '2025-06-22T11:53:31.223Z',
    '2025-07-02T02:44:53.075Z'
  ),
  [IDS.txgarage]: website(
    IDS.txgarage,
    'TXGarage',
    'txgarage.com',
    'Texas auto magazine site and publishing stack. Built by AmpNet.',
    '/images/projects/txgarage-logo.png',
    '/images/projects/txgarage-cover.webp',
    '2025-06-22T11:44:14.231Z',
    '2025-07-02T02:50:46.769Z'
  ),
  [IDS.devision]: website(
    IDS.devision,
    'Devision Media',
    'devisionmedia.net',
    'Portfolio and booking site for a media brand. Built by AmpNet.',
    '/images/projects/devision-logo.png',
    '/images/projects/devision-cover.webp',
    '2025-07-17T13:49:35.121Z',
    '2025-07-19T03:42:56.643Z'
  ),
  [IDS.scheduleClean]: website(
    IDS.scheduleClean,
    'Schedule Clean',
    'schedulecleandallas.com',
    'Scheduling site for a Dallas cleaning business. Built by AmpNet.',
    '/images/projects/schedule-clean-logo.png',
    '/images/projects/schedule-clean-cover.png',
    '2025-07-14T15:07:48.918Z',
    '2025-07-14T15:08:42.525Z'
  ),
  [IDS.pirateBen]: website(
    IDS.pirateBen,
    'Pirate Ben',
    'pirateben.com',
    'Personal site. Built by AmpNet.',
    '/images/projects/pirate-ben-logo.png',
    '/images/projects/pirate-ben-cover.png',
    '2025-06-22T12:02:03.797Z',
    '2025-07-05T16:19:04.206Z'
  ),
  [IDS.deepfakeGoldfish]: website(
    IDS.deepfakeGoldfish,
    'Deepfake Goldfish',
    'deepfakegoldfish.com',
    'Satirical AI news site. Built by AmpNet.',
    '/images/projects/deepfake-goldfish-logo.png',
    '/images/projects/deepfake-goldfish-cover.png',
    '2025-06-22T11:54:00.469Z',
    '2025-07-02T02:48:38.760Z'
  ),
  [IDS.realview]: website(
    IDS.realview,
    'RealView',
    'realview.house',
    REALVIEW_SUMMARY,
    '/images/projects/realview-logo.png',
    '/images/projects/realview-cover.webp',
    '',
    // Last change to the product's code. The old CMS had no date for it.
    '2026-10-29T12:00:00.000Z'
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
      'app',
      'work',
      '/images/projects/photopti-gallery.webp',
      PHOTOPTI_SUMMARY
    ),
    excerpt: PHOTOPTI_SUMMARY,
    logo: '/images/projects/photopti-logo.png',
    client: 'Open Source',
    technologies: ['Electron', 'Sharp', 'JavaScript', 'Node.js'],
    githubUrl: PHOTOPTI_REPO,
    date: '2026-06-23T12:00:00.000Z',
    createdAt: '2026-06-23T12:00:00.000Z',
    updatedAt: '2026-11-25T12:00:00.000Z',
    screenshots: [
      {
        src: '/images/projects/photopti-image-details.webp',
        alt: 'Photopti gallery with one photo selected, showing its name, size, dimensions, and format, beside the batch settings.',
        caption:
          'Drop in files or whole folders. Click a photo to see its size and format, then set width, quality, and format for the batch.',
        width: 1440,
        height: 900,
      },
      {
        src: '/images/projects/photopti-cover-crop.webp',
        alt: 'Photopti cover crop editor with a 16:9 crop box over a photo and controls for aspect, orientation, and output size.',
        caption:
          'Crop one photo as the cover image. 16:9, 1:1, 4:3, or free, by mouse or keyboard.',
        width: 1440,
        height: 900,
      },
      {
        src: '/images/projects/photopti-results.webp',
        alt: 'Photopti after a batch, showing 98 percent saved, 16.8 MB down to 414.7 KB, and one file that could not be processed.',
        caption:
          'See how much space the batch saved. Any file that fails is listed, and the rest still finish.',
        width: 1440,
        height: 900,
      },
    ],
    tryIt: {
      intro:
        'Photopti is not signed, so there is no app store listing or download button. To try it, get the code from GitHub and run it on your own computer. You need Git and Node.js 22.12 or newer.',
      commands: [
        `git clone ${PHOTOPTI_REPO}.git`,
        'cd photopti-app',
        'npm ci',
        'npm start',
      ],
      note: 'The README on GitHub shows how to build an app for macOS, Windows, or Linux. Try it on a folder of your own photos, and open an issue if something breaks or you want a feature.',
      repoUrl: PHOTOPTI_REPO,
      issuesUrl: `${PHOTOPTI_REPO}/issues`,
    },
  },
  [IDS.wink]: {
    ...baseWork(
      IDS.wink,
      'W-Ink',
      'cli-tool',
      'work',
      '/images/projects/wink-cover.webp',
      'Open-source React WYSIWYG editor. Built by AmpNet.',
      'https://www.npmjs.com/package/@ampnet/wink-wysiwyg'
    ),
    excerpt: 'Open-source React WYSIWYG editor. Built by AmpNet.',
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
      'Satirical AI news site. Built by AmpNet.',
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
    '/images/projects/realview-logo.png',
    REALVIEW_SUMMARY,
    'https://realview.house'
  ),
};

function loadSources(): { works: WorkItem[]; sites: Website[] } {
  return {
    works: [],
    sites: Object.values(FALLBACK_WEBSITES),
  };
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
      // A logo file is not a page capture. W-Ink's file is a real editor shot.
      work = { ...work, hasCover: !isLogoArt(work.image) };
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
      hasCover:
        work.hasCover ||
        (!site && Boolean(work.image) && id === IDS.gravityRail),
    };

    const localCover = LOCAL_COVER[id];
    if (localCover) {
      work = { ...work, image: localCover, hasCover: true };
    }

    // Usage lines from the works feed were cut. Do not republish them.
    if (id === IDS.photopti || id === IDS.wink) {
      work = { ...work, results: undefined };
    }

    projects.push(work);
  }

  return projects;
}

function updatedTime(work: WorkItem): number {
  const time = Date.parse(work.updatedAt);
  return Number.isNaN(time) ? 0 : time;
}

/** Newest updatedAt first. Work without a date goes last, in ORDER. */
function sortByUpdated(works: WorkItem[]): WorkItem[] {
  return [...works].sort((a, b) => updatedTime(b) - updatedTime(a));
}

export function getPortfolioWorks(): WorkItem[] {
  const { works, sites } = loadSources();
  return sortByUpdated(curatePortfolio(works, sites));
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
    coverImage: LOCAL_COVER[id] || site.coverImage,
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
    app: 'App',
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
  if (category === 'app') return 'Apps';
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
