import { lazy, Suspense, useCallback, useEffect, useState } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { Analytics } from "@vercel/analytics/react"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import ScrollProgress from "./components/ScrollProgress"
import CustomCursor from "./components/CustomCursor"
import GrainOverlay from "./components/GrainOverlay"
import IntroSplash from "./components/IntroSplash"
import WhatsAppButton from "./components/WhatsAppButton"
import { SmoothScrollProvider } from "./components/SmoothScroll"
import { useLenis } from "./components/useLenis"
import PageTransition from "./components/PageTransition"
import PageLoader from "./components/PageLoader"

// Route-specific pages are code-split — only fetched when actually visited.
const AboutDetailed = lazy(() => import("./components/AboutDetailed"))
const Products = lazy(() => import("./components/Products"))
const Services = lazy(() => import("./components/Services"))
const Contact = lazy(() => import("./components/Contact"))
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"))
const TermsOfService = lazy(() => import("./components/TermsOfService"))
const NotFound = lazy(() => import("./components/NotFound"))

// Header height, so hash-scrolled sections don't land hidden underneath it.
const HEADER_OFFSET = -90

// Scrolls to a hash target on route change, otherwise resets to top —
// routed through Lenis when smooth scroll is active, native APIs otherwise.
function ScrollManager() {
  const location = useLocation()
  const lenisRef = useLenis()

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        requestAnimationFrame(() => {
          if (lenisRef?.current) {
            lenisRef.current.scrollTo(el, { offset: HEADER_OFFSET })
          } else {
            el.scrollIntoView({ behavior: "smooth" })
          }
        })
        return
      }
    }
    if (lenisRef?.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" })
    }
  }, [location.pathname, location.hash, lenisRef])

  return null
}

// introReady only matters to Home — its hero is the thing sitting right
// behind the splash, so it's the one page whose entrance is choreographed
// to start exactly as the splash clears. Every other route just keeps its
// normal reveal-on-scroll behavior.
function HomePage({ introReady }) {
  return (
    <>
      <Home introReady={introReady} />
      <About />
      <Testimonials />
    </>
  )
}

export default function App() {
  const location = useLocation()
  const [introReady, setIntroReady] = useState(false)
  const handleIntroComplete = useCallback(() => setIntroReady(true), [])

  return (
    <SmoothScrollProvider>
      <IntroSplash onComplete={handleIntroComplete} />
      <GrainOverlay />
      <CustomCursor />
      <ScrollProgress />
      <ScrollManager />
      <Header />
      <WhatsAppButton />
      <Suspense fallback={<PageLoader />}>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><HomePage introReady={introReady} /></PageTransition>} />
            <Route path="/about" element={<PageTransition><AboutDetailed /></PageTransition>} />
            <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
            <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
            <Route path="/terms-of-service" element={<PageTransition><TermsOfService /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
      <Analytics />
    </SmoothScrollProvider>
  )
}
