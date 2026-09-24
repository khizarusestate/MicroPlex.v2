import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SEEN_KEY = "mp_intro_seen";
const HOLD_MS = 1300; // total time on screen before it fades out

/**
 * Plays once per browser session, on the very first load — not on every
 * client-side route change (App only mounts once, so this naturally
 * doesn't replay on internal navigation) and not again if the tab
 * reloads later in the same session. Skips outright for
 * prefers-reduced-motion, same pattern as CustomCursor.jsx.
 */
export default function IntroSplash() {
  const [show, setShow] = useState(() => {
    if (typeof window === "undefined") return false;
    if (window.sessionStorage.getItem(SEEN_KEY)) return false;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return false;
    }
    return true;
  });

  useEffect(() => {
    window.sessionStorage.setItem(SEEN_KEY, "1");
    if (!show) return;

    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setShow(false), HOLD_MS);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-5">
            <motion.img
              src="/Images/Logo.png"
              alt="MicroPlex"
              className="h-14 sm:h-16"
              initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <div className="h-[2px] w-36 sm:w-44 rounded-full overflow-hidden bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8]"
                style={{ transformOrigin: "left" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
