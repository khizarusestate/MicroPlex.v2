import { useRef, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { Send, ArrowLeft, ImagePlus, CheckCircle2 } from "lucide-react";
import Particles from "./Particles";
import Reveal from "./Reveal";
import Orb from "./Orb";
import Seo from "./Seo";
import Magnetic from "./Magnetic";
import SplitText from "./SplitText";

const MAX_IMAGE_BYTES = 3 * 1024 * 1024; // 3MB

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export default function ContactDetails() {
  const location = useLocation();
  const fileInputRef = useRef(null);

  const [form, setForm] = useState({ businessName: "", idea: "", company: "" });
  const [image, setImage] = useState(null); // { dataUrl, filename, mimeType }
  const [imagePreview, setImagePreview] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  // This page only makes sense right after the main contact form — if
  // someone lands here directly (no state carried over), send them back.
  if (!location.state?.fromContact) {
    return <Navigate to="/contact" replace />;
  }
  const { name, email } = location.state;

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setFieldErrors((f) => ({ ...f, image: "Please choose an image file." }));
      setImage(null);
      setImagePreview(null);
      return;
    }
    if (file.size > MAX_IMAGE_BYTES) {
      setFieldErrors((f) => ({ ...f, image: "Image must be under 3MB." }));
      setImage(null);
      setImagePreview(null);
      return;
    }

    const dataUrl = await readFileAsDataUrl(file);
    setImage({ dataUrl, filename: file.name, mimeType: file.type });
    setImagePreview(dataUrl);
    setFieldErrors((f) => ({ ...f, image: undefined }));
  };

  const validate = () => {
    const errors = {};
    if (!form.businessName.trim()) errors.businessName = "Business name is required.";
    if (!form.idea.trim()) errors.idea = "Tell us a bit about your idea.";
    if (!image) errors.image = "A product image is required.";
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact-details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, ...form, image }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong.");

      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <main id="contact-details" className="w-full bg-black relative overflow-hidden">
      <Seo
        title="Tell Us More"
        description="A few more details about your business and your idea."
        noIndex
      />
      <Orb side="left" top="15%" offset={210} />
      <Orb side="right" top="70%" offset={210} delay={4} />
      <Particles />

      {/* ---------- HERO ---------- */}
      <section className="relative z-10 flex flex-col justify-center items-center gap-6 px-6 text-center pt-32 pb-12">
        <Reveal>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-gray-500 text-xs orbitron tracking-wide hover:text-[#49D9E8] transition-colors duration-300 mb-2"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back
          </Link>
        </Reveal>
        <Reveal>
          <span className="orbitron text-[11px] md:text-xs tracking-[0.35em] uppercase text-[#5A8EF6]">
            One Last Step
          </span>
        </Reveal>
        <h1 className="w-[92%] md:w-[65%] mx-auto text-[26px] md:text-[44px] font-[inter] font-bold leading-tight bg-gradient-to-r gradient-animate from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] bg-clip-text text-transparent">
          <SplitText
            text={name ? `Thanks, ${name}. A Few More Details.` : "A Few More Details."}
            delay={0.1}
          />
        </h1>
        <Reveal delay={0.2}>
          <p className="w-[90%] md:w-[50%] mx-auto text-gray-400 text-sm md:text-base leading-relaxed">
            Tell us a bit about your business and your idea, and share a
            product image if you have one — it helps us put the right team
            on this from day one.
          </p>
        </Reveal>
      </section>

      {/* ---------- FORM ---------- */}
      <section className="relative z-10 max-w-xl mx-auto px-6 pb-24">
        <Reveal
          delay={0.15}
          className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(90,142,246,0.12)]"
        >
          {status === "sent" ? (
            <div className="flex flex-col items-center gap-4 text-center p-10">
              <CheckCircle2 className="h-12 w-12 text-[#49D9E8]" />
              <h2 className="orbitron text-lg font-bold text-gray-100">
                All Set — Thank You!
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                We've got everything we need. Our team will review your idea
                and get back to you shortly.
              </p>
              <Link
                to="/"
                className="mt-2 orbitron text-xs tracking-wide text-[#49D9E8] hover:text-[#5A8EF6] transition-colors duration-300"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 p-8">
              {/* honeypot */}
              <div
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}
              >
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-400 text-xs orbitron tracking-wide">
                  YOUR BUSINESS NAME
                </label>
                <input
                  required
                  name="businessName"
                  value={form.businessName}
                  onChange={handleChange}
                  placeholder="e.g. Acme Robotics"
                  className={`bg-black/40 border rounded-xl px-4 py-3 text-gray-200 text-sm outline-none transition-colors ${
                    fieldErrors.businessName
                      ? "border-red-400/60 focus:border-red-400/60"
                      : "border-white/10 focus:border-[#5A8EF6]/60"
                  }`}
                />
                {fieldErrors.businessName && (
                  <p className="text-red-400 text-xs">{fieldErrors.businessName}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-400 text-xs orbitron tracking-wide">
                  PRODUCT IMAGE
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className={`flex items-center gap-3 bg-black/40 border rounded-xl px-4 py-3 text-sm text-left transition-colors ${
                    fieldErrors.image
                      ? "border-red-400/60"
                      : "border-white/10 hover:border-[#5A8EF6]/60"
                  }`}
                >
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Selected product preview"
                      className="h-10 w-10 rounded-lg object-cover shrink-0 border border-white/10"
                    />
                  ) : (
                    <ImagePlus className="h-5 w-5 text-gray-500 shrink-0" />
                  )}
                  <span className={image ? "text-gray-200" : "text-gray-500"}>
                    {image ? image.filename : "Choose an image (max 3MB)"}
                  </span>
                </button>
                {fieldErrors.image && (
                  <p className="text-red-400 text-xs">{fieldErrors.image}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-400 text-xs orbitron tracking-wide">
                  YOUR IDEA
                </label>
                <textarea
                  required
                  rows={5}
                  name="idea"
                  value={form.idea}
                  onChange={handleChange}
                  placeholder="What are you trying to build?"
                  className={`bg-black/40 border rounded-xl px-4 py-3 text-gray-200 text-sm outline-none transition-colors resize-none ${
                    fieldErrors.idea
                      ? "border-red-400/60 focus:border-red-400/60"
                      : "border-white/10 focus:border-[#5A8EF6]/60"
                  }`}
                />
                {fieldErrors.idea && (
                  <p className="text-red-400 text-xs">{fieldErrors.idea}</p>
                )}
              </div>

              <Magnetic className="block w-full" strength={0.15}>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full orbitron mt-2 flex items-center justify-center gap-2 px-8 py-3 rounded-full font-bold text-sm text-gray-900 bg-gradient-to-r gradient-animate from-[#49D9E8] via-[#5A8EF6] to-[#5A8EF6] shadow-[0_0_35px_rgba(90,142,246,0.5)] hover:shadow-[0_0_60px_rgba(90,142,246,0.8)] hover:scale-105 transition-all duration-300 border border-white/20 disabled:opacity-60 disabled:hover:scale-100 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Submitting..." : "Submit"}
                  {status !== "sending" && <Send className="h-4 w-4" />}
                </button>
              </Magnetic>
              {status === "error" && (
                <p className="text-[#D06AE8] text-xs text-center">{errorMsg}</p>
              )}
            </form>
          )}
        </Reveal>
      </section>
    </main>
  );
}
