import Link from "next/link";

export const metadata = {
  title: "Terms of Service - Nu Documentation",
  description: "Terms of Service and open-source usage disclaimers for Nu.",
};

export default function TermsPage() {
  return (
    <div className="container policy-container">
      <div style={{ marginBottom: "1.5rem" }}>
        <Link href="/" className="back-link">
          ← Back to Documentation
        </Link>
      </div>

      <h1 className="section-title">Terms of Service</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
        Last updated: October 4, 2026
      </p>

      <section className="policy-section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using this documentation site and using the Nu utility,
          you agree to be bound by these Terms of Service and all applicable laws and regulations.
        </p>
      </section>

      <section className="policy-section">
        <h2>2. Open Source License &amp; Software Use</h2>
        <p>
          Nu is open source software. You may view, fork, and contribute to the code under the terms
          of the license provided in the GitHub repository.
        </p>
      </section>

      <section className="policy-section">
        <h2>3. Disclaimer of Warranties</h2>
        <p>
          The software and documentation are provided &ldquo;as is&rdquo;, without warranty of any kind,
          express or implied, including but not limited to the warranties of merchantability,
          fitness for a particular purpose, and non-infringement. In no event shall the authors
          or copyright holders be liable for any claim, damages, or other liability.
        </p>
      </section>

      <section className="policy-section">
        <h2>4. User Responsibilities</h2>
        <p>
          You are solely responsible for ensuring your SSH credentials, server permissions,
          and network configurations are secure. Always practice security-in-depth and follow
          the principle of least privilege.
        </p>
      </section>
    </div>
  );
}
