import Script from "next/script";
import Link from "next/link";
import CookieBanner from "../components/CookieBanner";
import "./globals.css";

export const metadata = {
  title: "Nu - Lightweight Remote Server Connection & Mount Manager",
  description: "Documentation, interactive command generator, and guide for Nu, a lightweight POSIX-compatible tool for instant SSH shortcuts, SSHFS mounting, unmounting, and remote command chaining.",
  keywords: ["Nu", "SSH", "SSHFS", "server management", "devops", "bash", "linux", "sysadmin", "unmount", "fusermount"],
  openGraph: {
    title: "Nu - Lightweight Remote Server Connection & Mount Manager",
    description: "Simplify frequent remote server interactions with custom SSH shortcuts, SSHFS mounting, clean unmounting, and remote pipelines.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const adsenseClientId = "ca-pub-8973108060277483";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Nu",
    "operatingSystem": "Linux, macOS, POSIX",
    "applicationCategory": "DeveloperApplication",
    "description": "Lightweight POSIX bash tool creating instant shortcuts for SSH connection, SSHFS mounting, unmounting, and command chaining.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "author": {
      "@type": "Person",
      "name": "Josh Cox",
    },
  };

  return (
    <html lang="en">
      <head>
        {/* Google AdSense Script */}
        <Script
          id="google-adsense"
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Software Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <header>
          <div className="container header-content">
            <Link href="/" className="logo">
              <span>🚀 Nu</span>
              <span className="badge">v1.1</span>
            </Link>
            <nav style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <Link href="/#generator" className="nav-link">
                Generator
              </Link>
              <Link href="/#documentation" className="nav-link">
                Docs
              </Link>
              <a
                href="https://github.com/joshuacox/Nu"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: "0.4rem 0.85rem", fontSize: "0.85rem" }}
              >
                GitHub
              </a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer>
          <div className="container">
            <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginBottom: "1rem" }}>
              <Link href="/privacy" className="footer-link">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="footer-link">
                Terms of Service
              </Link>
              <span>•</span>
              <a href="/ads.txt" target="_blank" rel="noopener noreferrer" className="footer-link">
                ads.txt
              </a>
            </div>
            <p>
              Nu is open source software released under the GPL / Open Source license.
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              Official Documentation &amp; Generator • Configured for Google AdSense
            </p>
          </div>
        </footer>

        <CookieBanner />
      </body>
    </html>
  );
}
