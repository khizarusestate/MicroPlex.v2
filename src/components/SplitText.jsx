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

export default function SplitText({ text, delay = 0 }) {
  const words = text.split(" ");

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      custom={delay}
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
