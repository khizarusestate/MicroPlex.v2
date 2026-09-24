import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: (delay) => ({
    transition: { staggerChildren: 0.05, delayChildren: delay },
  }),
};

const word = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 120, damping: 16 },
  },
};

// controlled + active: same escape hatch as Reveal.jsx — lets a caller
// drive the reveal itself instead of scroll visibility. Default
// (uncontrolled) behavior is untouched.
export default function SplitText({
  text,
  delay = 0,
  controlled = false,
  active = true,
}) {
  const words = text.split(" ");

  const scrollProps = controlled
    ? {}
    : { whileInView: "visible", viewport: { once: true, amount: 0.4 } };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate={controlled ? (active ? "visible" : "hidden") : undefined}
      custom={delay}
      {...scrollProps}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={word}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
