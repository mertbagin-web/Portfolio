import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mert Bagin - Portfolio</title>
        <meta name="description" content="Mert Bagin - Full Stack Developer Portfolio" />
      </Head>
      <div style={{ padding: "40px 60px", maxWidth: "900px" }}>
        <div style={{ marginBottom: "40px" }}>
          <p style={{ color: "#569cd6", fontSize: "14px", marginBottom: "4px" }}>// Welcome to my portfolio</p>
          <h1 style={{ fontSize: "48px", fontWeight: "700", color: "#cccccc", lineHeight: "1.2" }}>
            Mert <span style={{ color: "#007acc" }}>Bagin</span>
          </h1>
          <p style={{ color: "#9cdcfe", fontSize: "22px", marginTop: "8px" }}>
            &lt;Full Stack Developer /&gt;
          </p>
          <p style={{ color: "#808080", fontSize: "13px", marginTop: "16px", maxWidth: "600px", lineHeight: "1.6" }}>
            Passionate about building modern web applications. I craft clean, efficient, and scalable solutions using the latest technologies.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
          {/* Start section */}
          <div>
            <h2 style={{ color: "#cccccc", fontSize: "15px", marginBottom: "16px", fontWeight: "600" }}>Start</h2>
            <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <li>
                <Link href="/Skills" style={{ color: "#3794ff", fontSize: "13px", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>⚙️</span> View Skills
                </Link>
              </li>
              <li>
                <Link href="/Projects" style={{ color: "#3794ff", fontSize: "13px", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>📦</span> View Projects
                </Link>
              </li>
              <li>
                <Link href="/Experience" style={{ color: "#3794ff", fontSize: "13px", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>💼</span> View Experience
                </Link>
              </li>
              <li>
                <Link href="/Contact" style={{ color: "#3794ff", fontSize: "13px", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>✉️</span> Contact Me
                </Link>
              </li>
              <li>
                <Link href="/Hobbies" style={{ color: "#3794ff", fontSize: "13px", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>🎮</span> My Hobbies
                </Link>
              </li>
            </ul>
          </div>

          {/* Recent section */}
          <div>
            <h2 style={{ color: "#cccccc", fontSize: "15px", marginBottom: "16px", fontWeight: "600" }}>Recent</h2>
            <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <li>
                <Link href="/Projects" style={{ color: "#3794ff", fontSize: "13px", textDecoration: "none" }}>
                  projects.ts
                </Link>
                <span style={{ color: "#808080", fontSize: "11px", marginLeft: "8px" }}>~/portfolio/pages</span>
              </li>
              <li>
                <Link href="/Skills" style={{ color: "#3794ff", fontSize: "13px", textDecoration: "none" }}>
                  skills.js
                </Link>
                <span style={{ color: "#808080", fontSize: "11px", marginLeft: "8px" }}>~/portfolio/pages</span>
              </li>
              <li>
                <Link href="/Experience" style={{ color: "#3794ff", fontSize: "13px", textDecoration: "none" }}>
                  experience.css
                </Link>
                <span style={{ color: "#808080", fontSize: "11px", marginLeft: "8px" }}>~/portfolio/pages</span>
              </li>
            </ul>
          </div>
        </div>

        {/* About / Social section */}
        <div style={{ marginTop: "48px", borderTop: "1px solid #333", paddingTop: "24px" }}>
          <h2 style={{ color: "#cccccc", fontSize: "15px", marginBottom: "16px", fontWeight: "600" }}>About</h2>
          <div style={{ display: "flex", gap: "16px" }}>
            <a
              href="https://github.com/mertbagin-web"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#3794ff", fontSize: "13px", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mertbagin"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#3794ff", fontSize: "13px", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* VS Code tip */}
        <div style={{ marginTop: "32px", background: "#252526", border: "1px solid #333", borderRadius: "4px", padding: "12px 16px" }}>
          <p style={{ color: "#808080", fontSize: "12px" }}>
            <span style={{ color: "#569cd6" }}>💡 Tip:</span> Navigate using the sidebar or use the links above to explore my portfolio.
          </p>
        </div>
      </div>
    </>
  );
}
