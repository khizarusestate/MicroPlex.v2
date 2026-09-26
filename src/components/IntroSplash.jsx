import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HOLD_MS = 1750; // total time on screen before the exit fade starts
const RING_COLORS = ["#49D9E8", "#5A8EF6", "#D06AE8"];

// Generated once at module load (not inside the component's render body),
// so the component itself stays pure per the react-hooks/purity rule —
// same convention as PARTICLES in Particles.jsx.
const INTRO_PARTICLES = Array.from({ length: 16 }, (_, i) => {
  const angle = (i / 16) * Math.PI * 2;
  const radius = 130 + Math.random() * 50;
  return {
    id: i,
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
    color: RING_COLORS[i % RING_COLORS.length],
    delay: Math.random() * 0.25,
  };
});

/**
 * Plays on every full page load (every hard refresh / fresh visit) — not
 * on client-side route changes, since App only mounts once and internal
 * navigation never remounts it. Skips outright for prefers-reduced-motion,
 * same pattern as CustomCursor.jsx.
 *
 * Sequence (game-boot style, all on one timeline):
 *   1. center glow blooms
 *   2. a ring of particles rushes inward and burns out at the center
 *   3. two gradient rings draw themselves and spin
 *   4. the logo blur-scales into focus, with a light sweep across it
 *   5. a quick flash punctuates the reveal
 *   6. the whole thing fades + scales out into the site
 *
 * onComplete fires the moment the exit fade begins (not after it
 * finishes), so whatever's underneath can start its own reveal and the
 * two overlap into one continuous motion instead of a hard cut.
 */
export default function IntroSplash({ onComplete }) {
  const [show, setShow] = useState(() => {
    if (typeof window === "undefined") return false;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return false;
    }
    return true;
  });

  const particles = INTRO_PARTICLES;

  useEffect(() => {
    if (!show) {
      onComplete?.();
      return;
    }

    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
      onComplete?.();
    }, HOLD_MS);
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
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.06 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          {/* ambient center glow */}
          <motion.div
            className="absolute h-[420px] w-[420px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(90,142,246,0.25) 0%, transparent 70%)",
            }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* particles converging to the center, then burning out */}
          {particles.map((p) => (
            <motion.span
              key={p.id}
              className="absolute h-1.5 w-1.5 rounded-full"
              style={{ background: p.color, boxShadow: `0 0 8px ${p.color}` }}
              initial={{ x: p.x, y: p.y, opacity: 0, scale: 1 }}
              animate={{ x: 0, y: 0, opacity: [0, 1, 0], scale: 0.3 }}
              transition={{ duration: 0.7, delay: p.delay, ease: "easeIn" }}
            />
          ))}

          {/* two gradient rings — draw themselves, spin, then dissolve */}
          <svg
            viewBox="0 0 200 200"
            className="absolute h-[190px] w-[190px] sm:h-[220px] sm:w-[220px]"
          >
            <defs>
              <linearGradient id="introRing" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#49D9E8" />
                <stop offset="50%" stopColor="#5A8EF6" />
                <stop offset="100%" stopColor="#D06AE8" />
              </linearGradient>
            </defs>
            <motion.circle
              cx="100"
              cy="100"
              r="86"
              fill="none"
              stroke="url(#introRing)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="540"
              style={{ transformOrigin: "center", transformBox: "fill-box" }}
              initial={{ strokeDashoffset: 540, opacity: 0, rotate: -90 }}
              animate={{
                strokeDashoffset: 0,
                opacity: [0, 1, 1, 0],
                rotate: 270,
              }}
              transition={{
                strokeDashoffset: { duration: 0.9, ease: "easeInOut" },
                opacity: { duration: 1.5, times: [0, 0.2, 0.75, 1] },
                rotate: { duration: 1.5, ease: "easeInOut" },
              }}
            />
            <motion.circle
              cx="100"
              cy="100"
              r="70"
              fill="none"
              stroke="url(#introRing)"
              strokeWidth="1"
              strokeLinecap="round"
              strokeDasharray="440"
              style={{ transformOrigin: "center", transformBox: "fill-box" }}
              initial={{ strokeDashoffset: 440, opacity: 0, rotate: 90 }}
              animate={{
                strokeDashoffset: 0,
                opacity: [0, 0.8, 0.8, 0],
                rotate: -240,
              }}
              transition={{
                strokeDashoffset: { duration: 0.9, delay: 0.1, ease: "easeInOut" },
                opacity: { duration: 1.5, delay: 0.1, times: [0, 0.2, 0.75, 1] },
                rotate: { duration: 1.5, delay: 0.1, ease: "easeInOut" },
              }}
            />
          </svg>

          {/* logo reveal — blur-to-focus, with a light sweep passing over it —
              plus a short keyword tagline that fades in right after */}
          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="relative overflow-hidden">
              <motion.img
                src="/Images/Logo.png"
                alt="MicroPlex"
                className="h-14 sm:h-16 relative z-10"
                initial={{ opacity: 0, scale: 0.7, filter: "blur(12px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.55, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.div
                className="absolute inset-y-0 w-1/3 z-20 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)",
                  mixBlendMode: "overlay",
                }}
                initial={{ x: "-120%", opacity: 0 }}
                animate={{ x: "220%", opacity: [0, 1, 0] }}
                transition={{ duration: 0.6, delay: 0.65, ease: "easeInOut" }}
              />
            </div>

            <motion.p
              className="orbitron text-[10px] sm:text-xs tracking-[0.25em] uppercase text-gray-400 text-center px-6"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
            >
              Robotics · Space Navigation · AI · Semiconductors · Sensors
            </motion.p>
          </div>

          {/* punctuating flash, right as the reveal settles */}
          <motion.div
            className="absolute h-3 w-3 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.9), transparent 70%)",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.9, 0], scale: [0, 14, 18] }}
            transition={{ duration: 0.5, delay: 1.15, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
