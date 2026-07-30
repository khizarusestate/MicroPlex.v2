import { Star } from "lucide-react";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const testimonials = [
  {
    quote:
      "They didn't just build what we asked for — they pushed back on the parts that wouldn't have worked and saved us months of rework.",
    name: "Homeowner Services Client",
    role: "Founder, home services startup",
    color: "#49D9E8",
  },
  {
    quote:
      "Fastest turnaround we've had with any dev team. Demos every week, no surprises at delivery.",
    name: "Retail Client",
    role: "Operations Lead, e-commerce brand",
    color: "#5A8EF6",
  },
  {
    quote:
      "Direct access to the actual engineers made all the difference — no messages lost in translation through account managers.",
    name: "SaaS Client",
    role: "Product Manager, B2B platform",
    color: "#D06AE8",
  },
];

export default function Testimonials() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
      <Reveal className="text-center mb-14">
        <span className="orbitron text-xs tracking-[0.3em] uppercase text-[#5A8EF6]">
          Client Feedback
        </span>
        <h2 className="orbitron text-2xl md:text-4xl font-bold text-gray-100 mt-3">
          Don't Just Take Our Word For It
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <TiltCard glow={t.color} className="p-7 h-full flex flex-col gap-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-4 w-4 fill-current"
                    style={{ color: t.color }}
                  />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                "{t.quote}"
              </p>
              <div className="mt-auto pt-2 border-t border-white/10">
                <p className="text-gray-100 font-semibold text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs">{t.role}</p>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
