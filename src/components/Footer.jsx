import { Mail } from "lucide-react";

/* lucide-react has deprecated/removed brand logos (Github, Linkedin, Twitter/X),
   so these are kept as small local SVGs instead of a package import that can
   break on version bumps. */
const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.17.69-3.84-1.35-3.84-1.35-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.18-1.48 3.14-1.17 3.14-1.17.63 1.58.23 2.75.12 3.04.73.8 1.16 1.82 1.16 3.06 0 4.37-2.66 5.34-5.2 5.62.41.36.77 1.06.77 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55 4.51-1.51 7.77-5.76 7.77-10.78C23.02 5.24 18.27.5 12 .5Z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM.5 21.5h9V9h-9v12.5Zm14-12.5h-8v12.5h4.4v-6.35c0-1.5.28-2.95 2.14-2.95 1.83 0 1.86 1.71 1.86 3.04v6.26H23V15c0-3.98-.85-7.05-5.5-7.05-2.23 0-3.72 1.22-4.33 2.38h-.06V9Z" />
  </svg>
);

const XIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.9L4.4 22H1.3l8.1-9.3L1 2h7.1l4.9 6.3L18.9 2Zm-1.2 18.2h1.9L7.4 3.7H5.4l12.3 16.5Z" />
  </svg>
);

const links = {
  Company: ["About", "Services", "Products", "Contact"],
  Explore: ["Home", "Coming Soon", "Careers", "Blog"],
};

const socials = [
  { icon: GithubIcon, href: "#" },
  { icon: LinkedinIcon, href: "#" },
  { icon: XIcon, href: "#" },
  { icon: Mail, href: "#" },
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
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-[#49D9E8] transition-colors duration-300"
                  >
                    {item}
                  </a>
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
