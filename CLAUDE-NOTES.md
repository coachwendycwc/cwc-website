# Claude Session Notes - CWC Website

**Last Updated:** 2025-12-27
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
- [ ] Extract and use images from PPTX files for website
- [ ] Add more visual content throughout site

### Not Started
- [ ] Case studies with real content
- [ ] Client logo images (currently text-only)
- [ ] Action shots / speaking photos
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

## Priority Tasks (Next Session)

1. **Identify usable images** - Review extracted media folder
2. **Add speaking/action photos** - If available in extracts
3. **Create real case studies** - Need content from capabilities statement
4. **Add client logos** - If logo images available, otherwise keep text

---

## Notes

- Brand colors: Cyan (#3EBCE8), Dark (#1A1A1A), Light gray backgrounds
- Font: System fonts (Montserrat-like in source materials)
- Site deploys to GitHub Pages automatically on push to main
