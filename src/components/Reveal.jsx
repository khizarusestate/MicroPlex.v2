import { motion } from "framer-motion";

/**
 * Premium scroll-reveal: blur-to-focus + scale-in + slide, spring-eased.
 * Same prop API as before (delay/y/className) so every existing call site
 * upgrades automatically — no need to touch usages elsewhere.
 *
 * controlled + active: opt-in escape hatch from the scroll-triggered
 * (whileInView) behavior, for the rare element whose reveal needs to be
 * driven by something other than scrolling into view — e.g. the Home
 * hero, which reveals when the intro splash clears rather than on scroll.
 * Default (uncontrolled) behavior is untouched.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  controlled = false,
  active = true,
}) {
  const hidden = { opacity: 0, y, scale: 0.94, filter: "blur(8px)" };
  const visible = { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" };

  const scrollProps = controlled
    ? {}
    : { whileInView: visible, viewport: { once: true, amount: 0.3 } };

  return (
    <motion.div
      className={className}
      initial={hidden}
      animate={controlled ? (active ? visible : hidden) : undefined}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 16,
        mass: 0.8,
        delay,
      }}
      {...scrollProps}
    >
      {children}
    </motion.div>
  );
}
