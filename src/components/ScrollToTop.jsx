import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLenis } from "./useLenis";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const lenisRef = useLenis();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    if (lenisRef?.current) {
      lenisRef.current.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label="Scroll to top"
          className="fixed bottom-6 left-5 sm:bottom-8 sm:left-8 z-40 h-12 w-12 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/10 text-gray-300 hover:text-[#49D9E8] hover:border-[#49D9E8]/50 shadow-[0_0_20px_rgba(90,142,246,0.25)] hover:shadow-[0_0_35px_rgba(90,142,246,0.5)] hover:scale-110 active:scale-95 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
