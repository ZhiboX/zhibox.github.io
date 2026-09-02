# Knox Chinese Medicine — production-ready bilingual site

This package is a clean independent rebuild based on the supplied wget archive. It does not require SitePlus/Crazy Domains to render the site.

## Structure
- `/en/` English site
- `/zh/` Simplified Chinese site
- `/assets/` local CSS, JS and images, including the client-supplied logo and cosmetic acupuncture image
- `/en/new-service/` and `/zh/new-service/` bilingual beauty services page
- `/contact.php` contact form handler
- `/.htaccess` HTTPS/www canonicalisation plus old-URL redirects
- `/sitemap.xml` bilingual sitemap with hreflang alternates
- `/robots.txt` crawler rules
- `/site.webmanifest` site identity metadata
- `/SEO-IMPLEMENTATION.md` SEO audit, validation and launch checklist

## Important deployment items
1. Upload the CONTENTS of this folder to the GoDaddy cPanel document root for `knoxchinesemedicine.com.au`.
2. Before DNS cutover, test the host using cPanel preview/hosts-file method.
3. Confirm PHP `mail()` works. The current form sends to `shermangu@yahoo.com`. If GoDaddy blocks/restricts PHP mail, configure SMTP or a transactional mail provider before launch.
4. Confirm AHPRA registration details, opening hours, insurer/HICAPS statements, clinical wording and privacy notice with the client before production launch.
5. The old Google Ads tag `AW-796358028` has been retained but is now loaded only after optional cookie consent. Remove/change it if it no longer belongs to the client.
6. The Blog and legacy article pages are not included. `.htaccess` contains 301 redirects from known old articles to relevant replacement pages and returns HTTP 410 for removed Blog URLs without an equivalent replacement.
7. Do not cancel Crazy Domains hosting or email until the new site, DNS, SSL and mail flow have all been verified.

## 2 September 2026 client update
- Added the approved beauty facial skincare, cosmetic tattooing and cosmetic acupuncture content in English and Simplified Chinese.
- Replaced the site logo with the supplied Knox Chinese Healing & Myotherapy logo.
- Kept testimonials only on the dedicated Reviews pages.
- Kept the Blog removed and retained legacy redirect/410 handling.
- Updated the new page metadata, hreflang, JSON-LD and sitemap entries.
