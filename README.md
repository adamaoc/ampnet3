# AmpNet Media Portfolio

A modern portfolio website for AmpNet Media - a creative media studio that crafts digital experiences. This **statically exported** Next.js application showcases our creative work, websites we've built, and services we offer.

## 🌐 Live URLs

- **Production**: [https://ampnet.media](https://ampnet.media)
- **Data Source**: [https://flexhub.ampnet.media](https://flexhub.ampnet.media) (fetched at build time)

## 🚀 Features

- **Portfolio Showcase**: Display of creative works including video projects, web advertising, and social media campaigns
- **Website Gallery**: Showcase of websites built with features and descriptions (fetched at build time)
- **Services Overview**: Highlighting our digital media and web development services
- **Contact Form**: Fully functional contact form with API integration and validation
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
│   ├── works.ts        # Portfolio works data
│   ├── blog.ts         # Blog-related data
│   ├── websites.ts     # Re-exports from generated data
│   └── websites-generated.ts # Auto-generated (build time)
├── lib/                # Utilities and configurations
└── scripts/            # Build-time scripts
    └── fetch-build-data.mjs # Data fetching script
```

## 🏗 Build-Time Data Fetching

This project uses a **build-time data fetching** approach for optimal static hosting:

### How It Works

1. **Prebuild Script** (`scripts/fetch-build-data.mjs`):

   - Runs automatically before `npm run build`
   - Fetches fresh data from FlexHub API
   - Generates `src/data/websites-generated.ts` with TypeScript exports
   - Includes fallback handling if API is unavailable

2. **Static Data Integration**:

   - Components import from `@/data/websites`
   - No runtime API calls or loading states needed
   - Data is embedded in the static build

3. **Graceful Fallbacks**:
   - If FlexHub API is down during build, uses empty fallback data
   - Build never fails due to API issues
   - Site remains functional with available data

### Generated Files

```typescript
// src/data/websites-generated.ts (auto-generated)
export const websitesApiData: ApiResponse = {
  /* fresh data */
};
export const featuredWebsitesData: Website[] = [
  /* latest websites */
];
export const getAllWebsites = () => websitesApiData.sites;
export const getFeaturedWebsites = () => featuredWebsitesData;
```

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
npm run build     # Fetch data + build for production (static export)
npm run start     # Start production server (for testing)
npm run export    # Alias for build
npm run lint      # Run ESLint
```

### Build Process

```bash
npm run build
```

**What happens:**

1. `prebuild` script fetches latest data from FlexHub API
2. Generates `websites-generated.ts` with fresh data
3. Next.js builds with static data embedded
4. Exports to `out/` folder for deployment
5. Result: Fully static site with latest data

## 🎨 Portfolio Data

The portfolio uses a hybrid data approach:

1. **Static Data** (`src/data/works.ts`): Creative works like video projects and campaigns
2. **Build-Time Fetched** (`src/data/websites-generated.ts`): Website portfolio data from FlexHub API

### Works Categories

- **Web Video**: Video content and productions
- **Web Advertising**: Digital advertising campaigns
- **Social Media**: Social media content and campaigns
- **Website**: Custom websites with various features (fetched from FlexHub at build time)

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
- `Contact`: Contact forms and information

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
- Build-time data fetching implemented
- No runtime dependencies
- Optimized for static hosting

### CI/CD Integration

For automated deployments, ensure your build pipeline:

1. Runs `npm install`
2. Runs `npm run build` (includes data fetching)
3. Deploys the `out/` folder
4. Has access to FlexHub API during build time
5. Sets `NEXT_PUBLIC_AMPGAUGE_SRC` and `NEXT_PUBLIC_AMPGAUGE_SITE` for the production build only (see Environment Variables)

### Environment Variables

FlexHub data fetching does not need an API key. AmpGauge is optional and is **off unless both variables below are set at build time**.

`NEXT_PUBLIC_*` values are inlined into the static export. Leave both unset for local `npm run dev` and for preview builds so those builds do not send page views. Set both only on the production build.

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
- [x] **Build-Time Data Fetching**: FlexHub integration at build time
- [x] **Type System**: Centralized TypeScript architecture
- [x] **Website Portfolio**: Dynamic website gallery from FlexHub
- [x] **Responsive Design**: Mobile-first responsive layouts
- [x] **Dark Mode**: Complete light/dark mode support
- [x] **Contact Form**: Fully functional contact form with FlexHub API integration
- [x] **About Page Team Section**: Complete team member profiles with professional photos

### 🔄 Remaining Tasks

#### 📊 Content Management

- [ ] **Creative Works API**: Implement FlexHub integration for creative works data
  - Currently using static data in `src/data/works.ts`
  - Need FlexHub feature to manage creative projects (video, advertising, social media)
  - Add to build-time fetching script

#### 📝 Blog/Articles System

- [ ] **Magic Page Implementation**: Build blog/articles functionality
  - Create FlexHub integration for blog posts/articles
  - Add to build-time fetching script
  - Implement article detail pages with dynamic routing

#### 🎨 Final Polish

- [ ] **Design Quality Assurance**: Complete design review
- [ ] **Performance Optimization**: Run Lighthouse audit
- [ ] **SEO Enhancement**: Add meta tags and structured data

## 📋 Notes

- **Static Only**: This site has no server-side runtime features
- **Fresh Data**: Website data is refreshed on every build
- **Build Dependencies**: Requires internet access during build for data fetching
- **Fallback Handling**: Build never fails; uses empty data if API unavailable

Private project - All rights reserved by AmpNet Media
