import { lazy, Suspense, useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import ScrollProgress from "./components/ScrollProgress"
import PageTransition from "./components/PageTransition"
import PageLoader from "./components/PageLoader"

// Route-specific pages are code-split — only fetched when actually visited.
const AboutDetailed = lazy(() => import("./components/AboutDetailed"))
const Products = lazy(() => import("./components/Products"))
const Services = lazy(() => import("./components/Services"))
const Contact = lazy(() => import("./components/Contact"))
const NotFound = lazy(() => import("./components/NotFound"))

// Scrolls to a hash target on route change, otherwise resets to top.
function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth" }))
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [location.pathname, location.hash])

  return null
}

function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Testimonials />
    </>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollProgress />
      <ScrollManager />
      <Header />
      <Suspense fallback={<PageLoader />}>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
            <Route path="/about" element={<PageTransition><AboutDetailed /></PageTransition>} />
            <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
            <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
    </>
  )
}
