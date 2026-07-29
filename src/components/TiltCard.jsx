import { useRef, useState } from "react";

export default function TiltCard({ children, className = "", glow = "#5A8EF6" }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -10;
    const rotateY = ((x - rect.width / 2) / rect.width) * 10;
    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`,
      "--mx": `${x}px`,
      "--my": `${y}px`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform:
        "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...style, transition: "transform 0.25s ease-out" }}
      className={`relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 ${className}`}
    >
      {/* cursor-following glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(180px circle at var(--mx, 50%) var(--my, 50%), ${glow}22, transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
}
