import { motion } from "framer-motion";

const COUNT = 90;
const COLORS = ["#49D9E8", "#5A8EF6", "#D06AE8", "#ffffff"];
const SHOOTING_STAR_COUNT = 4;

// Generated once at module load (not inside the component's render body),
// so the component itself stays pure per the react-hooks/purity rule.

// Weighted size distribution — mostly small background dots, a handful of
// larger bright "foreground" stars for a sense of depth.
const PARTICLES = Array.from({ length: COUNT }, (_, i) => {
  const isForeground = Math.random() > 0.82;
  const size = isForeground
    ? Math.random() * 3 + 3.5 // 3.5–6.5px
    : Math.random() * 2 + 1.2; // 1.2–3.2px

  return {
    size,
    left: Math.random() * 100,
    top: Math.random() * 100,
    color: COLORS[i % COLORS.length],
    moveY: Math.random() * 40 - 20,
    moveX: Math.random() * 30 - 15,
    duration: Math.random() * 5 + 5,
    delay: Math.random() * 5,
    baseOpacity: isForeground ? 0.75 : 0.5,
    peakOpacity: isForeground ? 1 : 0.85,
  };
});

// A few rare diagonal streaks for that extra premium touch.
const SHOOTING_STARS = Array.from({ length: SHOOTING_STAR_COUNT }, (_, i) => {
  const angle = 25 + Math.random() * 20; // deg from horizontal
  const distance = 320 + Math.random() * 220;
  const rad = (angle * Math.PI) / 180;
  return {
    top: Math.random() * 60,
    left: Math.random() * 70 + 10,
    angle,
    dx: -(Math.cos(rad) * distance),
    dy: Math.sin(rad) * distance,
    length: 90 + Math.random() * 60,
    duration: 6 + Math.random() * 5,
    delay: i * 3.5 + Math.random() * 4,
  };
});

export default function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: `radial-gradient(circle, ${p.color} 0%, ${p.color} 35%, transparent 75%)`,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}, 0 0 ${p.size * 7}px ${p.color}`,
          }}
          animate={{
            y: [0, p.moveY, 0],
            x: [0, p.moveX, 0],
            opacity: [p.baseOpacity, p.peakOpacity, p.baseOpacity],
            scale: [0.85, 1.3, 0.85],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      {SHOOTING_STARS.map((s, i) => (
        <motion.span
          key={`shoot-${i}`}
          className="absolute rounded-full"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.length,
            height: 2,
            transformOrigin: "left center",
            rotate: `${s.angle}deg`,
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.95), rgba(90,142,246,0.4) 40%, transparent 100%)",
            boxShadow: "0 0 8px rgba(255,255,255,0.8), 0 0 18px rgba(90,142,246,0.6)",
          }}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0],
            x: [0, s.dx],
            y: [0, s.dy],
          }}
          transition={{
            duration: s.duration * 0.22,
            repeat: Infinity,
            repeatDelay: s.duration * 0.78,
            delay: s.delay,
            ease: "easeIn",
          }}
        />
      ))}
    </div>
  );
}
