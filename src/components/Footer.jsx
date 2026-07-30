import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "./BrandIcons";

const links = {
  Company: [
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Products", to: "/products" },
    { label: "Contact", to: "/contact" },
  ],
  Explore: [
    { label: "Home", to: "/" },
    { label: "Coming Soon", to: null },
    { label: "Careers", to: null },
    { label: "Blog", to: null },
  ],
};

const socials = [
  { icon: GithubIcon, href: "https://github.com/khizarusestate" },
  { icon: LinkedinIcon, href: "#" },
  { icon: XIcon, href: "#" },
  { icon: Mail, href: "mailto:abdulhadi6252671@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-black overflow-hidden">
      {/* thin gradient line instead of a hard border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#5A8EF6]/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        {/* brand */}
        <div className="flex flex-col gap-4">
          <h3 className="orbitron text-xl font-bold bg-gradient-to-r from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] bg-clip-text text-transparent">
            YOUR COMPANY
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Building innovative digital solutions for a smarter tomorrow.
          </p>
          <div className="flex items-center gap-4 mt-2">
            {socials.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="h-9 w-9 rounded-full flex items-center justify-center border border-white/10 text-gray-400 hover:text-[#5A8EF6] hover:border-[#5A8EF6]/50 hover:shadow-[0_0_20px_rgba(90,142,246,0.3)] transition-all duration-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* link columns */}
        {Object.entries(links).map(([heading, items]) => (
          <div key={heading} className="flex flex-col gap-4">
            <p className="orbitron text-xs tracking-[0.25em] uppercase text-gray-500">
              {heading}
            </p>
            <ul className="flex flex-col gap-3">
              {items.map((item) => (
                <li key={item.label}>
                  {item.to ? (
                    <Link
                      to={item.to}
                      className="text-gray-400 text-sm hover:text-[#49D9E8] transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-gray-600 text-sm cursor-default">
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 text-xs hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 text-xs hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
