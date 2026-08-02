import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Particles from "./Particles";
import Reveal from "./Reveal";
import Orb from "./Orb";
import Seo from "./Seo";
import Magnetic from "./Magnetic";
import SplitText from "./SplitText";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center gap-6 bg-black relative overflow-hidden px-6 text-center pt-32 pb-16">
      <Seo
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
      />
      <Orb side="left" top="25%" offset={210} />
      <Orb side="right" top="65%" offset={210} delay={4} />
      <Particles />

      <Reveal>
        <p className="orbitron text-[64px] md:text-[110px] font-bold leading-none bg-gradient-to-r gradient-animate from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] bg-clip-text text-transparent">
          404
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="text-gray-100 text-xl md:text-2xl font-bold orbitron">
          <SplitText text="This page took a wrong turn." />
        </h1>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="text-gray-400 text-sm md:text-base max-w-md">
          The page you're looking for doesn't exist, moved, or never did.
          Let's get you back on track.
        </p>
      </Reveal>
      <Reveal delay={0.3}>
        <Magnetic>
          <Link
            to="/"
            className="inline-flex items-center gap-2 orbitron px-8 py-3 rounded-full font-bold text-gray-900 bg-gradient-to-r gradient-animate from-[#49D9E8] via-[#5A8EF6] to-[#5A8EF6] shadow-[0_0_35px_rgba(90,142,246,0.5)] hover:shadow-[0_0_60px_rgba(90,142,246,0.8)] hover:scale-105 transition-all duration-300 border border-white/20"
          >
            <ArrowLeft className="h-4 w-4" /> BACK TO HOME
          </Link>
        </Magnetic>
      </Reveal>
    </main>
  );
}
