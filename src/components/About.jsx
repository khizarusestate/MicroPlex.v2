import { useEffect, useRef, useState } from "react";
import {
  Rocket,
  ShieldCheck,
  Users,
  Target,
  Compass,
  Hammer,
  Rows3,
  LifeBuoy,
  ArrowUpRight,
} from "lucide-react";
import Particles from "./Particles";

/* Animated count-up for the stats row — triggers once the section enters view */
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
    title: "Reliability First",
    desc: "Every system we ship is built to stay up, stay fast, and stay out of your way — monitored around the clock, not just at launch.",
  },
  {
    icon: Target,
    color: "#5A8EF6",
    title: "Built Around Outcomes",
    desc: "We measure our work by what it changes for you — fewer support tickets, faster checkouts, happier users — not by lines of code shipped.",
  },
  {
    icon: Users,
    color: "#D06AE8",
    title: "A Team, Not a Vendor",
    desc: "You get direct access to the people building your product. No account managers relaying messages, no black box in between.",
  },
];

const process = [
  { icon: Compass, label: "Discover", desc: "We map your goals, constraints, and users before a single line of code is written." },
  { icon: Rows3, label: "Design", desc: "Architecture and interface decisions get made together, so nothing painted-in-a-corner later." },
  { icon: Hammer, label: "Build", desc: "Iterative development with working demos, not silent progress reports." },
  { icon: Rocket, label: "Launch", desc: "Deployed, monitored, and handed off with documentation that actually helps." },
  { icon: LifeBuoy, label: "Support", desc: "24/7 availability after launch — we stay reachable, not just billable." },
];

export default function About() {
  return (
    <main className="w-screen bg-black relative overflow-hidden">
      <Particles />

      {/* ---------- HERO ---------- */}
      <section className="relative z-10 min-h-[70vh] flex flex-col justify-center items-center gap-6 px-6 text-center pt-28 pb-16">
        <span className="orbitron text-[11px] md:text-xs tracking-[0.35em] uppercase text-[#5A8EF6]">
          About Us
        </span>
        <h1 className="w-[90%] md:w-[65%] text-[26px] md:text-[48px] font-[inter] font-bold leading-tight bg-gradient-to-r from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] bg-clip-text text-transparent">
          We Build the Systems Behind Tomorrow's Businesses.
        </h1>
        <p className="w-[90%] md:w-[50%] text-gray-400 text-sm md:text-base leading-relaxed">
          A small, deliberately-sized team of engineers who'd rather ship one
          thing well than five things half-finished.
        </p>
      </section>

      {/* ---------- STORY ---------- */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div className="flex flex-col gap-5">
          <h2 className="orbitron text-xl md:text-3xl font-bold text-gray-100">
            Started small.{" "}
            <span className="bg-gradient-to-r from-[#49D9E8] to-[#5A8EF6] bg-clip-text text-transparent">
              Stayed intentional.
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            We began as a two-person team frustrated with how disconnected
            most software agencies were from the businesses they built for.
            So we built the opposite kind of company — one where the person
            writing your code is the same person who understands why it
            matters.
          </p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            That principle hasn't changed as we've grown. We take on fewer
            clients than we could, so every one of them gets our full
            attention.
          </p>
          <button className="w-fit orbitron mt-2 flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-gray-900 bg-gradient-to-r from-[#49D9E8] via-[#5A8EF6] to-[#5A8EF6] shadow-[0_0_35px_rgba(90,142,246,0.5)] hover:shadow-[0_0_60px_rgba(90,142,246,0.8)] hover:scale-105 transition-all duration-300 border border-white/20">
            Work With Us <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        {/* right column — inline stats, no boxes, just rules */}
        <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
          {[
            { n: 6, suffix: "+", label: "Years building production software" },
            { n: 120, suffix: "+", label: "Projects shipped and still running" },
            { n: 40, suffix: "+", label: "Clients across three continents" },
            { n: 99, suffix: "%", label: "Uptime average across live systems" },
          ].map((s) => (
            <div key={s.label} className="flex items-center justify-between py-5">
              <p className="text-gray-400 text-sm max-w-[60%]">{s.label}</p>
              <p className="orbitron text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] bg-clip-text text-transparent">
                <Counter to={s.n} suffix={s.suffix} />
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- VALUES — alternating rows, not cards ---------- */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <h2 className="orbitron text-xl md:text-3xl font-bold text-gray-100 text-center mb-14">
          What Guides the Work
        </h2>
        <div className="flex flex-col gap-12">
          {values.map((v, i) => {
            const Icon = v.icon;
            const reversed = i % 2 === 1;
            return (
              <div
                key={v.title}
                className={`flex flex-col md:flex-row ${
                  reversed ? "md:flex-row-reverse" : ""
                } items-center gap-6 md:gap-10`}
              >
                <div
                  className="shrink-0 h-16 w-16 rounded-full flex items-center justify-center border"
                  style={{
                    borderColor: `${v.color}55`,
                    boxShadow: `0 0 30px ${v.color}33`,
                  }}
                >
                  <Icon className="h-7 w-7" style={{ color: v.color }} />
                </div>
                <div className={`text-center md:text-left ${reversed ? "md:text-right" : ""}`}>
                  <h3 className="orbitron text-gray-100 font-bold text-lg mb-2">
                    {v.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
                    {v.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------- PROCESS — connected timeline, numbered because order matters ---------- */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <h2 className="orbitron text-xl md:text-3xl font-bold text-gray-100 text-center mb-16">
          How a Project Moves
        </h2>
        <div className="relative flex flex-col md:flex-row md:justify-between gap-10 md:gap-4">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] opacity-30" />
          {process.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={p.label} className="relative flex md:flex-col items-center gap-4 md:gap-3 md:text-center md:w-[18%]">
                <div className="relative shrink-0 h-12 w-12 rounded-full flex items-center justify-center bg-black border border-white/15 z-10">
                  <Icon className="h-5 w-5 text-[#5A8EF6]" />
                </div>
                <div>
                  <p className="orbitron text-xs text-gray-500 mb-1">
                    0{i + 1}
                  </p>
                  <p className="text-gray-100 font-semibold text-sm mb-1">
                    {p.label}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed md:max-w-[160px]">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="relative z-10 flex flex-col items-center gap-6 px-6 py-24 text-center">
        <h2 className="w-[90%] md:w-[55%] text-[22px] md:text-[34px] font-[inter] font-bold leading-tight bg-gradient-to-r from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] bg-clip-text text-transparent">
          Have Something Worth Building?
        </h2>
        <div className="flex flex-wrap justify-center gap-6 orbitron">
          <button className="px-8 py-3 rounded-full font-bold text-gray-900 bg-gradient-to-r from-[#49D9E8] via-[#5A8EF6] to-[#5A8EF6] shadow-[0_0_35px_rgba(90,142,246,0.5)] hover:shadow-[0_0_60px_rgba(90,142,246,0.8)] hover:scale-105 transition-all duration-300 border border-white/20">
            START A PROJECT
          </button>
          <button className="px-8 py-3 rounded-full font-bold text-white bg-white/5 backdrop-blur-xl border border-[#D06AE8]/50 shadow-[0_0_30px_rgba(208,106,232,0.4)] hover:bg-[#D06AE8]/20 hover:shadow-[0_0_60px_rgba(208,106,232,0.8)] hover:scale-105 transition-all duration-300">
            MEET THE TEAM
          </button>
        </div>
      </section>
    </main>
  );
}
