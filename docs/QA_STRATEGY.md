# QA Strategy - CWC Website

## Team Structure
- **Developer:** You (Rafael)
- **AI Assistant:** Claude
- **QA:** Manual testing (no automated test suite currently)

## Quality Gates

### Before Merging to Main
1. `npm run build` passes with zero errors
2. `npm run lint` passes with zero warnings
3. All pages render correctly at mobile (375px), tablet (768px), and desktop (1280px)
4. No broken links (internal or external)
5. No console errors in browser DevTools
6. Lighthouse performance score > 80 on all pages
7. All images load correctly with proper alt text

### Before Deployment
1. All quality gates above pass
2. Manual review of staging site
3. Cross-browser check (Chrome, Safari, Firefox)
4. Mobile device testing (iOS Safari, Android Chrome)
5. PDF downloads verified
6. Calendly links verified active
7. Contact form mailto: tested

## Testing Approach

### Build Verification
```bash
npm run build    # Must complete without errors
npm run lint     # Must pass with zero warnings
```

### Manual Testing Checklist

#### Navigation
- [ ] Header logo links to homepage
- [ ] All nav links work (desktop)
- [ ] Mobile hamburger menu opens/closes
- [ ] All mobile nav links work
- [ ] Active page indicator shows correctly
- [ ] "Request a Proposal" CTA button works
- [ ] Footer links all work
- [ ] Social media links open in new tabs

#### Pages
- [ ] Homepage: Hero, client logos, solutions grid, stats, testimonials, CTA
- [ ] For Organizations: Pain points, solutions, process steps, service links
- [ ] For Individuals: Coaching programs, benefits
- [ ] About: Bio, credentials, certifications, values
- [ ] Contact: Form renders, validation works, mailto submission
- [ ] Case Studies: Filters, stories, testimonials display
- [ ] Events: Upcoming events, past events, lightbox navigation
- [ ] Gallery: All images load, lightbox works, keyboard navigation
- [ ] All 7 service pages: Content renders, breadcrumbs work
- [ ] FAQ: Questions and answers display
- [ ] Resources: Resource cards display
- [ ] Privacy & Terms: Legal content renders

#### Components
- [ ] AnimatedCounter: Triggers on scroll, counts up smoothly
- [ ] TestimonialsCarousel: Scrolls, "Read more" expands
- [ ] ImageLightbox: Opens, prev/next, keyboard arrows, close
- [ ] LazyImage: Skeleton shows, image lazy-loads
- [ ] Toast: Shows on form submit, auto-dismisses
- [ ] Breadcrumbs: Correct hierarchy, links work
- [ ] Badge: All variants render correctly

#### Responsive Design
- [ ] Mobile (375px): Single column, hamburger menu, readable text
- [ ] Tablet (768px): 2-column grids, proper spacing
- [ ] Desktop (1280px): Full layout, multi-column grids

#### SEO
- [ ] Each page has unique title and description
- [ ] OG image loads on social share
- [ ] JSON-LD schema validates (Google Rich Results Test)
- [ ] No duplicate H1 tags per page

#### Accessibility
- [ ] Skip-to-content link works
- [ ] Tab navigation reaches all interactive elements
- [ ] Focus-visible styles show on keyboard navigation
- [ ] Images have alt text
- [ ] Color contrast meets WCAG AA

#### Performance
- [ ] No unnecessarily large images
- [ ] Lazy loading works on gallery/events pages
- [ ] No layout shifts on page load
- [ ] Total page weight < 5MB on any page

## Workflows

### Daily Development
1. Work on feature/fix on `staging` branch
2. Run `npm run build` to verify
3. Run `npm run lint` to check code quality
4. Manual test affected pages in browser
5. Commit and push to staging

### Pre-Release
1. Complete all quality gates
2. Run through full manual testing checklist
3. Test on staging deployment
4. Create PR from `staging` to `main`
5. Review diff for unintended changes
6. Merge and verify production deployment

## Known Limitations
- No automated test suite (unit, integration, or E2E)
- No CI/CD pipeline with automated checks (beyond build)
- Image optimization disabled (static export constraint)
- Contact form relies on mailto: (no server-side validation)
- No error tracking service (Sentry, etc.)
