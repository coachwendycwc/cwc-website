# PRD - CWC Website (Coaching Women of Color)

## Product Summary
| Field | Value |
|-------|-------|
| App Name | CWC Website |
| Platform | Web (Static Site) |
| Purpose | Marketing website for Coaching Women of Color, a leadership coaching firm |
| Target Audience | (1) Organizations seeking to retain/develop women of color leaders; (2) Individual women of color seeking executive coaching |
| Owner | Wendy Perdomo |
| Domain | coachingwomenofcolor.com |

## Core Value Proposition
"Your leaders are leaving. We help you keep them." -- CWC helps organizations retain and develop women of color through executive coaching, workshops, keynotes, and strategic retreats.

## Key Services (7)
1. **Executive Coaching** - 1:1 coaching for C-suite, VP, directors
2. **Keynote Speaking** - Conference talks on leadership, DEI, retention
3. **Strategic Retreats** - Board alignment and strategic planning facilitation
4. **Workshops & Webinars** - Skill-building sessions for teams
5. **Group Coaching** - Peer cohort coaching programs
6. **Virtual Series** - Multi-session virtual coaching (learn-apply-reflect-refine)
7. **Performance Coaching** - RESET Method(TM) for performance gaps

## Pages & Routes

### Primary Pages
| Route | Purpose | Type |
|-------|---------|------|
| `/` | Homepage -- hero, client logos, solutions, stats, testimonials | Client |
| `/for-organizations` | Organizational solutions overview | Server |
| `/for-individuals` | Individual coaching overview | Server |
| `/executive-coaching` | Individual executive coaching landing | Server |
| `/about` | Founder bio, credentials, values | Server |
| `/contact` | Contact form with mailto submission | Client |
| `/case-studies` | Testimonials and success stories | Server |
| `/events` | Upcoming + past events with image lightbox | Client |
| `/gallery` | Photo gallery (120+ images) with lightbox | Client |
| `/resources` | Resources hub | Server |
| `/book` | Booking/scheduling page | Server |

### Service Detail Pages
| Route | Service |
|-------|---------|
| `/services` | Services index |
| `/services/executive-coaching` | Executive coaching details |
| `/services/keynote-speaking` | Keynote speaking details |
| `/services/strategic-retreats` | Strategic retreat details |
| `/services/workshops-webinars` | Workshops & webinars details |
| `/services/group-coaching` | Group coaching details |
| `/services/virtual-series` | Virtual series details |
| `/services/performance-coaching` | Performance coaching (RESET Method) |

### Legal/Utility Pages
| Route | Purpose |
|-------|---------|
| `/faq` | Frequently asked questions |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## Non-Goals
- **No SSR/API routes** -- static export only, no server runtime
- **No CMS** -- content is hardcoded in page files
- **No database** -- no data persistence
- **No authentication** -- no user accounts or login
- **No e-commerce** -- no payment processing or cart
- **No blog** -- no dynamic content publishing
- **No i18n** -- English only

## Hard Constraints

### Technical
- **Static export only** (`output: "export"`) -- no Node.js server at runtime
- **No Next.js Image optimization** -- images served as-is (unoptimized)
- **Trailing slashes required** -- all URLs end with `/`
- **AWS Amplify / CloudFront deployment** -- CDN-served static files
- **No external data fetching** -- all content embedded in source

### Business
- All content must reflect CWC brand voice and values
- Testimonials must include real names and attributions
- Contact form submits via mailto: (no backend)
- Calendly used for all booking/scheduling

## AI Rules (For Claude)

### Framework Rules
1. **Always use static export compatible code** -- no `getServerSideProps`, no API routes, no middleware, no dynamic routes with `generateStaticParams` unless all paths are known at build time
2. **Server components by default** -- only add `"use client"` when state, effects, or browser APIs are required
3. **Use barrel exports** -- add new components to `src/components/index.ts`
4. **Colocate page data** -- keep page-specific data (arrays, objects) in the page file, not in separate data files
5. **Use `siteConfig.basePath`** from `src/config.ts` for all image and PDF paths
6. **Follow existing Tailwind patterns** -- use global CSS utility classes (`.btn-primary`, `.section`, `.container-wide`) before creating new ones

### Security Rules
1. Contact form uses mailto: -- do not add server-side form handling
2. No API keys or secrets in source code
3. External links use `target="_blank"` with `rel="noopener noreferrer"`
4. No user data collection beyond mailto form

### Code Quality Rules
1. TypeScript strict mode -- no `any` types, no `@ts-ignore`
2. Semantic HTML -- use proper elements (nav, main, section, article, blockquote)
3. Accessibility -- ARIA labels on interactive elements, focus-visible styles, skip links
4. SEO -- every page exports `metadata` with title and description
5. Keep dependencies minimal -- currently only Next.js, React, and Tailwind

## Design System

### Brand Colors
| Name | Hex | CSS Variable | Usage |
|------|-----|-------------|-------|
| Hot Pink | #E91E8C | `--color-primary` | Primary accent, CTAs |
| Sky Blue | #3EBCE8 | `--color-secondary` | Links, interactive elements |
| Golden Yellow | #FFC425 | -- | Accent, highlights |
| Lime Green | #C4D82E | -- | Accent, success |
| Lavender Purple | #9333EA | -- | Accent, virtual series |
| Dark | #1A1A1A | `--color-neutral-900` | Text, dark backgrounds |
| Light | #FAFAFA | `--color-neutral-50` | Light backgrounds |

### Typography
- **Font Stack:** SF Pro Display, system-ui, Segoe UI, Roboto, sans-serif
- **Heading Classes:** `.heading-display`, `.heading-section`, `.heading-card`
- **Body Classes:** `.body-large`, `.body-regular`

### Components
- **Buttons:** `.btn-primary` (pink), `.btn-secondary` (outline), `.btn-dark` (dark)
- **Cards:** `.card` (shadow + hover), `.card-bordered` (border + hover)
- **Sections:** `.section` (padding), `.section-tight` (less padding)
- **Containers:** `.container-tight` (56rem), `.container-wide` (80rem)

## Development Plan
1. **V1 (Current):** Static marketing site with all service pages, case studies, events, gallery
2. **V2 (Future - if needed):** CMS integration, blog, dynamic events, analytics dashboard
