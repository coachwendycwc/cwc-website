# Findings & Decisions - CWC Website

## Requirements
- Complete remaining 15% of website
- Add video embeds (keynote/speaking page)
- Fix logo carousel sizing
- Add impact statistics (if available)
- Optional: new photo selection from WOCIP shoot

## Research Findings

### Current Site Status
- 16 pages complete and functional
- 18 client logos in carousel
- 7+ testimonials implemented
- 11 optimized photos in `public/images/new/`
- Case studies page complete

### Available Video Content
Located in `content/new-photos/`:
- `Podcast Post.mov` - Podcast promotional video
- `20250301_121922342.mp4` - Recent clip (Mar 2025)
- `IMG_1824.mov` - `IMG_1828.mov` - Event clips
- Various `.MOV` files - Additional footage

### Logo Carousel Issues
- Some logos may need size adjustment
- J&J and Colgate mentioned specifically
- Currently uses grayscale→color hover effect

### Photo Inventory
- Professional headshots available
- Action shots from events
- WOCIP Dec 2024 shoot photos available
- Some HEIC files need conversion

## Technical Decisions
| Decision | Rationale |
|----------|-----------|
| Next.js 16 + React 19 | Modern stack, good DX |
| Tailwind CSS 4 | Utility-first, fast styling |
| GitHub Pages deployment | Free, auto-deploy on push |
| Apple-inspired styling (60-70%) | Clean, professional look |

## Issues Encountered
| Issue | Resolution |
|-------|------------|
| Glob not finding tsx files | Used `find` command instead |
| package-lock.json corruption | Removed from git, added to .gitignore |

## Resources
- Live site: https://mdxvision.github.io/cwc-website/
- Repo: https://github.com/mdxvision/cwc-website
- CLAUDE-NOTES.md - Full session history
- CONTENT-CHECKLIST.md - Content status tracker

## Visual/Browser Findings
- Homepage hero uses `headshot-wocip-1.jpg`
- About page uses `headshot-professional-1.jpg`
- Service pages have action shots assigned

---
*Update this file after every 2 view/browser/search operations*
