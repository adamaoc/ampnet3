# Ampnet

I'm Adam, a staff-level web developer for over 15 years. Ampnet is my public portfolio. It shows client work and other work I want people to see.

## How to write to me

I have dyslexia. When you write to me, be very clear. Use short sentences and as little jargon as possible. If you need a technical word, say what it means the first time.

This is for replies to me. It is not a rule for the site's own words. The portfolio can sound like the portfolio.

If a reply is longer than a few sentences, end with a heading `For you`. Under it, list only what I should look at, decide, or check. Skip that heading when nothing was flagged for me.

## What this repo is

Public site: https://ampnet.media

Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4. The live site is a folder of static files. There is no app server in production.

Dev server: `npm run dev` at http://localhost:3232

Pages: home, about, contact, pricing, magic, works, and the work detail pages under `src/app/works/`.

`__knowledge/` holds notes, not pages. `freelance-pricing.md` is the pricing worksheet. `elevator-pitch.md` is how Adam describes the studio. Do not turn these into site copy unless Adam asks. Client quotes live outside this repo. Do not copy them back in.

## How the site is built

`next.config.ts` sets `output: 'export'` and `trailingSlash: true`. `npm run build` writes the site to `out/`.

The portfolio lives in `src/data/portfolio.ts`. Pictures live in `public/images/projects/`. Do not download project data at build time.

These Next.js features are not available, because the site is a static export:

- Server actions
- Route handlers that run on a server
- The Next.js image optimizer

`images.unoptimized` is `true` on purpose. Leave it on.

The contact page asks people to email `contact@ampnetmedia.com`. There is no contact form. Do not add one that posts to FlexHub.

Run `npm run build` when you change the export or a page that must exist as a static file. A dev-server check is not the same thing.

Do not commit `out/` or `.next/`.

## Where things live

- `src/app/` — routes
- `src/_components/` — sections on the home page
- `src/app/<page>/_components/` — components for one page
- `src/components/ui/` — shared UI pieces
- `src/data/` — copy and content that ships with the site
- `src/types/` — shared types
- `src/lib/` — helpers, including SEO
- `public/` — images and icons that the site serves

Icons come from `lucide-react`.

## Look and feel

This project already has a look. Follow it. Do not invent a new palette, and do not wash the brand colors out to gray.

Brand gradients already in the UI:

- Light: `from-teal-600 to-orange-600`
- Dark: `from-pink-600 to-purple-600`

Surface colors are the CSS variables in `src/app/globals.css` (`--background`, `--foreground`, `--primary`, and the rest).

Dark mode is real. The nav toggle stores the choice in `localStorage` under `theme`. The default is dark. A theme change must set both of these on `<html>`:

- the class `dark` (this switches the CSS variables)
- the attribute `data-theme="dark"` or `data-theme="light"` (this switches Tailwind's `dark:` styles)

See `src/app/layout.tsx` and `src/_components/Navigation.tsx`. Setting only one of them makes the page half-themed.

Match the page you are editing. Pricing and magic use glassy panels (`backdrop-blur`, translucent backgrounds). The home nav is simpler. Do not spread one page's effects onto another page for consistency's sake.

Check a visual change in light and dark.

## Code

Put new shared types in `src/types/` as `type`, not `interface`. Import them with `import type`.

Use a client component only for something that has to run in the browser, such as the theme toggle.

## UI review screenshots

Skip this section when the change does not change what a person sees.

Do not chase a design score. Match the screen you edited.

For a small visual fix, attach one before and one after, at phone width 390 and desktop width 1280, in light and dark.

For a larger layout or visual pass, attach before (current `main`) and after of each changed screen, at 390 and 1280, in light and dark. Include an empty, error, or loading state only when that screen has one. When the work is polish, also attach one annotated before-and-after image with numbered callouts.

Throw out clipped, wrong-page, or unreadable shots.

Do not commit review screenshots. A path committed in the repo does not show up in the pull request description. Keep them out of `docs/`, `public/`, `screenshots/`, and content image folders. Do not upload personal or admin UI shots to a public bucket.

How to put the shots on the pull request:

1. Check `gh --version`. You need GitHub CLI 2.99.0 or newer (September 2026). If it is older, update GitHub CLI. Do not report that GitHub forbids images. You also need write access to the repo.
2. Write the pull request body in a markdown file that points at the local files, for example `![Home, 1280, after](./home-1280-after.png)`.
3. Update the pull request with `gh pr edit --body-file ./pr-body.md --attach ./home-1280-before.png --attach ./home-1280-after.png`

Repeat `--attach` for every image. Keep each image under 10 MB. PNG, JPEG, GIF, and WebP are fine. `gh` uploads each file and rewrites the local paths to `github.com/user-attachments/assets/...` URLs.

Docs: https://docs.github.com/en/github-cli/github-cli/attaching-files-with-github-cli
