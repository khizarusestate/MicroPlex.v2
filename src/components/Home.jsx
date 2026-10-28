import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Bot, Cpu, Orbit, Rocket, Shield, Sparkles, Zap } from "lucide-react";
import Particles from "./Particles";
import Reveal from "./Reveal";
import Orb from "./Orb";
import Seo from "./Seo";
import Magnetic from "./Magnetic";
import SplitText from "./SplitText";
import TiltCard from "./TiltCard";

const research = [
  {
    icon: Orbit,
    color: "#49D9E8",
    title: "SPACE & GALAXY SYSTEMS",
    desc: "Deep-space research, orbital mechanics, and autonomous space navigation architecture for interstellar exploration.",
  },
  {
    icon: Bot,
    color: "#5A8EF6",
    title: "ROBOTICS & AUTONOMOUS SYSTEMS",
    desc: "From searching robots for extreme environments to intelligent AI-powered robotic machines built for Earth and beyond.",
  },
  {
    icon: Cpu,
    color: "#D06AE8",
    title: "AI & SOFTWARE DEVELOPMENT",
    desc: "Proprietary AI products, machine learning frameworks, and mission-critical software development for autonomous operations.",
  },
  {
    icon: Shield,
    color: "#49D9E8",
    title: "SEMICONDUCTOR & SENSOR LAB",
    desc: "In-house design and R&D of next-generation semiconductors, high-precision sensors, and low-power chipsets.",
  },
  {
    icon: Zap,
    color: "#5A8EF6",
    title: "MAGNETIC ELECTRICITY",
    desc: "Our most ambitious discovery: a new form of energy harnessing magnetic fields to generate clean, sustainable electricity. Research in progress.",
  },
];

const culture = [
  {
    icon: Rocket,
    title: "Builders first",
    desc: "We are not theorists who stop at ideas. We turn frontier concepts into working systems, platforms, and technologies.",
  },
  {
    icon: Sparkles,
    title: "Pushing beyond the known",
    desc: "We operate where the frontier is still being mapped — where science, engineering, and product definition are all happening at once.",
  },
];

export default function AboutDetailed() {
  return (
    <main className="w-full bg-black relative overflow-hidden">
      <Seo
        title="About"
        description="Microplex AI is a private Research & Development Lab focused on space systems, robotics, AI, semiconductors, and energy innovation."
      />

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

        <h1 className="relative z-10 w-[92%] md:w-[70%] mx-auto text-[30px] sm:text-[38px] md:text-[56px] font-[inter] font-bold leading-tight bg-gradient-to-r gradient-animate from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] bg-clip-text text-transparent">
          <SplitText text="WE DON'T FOLLOW THE FUTURE. WE BUILD IT." delay={0.1} />
        </h1>

        <Reveal delay={0.2}>
          <p className="relative z-10 w-[92%] md:w-[60%] mx-auto text-gray-400 text-sm md:text-lg leading-relaxed">
            Microplex AI is a private Research & Development Lab dedicated to solving humanity's most complex
            challenges at the intersection of Space, Intelligence, and Energy.
          </p>
        </Reveal>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-start">
        <Reveal className="flex flex-col gap-5">
          <span className="orbitron text-xs tracking-[0.3em] uppercase text-[#5A8EF6]">
            Our Story
          </span>
          <h2 className="orbitron text-2xl md:text-4xl font-bold text-gray-100 leading-snug">
            From a vision to explore the galaxy to a multi-domain R&D lab.
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            What started as a vision to explore the galaxy has evolved into a multi-domain research and product
            engine executing large-scale, classified and open-source projects that redefine what's possible.
          </p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            We build at the edge of science and engineering — bringing together advanced research, autonomous
            software systems, semiconductor innovation, and next-generation energy work in a single lab with a clear
            mission: to solve the problems that matter most to humanity's future.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col gap-5">
          <span className="orbitron text-xs tracking-[0.3em] uppercase text-[#D06AE8]">
            Our Mission
          </span>
          <h2 className="orbitron text-2xl md:text-4xl font-bold text-gray-100 leading-snug">
            Research what others call impossible.
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Our work connects space systems, autonomous robotics, AI, sensors, and energy research into a unified
            platform of innovation. We are solving hard problems with long-term thinking, technical depth, and the
            courage to build what the future requires.
          </p>
        </Reveal>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <Reveal className="text-center mb-14">
          <span className="orbitron text-xs tracking-[0.3em] uppercase text-[#5A8EF6]">
            Research Verticals
          </span>
          <h2 className="orbitron text-2xl md:text-4xl font-bold text-gray-100 mt-3">
            Built across the frontiers of science and engineering.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {research.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <TiltCard glow={item.color} className="p-8 h-full flex flex-col gap-4">
                  <div
                    className="h-14 w-14 rounded-full flex items-center justify-center border"
                    style={{
                      borderColor: `${item.color}55`,
                      boxShadow: `0 0 25px ${item.color}33`,
                    }}
                  >
                    <Icon className="h-6 w-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="orbitron text-gray-100 font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        <Reveal className="text-center mb-14">
          <span className="orbitron text-xs tracking-[0.3em] uppercase text-[#49D9E8]">
            Culture
          </span>
          <h2 className="orbitron text-2xl md:text-4xl font-bold text-gray-100 mt-3">
            How we operate
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
                className={`flex flex-col md:flex-row ${reversed ? "md:flex-row-reverse" : ""} items-center gap-6 md:gap-10`}
              >
                <div className="shrink-0 h-14 w-14 rounded-full flex items-center justify-center border border-white/10 bg-white/5">
                  <Icon className="h-6 w-6 text-[#5A8EF6]" />
                </div>
                <div className={`text-center md:text-left ${reversed ? "md:text-right" : ""}`}>
                  <h3 className="orbitron text-gray-100 font-bold text-lg mb-1">{c.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">{c.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 flex flex-col items-center gap-6 px-6 py-28 text-center overflow-hidden">
        <Orb side="left" top="30%" offset={210} delay={8} />
        <Reveal className="relative z-10 flex flex-col items-center gap-6">
          <h2 className="w-[90%] md:w-[55%] mx-auto text-[22px] md:text-[36px] font-[inter] font-bold leading-tight bg-gradient-to-r gradient-animate from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] bg-clip-text text-transparent">
            Welcome to the Lab.
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed w-[90%] md:w-[50%] mx-auto">
            We are builders. Researchers. Engineers. We operate at the edge of known science.
          </p>
          <div className="flex flex-wrap justify-center gap-6 orbitron">
            <Magnetic>
              <Link
                to="/contact"
                className="inline-block px-8 py-3 rounded-full font-bold text-gray-900 bg-gradient-to-r gradient-animate from-[#49D9E8] via-[#5A8EF6] to-[#5A8EF6] shadow-[0_0_35px_rgba(90,142,246,0.5)]"
              >
                RESEARCH WITH US
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-white bg-white/5 backdrop-blur-xl border border-[#D06AE8]/50 shadow-[0_0_30px_rgba(208,106,232,0.4)]"
              >
                SEE OUR PROJECTS <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </section>

      <Particles />
    </main>
  );
}
