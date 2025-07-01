# AmpNet Media Portfolio

A modern portfolio website for AmpNet Media - a creative media studio that crafts digital experiences. This Next.js application showcases our creative work, websites we've built, and services we offer.

## 🌐 Live URLs

- **Production**: [https://ampnet.media](https://ampnet.media)
- **Backend API**: [https://flexhub.ampnet.media](https://flexhub.ampnet.media)
- **Dev Backend**: [localhost:3005](http://localhost:3005)

## 🚀 Features

- **Portfolio Showcase**: Display of creative works including video projects, web advertising, and social media campaigns
- **Website Gallery**: Showcase of websites built with features and descriptions
- **Services Overview**: Highlighting our digital media and web development services
- **Contact Integration**: Contact forms and information
- **Responsive Design**: Mobile-first responsive design with Tailwind CSS
- **Dark Mode Support**: Built-in dark/light mode toggle
- **Modern UI**: Beautiful gradient designs and animations

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI + Custom components
- **Icons**: Lucide React
- **Runtime**: React 19

## 📁 Project Structure

```
src/
├── _components/          # Main page components
│   ├── Hero.tsx         # Hero section with branding
│   ├── Services.tsx     # Services we offer
│   ├── Work.tsx         # Portfolio display
│   ├── About.tsx        # About section
│   └── Contact.tsx      # Contact information
├── app/                 # Next.js app router
│   ├── page.tsx         # Home page
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   ├── magic/           # Magic page
│   └── works/           # Works gallery with dynamic routes
├── components/ui/       # Reusable UI components
├── data/               # Static data files
│   ├── works.ts        # Portfolio works and websites data
│   └── blog.ts         # Blog-related data
└── lib/                # Utilities and configurations
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
npm run build     # Build for production
npm run start     # Start production server
npm run export    # Export static site
npm run lint      # Run ESLint
```

## 🎨 Portfolio Data

The portfolio pulls data from two main sources:

1. **Static Data** (`src/data/works.ts`): Creative works like video projects and campaigns
2. **FlexHub API**: Website portfolio data with features and configurations

### Works Categories

- **Web Video**: Video content and productions
- **Web Advertising**: Digital advertising campaigns
- **Social Media**: Social media content and campaigns
- **Website**: Custom websites with various features (blogs, newsletters, contact management, etc.)

## 🔧 Development

### Environment Configuration

The app connects to different backends based on environment:

- **Production**: `https://flexhub.ampnet.media`
- **Development**: `localhost:3005`

### Key Components

- `Hero`: Main landing section with brand messaging
- `Services`: Overview of services offered
- `Work`: Portfolio grid display
- `About`: Company information
- `Contact`: Contact forms and information

### Styling

The project uses Tailwind CSS v4 with:

- Custom gradient designs
- Dark mode support
- Responsive layouts
- Modern UI patterns with glassmorphism effects

## 📸 Assets

Project images are stored in `public/images/projects/` and include:

- Project screenshots and covers
- Company logos and branding
- Portfolio thumbnails

## ✅ Production Checklist

Before deploying to production, the following tasks need to be completed:

### 🔗 Backend Integration

- [ ] **Contact Form Integration**: Hook up contact form submissions to FlexHub backend API
  - Connect form to `https://flexhub.ampnet.media` for production
  - Implement proper error handling and success states
  - Add form validation and user feedback

### 📊 Content Management

- [ ] **Creative Works API**: Implement FlexHub integration for creative works data
  - Currently using static data in `src/data/works.ts`
  - Need FlexHub feature to manage creative projects (video, advertising, social media)
  - Replace static works data with dynamic API calls

### 👥 Team Section

- [ ] **About Page Team Section**: Complete team member profiles
  - Add real team member information and professional photos
  - Store team photos in `public/images/team/`
  - Update About component with actual team data
  - Ensure responsive design for team cards

### 📝 Blog/Articles System

- [ ] **Magic Page Implementation**: Build blog/articles functionality
  - Create FlexHub integration for blog posts/articles
  - Implement similar pattern to websites portfolio but for content
  - Add article detail pages with dynamic routing
  - Include categories, tags, and search functionality

### 🎨 Final Polish

- [ ] **Design Quality Assurance**: Complete design review
  - Test all components in both light and dark modes
  - Verify responsive design across all screen sizes (mobile, tablet, desktop)
  - Check gradient consistency and glassmorphism effects
  - Validate accessibility compliance (ARIA labels, keyboard navigation)
  - Optimize images and loading performance

### 🧪 Testing & Optimization

- [ ] **Cross-browser Testing**: Test across different browsers
- [ ] **Performance Audit**: Run Lighthouse audit and optimize
- [ ] **SEO Optimization**: Add meta tags, structured data, and sitemap
- [ ] **Error Handling**: Implement proper error boundaries and fallbacks

## 🚀 Deployment

This project is configured for deployment on Vercel or any platform supporting Next.js:

```bash
npm run build
npm run start
```

The built application will serve the portfolio at the production URL: [https://ampnet.media](https://ampnet.media)

## 🤝 Contributing

This is a private portfolio project for AmpNet Media. For internal development:

1. Create feature branches from `main`
2. Follow TypeScript and ESLint configurations
3. Test responsive design across devices
4. Ensure dark mode compatibility

## 📄 License

Private project - All rights reserved by AmpNet Media
