import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  Target,
  Handshake,
  Rocket,
  Users,
  Sparkles,
  ArrowUpRight,
  ArrowLeft,
} from "lucide-react";
import Particles from "./Particles";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

/* ---------- shared count-up (mirrors the one on the short About section) ---------- */
function Counter({ to, suffix = "", duration = 1400 }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.floor(eased * to));
            if (progress < 1) requestAnimationFrame(tick);
            else setValue(to);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

const values = [
  {
    icon: ShieldCheck,
    color: "#49D9E8",
    title: "Precision Engineering",
    desc: "We don't ship the first thing that works — we ship the version that holds up under real traffic, edge cases, and time.",
  },
  {
    icon: Target,
    color: "#5A8EF6",
    title: "Radical Transparency",
    desc: "No status-report theatre. You see working demos, real timelines, and honest trade-offs — even when the news is inconvenient.",
  },
  {
    icon: Handshake,
    color: "#D06AE8",
    title: "Long-Term Partnership",
    desc: "We'd rather turn down a project than take on one we can't stand behind a year later. Fewer clients, deeper relationships.",
  },
];

const timeline = [
  {
    year: "2020",
    title: "Two people, one laptop, one client",
    desc: "MicroPlex started as a two-person team frustrated with how disconnected most software agencies were from the businesses they built for.",
  },
  {
    year: "2021",
    title: "First platform launch",
    desc: "Our first full production platform went live — and stayed live. That reliability-first habit never left.",
  },
  {
    year: "2022",
    title: "Team expansion",
    desc: "Grew deliberately, not aggressively — every new hire had to pass the same bar: would you want them owning your codebase?",
  },
  {
    year: "2024",
    title: "100+ projects shipped",
    desc: "Crossed a hundred delivered projects across web, mobile, and custom software — without losing the small-team feel.",
  },
  {
    year: "2026",
    title: "Today",
    desc: "Still the same principle: fewer clients, full attention, and direct access to the people actually writing your code.",
  },
];

const leadership = [
  {
    name: "Khizar Hayat",
    role: "Founder & CEO",
    blurb:
      "Leads product direction and engineering at MicroPlex — hands-on with the codebase, not just the roadmap.",
    color: "#49D9E8",
  },
  {
    name: "Tahir Ayyub",
    role: "Co-Founder",
    blurb:
      "Drives operations and client partnerships, making sure every engagement gets the attention it was promised.",
    color: "#D06AE8",
  },
];

const culture = [
  {
    icon: Rocket,
    title: "Ship, then improve",
    desc: "We favor working software over polished decks. Momentum beats perfection on paper.",
  },
  {
    icon: Users,
    title: "Flat by default",
    desc: "No layers between you and the engineer solving your problem. Questions get answered same-day.",
  },
  {
    icon: Sparkles,
    title: "Craft matters",
    desc: "Clean code, thoughtful UI, and sensible architecture aren't extras — they're the baseline.",
  },
];

export default function AboutDetailed() {
  return (
    <main className="w-full bg-black relative overflow-hidden">
      {/* ================= HERO — grid + mesh glow, distinct from the particle field ================= */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center items-center gap-6 px-6 text-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-[10%] left-[15%] h-[320px] w-[320px] rounded-full bg-[#5A8EF6]/20 blur-[100px] animate-drift" />
        <div className="absolute bottom-[5%] right-[10%] h-[280px] w-[280px] rounded-full bg-[#D06AE8]/20 blur-[100px] animate-drift-slow" />

        <Reveal>
          <Link
            to="/"
            className="relative z-10 inline-flex items-center gap-2 text-gray-500 text-xs orbitron tracking-wide hover:text-[#49D9E8] transition-colors duration-300 mb-2"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Home / About
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="relative z-10 w-[92%] md:w-[70%] mx-auto text-[30px] sm:text-[38px] md:text-[56px] font-[inter] font-bold leading-tight bg-gradient-to-r from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] bg-clip-text text-transparent">
            The People, Principles, and Path Behind MicroPlex.
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="relative z-10 w-[92%] md:w-[55%] mx-auto text-gray-400 text-sm md:text-lg leading-relaxed">
            We're a small software company that builds like the people using
            what we ship are actual humans, not metrics. Here's the fuller
            story — who we are, how we got here, and what we won't compromise
            on.
          </p>
        </Reveal>
      </section>

      {/* ================= MISSION / VISION ================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-start">
        <Reveal className="flex flex-col gap-5">
          <span className="orbitron text-xs tracking-[0.3em] uppercase text-[#5A8EF6]">
            Our Mission
          </span>
          <h2 className="orbitron text-2xl md:text-4xl font-bold text-gray-100 leading-snug">
            Build software that outlives the invoice.
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Most software fails quietly — not at launch, but eighteen months
            later when nobody left on the team understands why a decision was
            made. Our mission is to build things that are still
            understandable, still maintainable, and still fast a year after
            we've moved on to the next project.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="flex flex-col gap-5">
          <span className="orbitron text-xs tracking-[0.3em] uppercase text-[#D06AE8]">
            Our Vision
          </span>
          <h2 className="orbitron text-2xl md:text-4xl font-bold text-gray-100 leading-snug">
            Stay small enough to care.
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            We're not chasing headcount. Every business we work with gets a
            team that actually knows their product — not a rotating cast of
            unfamiliar faces. Growth, for us, means getting better at this,
            not just bigger.
          </p>
        </Reveal>
      </section>

      {/* ================= TIMELINE — vertical line, pulsing nodes ================= */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        <Reveal className="text-center mb-16">
          <span className="orbitron text-xs tracking-[0.3em] uppercase text-[#5A8EF6]">
            Our Journey
          </span>
          <h2 className="orbitron text-2xl md:text-4xl font-bold text-gray-100 mt-3">
            Five Years, One Principle
          </h2>
        </Reveal>

        <div className="relative pl-10 sm:pl-14">
          <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] opacity-40" />
          <div className="flex flex-col gap-14">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.08} className="relative">
                <span className="absolute -left-10 sm:-left-14 top-1 h-4 w-4 rounded-full bg-[#5A8EF6] shadow-[0_0_15px_rgba(90,142,246,0.8)] animate-pulse-dot" />
                <p className="orbitron text-sm text-[#49D9E8] mb-1">{t.year}</p>
                <h3 className="text-gray-100 font-bold text-lg mb-2">
                  {t.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
                  {t.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES — 3 tilt cards ================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <Reveal className="text-center mb-14">
          <span className="orbitron text-xs tracking-[0.3em] uppercase text-[#D06AE8]">
            What We Stand On
          </span>
          <h2 className="orbitron text-2xl md:text-4xl font-bold text-gray-100 mt-3">
            Three Things We Won't Compromise
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.title} delay={i * 0.1}>
                <TiltCard glow={v.color} className="p-8 h-full flex flex-col gap-4">
                  <div
                    className="h-14 w-14 rounded-full flex items-center justify-center border"
                    style={{
                      borderColor: `${v.color}55`,
                      boxShadow: `0 0 25px ${v.color}33`,
                    }}
                  >
                    <Icon className="h-6 w-6" style={{ color: v.color }} />
                  </div>
                  <h3 className="orbitron text-gray-100 font-bold text-lg">
                    {v.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        <Reveal className="text-center mb-14">
          <span className="orbitron text-xs tracking-[0.3em] uppercase text-[#5A8EF6]">
            Leadership
          </span>
          <h2 className="orbitron text-2xl md:text-4xl font-bold text-gray-100 mt-3">
            Who's Actually Behind This
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {leadership.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <TiltCard glow={p.color} className="p-8 h-full flex flex-col items-center text-center gap-4">
                <div
                  className="h-20 w-20 rounded-full flex items-center justify-center orbitron text-xl font-bold border"
                  style={{
                    borderColor: `${p.color}55`,
                    boxShadow: `0 0 25px ${p.color}33`,
                    color: p.color,
                  }}
                >
                  {p.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <h3 className="orbitron text-gray-100 font-bold text-lg">
                    {p.name}
                  </h3>
                  <p className="text-xs orbitron tracking-wide" style={{ color: p.color }}>
                    {p.role}
                  </p>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {p.blurb}
                </p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= BY THE NUMBERS — grid-dot bg ================= */}
      <section className="relative z-10 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <Reveal className="relative z-10 text-center mb-14">
          <span className="orbitron text-xs tracking-[0.3em] uppercase text-[#D06AE8]">
            By The Numbers
          </span>
          <h2 className="orbitron text-2xl md:text-4xl font-bold text-gray-100 mt-3">
            Small Team, Real Track Record
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="relative z-10 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: 6, suffix: "+", label: "Years shipping software" },
            { n: 120, suffix: "+", label: "Projects delivered" },
            { n: 40, suffix: "+", label: "Clients, three continents" },
            { n: 99, suffix: "%", label: "Average uptime" },
          ].map((s) => (
            <div key={s.label}>
              <p className="orbitron text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] bg-clip-text text-transparent">
                <Counter to={s.n} suffix={s.suffix} />
              </p>
              <p className="text-gray-500 text-xs md:text-sm mt-2">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* ================= CULTURE ================= */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        <Reveal className="text-center mb-14">
          <span className="orbitron text-xs tracking-[0.3em] uppercase text-[#49D9E8]">
            Culture
          </span>
          <h2 className="orbitron text-2xl md:text-4xl font-bold text-gray-100 mt-3">
            How We Actually Work
          </h2>
        </Reveal>

        <div className="flex flex-col gap-10">
          {culture.map((c, i) => {
            const Icon = c.icon;
            const reversed = i % 2 === 1;
            return (
              <Reveal
                key={c.title}
                delay={i * 0.08}
                className={`flex flex-col md:flex-row ${
                  reversed ? "md:flex-row-reverse" : ""
                } items-center gap-6 md:gap-10`}
              >
                <div className="shrink-0 h-14 w-14 rounded-full flex items-center justify-center border border-white/10 bg-white/5">
                  <Icon className="h-6 w-6 text-[#5A8EF6]" />
                </div>
                <div className={`text-center md:text-left ${reversed ? "md:text-right" : ""}`}>
                  <h3 className="orbitron text-gray-100 font-bold text-lg mb-1">
                    {c.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
                    {c.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ================= CTA — a few orbs, back to the familiar brand language ================= */}
      <section className="relative z-10 flex flex-col items-center gap-6 px-6 py-28 text-center overflow-hidden">
        <div className="absolute top-[10%] left-[5%] h-[220px] w-[220px] rounded-full bg-[rgba(90,142,246,0.18)] shadow-[0_0_700px_rgb(90,142,246)]" />
        <div className="absolute bottom-[10%] right-[5%] h-[220px] w-[220px] rounded-full bg-[rgba(217,94,234,0.5)] shadow-[0_0_700px_rgb(217,94,234)]" />

        <Reveal className="relative z-10 flex flex-col items-center gap-6">
          <h2 className="w-[90%] md:w-[55%] mx-auto text-[22px] md:text-[36px] font-[inter] font-bold leading-tight bg-gradient-to-r from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] bg-clip-text text-transparent">
            Think We'd Be a Good Fit?
          </h2>
          <div className="flex flex-wrap justify-center gap-6 orbitron">
            <Link
              to="/#contact"
              className="px-8 py-3 rounded-full font-bold text-gray-900 bg-gradient-to-r from-[#49D9E8] via-[#5A8EF6] to-[#5A8EF6] shadow-[0_0_35px_rgba(90,142,246,0.5)] hover:shadow-[0_0_60px_rgba(90,142,246,0.8)] hover:scale-105 transition-all duration-300 border border-white/20"
            >
              START A PROJECT
            </Link>
            <Link
              to="/#services"
              className="px-8 py-3 rounded-full font-bold text-white bg-white/5 backdrop-blur-xl border border-[#D06AE8]/50 shadow-[0_0_30px_rgba(208,106,232,0.4)] hover:bg-[#D06AE8]/20 hover:shadow-[0_0_60px_rgba(208,106,232,0.8)] hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              SEE OUR SERVICES <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      <Particles />
    </main>
  );
}
