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
| Deployment | AWS S3 + CloudFront (static HTML) |
| Images | Unoptimized (static export constraint) |
| Videos | MP4 (H.264), muted autoplay, `public/videos/` |

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

### Deployment
- **Production:** `main` branch → S3 `coachingwomenofcolor.com` → CloudFront `E2RMMPGLN2DEIG`
- **Staging:** `staging` branch → S3 `staging.coachingwomenofcolor.com` → CloudFront `E39U9T07BP67U4`
- **Staging deploy is manual** -- no GitHub Actions for `staging` branch
- Deploy commands:
  ```bash
  # Build & deploy to STAGING
  npm run build
  aws s3 sync out/ s3://staging.coachingwomenofcolor.com/ --delete
  aws cloudfront create-invalidation --distribution-id E39U9T07BP67U4 --paths "/*"
  ```
- **NEVER push to `main` or production without explicit user approval**
- **Pre-deploy checklist (MANDATORY before any production deploy):**
  1. Run `git status` — confirm there are no untracked or uncommitted files that belong to the site (new pages, images, components)
  2. Run `git log --oneline staging..main` and `git log --oneline main..staging` — confirm `main` has everything it needs
  3. If any new pages exist on `staging` that are not on `main`, bring them over before deploying
  4. Never deploy to production from a branch that is missing pages that have public-facing links (LinkedIn, email, etc.)
- **New pages must be committed to git before they can be deployed** — files that exist only on disk but are not committed will not survive a branch switch or deployment

### Styling Rules
- Use Tailwind utility classes for component-level styles
- Use global CSS classes (`.btn-primary`, `.btn-secondary-light`, `.section`, `.container-wide`, `.heading-section`) for reusable patterns
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
- JSON-LD structured data: Organization (layout), BreadcrumbList (Breadcrumbs), FAQPage (faq/layout), Person (about), Article (blog posts)
- Canonical URLs on all pages via `alternates.canonical`
- `robots.ts` and `sitemap.ts` for search engine crawling
- Title template: `"%s | Coaching Women of Color"`
- Registered trademarks: Coaching Women of Color® and RESET Method® (use ® not ™)

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
    contact/page.tsx        # Contact form (client component, EmailJS submission)
    case-studies/page.tsx   # Testimonials & case studies
    events/page.tsx         # Upcoming + past events with lightbox
    gallery/page.tsx        # Photo gallery (120+ images) with lightbox
    resources/page.tsx      # Resources hub
    book/page.tsx           # Booking page
    faq/page.tsx            # FAQ
    privacy/page.tsx        # Privacy policy
    terms/page.tsx          # Terms of service
    blog/
      page.tsx              # Blog listing page
      [slug]/page.tsx       # Individual blog post (dynamic route, Article schema)
    executive-coaching/     # Individual coaching landing
    for-individuals/        # Individual services overview
    for-organizations/      # Organizational solutions overview
    robots.ts               # robots.txt generation
    sitemap.ts              # XML sitemap generation
    services/
      page.tsx              # Services index
      executive-coaching/   # Executive coaching details
      keynote-speaking/     # Keynote speaking
      strategic-retreats/   # Strategic retreats
      workshops-webinars/   # Workshops & webinars
      group-coaching/       # Group coaching
      virtual-series/       # Virtual coaching series
      performance-coaching/ # Performance coaching (RESET Method)
  data/
    blog-posts.ts           # Blog post content (TypeScript data, not MDX/CMS)
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
    VideoHero.tsx           # Video background hero section (client)
  config.ts                 # basePath configuration
public/
  videos/
    wendy-keynote.mp4       # Homepage hero loop (20s, 3.3MB, H.264, no audio)
raw-videos/                 # Source video files (NOT deployed, git-ignored)
```

### Video Hero Pattern
- `VideoHero` component: muted autoplay loop, dark overlay, poster fallback, fade-up animations
- Videos go in `public/videos/`, raw source files in `raw-videos/` (git-ignored)
- Naming: `wendy-keynote.mp4`, `wendy-workshop.mp4`, `wendy-retreat.mp4`
- Encoding: HandBrake → H.264, RF 22, 30fps, no audio, 10-20s loops, under 10MB
- CSS: `.btn-secondary-light` for CTAs on dark/video backgrounds
- Accessibility: `aria-hidden` on decorative video, `prefers-reduced-motion` disables animations

## AI Tooling & Skills

### Claude Code Skills (`.claude/skills/`)
| Skill | Purpose |
|-------|---------|
| **cwc-brand-guide** | CWC-specific brand design system, color palette, component patterns, accessibility checklist. Auto-triggers on UI/design tasks. |
| **ui-ux-pro-max** | Professional UI/UX design intelligence. 67 styles, 161 palettes, 57 font pairings, 99 UX guidelines. Enforces accessibility and responsive best practices. |

### MCP Servers (`~/.claude/mcp.json`)
| Server | Purpose |
|--------|---------|
| **stitch** | Google Stitch AI - Text-to-UI generation. Generates Tailwind + React layouts from prompts. Free (350/month). |
| **nanobanana-mcp** | Google Gemini image generation/editing. AI-generated marketing visuals, social media graphics. |
| **21st.dev (Magic MCP)** | AI component builder. Generates/refines React + Tailwind components. Also has logo search (SVG/TSX). |

### Design References
- **Component Gallery:** https://component.gallery/ (60 components, 95 design systems, 2,676 examples)
- **21st.dev:** https://21st.dev/ (shadcn/ui component marketplace)
- **Anthropic Skills Guide:** `The-Complete-Guide-to-Building-Skill-for-Claude.pdf` (skill development reference)

### Blog
- Blog posts stored as TypeScript data in `src/data/blog-posts.ts` (not MDX or CMS)
- Each post has: slug, title, description, date, author, category, readTime, image (optional), content (HTML string)
- Blog listing at `/blog/` with featured image cards (3-col grid)
- Individual posts at `/blog/[slug]/` with Article structured data, breadcrumbs, author box, related posts
- Featured images use `object-cover object-top` for consistent cropping
- `@tailwindcss/typography` plugin provides prose styling for article content
- To add a new post: add entry to `blogPosts` array in `blog-posts.ts`, add URL to `sitemap.ts`

## Non-Goals (Do NOT Build)
- Server-side rendering or API routes (static export only)
- CMS or database integration
- User authentication or accounts
- E-commerce or payment processing

## Current Branch: `staging`
- Main branch for PRs: `main`
- Staging is used for pre-production review
