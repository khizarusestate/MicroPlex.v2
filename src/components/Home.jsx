import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Rocket, BrainCircuit, Zap } from "lucide-react";
import Particles from "./Particles";
import Reveal from "./Reveal";
import Orb from "./Orb";
import Seo from "./Seo";
import Magnetic from "./Magnetic";
import SplitText from "./SplitText";
import { HEADLINE, ABOUT_INTRO, SEO_DESCRIPTION } from "./labContent";

const features = [
  { icon: Rocket, color: "#49D9E8", label: "SPACE SYSTEMS" },
  { icon: BrainCircuit, color: "#5A8EF6", label: "AI LAB" },
  { icon: Zap, color: "#D06AE8", label: "ENERGY R&D" },
];

// Home sits directly behind the intro splash, so its entrance is
// choreographed rather than left to the default scroll-reveal: the whole
// section breathes in first (soft scale + fade), then the heading, CTAs,
// and feature pills stagger in on top of that — starting the instant the
// splash begins clearing (introReady), not on mount.
export default function Home({ introReady = true }) {
  return (
    <motion.main
      id="home"
      className="min-h-screen w-full flex flex-col justify-center items-center gap-10 md:gap-[40px] bg-black relative overflow-hidden pt-32 pb-16 px-4"
      initial={{ opacity: 0, scale: 1.03 }}
      animate={introReady ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.03 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Seo
        title="Home"
        description={SEO_DESCRIPTION}
      />
      <h1 className="w-full sm:w-[85%] md:w-[70%] mx-auto text-[26px] sm:text-[32px] md:text-[40px] text-gray-200 text-center font-[inter] leading-tight bg-gradient-to-r gradient-animate from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] bg-clip-text text-transparent">
        <SplitText
          text={HEADLINE}
          controlled
          active={introReady}
          delay={0.15}
        />
      </h1>

      <Reveal
        controlled
        active={introReady}
        delay={0.3}
        className="w-full sm:w-[85%] md:w-[65%] mx-auto z-10"
      >
        <p className="text-gray-400 text-sm sm:text-base text-center leading-relaxed">
          {ABOUT_INTRO}
        </p>
      </Reveal>

      <Reveal
        controlled
        active={introReady}
        delay={0.45}
        className="w-full sm:w-auto z-10">
        <article className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-[30px] orbitron w-full sm:w-auto">
          <Magnetic className="w-full sm:w-auto sm:inline-block">
            <Link
              to="/about"
              className="w-full sm:w-auto text-center px-8 py-3 rounded-full font-bold text-gray-900 bg-gradient-to-r gradient-animate from-[#49D9E8] via-[#5A8EF6] to-[#5A8EF6] shadow-[0_0_35px_rgba(90,142,246,0.5)] hover:scale-[1.02] transition-all duration-300"
            >
              EXPLORE OUR LAB
            </Link>
          </Magnetic>
          <Magnetic className="w-full sm:w-auto sm:inline-block">
            <Link
              to="/products"
              className="w-full sm:w-auto text-center px-8 py-3 rounded-full font-bold text-white bg-white/5 backdrop-blur-xl border border-[#D06AE8]/50 shadow-[0_0_30px_rgba(208,106,232,0.4)] hover:bg-[#D06AE8]/20 transition-all duration-300"
            >
              SEE OUR PROJECTS
            </Link>
          </Magnetic>
        </article>
      </Reveal>

      <Reveal
        controlled
        active={introReady}
        delay={0.6}
        className="z-10 mt-4 w-full"
      >
        <article className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-[100px] orbitron">
          {features.map(({ icon: Icon, color, label }) => (
            <div
              key={label}
              className="flex justify-center items-center text-white gap-[10px] sm:gap-[12px] px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(90,142,246,0.16)]"
            >
              <Icon className="h-6 w-6 sm:h-7 sm:w-7" style={{ color }} />
              <p className="font-semibold text-sm sm:text-base whitespace-nowrap">{label}</p>
            </div>
          ))}
        </article>
      </Reveal>

      {/* orbs: the balls themselves sit off-canvas — only their glow bleeds in */}
      <Orb side="left" top="20%" offset={210} />
      <Orb side="right" top="40%" offset={210} delay={4} />
      <Particles />
    </motion.main>
  );
}
