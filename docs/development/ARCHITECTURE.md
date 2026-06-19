# Architecture - CWC Website

## Tech Stack
| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 16.1.1 |
| Language | TypeScript | 5.9.3 |
| UI Library | React | 19.2.3 |
| Styling | Tailwind CSS | 4.1.18 |
| CSS Processing | PostCSS + Autoprefixer | -- |
| Build Output | Static HTML Export | -- |
| Deployment | AWS Amplify / CloudFront | -- |
| Package Manager | npm | -- |

## Configuration Files
| File | Purpose |
|------|---------|
| `next.config.ts` | Static export, unoptimized images, trailing slashes |
| `tsconfig.json` | Strict mode, `@/*` path alias, ES2017 target |
| `postcss.config.mjs` | Tailwind CSS + Autoprefixer |
| `src/config.ts` | `siteConfig.basePath` for image/PDF paths |
| `src/app/globals.css` | Design system: colors, typography, buttons, cards, animations |

## Folder Structure
```
cwc-website/
├── public/                     # Static assets served at root
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── og-image.png
│   ├── logo.webp               # Site logo
│   ├── cwc-capabilities-statement.pdf
│   └── images/
│       ├── clients/            # Client logo images (27+)
│       ├── events/             # Event flyer images (25+)
│       ├── gallery/            # Gallery photos (120+)
│       ├── new/                # Service/hero images
│       └── testimonial-*.{jpg,png}  # Testimonial author photos
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout (metadata, JSON-LD, fonts)
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles & design system
│   │   ├── about/
│   │   ├── book/
│   │   ├── case-studies/
│   │   ├── contact/
│   │   │   ├── layout.tsx      # Contact-specific layout
│   │   │   └── page.tsx
│   │   ├── events/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── executive-coaching/
│   │   ├── faq/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── for-individuals/
│   │   ├── for-organizations/
│   │   ├── gallery/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── privacy/
│   │   ├── resources/
│   │   ├── services/
│   │   │   ├── page.tsx
│   │   │   ├── executive-coaching/
│   │   │   ├── group-coaching/
│   │   │   ├── keynote-speaking/
│   │   │   ├── performance-coaching/
│   │   │   ├── strategic-retreats/
│   │   │   ├── virtual-series/
│   │   │   └── workshops-webinars/
│   │   └── terms/
│   ├── components/
│   │   ├── index.ts            # Barrel export for all components
│   │   ├── Header.tsx          # Fixed nav, mobile menu (client)
│   │   ├── Footer.tsx          # 5-column footer (server)
│   │   ├── AnimatedCounter.tsx # Scroll-triggered counter (client)
│   │   ├── Badge.tsx           # Multi-variant badge
│   │   ├── Breadcrumbs.tsx     # SEO breadcrumbs + JSON-LD (server)
│   │   ├── ImageLightbox.tsx   # Gallery lightbox + keyboard nav (client)
│   │   ├── LazyImage.tsx       # Lazy-loaded image + skeleton (client)
│   │   ├── Modal.tsx           # Portal-based modal (client)
│   │   ├── Separator.tsx       # Visual divider
│   │   ├── TestimonialsCarousel.tsx # Horizontal scroll carousel (client)
│   │   └── Toast.tsx           # Notification toast (client)
│   └── config.ts              # siteConfig with basePath
├── CLAUDE.md                   # AI context (this project)
├── PRD.md                      # Product requirements
├── PENDING_ITEMS.md            # Task tracker
└── docs/
    ├── QA_STRATEGY.md          # Testing strategy
    └── development/
        └── ARCHITECTURE.md     # This file
```

## Component Inventory

### Server Components (no `"use client"`)
| Component | File | Purpose |
|-----------|------|---------|
| Footer | `Footer.tsx` | Site-wide footer with nav columns, social links |
| Badge | `Badge.tsx` | Color-variant badges (teal, pink, gold, green, purple, dark) |
| Breadcrumbs | `Breadcrumbs.tsx` | Hierarchical breadcrumbs with JSON-LD schema |
| Separator | `Separator.tsx` | Horizontal divider line |

### Client Components (`"use client"`)
| Component | File | State/Effects Used |
|-----------|------|-------------------|
| Header | `Header.tsx` | `useState` (mobile menu), `usePathname` (active link) |
| AnimatedCounter | `AnimatedCounter.tsx` | `useState`, `useRef`, `useEffect` (IntersectionObserver, requestAnimationFrame) |
| ImageLightbox | `ImageLightbox.tsx` | `useCallback`, `useEffect` (keyboard events) |
| LazyImage | `LazyImage.tsx` | `useState`, `useRef`, `useEffect` (IntersectionObserver) |
| Modal | `Modal.tsx` | `useEffect` (body scroll lock, escape key, portal) |
| TestimonialsCarousel | `TestimonialsCarousel.tsx` | `useState`, `useRef` (scroll container, expanded state) |
| Toast | `Toast.tsx` | `useEffect` (auto-dismiss timer) |

## Page Architecture

### Data Pattern
All page data is colocated in the page file as typed arrays/objects:
```typescript
// Example from homepage
const solutions = [
  { title: "...", description: "...", color: "...", href: "..." },
  // ...
];
```

No external data sources, APIs, or databases. All content is static and embedded.

### Metadata Pattern
Every page exports metadata for SEO:
```typescript
export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description for search engines.",
};
```

Root layout provides the template: `"%s | Coaching Women of Color"`

### Layout Nesting
```
RootLayout (layout.tsx)
  ├── Header
  ├── {children}  ← page content
  └── Footer

Some pages have nested layouts:
  contact/layout.tsx
  events/layout.tsx
  faq/layout.tsx
  gallery/layout.tsx
```

## External Integrations
| Service | Purpose | Integration Method |
|---------|---------|-------------------|
| Calendly | Booking calls | External link (URL) |
| LinkedIn | Social / Newsletter | External link |
| Instagram | Social | External link |
| Facebook | Social | External link |
| AWS Amplify | Hosting | Static deploy |
| CloudFront | CDN | AWS infrastructure |

## Build & Deploy

### Build Process
```bash
npm run build
# Runs: next build
# Output: /out/ directory (static HTML/CSS/JS)
```

### Static Export Constraints
- No `getServerSideProps` or `getStaticProps` (App Router doesn't use these)
- No API routes (`/api/*`)
- No middleware
- No `next/headers` or `next/cookies` in server components
- No `revalidate` or ISR
- Dynamic routes require `generateStaticParams` with all paths known at build time
- Images use `<img>` or unoptimized `<Image>` (no Next.js image optimization)

### Deployment Flow
```
staging branch → build → staging preview (Amplify)
       ↓ PR merge
main branch → build → production (Amplify → CloudFront)
```

## Performance Considerations
- **Lazy loading:** Gallery and event images use IntersectionObserver
- **Skeleton loading:** LazyImage shows placeholder while loading
- **Animation deferral:** AnimatedCounter only triggers when visible
- **No unnecessary JS:** Server components ship zero client JS
- **Static HTML:** All pages pre-rendered at build time
