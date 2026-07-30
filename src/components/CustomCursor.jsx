import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled] = useState(() => {
    if (typeof window === "undefined") return false;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    // Desktop-with-a-real-mouse only — leaves touch devices and anyone
    // who prefers reduced motion with the normal system cursor.
    return fine && !reduced;
  });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const ringX = useSpring(mouseX, { damping: 25, stiffness: 300, mass: 0.5 });
  const ringY = useSpring(mouseY, { damping: 25, stiffness: 300, mass: 0.5 });

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("custom-cursor-active");

    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };
    const leaveWindow = () => setVisible(false);
    const over = (e) => {
      if (e.target.closest("a, button, [data-cursor-hover]")) setHovering(true);
    };
    const out = (e) => {
      if (e.target.closest("a, button, [data-cursor-hover]")) setHovering(false);
    };

    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leaveWindow);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leaveWindow);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* small solid dot — tracks the pointer exactly, no lag */}
      <motion.div
        className="fixed top-0 left-0 z-[100] pointer-events-none rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          height: hovering ? 6 : 8,
          width: hovering ? 6 : 8,
          opacity: visible ? 1 : 0,
          background: "linear-gradient(135deg,#49D9E8,#D06AE8)",
        }}
        transition={{ duration: 0.2 }}
      />

      {/* trailing ring — spring-lags behind, blooms and glows on hover */}
      <motion.div
        className="fixed top-0 left-0 z-[100] pointer-events-none rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          height: hovering ? 60 : 32,
          width: hovering ? 60 : 32,
          opacity: visible ? 1 : 0,
          borderColor: hovering ? "rgba(208,106,232,0.7)" : "rgba(90,142,246,0.5)",
          backgroundColor: hovering
            ? "rgba(208,106,232,0.08)"
            : "rgba(90,142,246,0.04)",
          boxShadow: hovering
            ? "0 0 30px rgba(208,106,232,0.35)"
            : "0 0 15px rgba(90,142,246,0.2)",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
    </>
  );
}
