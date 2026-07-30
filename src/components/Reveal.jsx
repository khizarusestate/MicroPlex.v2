import { motion } from "framer-motion";

/**
 * Premium scroll-reveal: blur-to-focus + scale-in + slide, spring-eased.
 * Same prop API as before (delay/y/className) so every existing call site
 * upgrades automatically — no need to touch usages elsewhere.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale: 0.94, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 16,
        mass: 0.8,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
