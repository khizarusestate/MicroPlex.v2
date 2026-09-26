import LegalPage from "./LegalPage";

const sections = [
  {
    heading: "What We Collect",
    body: "When you submit our contact form, we collect your name, email address, and the message you send. We don't ask for anything beyond what's needed to reply to you.",
  },
  {
    heading: "How We Use It",
    body: "Your information is used solely to respond to your inquiry. We don't sell, rent, or share it with third parties for marketing purposes.",
  },
  {
    heading: "Analytics",
    body: "We use privacy-friendly analytics to understand how visitors use the site (pages viewed, general location, device type). This data is aggregated and isn't used to identify you personally.",
  },
  {
    heading: "Cookies & Local Storage",
    body: "We use minimal local browser storage for things like remembering a scroll position or a viewer preference. We don't use tracking cookies for advertising.",
  },
  {
    heading: "Third-Party Services",
    body: "Our contact form is processed through a standard email delivery service to notify us of new messages. That service only sees what you submit in the form.",
  },
  {
    heading: "Your Rights",
    body: "You can request that we delete any information you've submitted to us at any time by emailing us directly.",
  },
  {
    heading: "Contact",
    body: "Questions about this policy? Reach us at abdulhadi6252671@gmail.com.",
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      seoDescription="How MicroPlex collects, uses, and protects information submitted through this site."
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
