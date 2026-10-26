// Contact posts and the works feed share an API host, not a site id.
// NEXT_PUBLIC_SITE_ID is intentionally unread so one value cannot point both at the wrong site.

const PRODUCTION_API = 'https://flexhub.ampnet.media/api';
const DEV_API = 'http://localhost:3005/api';

export const CONTACT_SITE_ID =
  process.env.NEXT_PUBLIC_CONTACT_SITE_ID ||
  '8ad1bc58-fdb0-44ac-b021-251a06bd2bec';

export function contactApiBase(): string {
  const configured = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') ?? '';
  if (configured) return configured;
  return process.env.NODE_ENV === 'production' ? PRODUCTION_API : DEV_API;
}

export function isLocalApi(base: string): boolean {
  return /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?(\/|$)/i.test(base);
}

/** Null when a production build would post to localhost. */
export function contactSubmitUrl(): string | null {
  const base = contactApiBase();
  if (process.env.NODE_ENV === 'production' && isLocalApi(base)) return null;
  return `${base}/public/sites/${CONTACT_SITE_ID}/contact`;
}
