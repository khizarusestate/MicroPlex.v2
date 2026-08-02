import { Link } from "react-router-dom";
import { Clock, Headphones, Code2 } from "lucide-react";
import Particles from "./Particles";
import Reveal from "./Reveal";
import Orb from "./Orb";
import Seo from "./Seo";
import Magnetic from "./Magnetic";
import SplitText from "./SplitText";

const features = [
  { icon: Clock, color: "#49D9E8", label: "24 / 7 Availability" },
  { icon: Headphones, color: "#5A8EF6", label: "Dedicated Support" },
  { icon: Code2, color: "#D06AE8", label: "Custom IT Solutions" },
];

export default function Home() {
  return (
    <main
      id="home"
      className="min-h-screen w-full flex flex-col justify-center items-center gap-10 md:gap-[40px] bg-black relative overflow-hidden pt-32 pb-16 px-4"
    >
      <Seo
        title="Home"
        description="MicroPlex builds web, mobile, and custom software for businesses in Pakistan and beyond — plus our own products, like FixItNow."
      />
      <h1 className="w-full sm:w-[85%] md:w-[70%] mx-auto text-[26px] sm:text-[32px] md:text-[40px] text-gray-200 text-center font-[inter] leading-tight bg-gradient-to-r gradient-animate from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] bg-clip-text text-transparent font-bold z-10">
        <SplitText text="Building Innovative Digital Solutions for a Smarter Tomorrow." />
      </h1>

      <Reveal delay={0.15} className="w-full sm:w-auto z-10">
        <article className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-[30px] orbitron w-full sm:w-auto">
          <Magnetic className="w-full sm:w-auto sm:inline-block">
            <Link
              to="/services"
              className="w-full sm:w-auto text-center px-8 py-3 rounded-full font-bold text-gray-900 bg-gradient-to-r gradient-animate from-[#49D9E8] via-[#5A8EF6] to-[#5A8EF6] shadow-[0_0_35px_rgba(90,142,246,0.5)] hover:shadow-[0_0_60px_rgba(90,142,246,0.8)] hover:scale-105 transition-all duration-300 border border-white/20 block"
            >
              EXPLORE OUR SERVICES
            </Link>
          </Magnetic>
          <Magnetic className="w-full sm:w-auto sm:inline-block">
            <Link
              to="/products"
              className="w-full sm:w-auto text-center px-8 py-3 rounded-full font-bold text-white bg-white/5 backdrop-blur-xl border border-[#D06AE8]/50 shadow-[0_0_30px_rgba(208,106,232,0.4)] hover:bg-[#D06AE8]/20 hover:shadow-[0_0_60px_rgba(208,106,232,0.8)] hover:scale-105 transition-all duration-300 block"
            >
              SEE OUR PRODUCTS
            </Link>
          </Magnetic>
        </article>
      </Reveal>

      <Reveal delay={0.3} className="z-10 mt-4 w-full">
        <article className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-[100px] orbitron">
          {features.map(({ icon: Icon, color, label }) => (
            <div
              key={label}
              className="flex justify-center items-center text-white gap-[10px] sm:gap-[12px] px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_25px_rgba(90,142,246,0.2)] hover:scale-105 transition-all duration-300"
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
    </main>
  );
}
