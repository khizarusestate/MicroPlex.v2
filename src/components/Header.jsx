import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Magnetic from "./Magnetic";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
];

// Mobile menu panel: links + CTA stagger in together, one beat after the
// panel itself starts appearing.
const menuVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 300, damping: 26 },
  },
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const firstLinkRef = useRef(null);
  const toggleRef = useRef(null);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close on Escape, and move focus into the menu when it opens — back to
  // the toggle button when it closes, so keyboard users never lose their
  // place
  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // condense the pill slightly once the page has actually scrolled, so it
  // reclaims a bit of vertical space on small screens without ever moving
  // or disappearing
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="w-full h-[76px] flex justify-center items-center fixed top-0 z-50 orbitron">
      <div
        className={`w-[92%] sm:w-[90%] max-w-[1400px] flex justify-between items-center px-5 sm:px-8 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(90,142,246,0.15)] transition-all duration-300 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <Link to="/">
          <img
            src="/Images/Logo.png"
            className={`hover:scale-105 transition-all duration-300 ${
              scrolled ? "h-[34px] sm:h-[46px]" : "h-[42px] sm:h-[55px]"
            }`}
            alt="MicroPlex logo"
          />
        </Link>

        <nav className="hidden md:block text-gray-200">
          <ul className="flex items-center gap-[10px]">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <li key={item.label} className="relative">
                  <Link
                    to={item.to}
                    className={`relative z-10 block px-4 py-2 cursor-pointer transition-colors duration-300 ${
                      isActive ? "text-black" : "text-gray-200 hover:text-[#49D9E8]"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r gradient-animate from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] shadow-[0_0_20px_rgba(90,142,246,0.5)]"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <Magnetic className="hidden md:inline-block">
          <Link
            to="/contact"
            className="inline-block px-7 py-2.5 rounded-full font-bold text-gray-900 bg-gradient-to-r gradient-animate from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] shadow-[0_0_25px_rgba(90,142,246,0.5)] hover:scale-105 hover:shadow-[0_0_45px_rgba(90,142,246,0.8)] transition-all duration-300"
          >
            CONTACT US
          </Link>
        </Magnetic>

        {/* mobile hamburger — icon morphs between states instead of swapping instantly */}
        <button
          ref={toggleRef}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu-panel"
          className="md:hidden h-11 w-11 flex items-center justify-center rounded-full border border-white/10 text-gray-200 hover:text-[#49D9E8] hover:border-[#49D9E8]/50 active:scale-90 transition-all duration-300"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="flex"
              >
                <X className="h-5 w-5" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="flex"
              >
                <Menu className="h-5 w-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* mobile menu: dimmed backdrop (tap to close) + the panel itself */}
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.div
              id="mobile-menu-panel"
              className="md:hidden fixed top-[84px] left-0 w-full px-5"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                className="w-full rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(90,142,246,0.2)] p-6 flex flex-col gap-5"
              >
                <ul className="flex flex-col gap-2 text-gray-200 text-center">
                  {navLinks.map((item, i) => {
                    const isActive = location.pathname === item.to;
                    return (
                      <motion.li key={item.label} variants={itemVariants} className="relative">
                        <Link
                          ref={i === 0 ? firstLinkRef : undefined}
                          to={item.to}
                          onClick={() => setOpen(false)}
                          className={`relative z-10 block py-3 rounded-xl cursor-pointer transition-colors duration-300 ${
                            isActive
                              ? "text-[#49D9E8] font-semibold"
                              : "hover:text-[#49D9E8] hover:bg-white/5"
                          }`}
                        >
                          {item.label}
                          {isActive && (
                            <motion.span
                              layoutId="activeNavDotMobile"
                              className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-[3px] w-6 rounded-full bg-gradient-to-r gradient-animate from-[#49D9E8] to-[#D06AE8]"
                              transition={{ type: "spring", stiffness: 380, damping: 32 }}
                            />
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
                <motion.div variants={itemVariants}>
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="block text-center px-7 py-3.5 rounded-full font-bold text-gray-900 bg-gradient-to-r gradient-animate from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] shadow-[0_0_25px_rgba(90,142,246,0.5)] active:scale-95 transition-all duration-300"
                  >
                    CONTACT US
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
