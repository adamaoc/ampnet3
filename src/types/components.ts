// Component prop types

import type { Website } from './api';

export type SiteCardProps = {
  site: Website;
};

export type SiteItemProps = {
  site: Website;
};

export type PlaceholderImageProps = {
  width: number;
  height: number;
  className?: string;
  alt?: string;
};
