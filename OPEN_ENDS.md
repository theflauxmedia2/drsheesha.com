# Open ends — Dr. Sheesha Dubai

<!--
Tracked by Flaux HQ. Rules:
- One item per line: "- [ ] text #tags"
- Priority tags: #high #medium #low (default medium)
- Other tags allowed: #mobile #blog #homepage etc.
- When fixed: tick it "- [x]" or delete the line, in the same commit as the fix.
- Or write "closes OE: <item text>" in the commit message.
- Keep the section headings exactly as they are.
-->

## Bugs
## SEO
- [ ] Lengthen titles in src/config/seo.js: /about is 29 chars, /events 45, /gallery 27, /contact 35; target 50–60 #medium
- [ ] Lengthen meta descriptions in src/config/seo.js: /about is 130 chars, /events 125, /gallery 113, /contact 121; target 140–160 #medium
- [ ] Replace the repeated alt in src/data/galleryPhotos.js buildPhoto ("{category} at Dr. Sheesha shisha lounge, Al Karama Dubai") with a distinct description per photo #medium
- [ ] Rename numeric files in public/HERO and public/photos (001.webp and similar) to descriptive names and update the src references #low
## Client inputs needed
- [ ] Confirm final NAP: 112 Za'abeel St, Al Karama, Dubai; +971 56 671 1730; info@drsheesha.com in src/config/site.js #high
- [ ] Confirm the map pin 25.2481, 55.3066 in src/config/site.js is the lounge door, and send the Google Business Profile URL (mapsUrl is only a search query) #high
- [ ] Confirm hours: doors are 12:00 PM–6:00 AM, but Happy Hour in src/pages/Home.jsx and public/llms.txt is 11 AM–7 PM #high
- [ ] Confirm TikTok https://www.tiktok.com/@storiesloungedxb and X @drs.dxb before they stay in sameAs and twitter:site (src/config/site.js) #high
- [ ] Provide privacy policy and terms copy; the site collects name and phone on /contact and /events and has no legal pages #high
- [ ] Confirm whether public/photos/LADIES should be published; it is not in src/data/galleryPhotos.js #medium
- [ ] Supply an SVG logo if the wordmark should be vector; the live mark is public/brand/logo.webp and the master PNG is assets/logo-master.png #low
## Features to build
- [ ] Add /privacy and /terms routes and footer links once the client supplies the legal copy #medium
- [ ] Open the Menu item in a new tab; src/config/navigation.js sets sameTab, so the digital menu replaces the site #low
## Content
- [ ] Expand copy past ~300 words on ranking pages: Home.jsx is about 204 words, About.jsx about 131, Events.jsx about 116 #medium
- [ ] Align Happy Hour (11 AM–7 PM) in src/pages/Home.jsx HIGHLIGHTS and public/llms.txt with the 12:00 PM opening in src/config/site.js #high
## Performance & accessibility
- [ ] Set width and height on content images in src/pages/Home.jsx, src/pages/About.jsx, src/pages/Events.jsx, and src/components/GalleryTile.jsx #medium
- [ ] Cut the production JS bundle (about 447 KB, 141 KB gzip) from framer-motion, lenis, and the gallery route #medium
- [ ] Move the Google Fonts stylesheet in index.html off the critical path; display=swap is already on the font URL #medium
- [ ] Raise .footer__copy / .footer__domain in src/styles/global.css: #706860 on #050505 is about 3.7:1, under the 4.5:1 text minimum #medium
- [ ] Add :focus-visible styles for .btn, nav links, and .gallery-filter; only form fields and .skip-link show a focus style #medium
## Launch & infra
- [ ] Attach drsheesha.com on Vercel so SSL and the www → apex redirect in vercel.json are live #high
- [ ] Add a Google Search Console verification tag and submit https://drsheesha.com/sitemap.xml after the domain resolves #high
- [x] Install GA4 or another analytics tag; none is present in index.html or src #medium
- [ ] Replace README.md (still the Vite starter) with deploy and content notes for this site #low
- [ ] Add uptime checks for https://drsheesha.com once the domain is attached #low
