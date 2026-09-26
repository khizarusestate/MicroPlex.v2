# MicroPlex

Marketing and product website for MicroPlex — a software development agency
building web, mobile, and custom software, alongside our own products like
[FixItNow](https://fixitnow.pk/).

Live at: https://micro-plex2.vercel.app

## Stack

- React (Vite)
- Tailwind CSS
- Framer Motion
- React Router
- Lenis (smooth scroll)
- Vercel (hosting + Edge Middleware for per-route SEO tags)

## Structure

- `src/components/` — every page and shared UI piece (pages are the
  top-level components: `Home`, `AboutDetailed`, `Products`, `Services`,
  `Contact`, `PrivacyPolicy`, `TermsOfService`, `NotFound`)
- `api/contact.js` — serverless function that sends contact-form
  submissions by email (Vercel + Nodemailer)
- `middleware.js` — Vercel Edge Middleware that injects real per-route
  title/description/OG tags into the raw HTML, so link previews on
  WhatsApp/Facebook/Twitter show the correct page, not just the homepage
- `public/robots.txt`, `public/sitemap.xml` — SEO basics

## Local development

```bash
npm install
npm run dev
```

To test the contact form locally, copy `.env.example` to `.env` and fill in
a Gmail address + app password, then run with `vercel dev` (needed for the
`api/contact.js` serverless function to work).

## Build

```bash
npm run build   # production build, output in dist/
npm run lint    # eslint
```
