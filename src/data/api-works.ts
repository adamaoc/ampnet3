// Auto-generated file - DO NOT EDIT MANUALLY
// Generated at build time from FlexHub API
// Last updated: 2026-10-26T04:24:28.773Z

import type { WorkItem } from '@/types';

export const worksApiData = {
  "works": [
    {
      "id": "80f46314-46f7-46ff-88c2-1094c1e50719",
      "title": "Photopti CLI-Tool",
      "category": "cli-tool",
      "image": "https://flexhub-assets.nyc3.digitaloceanspaces.com/flexhub/media/ampnet-media/works/1756172569401-Logo-Work-2.jpg",
      "description": "<h2>Overview</h2>\n<p>PhotOpti is designed to be run from a directory containing images. It processes all image files it finds, resizes them according to your specifications, converts them to the web-friendly JPEG format, and saves the optimized versions in a new folder named Opti.</p>\n\n<p><b>Features</b></p>\n<ul>\n<li>Resize images by a specific pixel width or percentage of original size</li>\n<li>Defaults to a width of 800px if no size is specified</li>\n<li>Converts all processed images to .jpg format for maximum compatibility</li>\n<li>Automatically creates an output directory</li>\n<li>Customizable JPEG quality settings</li>\n<li>Progress indicators for batch processing</li>\n<li>Verbose mode with detailed processing information</li>\n<li>Dry-run mode to preview operations without making changes</li>\n<li>Comprehensive error handling and validation</li>\n</ul>",
      "excerpt": "An open-source photo resizing, optimizing, and renaming tool built for the command line.",
      "type": "work",
      "date": "2025-08-04T00:00:00.000Z",
      "client": "Open Source",
      "featured": true,
      "technologies": [
        "Typescript",
        "Javascript"
      ],
      "duration": "2 weeks",
      "results": "Fun open source tool being used by a handful of teams and individuals. ",
      "githubUrl": "https://github.com/ampnetmedia/photopti",
      "videoUrl": null,
      "url": "https://github.com/ampnetmedia/photopti",
      "createdAt": "2025-08-26T01:45:45.351Z",
      "updatedAt": "2025-09-04T03:34:59.946Z"
    },
    {
      "id": "14b5a8cc-23d3-4b5c-8148-a162fabc42cc",
      "title": "W-Ink WYSIWYG ",
      "category": "cli-tool",
      "image": "https://flexhub-assets.nyc3.digitaloceanspaces.com/flexhub/media/ampnet-media/works/1758296946370-wink-cover.jpg",
      "description": "@ampnet/wink-wysiwyg is a modern, open-source WYSIWYG editor built with React and TypeScript, designed for real-world projects. Out of the box, it supports @mentions, #hashtags, and a plugin system that makes extending functionality simple. With accessibility, security, and performance at its core, Wink-WYSIWYG is lightweight, customizable with TailwindCSS, and fully compatible with modern frameworks like Next.js 15 and Vite. Whether you’re adding rich text editing to a product, a social feature to your app, or just need a flexible editor for your own projects, Wink-WYSIWYG delivers a reliable, developer-friendly experience.",
      "excerpt": "A modern WYSIWYG editor with social smarts",
      "type": "work",
      "date": "2025-09-08T00:00:00.000Z",
      "client": "Open Source",
      "featured": false,
      "technologies": [
        "React",
        "Typescript"
      ],
      "duration": null,
      "results": "Open source project being used across ampnet media apps.",
      "githubUrl": "https://github.com/ampnetmedia/wink-wysiwyg",
      "videoUrl": null,
      "url": "https://www.npmjs.com/package/@ampnet/wink-wysiwyg",
      "createdAt": "2025-09-09T18:53:12.962Z",
      "updatedAt": "2025-09-19T15:49:09.879Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 2,
    "pages": 1
  },
  "filters": {
    "categories": [
      "CLI_TOOL"
    ],
    "clients": [
      "Open Source"
    ],
    "technologies": [
      "Javascript",
      "React",
      "Typescript"
    ]
  },
  "lastUpdated": "2026-10-26T04:23:14.932Z"
};

export const getAllWorks = (): WorkItem[] => (worksApiData.works || []) as WorkItem[];

export const getFeaturedWorks = (): WorkItem[] => {
  const works = (worksApiData.works || []) as WorkItem[];
  return works.filter(work => work.featured).slice(0, 6);
};

export const getWorksByCategory = (category: string): WorkItem[] => {
  const works = (worksApiData.works || []) as WorkItem[];
  return works.filter(work => work.category === category);
};

export const getWorkById = (id: string): WorkItem | undefined => {
  const works = (worksApiData.works || []) as WorkItem[];
  return works.find(work => work.id === id);
};
