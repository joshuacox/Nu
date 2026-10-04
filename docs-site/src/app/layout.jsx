import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Nu - Lightweight Remote Server Connection & Mount Manager",
  description: "Documentation and guide for Nu, a lightweight POSIX-compatible tool for instant SSH shortcuts, SSHFS mounting, and remote command chaining.",
  keywords: ["Nu", "SSH", "SSHFS", "server management", "devops", "bash", "linux", "sysadmin"],
  openGraph: {
    title: "Nu - Lightweight Remote Server Connection & Mount Manager",
    description: "Simplify frequent remote server interactions with custom SSH shortcuts, SSHFS mounting, and remote pipes.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const adsenseClientId = "ca-pub-8973108060277483";

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
      </head>
      <body>
        <header>
          <div className="container header-content">
            <div className="logo">
              <span>🚀 Nu</span>
              <span className="badge">v1.0</span>
            </div>
            <nav>
              <a
                href="https://github.com/joshuacox/Nu"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}
              >
                GitHub Repository
              </a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer>
          <div className="container">
            <p>
              Nu is open source software released under the GPL / Open Source license.
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              Documentation &amp; Project Site • Prepared for Google AdSense
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
