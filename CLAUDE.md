# CLAUDE.md - CWC Website (Coaching Women of Color)

## Project Overview
Marketing website for **Coaching Women of Color (CWC)**, a leadership coaching firm led by Wendy Perdomo. The site targets organizations seeking to retain and develop women of color in leadership, and individual women of color seeking executive coaching.

- **URL:** https://coachingwomenofcolor.com
- **Owner:** Wendy Perdomo
- **Email:** wendy@coachingwomenofcolor.com

## Quick Reference

### Commands
```bash
npm run dev        # Start dev server on port 3001
npm run build      # Static export build
npm run lint       # ESLint
npm start          # Start production server on port 3001
```

### Tech Stack
| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.1.1 (App Router, static export) |
| Language | TypeScript 5.9.3 (strict mode) |
| UI | React 19.2.3 |
| Styling | Tailwind CSS v4.1.18 + custom globals.css |
| Deployment | AWS Amplify / CloudFront (static HTML) |
| Images | Unoptimized (static export constraint) |

### Key URLs & Integrations
- **Calendly:** Used for booking calls (organizational + individual)
- **LinkedIn:** Profile, newsletter subscription
- **Instagram / Facebook:** Social presence
- **PDF:** `/cwc-capabilities-statement.pdf` (capabilities statement)

## Architecture Rules

### File Conventions
- **Path alias:** `@/*` maps to `./src/*`
- **Static export:** `output: "export"` in next.config.ts -- no server-side features (no API routes, no SSR, no middleware)
- **Trailing slashes:** Enabled -- all URLs end with `/`
- **Images:** Use `siteConfig.basePath` prefix from `src/config.ts`

### Component Patterns
- **Server components by default** -- only add `"use client"` when state/effects/browser APIs are needed
- **Barrel export:** All components exported from `src/components/index.ts`
- **Data colocation:** Page data (testimonials, services, stats) lives in the page file as typed arrays
- **No external data fetching** -- all content is hardcoded/static

### Styling Rules
- Use Tailwind utility classes for component-level styles
- Use global CSS classes (`.btn-primary`, `.section`, `.container-wide`, `.heading-section`) for reusable patterns
- Brand colors defined as CSS custom properties in `globals.css`:
  - Primary: `--color-primary` (#E91E8C - Hot Pink)
  - Secondary: `--color-secondary` (#3EBCE8 - Sky Blue)
  - Accent Yellow: #FFC425
  - Accent Green: #C4D82E
  - Accent Purple: #9333EA
- **Do NOT** use arbitrary color values -- reference the design system
- Responsive breakpoints: `md:` (768px), `lg:` (1024px)

### SEO & Metadata
- Every page exports `metadata` with title and description
- Root layout has comprehensive OG/Twitter card metadata
- JSON-LD schema for Organization (in layout) and BreadcrumbList (in Breadcrumbs component)
- Title template: `"%s | Coaching Women of Color"`

### Accessibility
- Skip-to-main-content link in root layout
- Proper ARIA labels on all interactive elements
- Custom focus-visible styles (blue outline)
- Semantic HTML (nav, main, footer, blockquote)

## Project Structure
```
src/
  app/
    layout.tsx              # Root layout (metadata, JSON-LD, skip link)
    page.tsx                # Homepage (client component)
    globals.css             # Design system, custom utilities, animations
    about/page.tsx          # About / founder bio
    contact/page.tsx        # Contact form (client component, mailto submission)
    case-studies/page.tsx   # Testimonials & case studies
    events/page.tsx         # Upcoming + past events with lightbox
    gallery/page.tsx        # Photo gallery (120+ images) with lightbox
    resources/page.tsx      # Resources hub
    book/page.tsx           # Booking page
    faq/page.tsx            # FAQ
    privacy/page.tsx        # Privacy policy
    terms/page.tsx          # Terms of service
    executive-coaching/     # Individual coaching landing
    for-individuals/        # Individual services overview
    for-organizations/      # Organizational solutions overview
    services/
      page.tsx              # Services index
      executive-coaching/   # Executive coaching details
      keynote-speaking/     # Keynote speaking
      strategic-retreats/   # Strategic retreats
      workshops-webinars/   # Workshops & webinars
      group-coaching/       # Group coaching
      virtual-series/       # Virtual coaching series
      performance-coaching/ # Performance coaching (RESET Method)
  components/
    index.ts                # Barrel export
    Header.tsx              # Fixed nav with mobile menu (client)
    Footer.tsx              # 5-column footer (server)
    Badge.tsx               # Variant badge component
    Breadcrumbs.tsx         # SEO breadcrumbs with JSON-LD
    Separator.tsx           # Visual divider
    Modal.tsx               # Portal-based modal (client)
    Toast.tsx               # Notification toasts (client)
    ImageLightbox.tsx       # Gallery lightbox with keyboard nav (client)
    LazyImage.tsx           # Lazy-loaded image with skeleton (client)
    AnimatedCounter.tsx     # Scroll-triggered counter animation (client)
    TestimonialsCarousel.tsx # Horizontal scroll testimonials (client)
  config.ts                 # basePath configuration
```

## Non-Goals (Do NOT Build)
- Server-side rendering or API routes (static export only)
- CMS or database integration
- User authentication or accounts
- E-commerce or payment processing
- Blog with dynamic content

## Current Branch: `staging`
- Main branch for PRs: `main`
- Staging is used for pre-production review
