import LegalPage from "./LegalPage";

const sections = [
  {
    heading: "Using This Site",
    body: "This website is provided to share information about MicroPlex, our services, and our products. You're welcome to browse and contact us freely; please don't attempt to disrupt, scrape, or misuse the site or its contact form.",
  },
  {
    heading: "Intellectual Property",
    body: "All content on this site — text, design, branding, and code — belongs to MicroPlex unless otherwise noted. Please don't reproduce it without permission.",
  },
  {
    heading: "Our Products",
    body: "Products we build and operate ourselves, such as FixItNow, are governed by their own separate terms, available on their respective platforms.",
  },
  {
    heading: "Client Work",
    body: "Any project we take on for a client is governed by a separate, individually agreed contract — not by these general site terms.",
  },
  {
    heading: "No Warranty",
    body: "This site and its content are provided as-is. While we keep information accurate and up to date, we make no guarantee it's free of errors at every moment.",
  },
  {
    heading: "Changes",
    body: "We may update these terms as the site or our services evolve. Continued use of the site after changes means you accept the updated terms.",
  },
  {
    heading: "Contact",
    body: "Questions about these terms? Reach us at abdulhadi6252671@gmail.com.",
  },
];

export default function TermsOfService() {
  return (
    <LegalPage
      title="Terms of Service"
      seoDescription="The terms governing use of the MicroPlex website."
      updated="September 2026"
    >
      {sections.map((s) => (
        <div key={s.heading}>
          <h2 className="orbitron text-gray-100 font-bold text-base md:text-lg mb-2">
            {s.heading}
          </h2>
          <p>{s.body}</p>
        </div>
      ))}
    </LegalPage>
  );
}
