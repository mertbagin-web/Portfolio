import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 | Mert Bagin</title>
      </Head>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 45px)",
        textAlign: "center",
        padding: "40px"
      }}>
        <p style={{ color: "#608b4e", fontSize: "13px", marginBottom: "8px" }}>
          // Error: Page not found
        </p>
        <h1 style={{ fontSize: "80px", fontWeight: "700", color: "#333", lineHeight: "1" }}>404</h1>
        <p style={{ color: "#9cdcfe", fontSize: "20px", margin: "12px 0" }}>
          &lt;PageNotFound /&gt;
        </p>
        <p style={{ color: "#808080", fontSize: "13px", marginBottom: "32px" }}>
          The file you&apos;re looking for doesn&apos;t exist in this workspace.
        </p>
        <Link href="/" style={{
          background: "#007acc",
          color: "white",
          textDecoration: "none",
          padding: "10px 24px",
          borderRadius: "3px",
          fontSize: "13px",
          fontWeight: "500"
        }}>
          ← Back to Home
        </Link>
      </div>
    </>
  );
}
