import type { Metadata } from 'next';

export const SITE_ORIGIN = 'https://ampnet.media';

const OG_IMAGE = '/og.png';

type PageMetaInput = {
  description: string;
  path: string;
  title?: string;
  absoluteTitle?: string;
};

/** Social title, description, canonical, and cards for one public route. */
export function pageMeta({
  description,
  path,
  title,
  absoluteTitle,
}: PageMetaInput): Metadata {
  const socialTitle =
    absoluteTitle ??
    (title
      ? `${title} — AMPNET`
      : 'AMPNET — We build digital experiences that perform');

  return {
    ...(absoluteTitle
      ? { title: { absolute: absoluteTitle } }
      : title
        ? { title }
        : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: 'AMPNET',
      type: 'website',
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: 'AMPNET — We build digital experiences that perform',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [OG_IMAGE],
    },
  };
}
