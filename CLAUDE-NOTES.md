# Claude Session Notes - CWC Website

**Last Updated:** 2025-12-28 (Photos added + CI fixed)

**Live Site:** https://mdxvision.github.io/cwc-website/

---

## Latest Session (Dec 28, 2025)

### Completed
- [x] Added 11 new optimized photos from Dec 2024 photoshoot to `public/images/new/`
- [x] Updated homepage hero with `headshot-wocip-1.jpg`
- [x] Updated About page with `headshot-professional-1.jpg`
- [x] Updated all service pages with new action shots
- [x] Fixed CI deployment (Node 20, removed corrupt package-lock.json)
- [x] Site deployed and live

### New Images Added (`public/images/new/`)
| File | Size | Used On |
|------|------|---------|
| headshot-wocip-1.jpg | 308KB | Homepage hero |
| headshot-professional-1.jpg | 177KB | About page |
| headshot-studio-1.jpg | 242KB | Available |
| headshot-wocip-2.jpg | 205KB | Available |
| headshot-retouched.jpg | 119KB | Available |
| action-summit-talk.jpg | 160KB | Keynote Speaking |
| action-woc-leaders.jpg | 465KB | DEI Workshops |
| action-awards.jpg | 416KB | Leadership Development |
| action-pitch.jpg | 144KB | Consulting |
| action-recent-event.jpg | 381KB | Available |
| action-women-club.jpg | 104KB | Available |

### CI Fix
- Issue: `npm ci` failing with "Invalid Version:" error
- Cause: Corrupted package-lock.json
- Fix: Removed package-lock.json from git, added to .gitignore, use Node 20

---

## Session Update - Image Conversion

All 55 images from `content/mediakit_extract/ppt/media/` have been converted to optimized JPEG format and saved to `public/images/`.

- Converted using `sips` with 80% quality
- Total size reduced from ~11MB to ~3.2MB
- Largest file: image19.jpg (499KB)
- All files now in `public/images/image1.jpg` through `image55.jpg`

**Status:** Image review COMPLETE - see inventory below

---

## Image Inventory (public/images/)

### Wendy Photos - HIGH PRIORITY
| File | Description | Recommended Use |
|------|-------------|-----------------|
| image15.jpg | Blue blazer, arms crossed, white bg | Homepage hero, About page |
| image19.jpg | Blue blazer, outdoor/greenery background | About page, testimonials |
| image48.jpg | Full body seated, blue blouse, yellow circle bg | Creative/lifestyle section |
| image49.jpg | Media kit cover, orange blazer, contact info | Speaker/keynote page |

### Action/Speaking Shots
| File | Description |
|------|-------------|
| image4.jpg | On stage at podium with another speaker |
| image5.jpg | Speaking to large audience (wearing yellow) |
| image8.jpg | Standing with CWC banner at event |
| image11.jpg | Facilitating workshop (wearing red) |
| image47.jpg | "TOPICS" header with speaking photo background |
| image55.jpg | Group coaching session (faded/light) |

### Brand Assets
| File | Description |
|------|-------------|
| image7.jpg | **CWC Logo** - Coaching Women of Color (colorful leaves) |
| image24.jpg | Service icons (coaching, clock, handshake, mic) |
| image32.jpg | Colorful service icons (superhero, handshake, growth, etc.) |
| image37.jpg | Row of 5 service icons (lightbulb, handshake, growth, strength, community) |

### Certification Logos
| File | Description |
|------|-------------|
| image1.jpg | BEACONS (red torch badge) |
| image2.jpg | Everything DiSC Certified Practitioner |
| image3.jpg | ICF (International Coaching Federation) |
| image9.jpg | Small certification icon (hand/book) |
| image16.jpg | Imposter Syndrome Coach Practitioner |
| image34.jpg | International Coaching & Leadership Institute Rising |

### Client Logos
| File | Organization |
|------|--------------|
| image10.jpg | Colgate University |
| image12.jpg | Hill's |
| image13.jpg | ALPFA |
| image14.jpg | TD Bank |
| image17.jpg | Women in Housing and Finance (WHF) |
| image18.jpg | Bloomberg Quicktake |
| image20.jpg | VillageCareMAX |
| image21.jpg | Proud To Be Latina |
| image22.jpg | HACE (Hispanic Alliance for Career Enhancement) |
| image23.jpg | NYC Department of Education |
| image25.jpg | University of Michigan |
| image26.jpg | Latinas Represent |
| image27.jpg | SURGE Institute |
| image28.jpg | VaynerMedia |
| image29.jpg | NJ Arts & Culture Renewal Fund |
| image30.jpg | Ellevate |
| image31.jpg | URI NYC (Urban Resource Institute) |
| image33.jpg | ATD Maryland |
| image35.jpg | Howard Center |
| image36.jpg | Developing Capacity Coaching |
| image39.jpg | Poderistas |
| image40.jpg | RiseBoro Community Partnership |
| image41.jpg | Monique Burr Foundation for Children |
| image42.jpg | DataRobot |
| image43.jpg | Novo Nordisk |
| image44.jpg | Genentech (Roche Group) |
| image45.jpg | Johnson & Johnson |

### Testimonial Photos (Not Wendy)
| File | Description |
|------|-------------|
| image46.jpg | Woman with curly hair, colorful background |
| image51.jpg | Woman in green top, circle crop |

### Social/Contact Icons (Purple)
| File | Icon |
|------|------|
| image50.jpg | Email |
| image52.jpg | Instagram |
| image53.jpg | LinkedIn |
| image54.jpg | Website/Globe |

### Skip (Blank/Unusable)
- image6.jpg - Blank (transparency issue)
- image38.jpg - Unknown "W" logo

---

## NEW PHOTOS INVENTORY (Dec 28, 2025)

Located in `content/new-photos/` - **8.1GB total** of new high-resolution content

### Summary
| Category | Files | Notes |
|----------|-------|-------|
| Images (jpg/jpeg) | 596 | High-res professional photos |
| Images (HEIC) | 154 | iPhone format, need conversion |
| Images (PNG) | 50 | Mixed graphics and photos |
| Videos (MP4/MOV) | 84 | Speaking clips, events, podcast |

---

### CWC Photos (2.0GB)
Organized professional photo collection

| Folder | Count | Description |
|--------|-------|-------------|
| **PROFESSIONAL PHOTOS** | 52 | Studio headshots (_PBK*, ESPI*), high-res |
| **NEW WEBSITE PHOTOS** | 26 | ESPF series - website-ready professional shots |
| **IN-ACTION PHOTOS** | 78 | Speaking events, Global Women summit, workshops |
| **FUN LIFE COACHING PHOTOS** | 27 | Lifestyle shots (_DSC series) |
| **BLACK & WHITE PHOTOS** | 22 | B&W versions of professional photos |
| **WOCIP PHOTOS** | 53 | Recent Dec 2024 shoot (0B1A series) + older DSC photos |
| **Stock Photos** | 3 | Board meeting, corporate imagery (webp) |

#### Key Files
- `PROFESSIONAL PHOTOS/_PBK7515.jpg` through `_PBK7770.jpg` - Studio session
- `NEW WEBSITE PHOTOS/ESPF0904-2.jpg` through `ESPF1006-2.jpg` - Professional headshots
- `IN-ACTION PHOTOS/Global women awards.jpg` - Award ceremony
- `IN-ACTION PHOTOS/IMG_1837.JPG`, `IMG_1839.JPG` - Recent (Apr 2025)
- `WOCIP PHOTOS/0B1A7912.jpg` through `0B1A7954.jpg` - Latest photoshoot (Dec 2024)

---

### CWC Photos 2 (1.5GB)
Additional professional collection

| Folder | Count | Description |
|--------|-------|-------------|
| **PROFESSIONAL PHOTOS** | 72 | More _PBK series + retouched versions |
| **NEW WEBSITE PHOTOS** | 22 | ESPF series variants |
| **IN-ACTION PHOTOS** | 6 | Global women pitch, Thailand nonprofit, leaders |
| **BLACK & WHITE PHOTOS** | 47 | B&W versions |

#### Key Files
- `PROFESSIONAL PHOTOS/_PBK7642 Retouched.jpg` - Retouched headshot
- `IN-ACTION PHOTOS/women of color leaders.jpg` - Group shot
- `IN-ACTION PHOTOS/Global women pitch.jpg` - Presentation photo

---

### CWC 2026 Website (Compilation) (4.6GB)
Large collection with 558 files - mixed content from various sources

| Type | Count | Notes |
|------|-------|-------|
| JPG/JPEG images | 435 | Mix of all photo types |
| HEIC images | 154 | iPhone photos, need conversion for web |
| MP4/MOV videos | 11+ | Event clips, podcast content |
| PNG graphics | ~50 | Screenshots, graphics |

#### Notable Content
- `0B1A6984.jpg` through `0B1A7930.jpg` - Professional shots
- `Podcast Post.mov` - Podcast video content
- `IMG_1824.mov` through `IMG_1828.mov` - Recent video clips
- Various iPhone photos (IMG_* HEIC) - need conversion

---

### Videos Available (11 files)
| File | Description |
|------|-------------|
| `20250301_121922342.mp4` | Recent clip (Mar 2025) |
| `Podcast Post.mov` | Podcast promotional video |
| `IMG_1824.mov` - `IMG_1828.mov` | Event video clips |
| `IMG_7947.MOV` | Event footage |
| `IMG_3274.MOV` - `IMG_3320.MOV` | Additional clips |
| `e1d0940f-5067-4195-9bb1-543d56b8bfad.mp4` | Unknown content |
| `IMG_2869.mov` | Additional video |

---

### Recommended for Website Use

#### Homepage Hero Options
1. `CWC Photos/NEW WEBSITE PHOTOS/ESPF0920-2.jpg` - Professional headshot
2. `CWC Photos/WOCIP PHOTOS/0B1A7924.jpg` - Latest photoshoot (Dec 2024)
3. `CWC Photos/PROFESSIONAL PHOTOS/ESPI9369.jpg` - Studio shot

#### Speaking/Action Shots
1. `CWC Photos/IN-ACTION PHOTOS/Global women summit talk.jpg`
2. `CWC Photos/IN-ACTION PHOTOS/global women club.jpg`
3. `CWC Photos/IN-ACTION PHOTOS/IMG_1837.JPG` - Recent event

#### About Page
1. `CWC Photos/WOCIP PHOTOS/0B1A7916.jpg` - Recent professional
2. `CWC Photos 2/PROFESSIONAL PHOTOS/_PBK7642 Retouched.jpg`

#### Video Embed Candidates
1. `Podcast Post.mov` - Podcast content for media page
2. `20250301_121922342.mp4` - Recent speaking clip

---

### Next Steps for New Photos
1. [ ] Select best headshots from WOCIP (Dec 2024) shoot
2. [ ] Convert selected HEIC files to JPEG for web
3. [ ] Optimize chosen photos with sips (80% quality)
4. [ ] Copy optimized images to `public/images/new/`
5. [ ] Update homepage hero with new headshot
6. [ ] Add video embeds to keynote/speaking page
7. [ ] Consider adding photo gallery page

---

**Project:** Coaching Women of Color Website Rebuild

---

## Current Project State

### Completed
- [x] Basic Next.js site structure with all pages
- [x] Homepage with testimonials (6 total), client logos, services grid
- [x] About page with education/certifications separated
- [x] Contact page with correct email (wendy@) and phone
- [x] Executive Coaching page with $9,900 pricing section
- [x] All service pages created (consulting, DEI workshops, group coaching, keynote, leadership dev)
- [x] Life coaching and executive coaching standalone pages
- [x] Legal pages (privacy, terms)
- [x] GitHub deployment workflow
- [x] Headshot image optimized (wendy-perdomo.png)

### In Progress
- [x] Extract and use images from PPTX files for website ✓ DONE
- [x] Add images to website pages ✓ DONE

### Completed This Session (Dec 27 Evening)
- [x] Homepage hero - Updated with image15.jpg (professional headshot)
- [x] About page - Updated with image19.jpg (outdoor headshot)
- [x] Client logos carousel - 18 logos with auto-scroll, grayscale→color on hover
- [x] Keynote Speaking page - Added image5.jpg (speaking to audience)
- [x] DEI Workshops page - Added image11.jpg (facilitating workshop)
- [x] Leadership Development page - Added image4.jpg (on stage)
- [x] Consulting page - Added image8.jpg (with CWC banner)

### Completed (Dec 28)
- [x] Case studies page with real success stories from extracted PDFs

### Not Started
- [ ] Video embeds (if available)

---

## Content Source Files

Located in `/content/`:

| File | Purpose | Status |
|------|---------|--------|
| `FINAL 2025 CWC Speaker Media Kit.pptx` | Photos, testimonials, media | Partially extracted |
| `Coaching Women of Color Program Details & Pricing.pptx` | Program details, pricing | Partially extracted |
| `CWC_CAPABILITIES STATEMENT FINAL.pdf` | Corporate capabilities | Not extracted |
| `Coaching Women of Color Program Details & Pricing.pdf` | PDF version | Not extracted |

### Extracted Folders
- `mediakit_extract/` - From Speaker Media Kit PPTX
- `pptx_extract/` - From Program Details PPTX

---

## Image Extraction Issues

### Problem
When extracting images from PPTX files, errors occur. The PPTX files are essentially ZIP archives containing XML and media files.

### What Works
```bash
# Unzip PPTX to extract folder
unzip -o "content/FINAL 2025 CWC Speaker Media Kit.pptx" -d content/mediakit_extract/
```

### Images Available
After extraction, images are in:
- `content/mediakit_extract/ppt/media/` - 55 images (image1.png through image55.png)
- `content/pptx_extract/ppt/media/` - 18 images

### Common Issues
1. **Temp lock files** - Files like `~$FINAL 2025...` are temp files (ignore them)
2. **File permissions** - May need `chmod` on extracted files
3. **Image format** - Mix of PNG and JPG, some may need conversion for web
4. **Image mapping** - Need to identify which images are which (headshots, logos, action shots)

### Next Steps for Images
1. Review images in `mediakit_extract/ppt/media/` to identify:
   - Wendy's photos (speaking, headshots)
   - Client logos
   - Decorative graphics
2. Copy needed images to `/public/` folder
3. Optimize for web (compress, convert to webp if needed)
4. Update components to use new images

---

## Key Content Already Added

### Testimonials (6 on homepage)
1. Carmen Fontanez - HR Director, NYC
2. Geri Artis - Charlotte, NC
3. Francesca Adao - Maryland
4. Emily Kurtz - Brooklyn, NY
5. Lisa Morgan - Ontario, Canada
6. Patricia Quintero - New York, NY
7. Catarina Campbell - Vermont

### Client Organizations (text list on homepage)
- Johnson & Johnson
- Genentech
- VaynerMedia
- DataRobot
- TD Bank
- NYC Dept of Education
- Colgate University
- University of Michigan
- Bloomberg Quicktake
- Ellevate
- SURGE
- RiseBoro

### Certifications (About page)
- ICF Member
- Certified DiSC Facilitator
- Positive Intelligence Certified
- Trauma Informed Institute
- Imposter Syndrome Coach Practitioner

### Education (About page)
- M.P.A. (Master of Public Administration)
- M.S.Ed (Master of Science in Education)

### Pricing (Executive Coaching page)
- 6-month program: $9,900 (or $1,650/month)
- Includes 12 sessions, assessments, support, etc.

---

## File Structure Quick Reference

```
src/app/
├── page.tsx                    # Homepage
├── about/page.tsx              # About Wendy
├── contact/page.tsx            # Contact form
├── book/page.tsx               # Booking/calendar
├── executive-coaching/page.tsx # Exec coaching + pricing
├── life-coaching/page.tsx      # Life coaching
├── for-individuals/page.tsx    # Individual services
├── for-organizations/page.tsx  # B2B services
├── case-studies/page.tsx       # Case studies (needs content)
├── services/
│   ├── page.tsx                # Services overview
│   ├── consulting/page.tsx
│   ├── dei-workshops/page.tsx
│   ├── group-coaching/page.tsx
│   ├── keynote-speaking/page.tsx
│   └── leadership-development/page.tsx
├── privacy/page.tsx
└── terms/page.tsx

public/
├── logo.webp
├── wendy-perdomo.png           # Main headshot (optimized)
└── brand-palette.html

content/                        # Source materials (not deployed)
├── *.pptx, *.pdf               # Original files
├── mediakit_extract/           # Extracted from media kit
└── pptx_extract/               # Extracted from program details
```

---

## Commands to Resume Work

### Check git status
```bash
git status
```

### Extract PPTX images (if needed)
```bash
# Extract media kit
unzip -o "content/FINAL 2025 CWC Speaker Media Kit.pptx" -d content/mediakit_extract/

# List extracted images
ls -la content/mediakit_extract/ppt/media/
```

### View an image
```bash
open content/mediakit_extract/ppt/media/image1.png
```

### Build and preview site
```bash
npm run dev     # Development server
npm run build   # Production build
```

---

## Priority Tasks (Next Steps)

1. ~~**Update homepage hero**~~ ✓ DONE - Using image15.jpg
2. ~~**Add client logo images**~~ ✓ DONE - 18 logos in carousel
3. ~~**Add speaking/action photos**~~ ✓ DONE - All 4 service pages updated
4. ~~**Create real case studies**~~ ✓ DONE - 6 featured success stories + 3 organizational + 6 additional testimonials
5. **Fine-tune logo carousel sizing** - Some logos (J&J, Colgate) may need adjustment

---

## Notes

- Brand colors: Cyan (#3EBCE8), Dark (#1A1A1A), Light gray backgrounds
- Font: System fonts (Montserrat-like in source materials)
- Site deploys to GitHub Pages automatically on push to main
