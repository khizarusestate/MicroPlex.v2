import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/#home" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/#services" },
  { label: "Products", to: "/#services" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="w-full h-[76px] flex justify-center items-center fixed top-0 z-50 orbitron">
      <div className="w-[92%] sm:w-[90%] max-w-[1400px] flex justify-between items-center px-5 sm:px-8 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(90,142,246,0.15)]">

        <Link to="/">
          <img
            src="/Images/Logo.png"
            className="h-[42px] sm:h-[55px] hover:scale-105 transition-all duration-300"
            alt="MicroPlex logo"
          />
        </Link>

        <nav className="hidden md:block text-gray-200">
          <ul className="flex items-center gap-[45px]">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="cursor-pointer hover:text-[#49D9E8] transition-all duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          to="/#contact"
          className="hidden md:inline-block px-7 py-2.5 rounded-full font-bold text-gray-900 bg-gradient-to-r from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] shadow-[0_0_25px_rgba(90,142,246,0.5)] hover:scale-105 hover:shadow-[0_0_45px_rgba(90,142,246,0.8)] transition-all duration-300"
        >
          CONTACT US
        </Link>

        {/* mobile hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden h-10 w-10 flex items-center justify-center rounded-full border border-white/10 text-gray-200 hover:text-[#49D9E8] hover:border-[#49D9E8]/50 transition-all duration-300"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* mobile menu panel */}
      <div
        className={`md:hidden fixed top-[84px] left-0 w-full px-5 transition-all duration-300 ease-out ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="w-full rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(90,142,246,0.2)] p-6 flex flex-col gap-5">
          <ul className="flex flex-col gap-5 text-gray-200 text-center">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer hover:text-[#49D9E8] transition-all duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/#contact"
            onClick={() => setOpen(false)}
            className="text-center px-7 py-2.5 rounded-full font-bold text-gray-900 bg-gradient-to-r from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] shadow-[0_0_25px_rgba(90,142,246,0.5)] transition-all duration-300"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </header>
  );
}
