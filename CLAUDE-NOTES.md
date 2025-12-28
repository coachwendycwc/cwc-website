# Claude Session Notes - CWC Website

**Last Updated:** 2025-12-27 (Evening session)

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

### Not Started
- [ ] Case studies with real content
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
4. **Create real case studies** - Need content from capabilities statement PDF
5. **Fine-tune logo carousel sizing** - Some logos (J&J, Colgate) may need adjustment

---

## Notes

- Brand colors: Cyan (#3EBCE8), Dark (#1A1A1A), Light gray backgrounds
- Font: System fonts (Montserrat-like in source materials)
- Site deploys to GitHub Pages automatically on push to main
