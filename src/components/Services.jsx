import { Link } from "react-router-dom";
import {
  Code2,
  Smartphone,
  Cloud,
  Palette,
  Database,
  Check,
  ArrowUpRight,
  ArrowLeft,
} from "lucide-react";
import Particles from "./Particles";
import Reveal from "./Reveal";

const services = [
  {
    icon: Code2,
    color: "#49D9E8",
    title: "Web Applications",
    desc: "Fast, responsive web platforms built on modern stacks — from marketing sites to full product dashboards that hold up under real traffic.",
  },
  {
    icon: Smartphone,
    color: "#5A8EF6",
    title: "Mobile Apps",
    desc: "Native-feel iOS and Android apps sharing one codebase, so your product ships on both platforms without doubling the work.",
  },
  {
    icon: Database,
    color: "#D06AE8",
    title: "Custom Software",
    desc: "Internal tools, dashboards, and automation built around how your team actually works — not a generic template forced to fit.",
  },
  {
    icon: Cloud,
    color: "#49D9E8",
    title: "Cloud & DevOps",
    desc: "Infrastructure, CI/CD, and monitoring set up so deployments are routine, not risky — scaling with you instead of breaking under you.",
  },
  {
    icon: Palette,
    color: "#5A8EF6",
    title: "UI/UX Design",
    desc: "Interfaces designed around what your users are trying to do, backed by a design system that keeps every screen consistent.",
  },
];

const included = [
  "Direct access to the engineers building your product",
  "Working demos at every milestone, not status reports",
  "Documentation handed off, not held hostage",
  "24/7 support after launch",
];

export default function Services() {
  return (
    <main id="services" className="w-full bg-black relative overflow-hidden">
      <Particles />

      {/* ---------- HERO ---------- */}
      <section className="relative z-10 min-h-[65vh] flex flex-col justify-center items-center gap-6 px-6 text-center pt-28 pb-16">
        <Reveal>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 text-xs orbitron tracking-wide hover:text-[#49D9E8] transition-colors duration-300 mb-2"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Home / Services
          </Link>
        </Reveal>
        <Reveal>
          <span className="orbitron text-[11px] md:text-xs tracking-[0.35em] uppercase text-[#5A8EF6]">
            Our Services
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="w-[90%] md:w-[65%] mx-auto text-[26px] md:text-[48px] font-[inter] font-bold leading-tight bg-gradient-to-r from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] bg-clip-text text-transparent">
            Everything You Need to Ship Software That Lasts.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="w-[90%] md:w-[50%] mx-auto text-gray-400 text-sm md:text-base leading-relaxed">
            From first line of code to the team that keeps it running — one
            group, no handoffs between agencies.
          </p>
        </Reveal>
      </section>

      {/* ---------- SERVICES — alternating rows, not a card grid ---------- */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        <div className="flex flex-col gap-14">
          {services.map((s, i) => {
            const Icon = s.icon;
            const reversed = i % 2 === 1;
            return (
              <Reveal
                key={s.title}
                delay={i * 0.08}
                className={`flex flex-col md:flex-row ${
                  reversed ? "md:flex-row-reverse" : ""
                } items-center gap-6 md:gap-10 pb-14 border-b border-white/10 last:border-none`}
              >
                <div
                  className="shrink-0 h-16 w-16 rounded-full flex items-center justify-center border"
                  style={{
                    borderColor: `${s.color}55`,
                    boxShadow: `0 0 30px ${s.color}33`,
                  }}
                >
                  <Icon className="h-7 w-7" style={{ color: s.color }} />
                </div>
                <div className={`text-center md:text-left ${reversed ? "md:text-right" : ""}`}>
                  <p className="orbitron text-xs text-gray-500 mb-2">
                    0{i + 1}
                  </p>
                  <h3 className="orbitron text-gray-100 font-bold text-lg md:text-xl mb-2">
                    {s.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---------- INCLUDED — flowing checklist, not boxed ---------- */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-16 text-center">
        <Reveal>
          <h2 className="orbitron text-xl md:text-3xl font-bold text-gray-100 mb-10">
            Comes Standard, Not Sold Separately
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="grid sm:grid-cols-2 gap-x-10 gap-y-6 text-left">
          {included.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <div className="mt-1 shrink-0 h-5 w-5 rounded-full flex items-center justify-center bg-white/5 border border-[#49D9E8]/40">
                <Check className="h-3 w-3 text-[#49D9E8]" />
              </div>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="relative z-10 flex flex-col items-center gap-6 px-6 py-24 text-center">
        <Reveal className="flex flex-col items-center gap-6">
          <h2 className="w-[90%] md:w-[55%] mx-auto text-[22px] md:text-[34px] font-[inter] font-bold leading-tight bg-gradient-to-r from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] bg-clip-text text-transparent">
            Not Sure Which Service Fits?
          </h2>
          <div className="flex flex-wrap justify-center gap-6 orbitron">
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full font-bold text-gray-900 bg-gradient-to-r from-[#49D9E8] via-[#5A8EF6] to-[#5A8EF6] shadow-[0_0_35px_rgba(90,142,246,0.5)] hover:shadow-[0_0_60px_rgba(90,142,246,0.8)] hover:scale-105 transition-all duration-300 border border-white/20"
            >
              BOOK A CALL
            </Link>
            <Link
              to="/"
              className="px-8 py-3 rounded-full font-bold text-white bg-white/5 backdrop-blur-xl border border-[#D06AE8]/50 shadow-[0_0_30px_rgba(208,106,232,0.4)] hover:bg-[#D06AE8]/20 hover:shadow-[0_0_60px_rgba(208,106,232,0.8)] hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              SEE OUR PRODUCTS <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
