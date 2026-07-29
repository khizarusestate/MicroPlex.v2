import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send, ArrowLeft } from "lucide-react";
import Particles from "./Particles";
import Reveal from "./Reveal";

const info = [
  { icon: Mail, label: "Email", value: "hello@yourcompany.com" },
  { icon: Phone, label: "Phone", value: "+92 300 0000000" },
  { icon: MapPin, label: "Based in", value: "Karachi, Pakistan" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // wire this up to your backend / email service
    setSent(true);
  };

  return (
    <main id="contact" className="w-full bg-black relative overflow-hidden">
      <Particles />

      {/* ---------- HERO ---------- */}
      <section className="relative z-10 flex flex-col justify-center items-center gap-6 px-6 text-center pt-32 pb-16">
        <Reveal>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 text-xs orbitron tracking-wide hover:text-[#49D9E8] transition-colors duration-300 mb-2"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Home / Contact
          </Link>
        </Reveal>
        <Reveal>
          <span className="orbitron text-[11px] md:text-xs tracking-[0.35em] uppercase text-[#5A8EF6]">
            Get In Touch
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="w-[90%] md:w-[60%] mx-auto text-[26px] md:text-[48px] font-[inter] font-bold leading-tight bg-gradient-to-r from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] bg-clip-text text-transparent">
            Let's Build Something Worth Shipping.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="w-[90%] md:w-[45%] mx-auto text-gray-400 text-sm md:text-base leading-relaxed">
            Tell us what you're working on — we typically reply within one
            business day.
          </p>
        </Reveal>
      </section>

      {/* ---------- CONTENT ---------- */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-14 items-start">
        {/* left — info as divided rows, not boxed */}
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
            {info.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-4 py-5">
                  <div className="shrink-0 h-11 w-11 rounded-full flex items-center justify-center border border-[#5A8EF6]/40 shadow-[0_0_20px_rgba(90,142,246,0.25)]">
                    <Icon className="h-4 w-4 text-[#5A8EF6]" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">{item.label}</p>
                    <p className="text-gray-100 font-semibold text-sm md:text-base">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Prefer async? Email works just as well — we read every message
            ourselves, no support ticket queue in between.
          </p>
        </Reveal>

        {/* right — the form is the one place a contained panel earns its keep */}
        <Reveal
          delay={0.15}
          className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(90,142,246,0.12)]"
        >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 p-8"
        >
          <div className="flex flex-col gap-2">
            <label className="text-gray-400 text-xs orbitron tracking-wide">
              NAME
            </label>
            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-gray-200 text-sm outline-none focus:border-[#5A8EF6]/60 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-400 text-xs orbitron tracking-wide">
              EMAIL
            </label>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-gray-200 text-sm outline-none focus:border-[#5A8EF6]/60 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-400 text-xs orbitron tracking-wide">
              MESSAGE
            </label>
            <textarea
              required
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What are you looking to build?"
              className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-gray-200 text-sm outline-none focus:border-[#5A8EF6]/60 transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="orbitron mt-2 flex items-center justify-center gap-2 px-8 py-3 rounded-full font-bold text-sm text-gray-900 bg-gradient-to-r from-[#49D9E8] via-[#5A8EF6] to-[#5A8EF6] shadow-[0_0_35px_rgba(90,142,246,0.5)] hover:shadow-[0_0_60px_rgba(90,142,246,0.8)] hover:scale-105 transition-all duration-300 border border-white/20"
          >
            {sent ? "Message Sent" : "Send Message"}
            {!sent && <Send className="h-4 w-4" />}
          </button>
          {sent && (
            <p className="text-[#49D9E8] text-xs text-center">
              Thanks — we'll get back to you shortly.
            </p>
          )}
        </form>
        </Reveal>
      </section>
    </main>
  );
}
