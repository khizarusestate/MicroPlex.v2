import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import AboutDetailed from "./components/AboutDetailed"
import Services from "./components/Services"
import Contact from './components/Contact'
import Footer from "./components/Footer"
import ScrollProgress from "./components/ScrollProgress"

// Scrolls to a hash target on route change, otherwise resets to top —
// keeps in-page anchors (Services/Contact) working across route navigations.
function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        // wait a tick for the route's content to mount
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
      <Services />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <>
      <ScrollProgress />
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutDetailed />} />
      </Routes>
      <Footer />
    </>
  )
}
