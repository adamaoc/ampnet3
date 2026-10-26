import sanitizeHtml from 'sanitize-html';

const ALLOWED_TAGS = [
  'p',
  'br',
  'strong',
  'b',
  'em',
  'u',
  'a',
  'ul',
  'ol',
  'li',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'blockquote',
  'code',
  'pre',
];

type Attributes = Record<string, string>;

function lockBlankTarget(
  tagName: string,
  attribs: Attributes
): { tagName: string; attribs: Attributes } {
  if (attribs.target === '_blank') {
    attribs.rel = 'noopener noreferrer';
  }
  return { tagName, attribs };
}

/** Build-safe allowlist. Runs during static generation, not after hydration. */
export function sanitizeWorkHtml(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: ALLOWED_TAGS,
    allowedAttributes: {
      a: ['href', 'target', 'rel'],
    },
    allowedSchemes: ['http', 'https', 'mailto'],
    allowProtocolRelative: false,
    disallowedTagsMode: 'discard',
    transformTags: {
      a: lockBlankTarget,
    },
  });
}
