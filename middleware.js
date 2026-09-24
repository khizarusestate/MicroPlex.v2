// This is a client-rendered React SPA, so every route normally serves the
// exact same index.html and lets React fill in the real title/description
// after JS runs. That's fine for Google (it executes JS) but link-preview
// bots — WhatsApp, Facebook, Twitter/X, Slack, iMessage — fetch raw HTML
// only and never run the JS bundle. Without this, a link to /products
// shared on WhatsApp would always show the homepage's title/description.
//
// This middleware runs on Vercel's Edge Runtime, intercepts requests to
// our real page routes, fetches the built index.html, and swaps in the
// correct per-route tags before the response ever reaches the crawler
// (or the browser — real users get the correct tags immediately too,
// with no flash of the default title).
//
// Keep this in sync with the <Seo title=... description=... /> call at
// the top of the matching page component in src/components/.

export const config = {
  matcher: ["/", "/about", "/services", "/products", "/contact"],
};

const SITE_URL = "https://micro-plex2.vercel.app";
const DEFAULT_IMAGE = `${SITE_URL}/Images/Logo.png`;

const ROUTES = {
  "/": {
    title: "MicroPlex — Building Innovative Digital Solutions",
    description:
      "MicroPlex builds web, mobile, and custom software for businesses in Pakistan and beyond — plus our own products, like FixItNow.",
  },
  "/about": {
    title: "About Us | MicroPlex",
    description:
      "The people, principles, and path behind MicroPlex — our mission, journey, values, and leadership.",
  },
  "/services": {
    title: "Services | MicroPlex",
    description:
      "Web apps, mobile apps, custom software, cloud/DevOps, and UI/UX design — everything you need to ship software that lasts.",
  },
  "/products": {
    title: "Products | MicroPlex",
    description:
      "FixItNow — Pakistan's home services marketplace, live today. Plus MicroPlex Commerce, our upcoming e-commerce platform.",
  },
  "/contact": {
    title: "Contact | MicroPlex",
    description:
      "Tell us what you're working on — we typically reply within one business day.",
  },
};

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default async function middleware(request) {
  const url = new URL(request.url);
  const route = ROUTES[url.pathname];
  if (!route) return; // not a page we override — normal handling continues

  const origin = await fetch(new URL("/index.html", request.url));
  if (!origin.ok) return; // fall back to default handling rather than 500

  let html = await origin.text();

  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const canonical = `${SITE_URL}${url.pathname}`;

  html = html
    .replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
    .replace(
      /(<meta name="description" content=")[^"]*(")/,
      `$1${description}$2`
    )
    .replace(
      /(<meta property="og:title" content=")[^"]*(")/,
      `$1${title}$2`
    )
    .replace(
      /(<meta property="og:description" content=")[^"]*(")/,
      `$1${description}$2`
    )
    .replace(
      /(<meta name="twitter:title" content=")[^"]*(")/,
      `$1${title}$2`
    )
    .replace(
      /(<meta name="twitter:description" content=")[^"]*(")/,
      `$1${description}$2`
    )
    .replace(
      /(<meta property="og:image" content=")[^"]*(")/,
      `$1${DEFAULT_IMAGE}$2`
    )
    .replace(
      /(<meta name="twitter:image" content=")[^"]*(")/,
      `$1${DEFAULT_IMAGE}$2`
    )
    .replace(
      /(<link rel="canonical" href=")[^"]*(")/,
      `$1${canonical}$2`
    )
    .replace(
      /(<meta property="og:url" content=")[^"]*(")/,
      `$1${canonical}$2`
    );

  return new Response(html, {
    status: 200,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=0, must-revalidate",
    },
  });
}
