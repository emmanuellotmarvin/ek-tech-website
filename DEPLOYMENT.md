# GitHub Pages deployment

This project exports static files into `out/` for the existing custom domain
`ek-tech.emmanuelmarvin.com`. Portuguese routes are `/home/`, `/about/`,
`/contact/`, and `/pricing/`; English routes have the `/en/` prefix.
The root and `/en/` have static redirects to their home pages.

## Local verification

Run `npm ci` and `npm run build`. Serve `out/` with a static HTTP server;
`next start` does not serve static exports. Test both languages, direct page
refreshes, images, language switching, and the contact form.

## Replace the existing site

1. Back up the current `emmanuellotmarvin/ek-tech-website` repository with a tag
   or branch before replacing its source. Preserve its Git history and inspect
   existing workflows to prevent competing deployments.
2. Copy this project's source, package lock, public files, and workflow into
   that repository. Do not copy `node_modules`, `.next`, `out`, or local env files.
3. In repository Settings > Secrets and variables > Actions > Variables, add
   `NEXT_PUBLIC_FORMSPREE_ID` with the existing Formspree form ID. The value is
   public and is embedded during the build; without it email submission is unavailable.
4. In Settings > Pages, select GitHub Actions as the source. Keep the custom
   domain `ek-tech.emmanuelmarvin.com` and its existing DNS records. The included
   `public/CNAME` preserves the domain in the exported files, but does not configure
   the repository's Pages settings by itself.
5. Once reviewed, run Actions > Deploy to GitHub Pages > Run workflow on the
   intended branch. The workflow is manual to control the replacement date.
6. Verify the custom domain, both languages, navigation, images, and contact form.
   Check the old github.io address redirects to the custom domain. This build is
   configured for the custom domain root, not independent hosting at a repo subpath.

To roll back, restore the backed-up source and its deployment configuration,
then redeploy using that configuration. Keep DNS unchanged.
