import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Clock3,
  MapPinned,
  ShieldHalf,
  ArrowUpRight,
  ArrowLeft,
  Lock,
  ShoppingBag,
} from "lucide-react";
import Particles from "./Particles";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import Orb from "./Orb";

const fixItNowFeatures = [
  {
    icon: ShieldCheck,
    color: "#49D9E8",
    title: "Verified Professionals",
    desc: "Every plumber, electrician, cleaner, and handyman is background-checked before they're allowed to take a single booking.",
  },
  {
    icon: Clock3,
    color: "#5A8EF6",
    title: "Book in Under 2 Minutes",
    desc: "Search by service, location, and price — confirm a provider without a single phone call.",
  },
  {
    icon: MapPinned,
    color: "#D06AE8",
    title: "Live Job Tracking",
    desc: "Know exactly when your provider is on the way, and rate the job the moment it's done.",
  },
  {
    icon: ShieldHalf,
    color: "#49D9E8",
    title: "Secure Payments",
    desc: "Pay online through a secure gateway — funds stay held safely until the work is actually finished.",
  },
];

export default function Products() {
  return (
    <main className="w-full bg-black relative overflow-hidden">
      <Orb side="left" top="12%" offset={210} fill="rgba(90,142,246,0.2)" glow="rgb(90,142,246)" />
      <Orb side="right" top="62%" offset={210} fill="rgba(208,106,232,0.2)" glow="rgb(208,106,232)" />
      <Particles />

      {/* ---------- HERO ---------- */}
      <section className="relative z-10 flex flex-col justify-center items-center gap-6 px-6 text-center pt-32 pb-16">
        <Reveal>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 text-xs orbitron tracking-wide hover:text-[#49D9E8] transition-colors duration-300 mb-2"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Home / Products
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <span className="orbitron text-[11px] md:text-xs tracking-[0.35em] uppercase text-[#5A8EF6]">
            Our Products
          </span>
        </Reveal>
        <Reveal delay={0.15}>
          <h1 className="w-[92%] md:w-[65%] mx-auto text-[26px] md:text-[48px] font-[inter] font-bold leading-tight bg-gradient-to-r from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] bg-clip-text text-transparent">
            Things We've Built and Actually Use Ourselves.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="w-[92%] md:w-[50%] mx-auto text-gray-400 text-sm md:text-base leading-relaxed">
            Alongside client work, we build our own products — real
            platforms, solving real problems, live in the market today.
          </p>
        </Reveal>
      </section>

      {/* ---------- FIXITNOW — live product ---------- */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <Reveal className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(90,142,246,0.12)] p-8 md:p-14">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="orbitron text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] bg-clip-text text-transparent">
                FixItNow
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#49D9E8]/10 border border-[#49D9E8]/30 text-[#49D9E8] text-[11px] orbitron">
                <span className="h-1.5 w-1.5 rounded-full bg-[#49D9E8] animate-pulse-dot" />
                LIVE
              </span>
            </div>
            <a
              href="https://fixitnow.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm text-gray-900 bg-gradient-to-r from-[#49D9E8] via-[#5A8EF6] to-[#5A8EF6] shadow-[0_0_30px_rgba(90,142,246,0.5)] hover:shadow-[0_0_50px_rgba(90,142,246,0.8)] hover:scale-105 transition-all duration-300 orbitron w-fit"
            >
              Visit FixItNow <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl mb-10">
            FixItNow is Pakistan's home services marketplace — connecting
            homeowners with verified plumbers, electricians, cleaners,
            mechanics, and handymen. Customers search by service, location,
            and price, book in minutes, and pay securely once the job's
            actually done. Providers get a steady stream of nearby jobs
            without middlemen taking a cut.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fixItNowFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.title} delay={i * 0.08}>
                  <TiltCard glow={f.color} className="p-6 h-full flex flex-col gap-3">
                    <div
                      className="h-11 w-11 rounded-full flex items-center justify-center border"
                      style={{ borderColor: `${f.color}55`, boxShadow: `0 0 20px ${f.color}33` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: f.color }} />
                    </div>
                    <h3 className="orbitron text-gray-100 font-bold text-sm">
                      {f.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {f.desc}
                    </p>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* ---------- MICROPLEX COMMERCE — coming soon ---------- */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <Reveal className="relative overflow-hidden rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 border-dashed p-8 md:p-14">
          {/* muted grid texture — distinguishes "coming soon" from the live product's glow */}
          <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="orbitron text-2xl md:text-3xl font-bold text-gray-300">
                MicroPlex Commerce
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-gray-400 text-[11px] orbitron">
                <Lock className="h-3 w-3" /> COMING SOON
              </span>
            </div>
            <button
              disabled
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm text-gray-500 bg-white/5 border border-white/10 cursor-not-allowed w-fit"
            >
              <ShoppingBag className="h-4 w-4" /> Notify Me
            </button>
          </div>

          <p className="relative z-10 text-gray-500 text-sm md:text-base leading-relaxed max-w-3xl">
            Our next product: a full e-commerce ecosystem built for
            Pakistan's market — storefronts, payments, and logistics designed
            around how people here actually shop online. Still in active
            development.
          </p>
        </Reveal>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="relative z-10 flex flex-col items-center gap-6 px-6 py-24 text-center">
        <Reveal className="flex flex-col items-center gap-6">
          <h2 className="w-[90%] md:w-[55%] mx-auto text-[22px] md:text-[34px] font-[inter] font-bold leading-tight bg-gradient-to-r from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] bg-clip-text text-transparent">
            Got a Product Idea of Your Own?
          </h2>
          <div className="flex flex-wrap justify-center gap-6 orbitron">
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full font-bold text-gray-900 bg-gradient-to-r from-[#49D9E8] via-[#5A8EF6] to-[#5A8EF6] shadow-[0_0_35px_rgba(90,142,246,0.5)] hover:shadow-[0_0_60px_rgba(90,142,246,0.8)] hover:scale-105 transition-all duration-300 border border-white/20"
            >
              LET'S TALK
            </Link>
            <Link
              to="/services"
              className="px-8 py-3 rounded-full font-bold text-white bg-white/5 backdrop-blur-xl border border-[#D06AE8]/50 shadow-[0_0_30px_rgba(208,106,232,0.4)] hover:bg-[#D06AE8]/20 hover:shadow-[0_0_60px_rgba(208,106,232,0.8)] hover:scale-105 transition-all duration-300"
            >
              SEE OUR SERVICES
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
