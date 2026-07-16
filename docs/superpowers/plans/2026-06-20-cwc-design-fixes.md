# CWC Website Design Fix Plan

**Goal:** Execute the verified findings from the dual design audit + page review as a ranked, methodical backlog — staging-first, one task at a time, each verified before moving on.

**Approach:** Every item below was VERIFIED against the actual code (not taken on the audit's word — several audit claims were overstated/wrong and are excluded). Each task is self-contained: exact file:line, the change, a verify step. Static-export Next.js, so "verify" = build + grep/visual check, not unit tests.

**Workflow per task:** edit → `npm run build` (must stay 37/37) → grep/visual verify → check the box. Batch a phase, then deploy to **staging** for review. Promote to prod only on explicit approval.

**Branch:** all work on `staging` (or short-lived branches merged to staging). `main`/prod untouched until approved.

**Guardrails (never regress — re-grep after each task):** booking CTAs → `/schedule/*` (not calendly); logo `max-h-full object-contain`; `.text-gradient` intact; `/schedule` dark-bg blue stays `#3EBCE8`.

---

## Already done (on staging, awaiting prod promotion)
- [x] Blue text/eyebrows/links contrast → `#14739C` (commit 296ddc0)
- [x] Deepened `.text-gradient` headings → `#14739C`→`#56487A` (commit f35c46e)

---

## Phase 1 — Quick verified defects (low risk, high clarity)

### Task 1: Fix double-arrow bug on /resources
**Why:** `.link-arrow::after { content:"→" }` (globals.css:463) appends an arrow, but 5 spans ALSO have a literal "→" in their text → renders "Download free → →". VERIFIED.
**Files:** Modify `src/app/resources/page.tsx` lines 72, 93, 127, 148, 169
- [x] Remove the trailing ` →` from each of the 5 `.link-arrow` span texts:
  - L72 `Download free →` → `Download free`
  - L93 `Take the assessment →` → `Take the assessment`
  - L127 `Subscribe on LinkedIn →` → `Subscribe on LinkedIn`
  - L148 `Read the feature →` → `Read the feature`
  - L169 `Listen on Apple Podcasts →` → `Listen on Apple Podcasts`
- [x] Grep sitewide for any other `.link-arrow` span containing a literal `→`; fix those too.
  Run: `grep -rn 'link-arrow' src/app/ | grep '→'` → expect empty after fix
- [ ] `npm run build` → 37/37
- [ ] Verify on staging: /resources cards show ONE arrow each

### Task 2: Off-brand #9333EA purple → brand purple #8B7BB5
**Why:** `#9333EA` is NOT in the CWC palette (brand purple = `#8B7BB5` / --color-purple-500). VERIFIED 19 occurrences / 12 files. Both audits flagged.
**Files:** all under `src/app/`: page.tsx (48, 432), schedule/page.tsx (52), schedule/speaking/page.tsx (14, 44), resources/page.tsx (83, 159), case-studies/page.tsx (88), for-organizations/page.tsx (121, 179, 317), for-individuals/page.tsx (174, 218), services/page.tsx (47), services/virtual-series/page.tsx (90, 122, 150)
- [x] Replace all `#9333EA` → `#8B7BB5` sitewide (it's used as fill/stroke/accent/gradient-stop — same role, just on-brand).
  Run: `grep -rl '9333EA' src/app/ | while read f; do perl -i -pe 's/9333EA/8B7BB5/g' "$f"; done`
- [ ] Verify: `grep -rn '9333EA' src/app/` → expect empty
- [ ] `npm run build` → 37/37
- [ ] Visual check on staging: speaking card / virtual-series accents now brand purple, not electric violet

---

## Phase 2 — Whitespace / layout (the "looks empty" problem)

### Task 3: /resources empty hero
**Why:** hero is `pt-32 pb-20` with content only in the left column → right half empty, big void. VERIFIED (resources/page.tsx:22).
- [x] Options to evaluate in-browser (pick one, preview before commit):
  (a) reduce hero padding to match `.section` rhythm; OR
  (b) add a right-column visual (e.g. a resource-cover collage) to balance; OR
  (c) center the hero content instead of left-aligning so the empty right isn't conspicuous.
- [x] Preview on local, then staging.

### Task 4: Section-gap voids on /for-organizations
**Why:** large empty gaps between bridge text → logo strip, and before "Organizational Solutions". VERIFIED visually.
- [x] Inspect the stacked section paddings (bottom of one + top of next) at those seams; reduce where they double up.
- [x] Preview; ensure no other page regresses (it's the shared `.section` — change page-level margins, not the global class, unless global is intended).

---

## Phase 3 — Audit items still open (verified-worthy, lower urgency)

### Task 5: role="button" on <div> → native <button> (events, gallery)
**Why:** accessibility — custom `role="button"` divs for lightbox triggers. Both audits flagged.
**Files:** `src/app/events/page.tsx` (~232-236, 296-300), `src/app/gallery/page.tsx` (~175-183)
- [x] VERIFY exact lines first (audit line numbers may have drifted).
- [x] Convert to native `<button type="button">`, keep onClick, ensure visible focus ring.
- [ ] `npm run build` → 37/37.

### Task 6: performance-coaching CTA label/destination mismatch
**Why:** "Learn About the RESET Method" → `/contact` (a proposal form). Label promises info, link is a form. Claude flagged; VERIFIED.
**Files:** `src/app/services/performance-coaching/page.tsx` (~60, 185)
- [x] Decide: relabel to "Request a Coaching Proposal" (match destination) OR point to an info section. Confirm intent with Rafael.

### Task 7: generic gallery alt text
**Why:** `"CWC event photo {index}"` carries no meaning. Lower priority (real but large effort to do well).
- [x] DONE (group label + decorative): was — Defer unless Rafael wants it; would need per-image categorization.

---

## Phase 4 — Promote to production
- [ ] Review the full staging site once Phases 1-2 (min) are done.
- [ ] On Rafael's explicit OK: merge staging → main, manual `aws s3 sync` to prod bucket + CloudFront invalidation (E2RMMPGLN2DEIG). (CI auto-deploy still needs AWS secrets set by Rafael.)

---

## Explicitly NOT doing (verified as non-issues — do not "fix")
- ~~robots.ts noindex on booking pages~~ — INTENTIONAL; hub is indexed + in sitemap.
- ~~service CTAs → /contact is wrong~~ — CORRECT; /contact is the deliberate proposal funnel.
- ~~#737373 / #525252 body text fails contrast~~ — FALSE; both pass on light (4.74 / 7.81).
