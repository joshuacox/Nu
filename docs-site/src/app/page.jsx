import CommandGenerator from "../components/CommandGenerator";

export default function HomePage() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Nu: Server Connection Manager</h1>
        <p>
          A lightweight, POSIX-compatible tool that simplifies frequent remote server interactions
          by creating executable shortcuts for SSH, SSHFS mounting, clean unmounting, and remote command pipelines.
        </p>
        <div className="cta-group">
          <a href="#generator" className="btn btn-primary">
            Launch Generator
          </a>
          <a href="#quickstart" className="btn btn-secondary">
            Quick Start
          </a>
          <a href="#documentation" className="btn btn-secondary">
            Documentation
          </a>
        </div>
      </section>

      {/* AdSense Unit Slot (Responsive Display Ad) */}
      <div className="adsense-container">
        <div className="adsense-label">Advertisement</div>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-8973108060277483"
          data-ad-slot="1234567890"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>

      {/* Interactive Command & Script Generator */}
      <section id="generator" className="section">
        <CommandGenerator />
      </section>

      {/* Key Features Grid */}
      <section className="section">
        <h2 className="section-title">🌟 Key Capabilities</h2>
        <div className="grid">
          <div className="card">
            <h3>⚡ Custom SSH Shortcuts</h3>
            <p>
              Instantly create executable commands in <code>~/bin/</code> using memorable names
              like <code>Saruman</code> with agent (<code>-A</code>) and X11 (<code>-X</code>) forwarding enabled.
            </p>
          </div>
          <div className="card">
            <h3>📂 Instant SSHFS Mounting</h3>
            <p>
              Generates a dedicated <code>Mount&lt;Server&gt;</code> script to mount remote filesystem roots
              locally into <code>~/mnt/&lt;Server&gt;</code> with zero manual configuration.
            </p>
          </div>
          <div className="card">
            <h3>🛑 Clean Unmounting Helper</h3>
            <p>
              Generates an <code>Unmount&lt;Server&gt;</code> script that safely detaches FUSE mountpoints
              using <code>fusermount3</code>, <code>fusermount</code>, or <code>umount</code>.
            </p>
          </div>
          <div className="card">
            <h3>🔄 Stream &amp; Command Chaining</h3>
            <p>
              Execute remote commands or stream data across SSH tunnels with piped tools like <code>tar</code>,
              <code>rsync</code>, and standard output redirects seamlessly.
            </p>
          </div>
          <div className="card">
            <h3>🎛️ Built-in Subcommands</h3>
            <p>
              Quickly test host connectivity or mount states directly via <code>&lt;Server&gt; ping</code>,
              <code>&lt;Server&gt; mount</code>, and <code>&lt;Server&gt; unmount</code>.
            </p>
          </div>
          <div className="card">
            <h3>🛡️ Defensive Scripting</h3>
            <p>
              Built-in guards prevent accidental overwrites of existing user scripts unless <code>--force</code> is passed.
            </p>
          </div>
        </div>
      </section>

      {/* Quickstart & Installation */}
      <section id="quickstart" className="section">
        <h2 className="section-title">🚀 One-Liner Quick Installation</h2>
        <p>You can bootstrap Nu directly into your environment using curl:</p>
        <pre>
          <code>curl -sL https://raw.githubusercontent.com/joshuacox/Nu/refs/heads/main/bootstrapNu.sh | bash</code>
        </pre>

        <h3 style={{ marginTop: "1.5rem", marginBottom: "0.75rem" }}>Building from Source (CMake)</h3>
        <p>Ensure CMake, make, and OpenSSH are installed, then run:</p>
        <pre>
          <code>{`# Clone the repository
git clone https://github.com/joshuacox/Nu.git
cd Nu

# Build and install system-wide via CMake
cmake .
make
sudo make install`}</code>
        </pre>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
          Make sure <code>~/bin</code> is added to your shell&apos;s <code>$PATH</code>:
        </p>
        <pre>
          <code>export PATH=&quot;$HOME/bin:$PATH&quot;</code>
        </pre>
      </section>

      {/* Usage & Workflow Documentation */}
      <section id="documentation" className="section">
        <h2 className="section-title">📖 Comprehensive Usage Guide</h2>

        <h3>1. Registering a Remote Server</h3>
        <p>
          Syntax: <code>Nu [-f|--force] SERVERNAME USERNAME IPADDRESS|HOSTNAME [PORT] [REMOTE_PATH]</code>
        </p>
        <pre>
          <code>Nu Saruman root 65.67.51.189 2222 /</code>
        </pre>
        <p>
          When executed, Nu automatically creates:
        </p>
        <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", color: "var(--text-muted)" }}>
          <li>A dedicated mount directory: <code>~/mnt/Saruman</code></li>
          <li>An SSH shortcut script: <code>~/bin/Saruman</code></li>
          <li>An SSHFS mount shortcut: <code>~/bin/MountSaruman</code></li>
          <li>A safe unmount shortcut: <code>~/bin/UnmountSaruman</code></li>
        </ul>

        <h3 style={{ marginTop: "2rem" }}>2. Connecting via SSH</h3>
        <p>Simply call the server alias directly from anywhere in your terminal:</p>
        <pre>
          <code>Saruman</code>
        </pre>

        <h3 style={{ marginTop: "2rem" }}>3. Mounting &amp; Unmounting the Remote Filesystem</h3>
        <p>Mount the remote directory to your local <code>~/mnt/Saruman</code> directory:</p>
        <pre>
          <code>MountSaruman
# or via subcommand:
Saruman mount</code>
        </pre>
        <p style={{ marginTop: "0.75rem" }}>When finished, unmount safely:</p>
        <pre>
          <code>UnmountSaruman
# or via subcommand:
Saruman unmount</code>
        </pre>

        <h3 style={{ marginTop: "2rem" }}>4. Advanced Remote Piping &amp; Workflows</h3>
        <p>Execute remote commands or stream archives directly over the network:</p>
        <pre>
          <code>{`# Execute a command remotely and save output locally
Saruman 'uname -a' > helloworld

# Compress and stream a local directory to extract remotely
tar zcf - helloworld | Saruman 'zxvf -'

# Stream and extract an archive from the remote server locally
Saruman 'tar jcf - helloworld' | tar zxvf -

# Ping remote host quickly
Saruman ping`}</code>
        </pre>
      </section>

      {/* Advanced Recipes & Guides */}
      <section className="section">
        <h2 className="section-title">💡 Practical Recipes &amp; Workflows</h2>
        <div className="grid">
          <div className="card">
            <h3>🗜️ Remote Database Backup Pipe</h3>
            <p style={{ marginBottom: "0.5rem" }}>Stream a database dump directly from remote to local without saving to remote disk:</p>
            <pre><code>Saruman &apos;mysqldump -u dbuser -p mydb | gzip -9&apos; &gt; backup.sql.gz</code></pre>
          </div>
          <div className="card">
            <h3>⚡ Fast File Syncing via Rsync</h3>
            <p style={{ marginBottom: "0.5rem" }}>Use your mount directory or run rsync directly over the configured port:</p>
            <pre><code>rsync -avz -e &apos;ssh -p 2222&apos; ./build/ root@65.67.51.189:/var/www/</code></pre>
          </div>
        </div>
      </section>

      {/* In-content AdSense Unit Slot */}
      <div className="adsense-container">
        <div className="adsense-label">Advertisement</div>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-8973108060277483"
          data-ad-slot="9876543210"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>

      {/* Monetization & Ads Verification */}
      <section className="section">
        <h2 className="section-title">🛡️ AdSense &amp; Publisher Verification</h2>
        <p>
          This website is configured for Google AdSense monetization. Publisher authorization is verified via
          the official <a href="/ads.txt" target="_blank" rel="noopener noreferrer"><code>ads.txt</code></a> file:
        </p>
        <pre>
          <code>google.com, pub-8973108060277483, DIRECT, f08c47fec0942fa0</code>
        </pre>
      </section>
    </div>
  );
}
