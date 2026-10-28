import { Orbit, Bot, Cpu, Shield, Zap } from "lucide-react";

// Single source of truth for the Microplex AI copy — used by both the
// homepage About section and the /about page so the text never drifts.

export const HEADLINE = "WE DON'T FOLLOW THE FUTURE. WE BUILD IT.";

export const ABOUT_INTRO =
  "Microplex AI is a private Research & Development Lab dedicated to solving humanity's most complex challenges at the intersection of Space, Intelligence, and Energy.";

export const ABOUT_STORY =
  "What started as a vision to explore the galaxy has evolved into a multi-domain R&D powerhouse executing large-scale, classified and open-source projects that redefine what's possible.";

export const CLOSING_LINE =
  "We are builders. Researchers. Engineers. We operate at the edge of known science.";

export const VERTICALS = [
  {
    icon: Orbit,
    color: "#49D9E8",
    title: "SPACE & GALAXY SYSTEMS",
    desc: "Deep-space research, orbital mechanics, and autonomous space navigation architecture for interstellar exploration.",
  },
  {
    icon: Bot,
    color: "#5A8EF6",
    title: "ROBOTICS & AUTONOMOUS SYSTEMS",
    desc: "From searching robots for extreme environments to intelligent AI-powered robotic machines built for Earth and beyond.",
  },
  {
    icon: Cpu,
    color: "#D06AE8",
    title: "AI & SOFTWARE DEVELOPMENT",
    desc: "Proprietary AI products, machine learning frameworks, and mission-critical software development for autonomous operations.",
  },
  {
    icon: Shield,
    color: "#49D9E8",
    title: "SEMICONDUCTOR & SENSOR LAB",
    desc: "In-house design and R&D of next-generation semiconductors, high-precision sensors, and low-power chipsets.",
  },
  {
    icon: Zap,
    color: "#5A8EF6",
    title: "MAGNETIC ELECTRICITY",
    badge: "BREAKTHROUGH PROJECT",
    desc: "Our most ambitious discovery. A new form of energy harnessing magnetic fields to generate clean, sustainable electricity. Research in progress.",
  },
];

export const CONTACT = {
  website: "www.microplexai.com",
  websiteUrl: "http://www.microplexai.com",
  email: "research@microplexai.com",
  location: "R&D Lab - Building The Next Generation",
};

export const SEO_DESCRIPTION =
  "Microplex AI is a private Research & Development Lab working at the intersection of Space, Intelligence, and Energy — space systems, robotics, AI, semiconductors, and magnetic electricity.";
