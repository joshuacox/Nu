"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("nu_cookie_consent");
      if (!consent) {
        setVisible(true);
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("nu_cookie_consent", "accepted");
    } catch {
      // Ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside aria-label="Cookie consent banner" className="cookie-banner">
      <div className="container cookie-content">
        <p>
          We use cookies and Google AdSense to personalize content, ads, and analyze traffic.
          Learn more in our <Link href="/privacy">Privacy Policy</Link>.
        </p>
        <div className="cookie-actions">
          <button type="button" onClick={handleAccept} className="btn btn-primary" style={{ padding: "0.4rem 1rem", fontSize: "0.85rem" }}>
            Accept &amp; Continue
          </button>
        </div>
      </div>
    </aside>
  );
}
