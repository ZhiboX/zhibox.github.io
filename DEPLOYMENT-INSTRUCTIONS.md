# Deployment instructions

This package is ready for a domain-root deployment. Upload the **contents of this folder**, so that `index.html`, `.htaccess`, `contact.php`, `en/`, `zh/`, and `assets/` are directly inside the web root.

## Option 1: cPanel or a self-managed PHP web server

1. Back up the existing website and all current DNS records before changing anything.
2. Add the domain to the hosting account and note its document root (commonly `public_html`, but addon domains may use another folder).
3. Upload this ZIP with cPanel File Manager and extract it.
4. Move the contents of `knoxchinesemedicine-rebuilt-ready-to-deploy/` into the domain's document root. Do not leave the whole site one folder too deep.
5. Confirm the server uses Apache-compatible `.htaccess` rules and PHP is enabled. On Nginx, translate the redirects in `.htaccess` into the server configuration.
6. Before changing public DNS, test `/en/`, `/zh/`, `/en/new-service/`, `/zh/new-service/`, images, mobile navigation, and the contact form using a staging hostname or a local hosts-file override.
7. Point the domain's web DNS records to the new server. Preserve existing MX, SPF, DKIM, DMARC, and other email-related records.
8. Install or enable an SSL certificate, then confirm both `https://knoxchinesemedicine.com.au` and `https://www.knoxchinesemedicine.com.au` work without certificate warnings.
9. Submit a real contact-form test and confirm delivery to the intended mailbox. Server mail policies can affect PHP `mail()` delivery.

For GoDaddy Web Hosting (cPanel), use **Web Hosting → Manage → File Manager**. AutoSSL can be checked or run under **cPanel Admin → SSL/TLS Status** if the hosting plan supports it and DNS points correctly.

## Option 2: GitHub Pages

GitHub Pages serves static HTML, CSS, JavaScript, and images. It does **not** run `contact.php`, process PHP `mail()`, or apply `.htaccess` rules.

This site uses root-relative paths such as `/assets/` and `/en/`. Therefore use either:

- a user/organisation Pages repository named `USERNAME.github.io`, or
- a GitHub Pages custom domain at the domain root.

A project URL such as `USERNAME.github.io/repository-name/` will need the site's root-relative links rewritten first.

1. Create the appropriate GitHub repository.
2. Upload the contents of this folder to the root of the repository, not the containing folder. `index.html` must be at repository root.
3. Add an empty `.nojekyll` file if publishing the files directly without Jekyll.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**, select the main branch and `/(root)`, then save.
6. If using a custom domain, add it under **Settings → Pages → Custom domain** before changing DNS, then configure the exact DNS records GitHub currently shows for that domain.
7. After DNS and certificate provisioning complete, enable **Enforce HTTPS**.

### Contact form limitation on GitHub Pages

The current form submits to `/contact.php`, so it will not send messages on GitHub Pages. Choose one of these before treating a Pages deployment as production:

- host the PHP endpoint separately and change the form action to its HTTPS URL, with appropriate CORS and abuse protection;
- use a reputable static-form provider and update the form action;
- replace the form with phone/email contact links.

Do not publish the current contact form on GitHub Pages and assume submissions are being delivered. Test the final form end to end.
