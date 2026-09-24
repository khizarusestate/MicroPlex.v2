import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://micro-plex2.vercel.app";
const SITE_NAME = "MicroPlex";
const DEFAULT_IMAGE = `${SITE_URL}/Images/Logo.png`;

/**
 * Per-route SEO. Runs client-side, so it's what Google (which renders JS)
 * sees on navigation, and keeps tags correct if someone lands on a route
 * a search engine indexed straight from React Router. For crawlers that
 * DON'T execute JS (WhatsApp/Facebook/Twitter/Slack link previews), the
 * first-load tags are set server-side instead — see /middleware.js, which
 * rewrites the same title/description/og fields into the raw HTML before
 * it ever reaches the browser. The two are kept in sync manually since an
 * edge function can't import this component.
 *
 * noIndex: pass true on pages that shouldn't be indexed (404, etc).
 */
export default function Seo({ title, description, image, noIndex = false }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    const canonicalUrl = `${SITE_URL}${pathname}`;
    const ogImage = image || DEFAULT_IMAGE;

    document.title = fullTitle;

    const setMeta = (attr, key, value) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    if (description) {
      setMeta("name", "description", description);
      setMeta("property", "og:description", description);
      setMeta("name", "twitter:description", description);
    }
    setMeta("property", "og:title", fullTitle);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("property", "og:image", ogImage);
    setMeta("name", "twitter:image", ogImage);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("name", "robots", noIndex ? "noindex, nofollow" : "index, follow");
    setLink("canonical", canonicalUrl);
  }, [title, description, image, noIndex, pathname]);

  return null;
}
