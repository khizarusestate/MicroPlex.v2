import { motion } from "framer-motion";

const COUNT = 70;
const COLORS = ["#49D9E8", "#5A8EF6", "#D06AE8", "#ffffff"];

// Generated once at module load (not inside the component's render body),
// so the component itself stays pure per the react-hooks/purity rule.
const PARTICLES = Array.from({ length: COUNT }, (_, i) => ({
  size: Math.random() * 3 + 1.5,
  left: Math.random() * 100,
  top: Math.random() * 100,
  color: COLORS[i % COLORS.length],
  moveY: Math.random() * 40 - 20,
  moveX: Math.random() * 30 - 15,
  duration: Math.random() * 5 + 5,
  delay: Math.random() * 5,
}));

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
            backgroundColor: p.color,
            left: `${p.left}%`,
            top: `${p.top}%`,
            boxShadow: `
              0 0 8px ${p.color},
              0 0 20px ${p.color},
              0 0 35px ${p.color}
            `,
          }}
          animate={{
            y: [0, p.moveY, 0],
            x: [0, p.moveX, 0],
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
