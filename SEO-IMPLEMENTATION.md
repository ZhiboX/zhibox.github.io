# SEO implementation and launch checklist

Audit date: 2 September 2026  
Production hostname: `https://knoxchinesemedicine.com.au`

## Current implementation

- Unique titles and meta descriptions across all 26 indexable English and Simplified Chinese pages.
- Self-referencing HTTPS/non-www canonical URLs.
- Reciprocal `en-AU`, `zh-Hans` and `x-default` hreflang tags on every indexable bilingual page.
- Open Graph and Twitter metadata with page-appropriate images and accessible image text.
- JSON-LD for the clinic, website, registered practitioner, breadcrumbs, services, FAQs and other page types as appropriate.
- Correct AHPRA identifier `CMR0001738861` in visible content and structured data.
- No `Review`, `aggregateRating` or rating schema.
- One semantic H1 per indexable page, meaningful image alt text and intrinsic image dimensions.
- Root and 404 pages correctly excluded from indexing; the form endpoint is excluded from crawling/indexing.
- Bilingual sitemap with 26 production URLs and `2026-09-02` last-modified dates.
- Legacy URL redirects, HTTPS/non-www canonicalisation and HTTP 410 handling for removed Blog URLs.
- Compression, caching and production-safe security headers in `.htaccess`.

## 2 September beauty-services update

- Replaced the former New Service placeholders with indexable English and Chinese beauty-services pages.
- Added unique search/social metadata, reciprocal hreflang, breadcrumb and Service JSON-LD for both pages.
- Added both beauty-services URLs to `sitemap.xml`.
- Added the supplied cosmetic acupuncture image with descriptive alt text and correct dimensions.
- Replaced the site-wide logo with the supplied Knox Chinese Healing & Myotherapy logo.
- Changed the navigation label from New Service / 新服务 to Beauty Services / 美容服务.
- Kept testimonial text exclusively on the dedicated English and Chinese Reviews pages.
- Kept the Blog removed and retained its legacy redirect/410 rules.
- Retained factual service information while avoiding absolute or unverified treatment-result claims.
- Restored the useful FAQ and research/information portion of the former homepage, while excluding its News and Recent Blogs material as requested.
- Replaced unverified legacy efficacy and clinic-research claims with neutral, production-safe health information.
- Corrected the service-card image sizing bug, applied a compact 16:9 homepage crop and added practical summaries to all four cards.
- Retained the descriptive Beauty Services / 美容服务 navigation label; the page titles and headings remain service-specific.

## Validation completed

- 28 HTML files parsed successfully; 26 are indexable bilingual content pages.
- 816 local page, asset, stylesheet, script and form references resolved.
- Zero broken internal references or fragments.
- Zero duplicate indexable titles, descriptions or canonical URLs.
- 26 valid JSON-LD blocks; no review or aggregate-rating schema.
- Sitemap URLs exactly match the 26 canonical indexable URLs.
- Reviews appear only on `/en/reviews/` and `/zh/reviews/` (18 cards per page).
- Supplied logo and cosmetic-acupuncture image match the original attachment checksums.
- No obsolete AHPRA number, GitHub preview hostname or Syrahost URL remains in production content.
- Desktop English beauty page and revised homepage, 390 px Chinese beauty page and revised homepage, and mobile navigation checked visually.
- No horizontal overflow or browser console warnings/errors in the checked pages.

## Production-only actions after launch

1. Confirm HTTPS works through Cloudflare and the origin; keep Cloudflare SSL/TLS on **Full (strict)**.
2. Test HTTP, www, root and explicit `index.html` redirects, unknown 404s and removed Blog 410 responses.
3. Submit a real contact-form test and verify mailbox delivery. Configure SMTP/transactional delivery if PHP `mail()` is unreliable.
4. Confirm the final wording, practitioner details, beauty-service availability, phone numbers, opening hours and privacy notice with the client.
5. Verify Google Search Console using a DNS TXT record and submit `https://knoxchinesemedicine.com.au/sitemap.xml`.
6. Add or import the site in Bing Webmaster Tools and submit the same sitemap.
7. Keep the clinic name, address, phone and hours consistent on Google Business Profile and other directories.
8. Test representative live pages with Google Rich Results Test and Schema.org Validator, then monitor indexing and Core Web Vitals.
9. Confirm Google Ads ID `AW-796358028` belongs to the client and remains blocked until optional-cookie consent.

Do not request indexing until DNS, SSL, redirects, business details and the contact form have been verified on the live domain.
