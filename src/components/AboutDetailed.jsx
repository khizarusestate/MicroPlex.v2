import { Link } from "react-router-dom";
import { ArrowUpRight, Orbit, Rocket, Cpu, Zap, Shield, Bot } from "lucide-react";
import Particles from "./Particles";
import Reveal from "./Reveal";
import Orb from "./Orb";
import Magnetic from "./Magnetic";

const research = [
  {
    icon: Orbit,
    title: "SPACE & GALAXY SYSTEMS",
    desc: "Deep-space research, orbital mechanics, and autonomous space navigation architecture for interstellar exploration.",
  },
  {
    icon: Bot,
    title: "ROBOTICS & AUTONOMOUS SYSTEMS",
    desc: "From search robots for extreme environments to intelligent AI-powered robotic machines built for Earth and beyond.",
  },
  {
    icon: Cpu,
    title: "AI & SOFTWARE DEVELOPMENT",
    desc: "Proprietary AI products, machine learning frameworks, and mission-critical software development for autonomous operations.",
  },
  {
    icon: Shield,
    title: "SEMICONDUCTOR & SENSOR LAB",
    desc: "In-house design and R&D of next-generation semiconductors, high-precision sensors, and low-power chipsets.",
  },
  {
    icon: Zap,
    title: "MAGNETIC ELECTRICITY",
    desc: "Our most ambitious discovery: a new form of energy harnessing magnetic fields to generate clean, sustainable electricity.",
  },
];

export default function About() {
  return (
    <main id="about" className="w-full bg-black relative overflow-hidden">
      <Orb side="right" top="8%" offset={210} />
      <Particles />

      <section className="relative z-10 min-h-[70vh] flex flex-col justify-center items-center gap-6 px-6 text-center pt-28 pb-16">
        <Reveal>
          <span className="orbitron text-[11px] md:text-xs tracking-[0.35em] uppercase text-[#5A8EF6]">
            About Us
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="w-[90%] md:w-[70%] mx-auto text-[26px] md:text-[48px] font-[inter] font-bold leading-tight bg-gradient-to-r gradient-animate from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] bg-clip-text text-transparent">
            WE DON'T FOLLOW THE FUTURE. WE BUILD IT.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="w-[90%] md:w-[60%] mx-auto text-gray-400 text-sm md:text-base leading-relaxed">
            Microplex AI is a private Research & Development Lab dedicated to solving humanity's most complex
            challenges at the intersection of Space, Intelligence, and Energy.
          </p>
        </Reveal>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <Reveal className="flex flex-col gap-5">
          <h2 className="orbitron text-xl md:text-3xl font-bold text-gray-100">
            What started as a vision to explore the galaxy has evolved into a multi-domain R&D powerhouse.
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            We execute large-scale, classified and open-source projects that redefine what's possible — pushing
            breakthrough work across space systems, robotics, intelligent software, semiconductor research, and
            next-generation energy.
          </p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            We are builders. Researchers. Engineers. We operate at the edge of known science.
          </p>
          <Magnetic>
            <Link
              to="/about"
              className="w-fit orbitron mt-2 flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-gray-900 bg-gradient-to-r gradient-animate from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] shadow-[0_0_35px_rgba(90,142,246,0.5)]"
            >
              READ OUR STORY <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Magnetic>
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col gap-5">
          <div className="border-y border-white/10 divide-y divide-white/10">
            {research.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4 py-4 items-start">
                  <div className="mt-1 h-10 w-10 rounded-full flex items-center justify-center border border-[#5A8EF6]/40 bg-white/5">
                    <Icon className="h-4 w-4 text-[#5A8EF6]" />
                  </div>
                  <div>
                    <p className="orbitron text-sm text-gray-100 mb-1">{item.title}</p>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      <section className="relative z-10 flex flex-col items-center gap-6 px-6 py-24 text-center">
        <Reveal className="flex flex-col items-center gap-6">
          <h2 className="w-[90%] md:w-[55%] mx-auto text-[22px] md:text-[34px] font-[inter] font-bold leading-tight bg-gradient-to-r gradient-animate from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] bg-clip-text text-transparent">
            Welcome to the Lab.
          </h2>
          <div className="flex flex-wrap justify-center gap-6 orbitron">
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
