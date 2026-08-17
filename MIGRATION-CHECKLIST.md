# Migration checklist — Crazy Domains → GoDaddy + Cloudflare

## Before changing anything
- Export/screenshots of every current DNS record: A, AAAA, CNAME, MX, TXT, SPF, DKIM, DMARC, SRV, CAA and verification records.
- Confirm who currently hosts email. Domain transfer and website migration must not break MX/DKIM/SPF records.
- Record the current GoDaddy hosting IPv4 address and document root.
- Upload this rebuilt site and test it before changing nameservers.
- Verify `https://.../en/`, `/zh/`, all service pages, contact form, images, redirects and 404 handling.

## Cloudflare
- Add `knoxchinesemedicine.com.au` to Cloudflare.
- Re-create/verify all DNS records before switching nameservers.
- Point the website A record to the new GoDaddy hosting IP.
- Use `www` CNAME → apex (`knoxchinesemedicine.com.au`) or the value GoDaddy requires.
- Proxy only web records (orange cloud). Mail-related hostnames that are MX targets must remain DNS-only.
- Change the registrar nameservers to the two nameservers assigned by Cloudflare.
- Wait until Cloudflare reports the zone as Active.

## SSL
- Ensure the GoDaddy origin has a valid certificate (GoDaddy AutoSSL where available).
- In Cloudflare use SSL/TLS mode **Full (strict)** after the origin certificate is valid.
- Enable Always Use HTTPS if desired after confirming redirects.
- Test both `https://knoxchinesemedicine.com.au` and `https://www.knoxchinesemedicine.com.au`. This build canonicalises to the non-www hostname `knoxchinesemedicine.com.au`, matching the existing public domain.

## Registrar transfer
- Only after the new site and DNS are stable, unlock the domain at Crazy Domains and obtain its auth/EPP/registry key as applicable to the domain.
- Start the transfer to GoDaddy and complete any registrant approval steps.
- Keep Cloudflare nameservers during and after the registrar transfer.

## Final verification
- Test homepage, every bilingual page and EN/中文 switch.
- Confirm no `siteplus.com`, `edit.site` or Crazy Domains runtime dependency remains.
- Test contact email delivery to `shermangu@yahoo.com`, including spam folder.
- Test existing business email inbound/outbound.
- Check Cloudflare SSL status and certificate.
- Verify Google Search Console/Bing tools if used.
- Submit the new `sitemap.xml`.
- Crawl the production site for broken links and mixed HTTP content.
- Keep the old hosting available for several days after cutover as a rollback safety net.
