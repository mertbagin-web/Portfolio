import Head from "next/head";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    background: "#1e1e1e",
    border: "1px solid #444",
    borderRadius: "3px",
    color: "#cccccc",
    fontSize: "13px",
    padding: "8px 12px",
    width: "100%",
    outline: "none",
  };

  return (
    <>
      <Head>
        <title>Contact | Mert Bagin</title>
      </Head>
      <div style={{ padding: "40px 60px", maxWidth: "700px" }}>
        <div style={{ marginBottom: "32px" }}>
          <p style={{ color: "#608b4e", fontSize: "13px" }}>// contact.tsx</p>
          <p style={{ color: "#608b4e", fontSize: "13px" }}>// Get in touch</p>
        </div>

        <div style={{ marginBottom: "32px" }}>
          <h2 style={{ color: "#cccccc", fontSize: "22px", fontWeight: "600", marginBottom: "8px" }}>
            Let&apos;s <span style={{ color: "#007acc" }}>Connect</span>
          </h2>
          <p style={{ color: "#808080", fontSize: "13px", lineHeight: "1.6" }}>
            Feel free to reach out for collaborations, job opportunities, or just a chat!
          </p>
        </div>

        {/* Contact info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
          <a href="mailto:mert@example.com" style={{
            display: "flex", alignItems: "center", gap: "10px",
            color: "#3794ff", textDecoration: "none", fontSize: "13px"
          }}>
            <span>✉️</span> mert@example.com
          </a>
          <a href="https://github.com/mertbagin-web" target="_blank" rel="noopener noreferrer" style={{
            display: "flex", alignItems: "center", gap: "10px",
            color: "#3794ff", textDecoration: "none", fontSize: "13px"
          }}>
            <span>🐙</span> github.com/mertbagin-web
          </a>
          <a href="https://www.linkedin.com/in/mertbagin" target="_blank" rel="noopener noreferrer" style={{
            display: "flex", alignItems: "center", gap: "10px",
            color: "#3794ff", textDecoration: "none", fontSize: "13px"
          }}>
            <span>💼</span> linkedin.com/in/mertbagin
          </a>
        </div>

        <div style={{ height: "1px", background: "#333", marginBottom: "24px" }} />

        {/* Contact form */}
        {submitted ? (
          <div style={{
            background: "#252526",
            border: "1px solid #28c940",
            borderRadius: "4px",
            padding: "20px",
            textAlign: "center"
          }}>
            <p style={{ color: "#28c940", fontSize: "16px", marginBottom: "8px" }}>✓ Message sent!</p>
            <p style={{ color: "#808080", fontSize: "13px" }}>Thanks for reaching out. I&apos;ll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label style={{ color: "#9cdcfe", fontSize: "12px", display: "block", marginBottom: "6px" }}>
                name: <span style={{ color: "#569cd6" }}>string</span>
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={{ color: "#9cdcfe", fontSize: "12px", display: "block", marginBottom: "6px" }}>
                email: <span style={{ color: "#569cd6" }}>string</span>
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={{ color: "#9cdcfe", fontSize: "12px", display: "block", marginBottom: "6px" }}>
                message: <span style={{ color: "#569cd6" }}>string</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
                rows={5}
                style={{ ...inputStyle, resize: "vertical" as const }}
              />
            </div>
            <button type="submit" style={{
              background: "#007acc",
              color: "white",
              border: "none",
              borderRadius: "3px",
              padding: "10px 24px",
              fontSize: "13px",
              cursor: "pointer",
              alignSelf: "flex-start",
              fontWeight: "500"
            }}>
              Send Message →
            </button>
          </form>
        )}
      </div>
    </>
  );
}
