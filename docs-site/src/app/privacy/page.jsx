import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Nu Documentation",
  description: "Privacy Policy for the Nu Documentation website, detailing our AdSense, cookies, and data practices.",
};

export default function PrivacyPage() {
  return (
    <div className="container policy-container">
      <div style={{ marginBottom: "1.5rem" }}>
        <Link href="/" className="back-link">
          ← Back to Documentation
        </Link>
      </div>

      <h1 className="section-title">Privacy Policy</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
        Last updated: October 4, 2026
      </p>

      <section className="policy-section">
        <h2>1. Overview</h2>
        <p>
          This Privacy Policy governs the manner in which the Nu Project documentation site
          collects, uses, maintains, and discloses information collected from users.
          We respect your privacy and are committed to protecting it through compliance with this policy.
        </p>
      </section>

      <section className="policy-section">
        <h2>2. Google AdSense &amp; Third-Party Cookies</h2>
        <p>
          We use Google AdSense to serve advertisements on this website. Google, as a third-party vendor,
          uses cookies (including the DoubleClick cookie) to serve ads to users based on their visits
          to this and other websites across the Internet.
        </p>
        <p>
          You may opt out of personalized advertising by visiting{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>{" "}
          or by visiting{" "}
          <a
            href="https://www.aboutads.info/choices/"
            target="_blank"
            rel="noopener noreferrer"
          >
            aboutads.info
          </a>.
        </p>
      </section>

      <section className="policy-section">
        <h2>3. Publisher Information &amp; ads.txt</h2>
        <p>
          In accordance with Google AdSense programmatic requirements, our authorized publisher ID
          is declared in our publicly accessible{" "}
          <a href="/ads.txt" target="_blank" rel="noopener noreferrer">
            <code>/ads.txt</code>
          </a>{" "}
          file:
        </p>
        <pre>
          <code>google.com, pub-8973108060277483, DIRECT, f08c47fec0942fa0</code>
        </pre>
      </section>

      <section className="policy-section">
        <h2>4. Information We Do Not Collect</h2>
        <p>
          We do not require account registration, do not collect personal contact information
          (names, phone numbers, email addresses), and do not host databases storing user server configurations.
          All command generation tools execute strictly on the client side in your web browser.
        </p>
      </section>

      <section className="policy-section">
        <h2>5. Web Browser Cookies</h2>
        <p>
          Our site may use standard &ldquo;cookies&rdquo; to enhance user experience (e.g., remembering cookie
          banner preferences) and for analytics. Users may set their web browser to refuse cookies,
          or to alert them when cookies are being sent.
        </p>
      </section>

      <section className="policy-section">
        <h2>6. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or practices of this site, please submit an issue
          on our official{" "}
          <a
            href="https://github.com/joshuacox/Nu"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>.
        </p>
      </section>
    </div>
  );
}
