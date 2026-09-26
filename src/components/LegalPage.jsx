import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Particles from "./Particles";
import Reveal from "./Reveal";
import Orb from "./Orb";
import Seo from "./Seo";

export default function LegalPage({ title, seoDescription, updated, children }) {
  return (
    <main className="w-full bg-black relative overflow-hidden">
      <Seo title={title} description={seoDescription} />
      <Orb side="left" top="15%" offset={210} />
      <Orb side="right" top="60%" offset={210} delay={4} />
      <Particles />

      <section className="relative z-10 max-w-3xl mx-auto px-6 pt-32 pb-24">
        <Reveal>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 text-xs orbitron tracking-wide hover:text-[#49D9E8] transition-colors duration-300 mb-6"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Home
          </Link>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="orbitron text-2xl md:text-4xl font-bold bg-gradient-to-r gradient-animate from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] bg-clip-text text-transparent mb-2">
            {title}
          </h1>
          <p className="text-gray-500 text-xs mb-10">Last updated: {updated}</p>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-8 text-gray-400 text-sm md:text-base leading-relaxed">
          {children}
        </Reveal>
      </section>
    </main>
  );
}
