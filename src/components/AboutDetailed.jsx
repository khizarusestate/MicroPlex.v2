import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Globe, Mail, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import Orb from "./Orb";
import Seo from "./Seo";
import Magnetic from "./Magnetic";
import SplitText from "./SplitText";
import TiltCard from "./TiltCard";
import {
  HEADLINE,
  ABOUT_INTRO,
  ABOUT_STORY,
  CLOSING_LINE,
  VERTICALS,
  CONTACT,
  SEO_DESCRIPTION,
} from "./labContent";

export default function AboutDetailed() {
  return (
    <main className="w-full bg-black relative overflow-hidden">
      <Seo title="About Us" description={SEO_DESCRIPTION} />

      {/* ================= HERO ================= */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center items-center gap-6 px-6 text-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <Orb side="left" top="18%" offset={210} />
        <Orb side="right" top="55%" offset={210} delay={4} />

        <Reveal>
          <Link
            to="/"
            className="relative z-10 inline-flex items-center gap-2 text-gray-500 text-xs orbitron tracking-wide hover:text-[#49D9E8] transition-colors duration-300 mb-2"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Home / About
          </Link>
        </Reveal>

        <h1 className="relative z-10 w-[92%] md:w-[70%] mx-auto text-[28px] sm:text-[36px] md:text-[52px] font-display font-bold leading-tight bg-gradient-to-r gradient-animate from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] bg-clip-text text-transparent">
          <SplitText text={HEADLINE} delay={0.1} />
        </h1>

        <Reveal delay={0.2}>
          <p className="relative z-10 w-[92%] md:w-[55%] mx-auto text-gray-400 text-sm md:text-lg leading-relaxed">
            {ABOUT_INTRO}
          </p>
        </Reveal>
      </section>

      {/* ================= ABOUT US ================= */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-24 flex flex-col gap-6 text-center items-center">
        <Reveal className="flex flex-col gap-5 items-center">
          <span className="orbitron text-xs tracking-[0.3em] uppercase text-[#5A8EF6]">
            About Us
          </span>
          <h2 className="orbitron text-2xl md:text-4xl font-bold text-gray-100 leading-snug">
            From a vision to explore the galaxy to a multi-domain R&amp;D powerhouse.
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
            {ABOUT_INTRO}
          </p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
            {ABOUT_STORY}
          </p>
        </Reveal>
      </section>

      {/* ================= RESEARCH VERTICALS ================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <Reveal className="text-center mb-14">
          <span className="orbitron text-xs tracking-[0.3em] uppercase text-[#D06AE8]">
            Our Research Verticals
          </span>
          <h2 className="orbitron text-2xl md:text-4xl font-bold text-gray-100 mt-3">
            Five Frontiers. One Lab.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {VERTICALS.map((v, i) => {
            const Icon = v.icon;
            const featured = Boolean(v.badge);
            return (
              <Reveal
                key={v.title}
                delay={i * 0.08}
                className={featured ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <TiltCard glow={featured ? "#D06AE8" : v.color} className="p-8 h-full flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div
                      className="h-14 w-14 rounded-full flex items-center justify-center border"
                      style={{
                        borderColor: `${v.color}55`,
                        boxShadow: `0 0 25px ${v.color}33`,
                      }}
                    >
                      <Icon className="h-6 w-6" style={{ color: v.color }} />
                    </div>
                    <span className="orbitron text-sm text-gray-600">0{i + 1}</span>
                  </div>
                  <h3 className="orbitron text-gray-100 font-bold text-base md:text-lg leading-snug">
                    {v.title}
                  </h3>
                  {v.badge && (
                    <span className="w-fit orbitron text-[10px] tracking-widest px-3 py-1 rounded-full border border-[#D06AE8]/60 text-[#D06AE8] bg-[#D06AE8]/10">
                      {v.badge}
                    </span>
                  )}
                  <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ================= CLOSING + CONTACT ================= */}
      <section className="relative z-10 flex flex-col items-center gap-8 px-6 py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <Reveal className="relative z-10 flex flex-col items-center gap-6">
          <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-2xl">
            {CLOSING_LINE}
          </p>
          <h2 className="w-[90%] mx-auto text-[26px] md:text-[44px] font-display font-bold leading-tight bg-gradient-to-r gradient-animate from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] bg-clip-text text-transparent">
            Welcome to the Lab.
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 text-sm text-gray-400">
            <a
              href={CONTACT.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#49D9E8] transition-colors duration-300"
            >
              <Globe className="h-4 w-4 text-[#5A8EF6]" /> {CONTACT.website}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 hover:text-[#49D9E8] transition-colors duration-300"
            >
              <Mail className="h-4 w-4 text-[#5A8EF6]" /> {CONTACT.email}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#5A8EF6]" /> {CONTACT.location}
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 orbitron mt-2">
            <Magnetic>
              <Link
                to="/contact"
                className="inline-block px-8 py-3 rounded-full font-bold text-gray-900 bg-gradient-to-r gradient-animate from-[#49D9E8] via-[#5A8EF6] to-[#5A8EF6] shadow-[0_0_35px_rgba(90,142,246,0.5)]"
              >
                CONTACT US
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-white bg-white/5 backdrop-blur-xl border border-[#D06AE8]/50 shadow-[0_0_30px_rgba(208,106,232,0.4)] hover:bg-[#D06AE8]/20 transition-all duration-300"
              >
                SEE OUR PROJECTS <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
