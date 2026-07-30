import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black">
      <div className="relative h-24 w-24 flex items-center justify-center">
        {/* spinning gradient ring */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full animate-spin"
          style={{ animationDuration: "1.4s" }}
        >
          <defs>
            <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#49D9E8" stopOpacity="0" />
              <stop offset="60%" stopColor="#5A8EF6" />
              <stop offset="100%" stopColor="#D06AE8" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="url(#loaderGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="180 100"
          />
        </svg>

        {/* pulsing logo */}
        <motion.img
          src="/Images/Logo.png"
          alt="MicroPlex"
          className="h-11 sm:h-12 relative z-10"
          animate={{ scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
