# UI/UX Feedback Implementation Plan

**Date:** 2026-03-31
**Source:** External reviewer feedback (WhatsApp screenshots)
**Branch:** staging

---

## Phase 1: Icons + Color on Pain Point Cards
**Pages:** for-organizations, for-individuals, homepage
**Priority:** HIGH — most visible feedback item

### 1A. For Organizations — Pain Points (6+1 cards)
- **File:** `src/app/for-organizations/page.tsx` lines 274-328
- **Current:** Plain white bordered cards, text only, no icons
- **Fix:** Add SVG icons to each card + subtle brand color accent (left border or icon bg)
  - Retention of Top Talent → people/retention icon, pink accent
  - Disengaged Teams → disconnected/mood icon, blue accent
  - Performance & Productivity Gaps → chart-down icon, yellow accent
  - Leadership Pipeline Gaps → ladder/pipeline icon, purple accent
  - Communication Breakdowns → speech-bubble-x icon, green accent
  - Manager Ineffectiveness → user-x icon, pink accent
  - New Managers Storming → storm/compass icon, blue accent

### 1B. For Organizations — Solutions Section (7 cards)
- **File:** `src/app/for-organizations/page.tsx` lines 408-476
- **Current:** Grey cards with numbered labels, no icons
- **Fix:** Add distinct icon per solution next to the number badge
  - Executive Coaching → briefcase
  - Group Coaching → users-group
  - Keynote Speaking → microphone
  - Workshops → presentation
  - Virtual Series → video/screen
  - Strategic Retreats → compass/map
  - Performance Coaching → target/bullseye

### 1C. For Individuals — Pain Points
- **File:** `src/app/for-individuals/page.tsx` ~lines 204-249
- **Current:** Light orange cards, no icons
- **Fix:** Add icons + keep warm color scheme

### 1D. Homepage — Solution Cards
- **File:** `src/app/page.tsx` ~lines 291-310
- **Current:** Small colored dots only
- **Fix:** Replace dots with proper SVG icons

### 1E. Services Index — Service Cards
- **File:** `src/app/services/page.tsx` ~lines 88-106
- **Current:** Colored dots
- **Fix:** Replace with distinct service icons

---

## Phase 2: Restyle Non-Clickable Tags/Badges
**Pages:** for-organizations, about, case-studies, blog, keynote-speaking
**Priority:** MEDIUM — UX confusion

### 2A. For Organizations — Solution Format Tags
- **File:** `src/app/for-organizations/page.tsx` lines 464-470
- **Current:** `rounded-full border border-[#E5E5E5]` — looks like buttons
- **Fix:** Remove border, use flat bg pill style: `bg-[#F0F0F0] text-[#737373]` no border, no hover

### 2B. About — Education Badges + Industry Pills
- **File:** `src/app/about/page.tsx` ~lines 181-204, 300-308
- **Fix:** Same flat non-interactive style

### 2C. Case Studies — Category/Industry Badges
- **File:** `src/app/case-studies/page.tsx` ~line 223-226
- **Fix:** Same flat style

### 2D. Blog — Category Badges
- **File:** `src/app/blog/page.tsx` ~line 68-70
- **Fix:** Same flat style

### 2E. Keynote Speaking — Past Engagements
- **File:** `src/app/services/keynote-speaking/page.tsx` ~line 280-293
- **Fix:** Same flat style

---

## Phase 3: Shorten Long Pages
**Pages:** for-organizations (primary)
**Priority:** MEDIUM

### 3A. For Organizations — Solutions Section
- **Current:** 7 solution cards stacked vertically = massive scroll
- **Option A:** Collapse into accordion (click to expand details)
- **Option B:** Show condensed 2-3 column grid with "Learn more" links to service pages
- **Recommended:** Option B — grid of cards linking to `/services/*` pages, keeps page scannable

### 3B. For Organizations — Remove Redundancy
- "Explore Our Services" section (lines 564-592) duplicates the solutions section above
- **Fix:** Remove one or merge them

---

## Phase 4: Google Analytics
**File:** `src/app/layout.tsx` line 6
**Priority:** HIGH — no data being collected

- **Current:** `const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"` (placeholder)
- **Fix:** Need real GA4 Measurement ID from user
- **Action:** ASK USER for their GA4 ID

---

## Phase 5: Minor Fixes
**Priority:** LOW

### 5A. Case Studies — Testimonial Author Text
- Fix floating grey text / disconnected author names

### 5B. About — Values Section
- Add subtle color or icons to flat white cards

### 5C. Image Lazy Loading
- Add `loading="lazy"` to blog card images and testimonial images where missing

---

## Execution Order
1. Phase 1A + 1B (For Organizations icons + color) — biggest impact
2. Phase 2A-2E (Restyle all non-clickable tags) — quick batch fix
3. Phase 3A (Shorten solutions section) — layout restructure
4. Phase 1C-1E (Other pages icons) — consistency pass
5. Phase 4 (GA4) — blocked on user input
6. Phase 5 (Minor fixes) — polish

## Rules (from CLAUDE.md)
- Use brand colors only (no arbitrary hex values)
- Tailwind utilities for component styles
- Server components by default
- Static export — no API routes
- Deploy to staging only — never push to main/production without approval
