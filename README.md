# Venteru – Next.js

Next.js (App Router) version of the Venteru Webflow site.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure

- **`app/`** holds one route per page. The collection pages are dynamic `[slug]` routes, prerendered with `generateStaticParams`: `blogs`, `case-study`, `integrations`, `product` and `team-members`.
- **`content/<collection>/`** holds the page content for each collection item, plus an `index.ts` map that the `[slug]` routes use.
- **`components/Footer.tsx`** is the footer shared by every page.
- **`components/WfLink.tsx`** wraps `next/link`. Every internal link uses it, so navigation happens client-side without reloading. It also applies Webflow's `w--current` / `aria-current` to the active link.
- **`components/WebflowPage.tsx` and `lib/webflow.ts`** load the Webflow runtime once: jQuery, GSAP, the Webflow modules, and the IX2/IX3 interactions. They re-initialise it after every client-side navigation, so animations, sliders, tabs and the navbar keep working.
- **`public/`** holds the images, fonts, CSS and the vendor scripts in `public/vendor`.

Old `.html` URLs (for example `/about.html`) redirect to the clean routes.

## Vendor script patches

`public/vendor/webflow/webflow.schunk.2.js` is Webflow's shared chunk with two small changes:

- It exposes the IX2 interaction data as `window.__wf_ix2_data`.
- It exposes the IX3 registration function as `window.__wf_ix3_register`.

`webflow.entry.js` combines the three per-page Webflow entry bundles into one. Together they cover tabs, background video and the object-fit polyfill.

## Not functional outside Webflow hosting

These parts need Webflow's backend, so they do not work in this app until you replace them with your own implementation:

- Ecommerce: the cart, checkout and add-to-cart.
- Form submissions.
- The password page.

The background video on `/home-v2` was missing from the download, so it streams from Webflow's CDN.

## Join YouthLink form (`/join-youthlink`)

The application page at `app/join-youthlink/` is the target of every "Join YouthLink" button, the navbar button and the footer link.

- **Questions** live in `app/join-youthlink/form-fields.ts`. To install YouthLink's final approved form, replace the `JOIN_FIELDS` array only; the page, validation and email logic read from it.
- **Submissions** are validated in `app/join-youthlink/actions.ts` (a Server Action) and emailed with [Resend](https://resend.com) to the inboxes in `JOIN_FORM_TO`, so only those inbox owners can read them. Copy `.env.example` to `.env.local` and fill in `RESEND_API_KEY`, `JOIN_FORM_FROM` and `JOIN_FORM_TO`.
- **Spam protection**: a hidden honeypot field and a minimum time on page before submitting. No third-party keys needed.
