# AmpNet Media Portfolio

A modern portfolio website for AmpNet Media - a creative media studio that crafts digital experiences. This **statically exported** Next.js application showcases our creative work, websites we've built, and services we offer.

## 🌐 Live URLs

- **Production**: [https://ampnet.media](https://ampnet.media)
- **Portfolio data**: `src/data/portfolio.ts` and `public/images/projects/`

## 🚀 Features

- **Portfolio Showcase**: Display of creative works including video projects, web advertising, and social media campaigns
- **Website Gallery**: Showcase of websites built with features and descriptions (fetched at build time)
- **Services Overview**: Highlighting our digital media and web development services
- **Contact**: Email `contact@ampnetmedia.com`. There is no form.
- **Responsive Design**: Mobile-first responsive design with Tailwind CSS
- **Dark Mode Support**: Built-in dark/light mode toggle
- **Modern UI**: Beautiful gradient designs and animations
- **Static Export**: Fully static site generation for optimal performance

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router with Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI + Custom components
- **Icons**: Lucide React
- **Runtime**: React 19
- **Deployment**: Static hosting (no server required)

## 📁 Project Structure

```
src/
├── _components/          # Main page components
│   ├── Hero.tsx         # Hero section with branding
│   ├── Services.tsx     # Services we offer
│   ├── Work.tsx         # Portfolio display (uses static data)
│   ├── About.tsx        # About section
│   └── Contact.tsx      # Contact information
├── app/                 # Next.js app router
│   ├── page.tsx         # Home page
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   ├── magic/           # Magic page
│   └── works/           # Works gallery with dynamic routes
├── components/ui/       # Reusable UI components
├── types/              # Centralized TypeScript definitions
│   ├── api.ts          # API response types
│   ├── components.ts   # Component prop types
│   ├── data.ts         # Data structure types
│   └── index.ts        # Type exports
├── data/               # Static data files
│   ├── portfolio.ts    # Public project list
│   ├── works.ts        # Portfolio helpers
│   └── blog.ts         # Blog-related data
├── lib/                # Utilities and configurations
└── public/images/projects/ # Project covers and logos
```

## Portfolio data

Project names, sentences, and picture paths live in `src/data/portfolio.ts`. The picture files live in `public/images/projects/`. `npm run build` does not download them.

## 🏗 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ampnet3

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at [http://localhost:3232](http://localhost:3232)

### Available Scripts

```bash
npm run dev       # Start development server on port 3232
npm run build     # Build the static site into out/
npm run start     # Start production server (for testing)
npm run export    # Alias for build
npm run lint      # Run ESLint
```

### Build Process

```bash
npm run build
```

**What happens:**

1. Next.js builds the pages from the files in this repo
2. Exports to `out/` folder for deployment
3. Result: Fully static site

## 🎨 Portfolio Data

The public project list is `src/data/portfolio.ts`. Covers and logos are files in `public/images/projects/`.

### Works Categories

- **Web Video**: Video content and productions
- **Web Advertising**: Digital advertising campaigns
- **Social Media**: Social media content and campaigns
- **Website**: Custom websites

## 🔧 Development

### TypeScript Architecture

The project uses a centralized type system:

- **Prefer `type` over `interface`** for most definitions
- **Centralized types** in `src/types/` folder
- **Import types** with `import type` syntax
- **Re-export** all types from `src/types/index.ts`

### Key Components

- `Hero`: Main landing section with brand messaging
- `Services`: Overview of services offered
- `Work`: Portfolio grid display (uses `getFeaturedWebsites()`)
- `About`: Company information
- `Contact`: Email address and a link to the contact page

### Styling

The project uses Tailwind CSS v4 with:

- Custom gradient designs (`from-teal-600 to-orange-600` light, `from-pink-600 to-purple-600` dark)
- Dark mode support
- Responsive layouts
- Modern UI patterns with glassmorphism effects

## 📸 Assets

Project images are stored in `public/images/projects/` and include:

- Project screenshots and covers
- Company logos and branding
- Portfolio thumbnails

## 🚀 Deployment

### Static Hosting Deployment

This project generates a fully static site suitable for any static hosting platform:

```bash
# Build with fresh data
npm run build

# Deploy the out/ folder to:
# - GitHub Pages
# - Netlify
# - Vercel
# - Any static hosting service
```

### Deployment Checklist

✅ **Ready for Production:**

- Static export configured (`output: 'export'`)
- No runtime server
- Optimized for static hosting

### CI/CD Integration

For automated deployments, ensure your build pipeline:

1. Runs `npm install`
2. Runs `npm run build`
3. Deploys the `out/` folder
4. Sets `NEXT_PUBLIC_AMPGAUGE_SRC` and `NEXT_PUBLIC_AMPGAUGE_SITE` for the production build only (see Environment Variables)

### Environment Variables

See `.env.example`. `NEXT_PUBLIC_*` values are inlined into the static export.

The contact page does not call an API. Project data is in the repo.

AmpGauge is optional and is **off unless both variables below are set at build time**. Leave both unset for local `npm run dev` and for preview builds so those builds do not send page views. Set both only on the production build.

| Variable | Production value |
| --- | --- |
| `NEXT_PUBLIC_AMPGAUGE_SRC` | `https://gauge.ampnet.media/t.js` |
| `NEXT_PUBLIC_AMPGAUGE_SITE` | `ampnet` |

When both are non-empty, the root layout adds this before `</head>` on every page:

```html
<script defer src="https://gauge.ampnet.media/t.js" data-site="ampnet"></script>
```

Page views only. This site does not call `ampgauge()` for custom events. If either variable is missing, the script is not rendered.

## ✅ Production Status

### ✅ Completed Features

- [x] **Static Export Configuration**: Fully configured for static hosting
- [x] **Portfolio data**: Project list and pictures live in this repo
- [x] **Type System**: Centralized TypeScript architecture
- [x] **Website Portfolio**: Project gallery from `src/data/portfolio.ts`
- [x] **Responsive Design**: Mobile-first responsive layouts
- [x] **Dark Mode**: Complete light/dark mode support
- [x] **Contact**: Email address on the contact page. No form.
- [x] **About Page Team Section**: Complete team member profiles with professional photos

### 🔄 Remaining Tasks

- [ ] **Magic page**: The page is still sample posts. It is not linked in the menu.

## 📋 Notes

- **Static Only**: This site has no server-side runtime features
- **Project data**: Names, sentences, and pictures are files in this repo. The build does not download them.

Private project - All rights reserved by AmpNet Media
