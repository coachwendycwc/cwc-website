# CWC Website — Session Resume

**Last worked:** 2026-07-20 (session spanned ~2026-06-19 → 2026-07-20)
**Purpose:** Pick up cleanly after a terminal restart. Read this first.

---

## TL;DR — where we are RIGHT NOW

- **Everything is shipped to production and verified.** `main == staging == prod == b2aa960`. No uncommitted work.
- Site: **https://coachingwomenofcolor.com** (prod) · **https://staging.coachingwomenofcolor.com** (staging)
- Working branch: **`staging`**. Flow: work on staging → merge to `main` → deploy prod.
- **Last thing done:** fixed the `/for-individuals` tier-badge overlap ("SIGNATURE PROGRAM" collided with duration text). Shortened badges to Signature / 6-Week Reset / Community. Live + verified.

---

## Deploy mechanics (IMPORTANT — CI is broken)

- **CI auto-deploy to prod S3 is BROKEN** — the GitHub Action's `deploy-aws` job fails at "Configure AWS credentials" because repo secrets `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` are NOT set. So every prod deploy is **MANUAL**.
- **Manual deploy pattern** (local AWS CLI is authed as `bag-deploy`, acct 541801280754):
  ```bash
  npm run build                                  # must stay 38/38 pages
  # STAGING:
  aws s3 sync out/ s3://staging.coachingwomenofcolor.com/ --delete
  aws cloudfront create-invalidation --distribution-id E39U9T07BP67U4 --paths "/*"
  # PRODUCTION:
  aws s3 sync out/ s3://coachingwomenofcolor.com/ --delete
  aws cloudfront create-invalidation --distribution-id E2RMMPGLN2DEIG --paths "/*"
  ```
- CloudFront: **prod = E2RMMPGLN2DEIG**, **staging = E39U9T07BP67U4**.
- **⚠️ ONLY RAFAEL CAN FIX CI** (I can't transmit secret creds). To fix, Rafael runs:
  ```
  ! gh secret set AWS_ACCESS_KEY_ID --repo coachwendycwc/cwc-website --body "$(aws configure get aws_access_key_id)"
  ! gh secret set AWS_SECRET_ACCESS_KEY --repo coachwendycwc/cwc-website --body "$(aws configure get aws_secret_access_key)"
  ```
  (CLOUDFRONT_DISTRIBUTION_ID secret already set. mdxvision gh account has admin.)

## Guardrails — re-grep after ANY change (never regress these)

- Booking CTAs → `/schedule/*` (NEVER calendly.com or raw app.usemotion.com). `/schedule/*` pages themselves link to Motion on purpose.
- Client logos: uniform box + `max-h-full object-contain`.
- `.text-gradient` = deepened `#14739C`→`#56487A` (WCAG AA). Don't revert to bright `#3EBCE8`.
- Blue TEXT on light bg = `#14739C` (AA). `#3EBCE8` stays ONLY on icons, dark-bg, hovers.
- Off-brand `#9333EA` purple → `#8B7BB5` everywhere (done).
- `@source not "../../.claude"` in globals.css — keeps Tailwind from scanning leftover worktrees (they have stale classes). Don't remove.
- **Verify before claiming done:** build output (`out/`), real grep, live URL — not memory. Audits/notes have been wrong; always re-check.
- **public/ static HTML is NOT covered by src/ greps** — sweep BOTH when checking links/colors.

---

## What shipped this session (all LIVE on prod)

1. Booking CTAs everywhere → branded `/schedule/` pages (incl. static `public/cwc-reset-method-v2.html`). Killed stale `?month=2026-04` Calendly links.
2. Client-logo uniform sizing.
3. Nav active-state fix (explicit matchPaths, not broad `/services`).
4. Design polish: Outfit display font + motion/easing system (from a recovered worktree).
5. Resources → **bento** layout (featured card + 2 stacked).
6. Featured card **document preview** (rendered from the actual `confidence-building-tool.html`).
7. WCAG AA: blue text `#14739C` + **deepened `.text-gradient`**.
8. Design-fix Phases 1–3: double-arrow bug (`/resources`), off-brand purple→brand, whitespace tightening, native `<button>` lightbox triggers (events/gallery), gallery a11y (decorative alt + group label), RESET Method dual-CTAs ("View the RESET Method®" + "Book a Call"), resources heading "Free Tools & Guides".
9. **NEW /for-individuals** — full copy rewrite from `~/Downloads/CWC-for-individuals-page-copy.md`: 3 offers flagship-first, NEW PRICING (Exec Coaching $1,500/mo/$9,000, Leadership Intensive $3,500 [replaces 90-Day Sprint $5,000], Lab $997/yr), REMOVED $697 Clarity Session, new Investment & Access section. Badge overlap fixed.
10. **/about-preview** — noindexed photo-led prototype (Catherine-inspired) to show Wendy. Does NOT touch live /about.

---

## OPEN / NEXT (pick up here)

### Decisions waiting on Rafael
- **CI secrets** (above) — so deploys auto-run instead of manual.
- **/about-preview** — live at https://coachingwomenofcolor.com/about-preview/ (noindexed). If Wendy likes it → make it the real `/about`. **BIG WIN would be a bright studio photoshoot of Wendy** — all current photos are from ONE dark-restaurant shoot, which fights the warm/clean Catherine look. Design is ready for better photos.

### Design direction captured
- `docs/superpowers/plans/2026-07-15-design-direction-clean-photo-led.md` — the Catherine (unbounded-potential.com/catherine) study. Core insight: CWC's "thin/empty" sections aren't a padding problem, they're a **missing-photo problem** — sparse sections need a photo anchor, not less whitespace.
- `docs/superpowers/plans/2026-06-20-cwc-design-fixes.md` — the verified fix plan (Phases 1–4, all done). Also lists DEBUNKED non-issues: robots.ts noindex (intentional), /contact CTA routing (correct = proposal funnel), #737373/#525252 body contrast (actually passes). Don't "fix" these.

### Known-but-unactioned polish (real, low urgency)
- `/resources` still feels a bit thin (2 cards + mid-page void) — candidate for photo-led treatment.
- Case-studies olive `#5A7A00` badge (off-palette, audit flagged).
- Some service-page heroes have generous bottom padding (airy, not broken).
- Whitespace voids on a few pages (partially tightened).

### Housekeeping
- 2 leftover git worktrees in `.claude/worktrees/` (elated-gould-ead37c, staging-design-upgrade) — contain UNCOMMITTED design work; DO NOT force-delete without reviewing (preserved on purpose). Tailwind is excluded from scanning them via @source.
- `stash@{0}` parked (stale April doc reversions — droppable).
- ~18 untracked assets (PDFs, docs) at repo root.

---

## Working-style notes (from Rafael's memory)
- **Decide, don't menu** in ultra mode — pick the sensible default and act; don't survey 4 options every step.
- Ship staging-first, verify on live URL, then prod on explicit OK.
- Prices/facts on client-facing pages = source-map discipline: verify every number against the source doc before shipping.

---

## Quick start commands when you return
```bash
cd /Users/rafaelrodriguez/projects/CWC/cwc-website
git status && git log --oneline -5      # confirm state (should be b2aa960, clean)
npm run dev                             # local dev on :3001
# or build + preview:  npm run build && (cd out && python3 -m http.server 3055)
```
