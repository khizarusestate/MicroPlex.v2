import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Particles from "./Particles";
import Reveal from "./Reveal";
import Orb from "./Orb";
import Magnetic from "./Magnetic";
import {
  ABOUT_INTRO,
  ABOUT_STORY,
  CLOSING_LINE,
  VERTICALS,
} from "./labContent";

// Homepage "About" section — sits under the hero on "/". The full page lives
// in AboutDetailed (/about); both read their copy from labContent.js.
export default function About() {
  return (
    <section id="about" className="w-full bg-black relative overflow-hidden">
      <Orb side="right" top="8%" offset={210} />
      <Particles />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-10 grid md:grid-cols-2 gap-14 items-center">
        <Reveal className="flex flex-col gap-5">
          <span className="orbitron text-[11px] md:text-xs tracking-[0.35em] uppercase text-[#5A8EF6]">
            About Us
          </span>
          <h2 className="orbitron text-xl md:text-3xl font-bold text-gray-100 leading-snug">
            A private{" "}
            <span className="bg-gradient-to-r gradient-animate from-[#49D9E8] to-[#5A8EF6] bg-clip-text text-transparent">
              Research &amp; Development Lab.
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {ABOUT_INTRO}
          </p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {ABOUT_STORY}
          </p>
          <Magnetic>
            <Link
              to="/about"
              className="w-fit orbitron mt-2 flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-gray-900 bg-gradient-to-r gradient-animate from-[#49D9E8] via-[#5A8EF6] to-[#5A8EF6] shadow-[0_0_35px_rgba(90,142,246,0.5)] hover:shadow-[0_0_60px_rgba(90,142,246,0.8)] hover:scale-105 transition-all duration-300 border border-white/20"
            >
              READ OUR STORY <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Magnetic>
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col">
          <p className="orbitron text-[11px] tracking-[0.3em] uppercase text-gray-500 mb-4">
            Our Research Verticals
          </p>
          <div className="border-y border-white/10 divide-y divide-white/10">
            {VERTICALS.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="flex gap-4 py-4 items-start">
                  <div
                    className="mt-1 h-10 w-10 shrink-0 rounded-full flex items-center justify-center border bg-white/5"
                    style={{ borderColor: `${v.color}66`, boxShadow: `0 0 18px ${v.color}22` }}
                  >
                    <Icon className="h-4 w-4" style={{ color: v.color }} />
                  </div>
                  <div>
                    <p className="orbitron text-xs md:text-sm text-gray-100 mb-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span className="text-gray-500">0{i + 1}</span>
                      {v.title}
                      {v.badge && (
                        <span className="text-[9px] tracking-widest px-2 py-0.5 rounded-full border border-[#D06AE8]/60 text-[#D06AE8] bg-[#D06AE8]/10">
                          {v.badge}
                        </span>
                      )}
                    </p>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-3 px-6 pt-10 pb-24 text-center">
        <Reveal className="flex flex-col items-center gap-3">
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
            {CLOSING_LINE}
          </p>
          <p className="orbitron text-lg md:text-2xl font-bold bg-gradient-to-r gradient-animate from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] bg-clip-text text-transparent">
            Welcome to the Lab.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
