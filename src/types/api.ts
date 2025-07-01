// API-related types for external data structures

export type Website = {
  id: string;
  name: string;
  domain: string | null;
  logo: string | null;
  coverImage: string | null;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  features: WebsiteFeature[];
};

export type WebsiteFeature = {
  id: string;
  type: string;
  displayName: string;
  description: string;
  config: unknown;
};

export type ApiResponse = {
  sites: Website[];
  count: number;
  lastUpdated: string;
};
