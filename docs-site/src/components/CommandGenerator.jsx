"use client";

import { useState } from "react";

export default function CommandGenerator() {
  const [serverName, setServerName] = useState("Saruman");
  const [userName, setUserName] = useState("deploy");
  const [host, setHost] = useState("65.67.51.189");
  const [port, setPort] = useState("22");
  const [remotePath, setRemotePath] = useState("/");
  const [copiedKey, setCopiedKey] = useState(null);

  const cleanServer = serverName.trim() || "my-server";
  const cleanUser = userName.trim() || "user";
  const cleanHost = host.trim() || "example.com";
  const cleanPort = port.trim() || "22";
  const cleanPath = remotePath.trim() || "/";

  const nuCommand = `Nu ${cleanServer} ${cleanUser} ${cleanHost} ${cleanPort} ${cleanPath}`;
  const sshShortcut = cleanServer;
  const mountShortcut = `Mount${cleanServer}`;
  const unmountShortcut = `Unmount${cleanServer}`;

  const copyToClipboard = (text, key) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  return (
    <div className="generator-card">
      <div className="generator-header">
        <h3>⚡ Interactive Command &amp; Script Generator</h3>
        <p>Configure your remote server to generate your custom Nu command and helper scripts.</p>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="gen-server">Server Alias (Shortcut Name)</label>
          <input
            id="gen-server"
            type="text"
            value={serverName}
            onChange={(e) => setServerName(e.target.value)}
            placeholder="e.g. Saruman or prod-api"
          />
        </div>

        <div className="form-group">
          <label htmlFor="gen-user">SSH Username</label>
          <input
            id="gen-user"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="e.g. root or ubuntu"
          />
        </div>

        <div className="form-group">
          <label htmlFor="gen-host">Host / IP Address</label>
          <input
            id="gen-host"
            type="text"
            value={host}
            onChange={(e) => setHost(e.target.value)}
            placeholder="e.g. 192.168.1.100 or ssh.example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="gen-port">SSH Port</label>
          <input
            id="gen-port"
            type="text"
            value={port}
            onChange={(e) => setPort(e.target.value)}
            placeholder="22"
          />
        </div>

        <div className="form-group" style={{ gridColumn: "1 / -1" }}>
          <label htmlFor="gen-path">Remote Directory Path to Mount</label>
          <input
            id="gen-path"
            type="text"
            value={remotePath}
            onChange={(e) => setRemotePath(e.target.value)}
            placeholder="/"
          />
        </div>
      </div>

      <div className="preview-section">
        <div className="preview-block">
          <div className="preview-label">
            <span>1. Run this Nu command to create your shortcuts:</span>
            <button
              type="button"
              className="copy-btn"
              onClick={() => copyToClipboard(nuCommand, "nu")}
            >
              {copiedKey === "nu" ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <pre><code>{nuCommand}</code></pre>
        </div>

        <div className="preview-columns">
          <div className="preview-block">
            <div className="preview-label">
              <span>SSH Connection:</span>
              <button
                type="button"
                className="copy-btn"
                onClick={() => copyToClipboard(sshShortcut, "ssh")}
              >
                {copiedKey === "ssh" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre><code>{sshShortcut}</code></pre>
          </div>

          <div className="preview-block">
            <div className="preview-label">
              <span>Mount SSHFS:</span>
              <button
                type="button"
                className="copy-btn"
                onClick={() => copyToClipboard(mountShortcut, "mount")}
              >
                {copiedKey === "mount" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre><code>{mountShortcut}</code></pre>
          </div>

          <div className="preview-block">
            <div className="preview-label">
              <span>Unmount:</span>
              <button
                type="button"
                className="copy-btn"
                onClick={() => copyToClipboard(unmountShortcut, "unmount")}
              >
                {copiedKey === "unmount" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre><code>{unmountShortcut}</code></pre>
          </div>
        </div>
      </div>
    </div>
  );
}
